// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import SplitPane from 'react-split-pane';
import logger from 'debug';
import replace from '@stdlib/string/replace';
import SplitPanel from 'editor-components/split-panel';
import Loadable from '@isle-project/components/internal/loadable';
import electronStore from 'store/electron.js';
import formatError from '@isle-project/utils/format-error';
import { convertMarkdown, changeAutoUpdate, changeMode, changeView,
	clearInsertion, incrementDocumentVersion, pasteInsertion, setConfiguratorComponent,
	toggleConfigurator, toggleLineButtons, toggleScrolling, toggleToolbar,
	updateDownloading, updatePreamble, encounteredError, resetError, saveLintErrors,
	saveSpellingErrors, changeSplitPos, changeHorizontalSplit } from 'actions';
const Header = Loadable( () => import( 'editor-components/header' ) );
const Preview = Loadable( () => import( 'editor-components/preview' ) );
const Editor = Loadable( () => import( 'editor-components/editor' ) );
const ErrorMessage = Loadable( () => import( 'editor-components/error-message' ) );
const DevTools = Loadable( () => import( '../dev_tools.js' ) );
const ComponentConfigurator = Loadable( () => import( 'editor-components/component-configurator' ) );
import validatePreamble, { PreambleError } from './validate_preamble.js';


// VARIABLES //

let yaml;
const debug = logger( 'isle-editor' );
const RE_PREAMBLE = /^(?:\s*)---([\S\s]*?)---/;
const LINTING_INTERVAL = 3 * 1000;
const NUM_WRAPPER_LINES = 8;
const STYLE_TRANSFORM = {
	transform: 'translateZ(0)' // applied so that the panel acts as viewport for the fixed position statusbar (https://www.w3.org/TR/css-transforms-1/#containing-block-for-all-descendants)
};
const RESIZER_STYLE = {
	zIndex: 10
};


// FUNCTIONS //

const updateSplitPos = ( size ) => {
	electronStore.set( 'splitPos', size );
};

const mapErrors = e => {
	return {
		startLineNumber: e.line - NUM_WRAPPER_LINES,
		startColumn: 1,
		endLineNumber: e.line - NUM_WRAPPER_LINES,
		endColumn: e.column,
		message: formatError( e.message ),
		severity: e.severity
	};
};


