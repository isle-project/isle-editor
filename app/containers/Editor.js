// MODULES //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAbsolutePath, isObject } from '@stdlib/assert';
import path from 'path';
import css from 'css';
import fs from 'fs';
import debounce from 'lodash.debounce';
import SplitPane from 'react-split-pane';
import yaml from 'js-yaml';
import Panel from 'components/Panel';
import Header from 'components/Header';
import Editor from 'components/Editor';
import Preview from 'components/Preview';
import { convertMarkdown, toggleScrolling, toggleToolbar, updatePreamble } from 'actions';
const debug = require( 'debug' )( 'isle-editor' );


// VARIABLES //

var cssHash = {};
var lastCSS = null;


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
	rules = rules.map( rule => {
		rule.selectors = rule.selectors.map( s => '#Lesson ' + s );
		return rule;
	});

	node.innerHTML = css.stringify( cssObj );
	document.head.appendChild( node );
};

const loadRequires = ( libs, filePath ) => {
	console.log( 'Should require files or modules...' );
	let dirname = path.dirname( filePath );
	if ( isObject( libs ) ) {
		for ( let key in libs ) {
			if ( libs.hasOwnProperty( key ) ) {
				let lib = libs[ key ];
				if ( isAbsolutePath( lib ) || /\.\//.test( lib ) ) {
					lib = path.join( dirname, libs[ key ]);
				} else if ( /@stdlib/.test( lib ) ) {
					lib = libs[ key ].replace( '@stdlib', '@stdlib/stdlib/lib/node_modules/@stdlib' );
				}
				if ( /\.svg$/.test( lib ) ) {
					let content = fs.readFileSync( lib ).toString( 'base64' );
					eval( `global[ '${key}' ] = 'data:image/svg+xml;base64,${content}';` );
				}
				else if ( /\.(?:jpg|png)$/.test( lib ) ) {
					let buffer = fs.readFileSync( lib );
					eval( `global[ '${key}' ] = 'data:image/jpeg;base64,${buffer.toString( 'base64' )}'` );
				}
				else {
					eval( `global[ '${key}' ] = require( '${lib}' );` );
				}

			}
		}
	}
};


// APP //

class App extends Component {

	constructor( props ) {
		super( props );

		this.lastPreamble = null;

		this.onChange = ( value ) => {
			debug( 'Editor text changed...' );
			const handleChange = ( value ) => {
				debug( 'Should handle change...' );
				const preamble = value.match( /---([\S\s]*)---/ )[ 1 ];
				let preambleHasChanged = this.checkPreambleChange( preamble );
				if ( preambleHasChanged ) {
					const newPreamble = yaml.load( preamble );
					this.props.updatePreamble( newPreamble );
					loadRequires( newPreamble.require, this.props.filePath || '' );

					// Apply styles:
					let css = '';
					if ( newPreamble.css ) {
						if ( cssHash[ newPreamble.css ]) {
							css += cssHash[ newPreamble.css ];
						} else {
							let fpath = newPreamble.css;
							if ( !isAbsolutePath( fpath ) ) {
								fpath = path.join( path.dirname( this.props.filePath ), fpath );
							}
							css += fs.readFileSync( fpath ).toString();
						}
					}
					if ( newPreamble.style ) {
						css += '\n';
						css += newPreamble.style;
					}
					if ( newPreamble.style || newPreamble.css ) {
						if ( css !== lastCSS ) {
							injectStyle( css );
						}
						lastCSS = css;
					}
				}
				this.props.convertMarkdown( value );
			};

			if ( this.debouncedChange ) {
				this.debouncedChange( value );
			} else {
				this.debouncedChange = debounce( handleChange, 1000 );
				this.debouncedChange( value );
			}

		};
	}

	checkPreambleChange( preamble ) {
		if ( preamble !== this.lastPreamble ) {
			debug( 'Preamble has changed.' );
			this.lastPreamble = preamble;
			return true;
		} else {
			debug( 'Preamble has not changed.' );
			return false;
		}
	}

	componentDidMount() {
		const editor = this.refs.editor;
		const preview = this.refs.preview;
		this.onEditorScroll = this.sync( editor, preview );
		this.onPreviewScroll = this.sync( preview, editor );
	}

	sync( main, other ) {
		return ( scrollTop, scrollHeight, offsetHeight ) => {
			const percentage = ( scrollTop * 100 ) / ( scrollHeight - offsetHeight );
			main.setScrollTop( percentage );
			other.setScrollTop( percentage );
		};
	}

	render() {
		let { fileName, filePath, markdown, hideToolbar, preamble } = this.props;
		return (
			<div>
				{ !hideToolbar ? <Header fileName={fileName} /> : null }
				<SplitPane
					className="splitpane"
					split="vertical"
					primary="second"
					defaultSize={ parseInt( localStorage.getItem( 'splitPos' ), 10 ) }
					onChange={ size => localStorage.setItem( 'splitPos', size ) }
					style={{
						'position': 'absolute',
						'top': !hideToolbar ? 88 : 0,
						'bottom': '0'
					}}
				>
					<Panel ref="editor" onScroll={this.onEditorScroll}>
						<Editor
							ref="code"
							value={markdown}
							onChange={this.onChange}
							name="ace_editor"
							fontSize={14}
							setOptions={{
								highlightActiveLine: true,
								showGutter: true,
								showPrintMargin: false,
							}}
						/>
					</Panel>
					<Panel ref="preview" onScroll={this.onPreviewScroll}>
						<Preview code={markdown} filePath={filePath} preamble={preamble} />
					</Panel>
				</SplitPane>
				{
					( () => {
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


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	toggleScrolling,
	toggleToolbar,
	updatePreamble
})( App );

function mapStateToProps({ markdown }) {
	return markdown;
}
