// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import { Linter } from 'eslint';
import SplitPane from 'react-split-pane';
import yaml from 'js-yaml';
import logger from 'debug';
import replace from '@stdlib/string/replace';
import isObject from '@stdlib/assert/is-object';
import SplitPanel from 'editor-components/split-panel';
import Loadable from 'components/loadable';
import Header from 'editor-components/header';
import { convertMarkdown, changeMode, changeView, toggleScrolling, toggleToolbar, updatePreamble, encounteredError, saveLintErrors } from 'actions';
const ErrorBoundary = Loadable( () => import( 'editor-components/error-boundary' ) );
const Preview = Loadable( () => import( 'editor-components/preview' ) );
const Editor = Loadable( () => import( 'editor-components/editor' ) );
const ErrorMessage = Loadable( () => import( 'editor-components/error-message' ) );
const DevTools = Loadable( () => import( './dev_tools.js' ) );
import eslintConfig from './eslintrc.json';


// VARIABLES //

const debug = logger( 'isle-editor' );
const linter = new Linter();


// MAIN //

class App extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			splitPos: parseInt( localStorage.getItem( 'splitPos' ), 10 )
		};
	}

	componentWillUnmount() {
		localStorage.setItem( 'splitPos', this.state.splitPos );
	}

	onChange = ( value ) => {
		debug( 'Editor text changed...' );
		const handleChange = ( value ) => {
			debug( 'Should handle change...' );
			this.props.convertMarkdown( value );
			this.handlePreambleChange( value );
		};

		if ( this.debouncedChange ) {
			this.debouncedChange( value );
		} else {
			this.debouncedChange = debounce( handleChange, this.props.renderInterval );
			this.debouncedChange( value );
		}
	}

	handlePreambleChange = ( text ) => {
		let preamble = text.match( /---([\S\s]*)---/ );
		if ( preamble ) {
			// Extract the capture group:
			preamble = preamble[ 1 ];
			preamble = replace( preamble, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
			let preambleHasChanged = preamble !== this.props.preambleText;
			debug( 'Check whether preamble has changed: '+preambleHasChanged );
			if ( preambleHasChanged ) {
				debug( 'Update preamble...' );
				const newPreamble = yaml.load( preamble );
				if ( !isObject( newPreamble ) ) {
					return this.props.encounteredError( new Error( 'Make sure the preamble is valid YAML code.' ) );
				}
				this.props.updatePreamble({
					preamble: newPreamble,
					preambleText: preamble
				});
			}
		}
	}

	lintCode = ( code ) => {
		const errs = linter.verify( code, eslintConfig );
		if ( errs.length !== this.props.lintErrors.length ) {
			this.props.saveLintErrors( errs );
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
			currentMode
		} = this.props;
		return (
			<div>
				{ !hideToolbar ?
					<Header
						fileName={fileName}
						onSelectRole={changeView}
						role={currentRole}
						onSelectMode={changeMode}
						mode={currentMode}
					/> :
					null
				}
				<SplitPane
					className="splitpane"
					split="vertical"
					primary="second"
					defaultSize={this.state.splitPos}
					onChange={size => {
						this.setState({
							splitPos: size
						});
					}}
					style={{
						'position': 'absolute',
						'top': !hideToolbar ? 88 : 0,
						'bottom': '0'
					}}
				>
					<SplitPanel overflow="none" >
						<Editor
							ref={( elem ) => { this.editor = elem; }}
							value={markdown}
							onChange={this.onChange}
							name="monaco_editor"
							fontSize={this.props.fontSize}
							preamble={this.props.preamble}
							splitPos={this.state.splitPos}
							lintErrors={this.props.lintErrors}
						/>
					</SplitPanel>
					<SplitPanel ref={( elem ) => { this.preview = elem; }} overflow="none" >
						{ error ?
							<ErrorMessage msg={error.message} code={markdown} /> :
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
								/>
							</ErrorBoundary>
						}
					</SplitPanel>
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
	changeMode: PropTypes.func.isRequired,
	changeView: PropTypes.func.isRequired,
	convertMarkdown: PropTypes.func.isRequired,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	encounteredError: PropTypes.func.isRequired,
	error: PropTypes.object,
	fileName: PropTypes.string,
	filePath: PropTypes.string,
	hideToolbar: PropTypes.bool.isRequired,
	lintErrors: PropTypes.array.isRequired,
	markdown: PropTypes.string.isRequired,
	preamble: PropTypes.object.isRequired,
	preambleText: PropTypes.string.isRequired,
	saveLintErrors: PropTypes.func.isRequired,
	updatePreamble: PropTypes.func.isRequired
};


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	saveLintErrors,
	encounteredError,
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
