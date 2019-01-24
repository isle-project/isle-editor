// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dirname, resolve, extname } from 'path';
import path from 'path';
import css from 'css';
import fs from 'fs';
import debounce from 'lodash.debounce';
import { Linter } from 'eslint';
import SplitPane from 'react-split-pane';
import logger from 'debug';
import yaml from 'js-yaml';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import isRelativePath from '@stdlib/assert/is-relative-path';
import isObject from '@stdlib/assert/is-object';
import isError from '@stdlib/assert/is-error';
import replace from '@stdlib/string/replace';
import readJSON from '@stdlib/fs/read-json';
import SplitPanel from 'editor-components/split-panel';
import Loadable from 'editor-components/loadable';
import Header from 'editor-components/header';
import { convertMarkdown, changeMode, changeView, toggleScrolling, toggleToolbar, updatePreamble, encounteredError, resetError, saveLintErrors } from 'actions';
const ErrorBoundary = Loadable( () => import( 'editor-components/error-boundary' ) );
const Preview = Loadable( () => import( 'editor-components/preview' ) );
const Editor = Loadable( () => import( 'editor-components/editor' ) );
const ErrorMessage = Loadable( () => import( 'editor-components/error-message' ) );
const DevTools = Loadable( () => import( './dev_tools.js' ) );
import eslintConfig from './eslintrc.json';


// VARIABLES //

const debug = logger( 'isle-editor' );
const linter = new Linter();
let cssHash = {};
let lastCSS = null;


// FUNCTIONS //

const injectStyle = ( style ) => {
	let previous = document.getElementById( 'mystyles' );
	if ( previous ) {
		previous.parentNode.removeChild( previous );
	}

	let node = document.createElement( 'style' );
	node.setAttribute( 'id', 'mystyles' );

	let cssObj = css.parse( style );
	let rules = cssObj.stylesheet.rules;
	rules.forEach( rule => {
		rule.selectors = rule.selectors.map( s => '#Lesson ' + s );
		return rule;
	});

	node.innerHTML = css.stringify( cssObj );
	document.head.appendChild( node );
};

const applyStyles = ( preamble, filePath ) => {
	let css = '';
	if ( preamble.css ) {
		if ( cssHash[ preamble.css ]) {
			css += cssHash[ preamble.css ];
		} else {
			let fpath = preamble.css;
			if ( !isAbsolutePath( fpath ) ) {
				fpath = path.join( path.dirname( filePath ), fpath );

				if ( process.platform === 'win32' ) {
					fpath = replace( fpath, '\\', '\\\\' );
				}
			}
			css += fs.readFileSync( fpath ).toString();
		}
	}
	if ( preamble.style ) {
		css += '\n';
		css += preamble.style;
	}
	if ( preamble.style || preamble.css ) {
		if ( css !== lastCSS ) {
			injectStyle( css );
		}
		lastCSS = css;
	}
};

const loadRequires = ( libs, filePath ) => {
	/* eslint-disable no-eval */
	debug( 'Should require files or modules...' );
	let dirname = path.dirname( filePath );
	debug( 'Directory: '+dirname );
	if ( isObject( libs ) ) {
		for ( let key in libs ) {
			if ( hasOwnProp( libs, key ) ) {
				let lib = libs[ key ];
				if ( isAbsolutePath( lib ) || /\.(\/|\\)/.test( lib ) ) {
					lib = path.join( dirname, libs[ key ]);
					if ( process.platform === 'win32' ) {
						lib = replace( lib, '\\', '\\\\' );
					}
				} else if ( /@stdlib/.test( lib ) ) {
					lib = libs[ key ].replace( '@stdlib', '@stdlib/stdlib/lib/node_modules/@stdlib' );
				}
				const ext = extname( lib );
				if ( ext === '.svg' ) {
					debug( 'Read SVG from disk: '+lib );
					let content = fs.readFileSync( lib ).toString( 'base64' );
					eval( `global[ '${key}' ] = 'data:image/svg+xml;base64,${content}';` );
				}
				else if ( ext === '.jpg' || ext === '.png' || ext === '.jpeg' ) {
					debug( 'Read image from disk: '+lib );
					let buffer = fs.readFileSync( lib );
					eval( `global[ '${key}' ] = 'data:image/jpeg;base64,${buffer.toString( 'base64' )}'` );
				}
				else if ( ext === '.json' ) {
					const json = readJSON.sync( lib );
					if ( isError( json ) ) {
						throw new Error(`\n Error encountered while reading ${lib}: ` + json.message);
						// global[key] = {};
					} else {
						global[key] = json;
					}
				}
				else {
					debug( `Load '${lib}' library...` );
					eval( `global[ '${key}' ] = require( '${lib}' );` );
				}
			}
		}
	}
	/* eslint-enable no-eval */
};


// MAIN //

