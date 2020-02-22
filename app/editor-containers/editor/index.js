// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import { CLIEngine } from 'eslint';
import SplitPane from 'react-split-pane';
import logger from 'debug';
import replace from '@stdlib/string/replace';
import isObject from '@stdlib/assert/is-object';
import SplitPanel from 'editor-components/split-panel';
import TerminalGrid from 'editor-components/terminal-grid';
import Loadable from 'components/loadable';
import { convertMarkdown, changeMode, changeView, toggleScrolling, toggleToolbar, updatePreamble, encounteredError, resetError, saveLintErrors, saveSpellingErrors } from 'actions';
import SpellChecker from 'utils/spell-checker';
const Header = Loadable( () => import( 'editor-components/header' ) );
const ErrorBoundary = Loadable( () => import( 'editor-components/error-boundary' ) );
const Preview = Loadable( () => import( 'editor-components/preview' ) );
const Editor = Loadable( () => import( 'editor-components/editor' ) );
const ErrorMessage = Loadable( () => import( 'editor-components/error-message' ) );
const DevTools = Loadable( () => import( '../dev_tools.js' ) );


// VARIABLES //

let yaml;
const debug = logger( 'isle-editor' );


// FUNCTIONS //

const updateSplitPos = ( size ) => {
	localStorage.setItem( 'splitPos', size );
};


