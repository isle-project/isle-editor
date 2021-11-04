// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { Node } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { fixTables } from 'prosemirror-tables';
import { defaultMarkdownSerializer } from 'prosemirror-markdown';
import isJSON from '@stdlib/assert/is-json';
import plugins from './config/plugins';
import MenuBar from './menubar.js';
import schema from './config/schema';
import FootnoteView from './views/footnote';
import ImageNodeView from './config/ui/image_node_view.js';
import { toggleCursorParking } from './config/cursor_parking';
import StatusBar from './statusbar.js';
import countWords from './count_words.js';
import handleDrop from './handle_drop.js';
import parser from './parser.js';


// VARIABLES //

const debug = logger( 'isle:text-editor' );


// MAIN //

/**
* A localstorage based individual editor view.
*
* @property {boolean} autoSave - controls whether the editor should save the current text to the local storage of the browser at a given time interval
* @property {number} intervalTime - time between auto saves
*/
class ProseMirror extends Component {
	constructor( props ) {
		super( props );

		let value;
		if ( props.id ) {
			value = localStorage.getItem( props.id );
		}
		if ( !value ) {
			value = props.defaultValue;
		}
		const doc = isJSON( value ) ?
		Node.fromJSON( schema, JSON.parse( value ) ) :
			parser( value );
		this.state = {
			editorState: EditorState.create({
				doc,
				schema,
				plugins
			})
		};
	}

	componentDidMount() {
		if ( this.props.autoSave && this.props.id ) {
			this.saveInterval = setInterval( this.saveInBrowser, this.props.intervalTime );
		}
		window.addEventListener( 'unload', this.saveInBrowser );
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.defaultValue !== prevProps.defaultValue ||
			this.props.docId !== prevProps.docId
		) {
			debug( 'Re-creating editor state...' );
			const doc = isJSON( this.props.defaultValue ) ?
				Node.fromJSON( schema, JSON.parse( this.props.defaultValue ) ) :
				parser( this.props.defaultValue );
			this.setState({
				editorState: EditorState.create({
					doc,
					schema,
					plugins
				})
			}, () => {
				this.editorView.destroy();
				this._createEditorView( this.editorDiv );
			});
		}
	}

	componentWillUnmount() {
		if ( this.editorView ) {
			this.editorView.destroy();
		}
		if ( this.saveInterval ) {
			clearInterval( this.saveInterval );
		}
		window.removeEventListener( 'unload', this.saveInBrowser );
	}

	_createEditorView = ( element ) => {
		this.editorDiv = element;
		if ( element !== null ) {
			this.editorView = new EditorView( element, {
				state: this.state.editorState,
				dispatchTransaction: this.dispatchTransaction,
				nodeViews: {
					footnote: ( node, view, getPos, decorations ) => { return new FootnoteView( node, view, getPos, decorations ); },
					image: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); },
					plot: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); },
					plotContainer: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); }
				},
				handleDOMEvents: {
					'dragenter': ( view ) => {
						debug( 'Handle drag enter event...' );
						toggleCursorParking( view );
					},
					'drop': handleDrop,
					'keydown': this.props.onKeyDown
				}
			});
		}
		this.props.onMount( this.editorDiv );
	};

	onEditorState = ( editorState ) => {
		let nChars = 0;
		let nWords = 0;
		if ( this.props.showStatusBar ) {
			editorState.doc.forEach( blockNode => {
				blockNode.forEach( inlineNode => {
					if ( inlineNode.text ) {
						nChars += inlineNode.text.length;
						nWords += countWords( inlineNode.text );
					}
				});
			});
		}
		this.props.onEditorState( editorState );
		this.setState({ editorState, nWords, nChars });
	};

	dispatchTransaction = ( tx ) => {
		let editorState = this.state.editorState.apply( tx );
		if ( this.editorView !== null ) {
			this.editorView.updateState( editorState );
		}
		let fix = fixTables( this.state.editorState );
		if ( fix ) {
			editorState = editorState.
				apply( fix.setMeta( 'addToHistory', false ) );
		}
		this.onEditorState( editorState );
	};

	get markdown() {
		return defaultMarkdownSerializer.serialize( this.state.editorState.doc );
	}

	focus() {
		if ( this.editorView ) {
			this.editorView.focus();
		}
	}

	saveInBrowser = () => {
		debug( 'Saving document state to local storage...' );
		if ( this.state.editorState ) {
			localStorage.setItem( this.props.id, JSON.stringify( this.state.editorState.doc.toJSON() ) );
		}
	};

	render() {
		return ( <Fragment>
			<MenuBar
				menu={this.props.menu}
				state={this.state.editorState}
				dispatch={this.dispatchTransaction}
				view={this.editorView}
				fullscreen={this.props.fullscreen}
				showColorPicker={this.props.showColorPicker}
				onColorChoice={this.props.onColorChoice}
			/>
			<div
				className={this.props.className}
				ref={this._createEditorView}
			/>
			{this.props.showStatusBar ?
				<StatusBar nWords={this.state.nWords} nChars={this.state.nChars} t={this.props.t} /> :
				null
			}
		</Fragment> );
	}
}


// PROPERTIES //

ProseMirror.propTypes = {
	autoSave: PropTypes.bool,
	intervalTime: PropTypes.number,
	defaultValue: PropTypes.string.isRequired,
	docId: PropTypes.number.isRequired,
	fullscreen: PropTypes.bool.isRequired,
	showColorPicker: PropTypes.bool.isRequired,
	menu: PropTypes.object.isRequired,
	showStatusBar: PropTypes.bool,
	t: PropTypes.func,
	onColorChoice: PropTypes.func,
	onEditorState: PropTypes.func,
	onKeyDown: PropTypes.func,
	onMount: PropTypes.func
};

ProseMirror.defaultProps = {
	autoSave: true,
	intervalTime: 10000,
	showStatusBar: true,
	t() {},
	onColorChoice() {},
	onEditorState() {},
	onKeyDown() {},
	onMount() {}
};


// EXPORTS //

export default ProseMirror;