class App extends Component {
	constructor( props ) {
		super( props );

		if ( isObject( props.preamble ) ) {
			try {
				loadRequires( props.preamble.require, props.filePath || '' );
			} catch ( err ) {
				props.encounteredError( err );
			}
			try {
				if ( props.preamble.instructorNotes ) {
					let instructorNotes = props.preamble.instructorNotes;
					if ( extname( instructorNotes ) === '.md' ) {
						if ( isRelativePath( instructorNotes ) ) {
							const fPath = resolve( dirname( props.filePath ), instructorNotes );
							instructorNotes = fs.readFileSync( fPath );
							instructorNotes = instructorNotes.toString();
						} else if ( isAbsolutePath( instructorNotes ) ) {
							instructorNotes = fs.readFileSync( instructorNotes );
							instructorNotes = instructorNotes.toString();
						}
						props.preamble.instructorNotes = instructorNotes;
					}
				}
			} catch ( err ) {
				props.encounteredError( new Error( 'Ensure that instructor notes path is correct.' ) );
			}
			try {
				applyStyles( props.preamble, props.filePath || '' );
			} catch ( err ) {
				props.encounteredError( err );
			}
		}
		this.state = {
			splitPos: parseInt( localStorage.getItem( 'splitPos' ), 10 ),
			preamble: props.preamble
		};
	}

	componentDidUpdate = ( prevProps ) => {
		if ( this.props.markdown !== prevProps.markdown ) {
			debug( 'Check preamble change' );
			this.handlePreambleChange( this.props.markdown );
		}
	}

	componentWillUnmount() {
		localStorage.setItem( 'splitPos', this.state.splitPos );
	}

	onChange = ( value ) => {
		debug( 'Editor text changed...' );
		const handleChange = ( value ) => {
			debug( 'Should handle change...' );
			this.props.convertMarkdown( value );
		};

		if ( this.debouncedChange ) {
			this.debouncedChange( value );
		} else {
			this.debouncedChange = debounce( handleChange, 3000 );
			this.debouncedChange( value );
		}
	}

	lintCode = ( code ) => {
		const errs = linter.verify( code, eslintConfig );
		if ( errs.length !== this.props.lintErrors.length ) {
			this.props.saveLintErrors( errs );
		}
	}

	/*
	// TO-DO
	validatePreamble = ( preamble ) => {

	}
	*/

	handlePreambleChange = ( text ) => {
		let preamble = text.match( /---([\S\s]*)---/ );
		if ( !preamble ) {
			return this.props.encounteredError( new Error( 'Make sure the file contains a YAML preamble enclosed in <b>---</b> tags.' ) );
		}
		// Extract the capture group:
		preamble = preamble[ 1 ];
		preamble = replace( preamble, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
		let preambleHasChanged = this.checkPreambleChange( preamble );
		debug( 'Check whether preamble has changed: '+preambleHasChanged );
		if ( preambleHasChanged ) {
			try {
				const newPreamble = yaml.load( preamble );
				if ( !isObject( newPreamble ) ) {
					return this.props.encounteredError( new Error( 'Make sure the preamble is valid YAML code.' ) );
				}
				try {
					loadRequires( newPreamble.require, this.props.filePath || '' );
				} catch ( err ) {
					return this.props.encounteredError( err );
				}
				try {
					let instructorNotes = newPreamble.instructorNotes;
					if ( instructorNotes && extname( instructorNotes ) === '.md' ) {
						if ( isRelativePath( instructorNotes ) ) {
							const fPath = resolve( dirname(this.props.filePath), instructorNotes );
							instructorNotes = fs.readFileSync( fPath );
							instructorNotes = instructorNotes.toString();
						} else if ( isAbsolutePath( instructorNotes ) ) {
							instructorNotes = fs.readFileSync( instructorNotes );
							instructorNotes = instructorNotes.toString();
						}
						newPreamble.instructorNotes = instructorNotes;
					}
				} catch ( err ) {
					return this.props.encounteredError( new Error( 'Ensure that instructor notes path is correct' ) );
				}
				try {
					applyStyles( newPreamble, this.props.filePath || '' );
				} catch ( err ) {
					return this.props.encounteredError( err );
				}
				this.props.updatePreamble( newPreamble );
				if ( this.props.error ) {
					this.props.resetError();
				}
				if ( preambleHasChanged ) {
					debug( 'Update preamble...' );
					this.setState({
						preamble: newPreamble
					});
				}
			} catch ( err ) {
				return this.props.encounteredError( new Error( 'Couldn\'t parse the preamble. Make sure it is valid YAML.' ) );
			}
		}
	}

	checkPreambleChange( preamble ) {
		if ( preamble !== this.state.preamble ) {
			debug( 'Preamble has changed.' );
			return true;
		}
		debug( 'Preamble has not changed.' );
		return false;
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
							fontSize={14}
							splitPos={this.state.splitPos}
							lintErrors={this.props.lintErrors}
						/>
					</SplitPanel>
					<SplitPanel ref={( elem ) => { this.preview = elem; }} overflow="none" >
						{ error ?
							<ErrorMessage msg={error.message} code={markdown} /> :
							<ErrorBoundary code={markdown} preamble={this.state.preamble} >
								<Preview
									code={markdown}
									filePath={filePath}
									preamble={this.state.preamble}
									currentRole={currentRole}
									currentMode={currentMode}
									onCode={this.lintCode}
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
	resetError: PropTypes.func.isRequired,
	saveLintErrors: PropTypes.func.isRequired,
	updatePreamble: PropTypes.func.isRequired
};


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	saveLintErrors,
	encounteredError,
	resetError,
	changeView,
	changeMode,
	toggleScrolling,
	toggleToolbar,
	updatePreamble
})( App );

function mapStateToProps({ markdown, linting }) {
	return {
		...markdown,
		...linting
	};
}