// MAIN //

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			splitPos: parseFloat( localStorage.getItem( 'splitPos' ) ) || 0.5,
			horizontalSplit: 0,
			innerWidth: window.innerWidth
		};
	}

	async componentDidMount() {
		window.addEventListener( 'resize', this.updateDimensions );

		let eslintOpts = await import( './eslint_opts.js' );
		eslintOpts = eslintOpts.default;
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

	onChange = ( value ) => {
		debug( 'Editor text changed...' );
		const handleChange = ( value ) => {
			debug( 'Should handle change...' );
			this.props.convertMarkdown( value );
			this.spellcheckCode( value );
			this.handlePreambleChange( value );
		};

		if ( this.debouncedChange ) {
			this.debouncedChange( value );
		} else {
			this.debouncedChange = debounce( handleChange, this.props.renderInterval );
			this.debouncedChange( value );
		}
	}

	handleHorizontalSplit = ( size ) => {
		const handleChange = ( size ) => {
			this.setState({
				horizontalSplit: size
			});
		};
		if ( this.debouncedHorizonalSplit ) {
			this.debouncedHorizonalSplit( size );
		} else {
			this.debouncedHorizonalSplit = debounce( handleChange, 250 );
			this.debouncedHorizonalSplit( size );
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
		this.setState({
			splitPos: size
		});
	}

	handlePreambleChange = ( text ) => {
		let preamble = text.match( /^(?:\s*)---([\S\s]*?)---/ );
		if ( preamble ) {
			// Extract the capture group:
			preamble = preamble[ 1 ];
			preamble = replace( preamble, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
			let preambleHasChanged = preamble !== this.props.preambleText;
			debug( 'Check whether preamble has changed: '+preambleHasChanged );
			if ( preambleHasChanged && yaml ) {
				debug( 'Preamble has changed...' );
				try {
					const newPreamble = yaml.load( preamble );
					if ( !isObject( newPreamble ) ) {
						const err = new Error( 'Make sure the preamble is valid YAML code and not empty.' );
						err.name = 'PreambleMissing';
						return this.props.encounteredError( err );
					}
					this.props.updatePreamble({
						preamble: newPreamble,
						preambleText: preamble
					});
				}
				catch ( err ) {
					this.props.encounteredError( err );
				}
			}
		} else {
			const err = new Error( 'File is missing a preamble.' );
			err.name = 'PreambleMissing';
			this.props.encounteredError( err );
		}
	}

	spellcheckCode = ( code ) => {
		const language = this.props.preamble.language || 'en-US';
		const errs = SpellChecker( code, {
			language
		});
		if ( errs ) {
			this.props.saveSpellingErrors( errs );
		}
	}

	lintCode = ( code ) => {
		if ( this.cliEngine ) {
			const { results } = this.cliEngine.executeOnText( code, this.props.fileName );
			const errs = results[ 0 ].messages;
			if ( errs.length !== this.props.lintErrors.length ) {
				this.props.saveLintErrors( errs );
			}
		}
	}

	resetError = () => {
		if (
			this.props.error &&
			this.props.error.name !== 'YAMLException' &&
			this.props.error.name !== 'PreambleMissing'
		) {
			this.props.resetError();
		}
	}

	render() {
		let {
			error,
			fileName,
			filePath,
			markdown,
			hideToolbar,
			changeView,
			changeMode,
			currentRole,
			currentMode,
			unsaved
		} = this.props;
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
						unsaved={unsaved}
					/> :
					null
				}
				<SplitPane
					split="horizontal"
					style={{ marginTop: 88, background: '#fffff8' }}
					onChange={this.handleHorizontalSplit}
					minSize={0}
				>
					<TerminalGrid
						height={this.state.horizontalSplit}
						width={this.state.innerWidth}
						filePath={filePath}
						fontSize={this.props.fontSize}
					/>
					<SplitPane
						className="splitpane"
						split="vertical"
						primary="second"
						size={this.state.splitPos * this.state.innerWidth}
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
								preamble={this.props.preamble}
								author={this.props.author}
								currentRole={currentRole}
								currentMode={currentMode}
								splitPos={this.state.splitPos}
								lintErrors={this.props.lintErrors}
								spellingErrors={this.props.spellingErrors}
								height={window.innerHeight - this.state.horizontalSplit - ( hideToolbar ? 2 : 90 )}
							/>
						</SplitPanel>
						<SplitPanel
							ref={( elem ) => { this.preview = elem; }}
							style={{
								transform: 'translateZ(0)' // applied so that the panel acts as viewport for the fixed position statusbar (https://www.w3.org/TR/css-transforms-1/#containing-block-for-all-descendants)
							}}
						>
							{ error ?
								<ErrorMessage
									msg={error.message} code={markdown}
									resetError={this.resetError}
								/> :
								<ErrorBoundary code={markdown} preamble={this.props.preamble} >
									<Preview
										code={markdown}
										filePath={filePath}
										preamble={this.props.preamble}
										currentRole={currentRole}
										currentMode={currentMode}
										onCode={this.lintCode}
										encounteredError={this.props.encounteredError}
										preambleText={this.props.preambleText}
										updatePreamble={this.props.updatePreamble}
										unavailableHeight={this.state.horizontalSplit + ( hideToolbar ? 2 : 90 )}
										resetError={this.resetError}
									/>
								</ErrorBoundary>
							}
						</SplitPanel>
					</SplitPane>
				</SplitPane>
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
	error: null,
	fileName: null,
	filePath: null
};

App.propTypes = {
	author: PropTypes.string.isRequired,
	changeMode: PropTypes.func.isRequired,
	changeView: PropTypes.func.isRequired,
	convertMarkdown: PropTypes.func.isRequired,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	encounteredError: PropTypes.func.isRequired,
	resetError: PropTypes.func.isRequired,
	error: PropTypes.object,
	fileName: PropTypes.string,
	filePath: PropTypes.string,
	hideToolbar: PropTypes.bool.isRequired,
	lintErrors: PropTypes.array.isRequired,
	markdown: PropTypes.string.isRequired,
	preamble: PropTypes.object.isRequired,
	preambleText: PropTypes.string.isRequired,
	spellingErrors: PropTypes.array.isRequired,
	renderInterval: PropTypes.number.isRequired,
	saveLintErrors: PropTypes.func.isRequired,
	saveSpellingErrors: PropTypes.func.isRequired,
	updatePreamble: PropTypes.func.isRequired,
	unsaved: PropTypes.bool.isRequired
};


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	saveLintErrors,
	saveSpellingErrors,
	encounteredError,
	resetError,
	changeView,
	changeMode,
	toggleScrolling,
	toggleToolbar,
	updatePreamble
})( App );

function mapStateToProps({ markdown, linting, preview }) {
	return {
		...markdown,
		...linting,
		...preview
	};
}