// MAIN //

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			innerWidth: window.innerWidth
		};
		this.debouncedLinting = debounce( this.lintCode, LINTING_INTERVAL );

		const error = validatePreamble( props.preamble );
		if ( error ) {
			props.encounteredError( error );
		}
	}

	async componentDidMount() {
		window.addEventListener( 'resize', this.updateDimensions );

		let eslintOpts = await import( './eslint_opts.js' );
		eslintOpts = eslintOpts.default;

		const eslint = await import( 'eslint' );
		const { CLIEngine } = eslint;
		this.cliEngine = new CLIEngine( eslintOpts, this.props.fileName );

		const jsYAML = await import( 'js-yaml' );
		yaml = jsYAML.default;
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.updateDimensions );
	}

	updateDimensions = () => {
		this.setState({
			innerWidth: window.innerWidth
		});
	}

	handleCodeChange = ( value ) => {
		debug( 'Should handle change...' );
		this.props.convertMarkdown( value );
		this.spellcheckCode( value );
		this.handlePreambleChange( value );
		if ( this.props.insertion ) {
			this.props.clearInsertion();
		}
	};

	onChange = ( value, immediateUpdate ) => {
		if ( immediateUpdate ) {
			this.handleCodeChange( value );
			if ( this.debouncedChange ) {
				this.debouncedChange.cancel();
			}
		}
		else if ( this.debouncedChange ) {
			this.debouncedChange( value );
		} else {
			this.debouncedChange = debounce( this.handleCodeChange, this.props.renderInterval );
			this.debouncedChange( value );
		}
	}

	handleVerticalSplit = ( size ) => {
		size /= this.state.innerWidth;
		if ( this.debouncedSplitUpdate ) {
			this.debouncedSplitUpdate( size );
		} else {
			this.debouncedSplitUpdate = debounce( updateSplitPos, 1000 );
			this.debouncedSplitUpdate( size );
		}
		this.props.changeSplitPos( size );
	}

	handlePreambleChange = ( text ) => {
		let preamble = text.match( RE_PREAMBLE );
		if ( preamble ) {
			// Extract the capture group:
			preamble = preamble[ 1 ];
			preamble = replace( preamble, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
			let preambleHasChanged = preamble !== this.props.preambleText;
			debug( 'Check whether preamble has changed: '+preambleHasChanged );
			if ( preambleHasChanged && yaml ) {
				debug( 'Preamble has changed...' );
				let newPreamble;
				try {
					newPreamble = yaml.load( preamble );
				}
				catch ( err ) {
					this.props.encounteredError( err );
				}
				const error = validatePreamble( newPreamble );
				if ( error ) {
					return this.props.encounteredError( error );
				}
				this.props.updatePreamble({
					preamble: newPreamble,
					preambleText: preamble
				});
			}
		} else {
			const err = new PreambleError( 'File is missing a preamble.' );
			this.props.encounteredError( err );
		}
	}

	spellcheckCode = async ( code ) => {
		const language = this.props.preamble.language || 'en-US';
		const SpellChecker = await import( '@isle-project/utils/spell-checker' );
		const errs = SpellChecker.default( code, {
			language
		});
		if ( errs ) {
			this.props.saveSpellingErrors( errs );
		}
	}

	lintCode = ( code ) => {
		if ( this.cliEngine ) {
			const { results } = this.cliEngine.executeOnText( code, this.props.fileName );
			let errs = results[ 0 ].messages;
			errs = errs.map( mapErrors );
			this.props.saveLintErrors( errs );
		}
	}

	resetError = () => {
		if (
			this.props.error &&
			this.props.error.name !== 'YAMLException' &&
			this.props.error.name !== 'PreambleError'
		) {
			this.props.resetError();
		}
	}

	hideConfigurator = () => {
		this.props.toggleConfigurator( false );
	}

	handlePreviewButtonClick = () => {
		let splitPos;
		if ( this.props.splitPos === 1 ) {
			splitPos = electronStore.get( 'splitPos' ) || 0.5;
		} else {
			splitPos = 1;
		}
		this.props.changeSplitPos( splitPos );
	}

	handleConfiguratorInsert = ( text ) => {
		this.props.pasteInsertion({ text });
		this.props.toggleConfigurator( false );
	}

	render() {
		let {
			autoUpdatePreview,
			error,
			fileName,
			filePath,
			markdown,
			hideToolbar,
			changeView,
			changeMode,
			changeAutoUpdate,
			currentRole,
			currentMode,
			preamble,
			unsaved,
			showLineButtons,
			toggleLineButtons,
			updateInfo,
			updateStatus,
			updateDownloading,
			updateDownloadPercent
		} = this.props;

		const preview = <Preview
			code={markdown}
			autoUpdatePreview={autoUpdatePreview}
			filePath={filePath}
			preamble={preamble}
			currentRole={currentRole}
			currentMode={currentMode}
			onCode={this.debouncedLinting}
			encounteredError={this.props.encounteredError}
			preambleText={this.props.preambleText}
			updatePreamble={this.props.updatePreamble}
			unavailableHeight={this.props.horizontalSplit + ( hideToolbar ? 2 : 90 )}
			resetError={this.resetError}
			version={this.props.documentVersion}
		/>;
		return (
			<div>
				{ !hideToolbar ?
					<Header
						fileName={fileName}
						filePath={filePath}
						onSelectRole={changeView}
						role={currentRole}
						onSelectMode={changeMode}
						mode={currentMode}
						preamble={preamble}
						unsaved={unsaved}
						triggerUpdate={this.props.incrementDocumentVersion}
						autoUpdatePreview={autoUpdatePreview}
						changeAutoUpdate={changeAutoUpdate}
						toggleLineButtons={toggleLineButtons}
						showLineButtons={showLineButtons}
						onPreview={this.handlePreviewButtonClick}
						updateStatus={updateStatus}
						updateInfo={updateInfo}
						updateDownloading={updateDownloading}
						updateDownloadPercent={updateDownloadPercent}
					/> :
					null
				}
				<SplitPane
					className="splitpane"
					split="vertical"
					primary="second"
					size={this.props.splitPos * this.state.innerWidth}
					onChange={this.handleVerticalSplit}
					maxSize={-300}
					minSize={300}
				>
					<SplitPanel style={{ overflow: 'none' }} >
						<Editor
							ref={( elem ) => { this.editor = elem; }}
							value={markdown}
							onChange={this.onChange}
							filePath={filePath}
							name="monaco_editor"
							fontSize={this.props.fontSize}
							elementRange={this.props.elementRange}
							preamble={preamble}
							author={this.props.author}
							currentRole={currentRole}
							currentMode={currentMode}
							splitPos={this.props.splitPos}
							lintErrors={this.props.lintErrors}
							spellingErrors={this.props.spellingErrors}
							setConfiguratorComponent={this.props.setConfiguratorComponent}
							insertion={this.props.insertion}
							clearInsertion={this.props.clearInsertion}
							elementRangeAction={this.props.elementRangeAction}
							elementRangeVersion={this.props.elementRangeVersion}
							toggleConfigurator={this.props.toggleConfigurator}
							triggerUpdate={this.props.incrementDocumentVersion}
							height={window.innerHeight - this.props.horizontalSplit - ( hideToolbar ? 2 : 90 )}
							showQuickSuggestions={this.props.showQuickSuggestions}
							showMiniMap={this.props.showMiniMap}
						/>
					</SplitPanel>
					<SplitPanel
						ref={( elem ) => { this.preview = elem; }}
						style={STYLE_TRANSFORM}
					>
						{ error ?
							<ErrorMessage
								msg={error.message} code={markdown}
								resetError={this.resetError}
							/> :
							preview
						}
					</SplitPanel>
				</SplitPane>
				{ this.props.configuratorIsOpened ? <ComponentConfigurator
					show={this.props.configuratorIsOpened}
					onHide={this.hideConfigurator}
					component={this.props.selectedComponent}
					currentMode={this.props.currentMode}
					currentRole={this.props.currentRole}
					onInsert={this.handleConfiguratorInsert}
				/> : null }

				{
					( () => {
						// eslint-disable-next-line no-process-env
						if ( process.env.NODE_ENV !== 'production' ) {
							return <DevTools />;
						}
					})()
				}
			</div>
		);
	}
}


