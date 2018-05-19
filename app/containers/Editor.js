// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import isObject from '@stdlib/assert/is-object';
import path from 'path';
import css from 'css';
import fs from 'fs';
import debounce from 'lodash.debounce';
import SplitPane from 'react-split-pane';
import logger from 'debug';
import yaml from 'js-yaml';
import ErrorBoundary from 'components/error-boundary';
import SplitPanel from 'components/split-panel';
import Header from 'components/Header';
import Editor from 'components/Editor';
import Preview from 'components/Preview';
import { convertMarkdown, changeMode, changeView, toggleScrolling, toggleToolbar, updatePreamble, encounteredError, resetError } from 'actions';


// VARIABLES //

const debug = logger( 'isle-editor' );
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
				} else if ( /@stdlib/.test( lib ) ) {
					lib = libs[ key ].replace( '@stdlib', '@stdlib/stdlib/lib/node_modules/@stdlib' );
				}
				if ( /\.svg$/.test( lib ) ) {
					debug( 'Read SVG from disk: '+lib );
					let content = fs.readFileSync( lib ).toString( 'base64' );
					eval( `global[ '${key}' ] = 'data:image/svg+xml;base64,${content}';` );
				}
				else if ( /\.(?:jpg|png)$/.test( lib ) ) {
					debug( 'Read image from disk: '+lib );
					let buffer = fs.readFileSync( lib );
					eval( `global[ '${key}' ] = 'data:image/jpeg;base64,${buffer.toString( 'base64' )}'` );
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

		this.lastPreamble = null;

		this.onChange = ( value ) => {
			debug( 'Editor text changed...' );
			const handleChange = ( value ) => {
				debug( 'Should handle change...' );
				this.handlePreambleChange( value );
				this.props.convertMarkdown( value );
			};

			if ( this.debouncedChange ) {
				this.debouncedChange( value );
			} else {
				this.debouncedChange = debounce( handleChange, 1000 );
				this.debouncedChange( value );
			}
		};

		if ( isObject( props.preamble ) ) {
			try {
				loadRequires( props.preamble.require, props.filePath || '' );
			} catch ( err ) {
				this.props.encounteredError( err );
			}
			try {
				applyStyles( props.preamble, props.filePath || '' );
			} catch ( err ) {
				this.props.encounteredError( err );
			}
		}
	}

	componentDidMount() {
		const editor = this.editor;
		const preview = this.preview;
		this.onEditorScroll = this.sync( editor, preview );
		this.onPreviewScroll = this.sync( preview, editor );
	}

	handlePreambleChange( text ) {
		let preamble = text.match( /---([\S\s]*)---/ );
		if ( !preamble ) {
			return this.props.encounteredError( new Error( 'Make sure the file contains a YAML preamble enclosed in <b>---</b> tags.' ) );
		}
		// Extract the capture group:
		preamble = preamble[ 1 ];
		let preambleHasChanged = this.checkPreambleChange( preamble );
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
					applyStyles( newPreamble, this.props.filePath || '' );
				} catch ( err ) {
					return this.props.encounteredError( err );
				}
				this.props.updatePreamble( newPreamble );
				if ( this.props.error ) {
					this.props.resetError();
				}
			} catch ( err ) {
				return this.props.encounteredError( new Error( 'Couldn\'t parse the preamble. Make sure it is valid YAML.' ) );
			}
		}
	}

	checkPreambleChange( preamble ) {
		if ( preamble !== this.lastPreamble ) {
			debug( 'Preamble has changed.' );
			this.lastPreamble = preamble;
			return true;
		}
		debug( 'Preamble has not changed.' );
		return false;
	}

	sync( main, other ) {
		return ( scrollTop, scrollHeight, offsetHeight ) => {
			const percentage = ( scrollTop * 100 ) / ( scrollHeight - offsetHeight );
			main.setScrollTop( percentage );
			other.setScrollTop( percentage );
		};
	}

	render() {
		let {
			error,
			fileName,
			filePath,
			markdown,
			hideToolbar,
			preamble,
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
					defaultSize={parseInt( localStorage.getItem( 'splitPos' ), 10 )}
					onChange={size => localStorage.setItem( 'splitPos', size )}
					style={{
						'position': 'absolute',
						'top': !hideToolbar ? 88 : 0,
						'bottom': '0'
					}}
				>
					<SplitPanel ref={( elem ) => { this.editor = elem; }} onScroll={this.onEditorScroll}>
						<Editor
							ref={( elem ) => { this.code = elem; }}
							value={markdown}
							onChange={this.onChange}
							name="ace_editor"
							fontSize={14}
							setOptions={{
								highlightActiveLine: true,
								showGutter: true,
								showPrintMargin: false
							}}
						/>
					</SplitPanel>
					<SplitPanel ref={( elem ) => { this.preview = elem; }} onScroll={this.onPreviewScroll}>
						<ErrorBoundary code={markdown}>
							<Preview
								errorMsg={error ? error.message : null}
								code={markdown}
								filePath={filePath}
								preamble={preamble}
								currentRole={currentRole}
								currentMode={currentMode}
							/>
						</ErrorBoundary>
					</SplitPanel>
				</SplitPane>
				{
					( () => {
						// eslint-disable-next-line no-process-env
						if ( process.env.NODE_ENV !== 'production' ) {
							const DevTools = require( './DevTools' ); // eslint-disable-line global-require
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
	markdown: PropTypes.string.isRequired,
	preamble: PropTypes.object.isRequired,
	resetError: PropTypes.func.isRequired,
	updatePreamble: PropTypes.func.isRequired
};

// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	encounteredError,
	resetError,
	changeView,
	changeMode,
	toggleScrolling,
	toggleToolbar,
	updatePreamble
})( App );

function mapStateToProps({ markdown }) {
	return markdown;
}
