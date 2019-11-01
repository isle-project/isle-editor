// MODULES //

import React, { Component, Fragment } from 'react';
import { DOMParser } from 'prosemirror-model';
import PropTypes from 'prop-types';
import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { fixTables } from 'prosemirror-tables';
import plugins from './config/plugins';
import MenuBar from './menubar.js';
import schema from './config/schema';
import FootnoteView from './views/footnote';
import PlotDragView from './views/plot_drag';
import countWords from './count_words.js';


// FUNCTIONS //

const StatusBar = ( props ) => {
	return ( <div className="prose-statusbar">
		<span>words: {props.nWords}</span>
		<span style={{ marginLeft: 5 }}>characters: {props.nChars}</span>
	</div> );
};

const parser = ( content ) => {
	let domNode = document.createElement( 'div' );
	domNode.innerHTML = content;
	return DOMParser.fromSchema( schema ).parse( domNode );
};


// MAIN //

class ProseMirror extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			editorState: EditorState.create({
				doc: parser( props.defaultValue ),
				schema,
				plugins
			})
		};
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.defaultValue !== prevProps.defaultValue ) {
			this.setState({
				editorState: EditorState.create({
					doc: parser( this.props.defaultValue ),
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
	}

	_createEditorView = ( element ) => {
		this.editorDiv = element;
		if ( element !== null ) {
			this.editorView = new EditorView( element, {
				state: this.state.editorState,
				dispatchTransaction: this.dispatchTransaction,
				nodeViews: {
					footnote: ( node, view, getPos ) => { return new FootnoteView( node, view, getPos ); },
					plot: ( node, view, getPos ) => { return new PlotDragView( node, view, getPos ); }
				}
			});
		}
		this.props.onMount( this.editorDiv );
	}

	onEditorState = ( editorState ) => {
		let nChars = 0;
		let nWords = 0;
		editorState.doc.forEach( blockNode => {
			blockNode.forEach( inlineNode => {
				if ( inlineNode.text ) {
					nChars += inlineNode.text.length;
					nWords += countWords( inlineNode.text );
				}
			});
		});
		this.props.onEditorState( editorState );
		this.setState({ editorState, nWords, nChars });
	}

	dispatchTransaction = ( tx ) => {
		const editorState = this.state.editorState.apply( tx );
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

	focus() {
		if ( this.editorView ) {
			this.editorView.focus();
		}
	}

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
			<div ref={this._createEditorView} />
			<StatusBar nWords={this.state.nWords} nChars={this.state.nChars} />
		</Fragment> );
	}
}


// PROPERTIES //

ProseMirror.propTypes = {
	defaultValue: PropTypes.string.isRequired,
	fullscreen: PropTypes.bool.isRequired,
	showColorPicker: PropTypes.bool.isRequired,
	menu: PropTypes.object.isRequired,
	onColorChoice: PropTypes.func,
	onEditorState: PropTypes.func,
	onMount: PropTypes.func
};

ProseMirror.defaultProps = {
	onColorChoice() {},
	onEditorState() {},
	onMount() {}
};


// EXPORTS //

export default ProseMirror;