// PROPERTIES //

App.defaultProps = {
	elementRange: null,
	elementRangeAction: null,
	error: null,
	fileName: null,
	filePath: null,
	insertion: null,
	updateDownloadPercent: null,
	updateInfo: null,
	updateStatus: null
};

App.propTypes = {
	author: PropTypes.string.isRequired,
	autoUpdatePreview: PropTypes.bool.isRequired,
	changeAutoUpdate: PropTypes.func.isRequired,
	changeMode: PropTypes.func.isRequired,
	changeView: PropTypes.func.isRequired,
	clearInsertion: PropTypes.func.isRequired,
	convertMarkdown: PropTypes.func.isRequired,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	encounteredError: PropTypes.func.isRequired,
	resetError: PropTypes.func.isRequired,
	error: PropTypes.object,
	elementRange: PropTypes.object,
	fileName: PropTypes.string,
	filePath: PropTypes.string,
	hideToolbar: PropTypes.bool.isRequired,
	insertion: PropTypes.object,
	lintErrors: PropTypes.array.isRequired,
	markdown: PropTypes.string.isRequired,
	pasteInsertion: PropTypes.func.isRequired,
	preamble: PropTypes.object.isRequired,
	preambleText: PropTypes.string.isRequired,
	spellingErrors: PropTypes.array.isRequired,
	renderInterval: PropTypes.number.isRequired,
	saveLintErrors: PropTypes.func.isRequired,
	saveSpellingErrors: PropTypes.func.isRequired,
	toggleLineButtons: PropTypes.func.isRequired,
	elementRangeAction: PropTypes.string,
	elementRangeVersion: PropTypes.number.isRequired,
	toggleConfigurator: PropTypes.func.isRequired,
	updateDownloading: PropTypes.func.isRequired,
	updateDownloadPercent: PropTypes.number,
	updateInfo: PropTypes.object,
	updateStatus: PropTypes.string,
	updatePreamble: PropTypes.func.isRequired,
	unsaved: PropTypes.bool.isRequired
};


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	changeAutoUpdate,
	changeSplitPos,
	changeHorizontalSplit,
	clearInsertion,
	saveLintErrors,
	saveSpellingErrors,
	encounteredError,
	incrementDocumentVersion,
	resetError,
	changeView,
	changeMode,
	pasteInsertion,
	setConfiguratorComponent,
	toggleConfigurator,
	toggleLineButtons,
	toggleScrolling,
	toggleToolbar,
	updateDownloading,
	updatePreamble
})( App );

function mapStateToProps({ configurator, editor, linting, preview, updater }) {
	return {
		...configurator,
		...editor,
		...linting,
		...preview,
		...updater
	};
}
