// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Step } from 'prosemirror-transform';
import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import isJSON from '@stdlib/assert/is-json';
import SliderInput from '@isle-project/components/input/slider';
import plugins from './config/plugins';
import schema from './config/schema';
import FootnoteView from './views/footnote';
import ImageNodeView from './config/ui/image_node_view.js';
import StatusBar from './statusbar.js';
import countWords from './count_words.js';
import parser from './parser.js';


// VARIABLES //

const MS = 'ms';


// MAIN //

class HistoryView extends Component {
	constructor( props ) {
		super( props );

		const value = props.defaultValue;
		const doc = isJSON( value ) ?
		Node.fromJSON( schema, JSON.parse( value ) ) :
			parser( value );
		this.state = {
			editorState: EditorState.create({
				doc,
				schema,
				plugins
			}),
			document: null,
			counter: 0,
			interval: 50,
			running: false,
			nWords: 0,
			nChars: 0,
			invertedSteps: []
		};
	}

	async componentDidMount() {
		const res = await this.props.session.getTextEditorDocument( this.props.docId );
		console.log( res.data );
		if ( res.data.message === 'ok' ) {
			this.setState({
				document: res.data.document
			});
		}
	}

	_createEditorView = ( element ) => {
		this.editorDiv = element;
		if ( element !== null ) {
			this.editorView = new EditorView( element, {
				state: this.state.editorState,
				dispatchTransaction: this.dispatchTransaction,
				editable: () => false,
				nodeViews: {
					footnote: ( node, view, getPos, decorations ) => { return new FootnoteView( node, view, getPos, decorations ); },
					image: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); },
					plot: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); },
					plotContainer: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); }
				}
			});
		}
	}

	addStep = () => {
		if ( !this.state.running ) {
			return;
		}
		const state = this.state.editorState;
		const tr = state.tr;
		const step = Step.fromJSON( schema, this.state.document.steps[ this.state.counter ] );
		const invertedStep = step.invert( tr.doc );
		tr.maybeStep( step );
		const newState = state.apply( tr );
		this.editorView.updateState( newState );
		const newCounter = this.state.counter + 1;

		const invertedSteps = this.state.invertedSteps.slice();
		invertedSteps[ this.state.counter ] = invertedStep;

		let nChars = 0;
		let nWords = 0;
		newState.doc.forEach( blockNode => {
			blockNode.forEach( inlineNode => {
				if ( inlineNode.text ) {
					nChars += inlineNode.text.length;
					nWords += countWords( inlineNode.text );
				}
			});
		});
		this.setState({
			counter: newCounter,
			editorState: newState,
			nChars,
			nWords,
			invertedSteps
		}, () => {
			if ( newCounter < this.state.document.steps.length ) {
				setTimeout( this.addStep, this.state.interval );
			}
		});
	}

	subtractStep = () => {
		if ( !this.state.running ) {
			return;
		}
		const state = this.state.editorState;
		const tr = state.tr;
		const newCounter = this.state.counter - 1;
		const step = this.state.invertedSteps[ newCounter ];
		tr.maybeStep( step );
		const newState = state.apply( tr );
		this.editorView.updateState( newState );

		let nChars = 0;
		let nWords = 0;
		newState.doc.forEach( blockNode => {
			blockNode.forEach( inlineNode => {
				if ( inlineNode.text ) {
					nChars += inlineNode.text.length;
					nWords += countWords( inlineNode.text );
				}
			});
		});
		this.setState({
			counter: newCounter,
			editorState: newState,
			nChars,
			nWords
		}, () => {
			if ( newCounter > 0 ) {
				setTimeout( this.subtractStep, this.state.interval );
			}
		});
	}

	reset = () => {
		const value = this.props.defaultValue;
		const doc = isJSON( value ) ?
		Node.fromJSON( schema, JSON.parse( value ) ) :
			parser( value );
		const newState = EditorState.create({
			doc,
			schema,
			plugins
		});
		this.editorView.updateState( newState );
		this.setState({
			editorState: newState,
			counter: 0,
			nChars: 0,
			nWords: 0
		});
	}

	playBackward = () => {
		this.setState({
			running: true
		}, this.subtractStep );
	}

	playForward = () => {
		this.setState({
			running: true
		}, this.addStep );
	}

	stop = () => {
		this.setState({ running: false });
	}

	render() {
		const { document, counter } = this.state;
		return (
			<Fragment>
				<Button size="sm" variant="light" onClick={this.props.onClose}>
					<i className="fas fa-arrow-left"></i>
				</Button>
				<span className="title text-editor-playback-title" >
					{this.props.t('document-history')}
				</span>
				<ButtonGroup size="sm" >
					<Button variant="light" onClick={this.reset} >
						<i className="far fa-times-circle"></i>
					</Button>
					<Button variant="light" onClick={this.playBackward} disabled={!document || counter === 0} >
						<i className="fas fa-fast-backward" ></i>
					</Button>
					<Button variant="light" onClick={this.stop} >
						<i className="fas fa-pause"></i>
					</Button>
					<Button variant="light" onClick={this.playForward} disabled={!document || ( document.steps.length <= counter )} >
						<i className="fas fa-fast-forward" ></i>
					</Button>
				</ButtonGroup>
				<span style={{ marginLeft: 20, marginRight: 10 }} >
					{this.props.t('update-time')}
				</span>
				<SliderInput inline defaultValue={this.state.interval} min={20} max={200} onChange={( value ) => {
					this.setState({ interval: value });
				}} numberInputStyle={{ display: 'none' }} />
				<span>{`${this.state.interval}${MS}`}</span>
				<div
					ref={this._createEditorView}
				/>
				<StatusBar nWords={this.state.nWords} nChars={this.state.nChars} t={this.props.t} />
			</Fragment>
		);
	}
}


// PROPERTIES //

HistoryView.propTypes = {
	onClose: PropTypes.func.isRequired,
	defaultValue: PropTypes.string.isRequired,
	docId: PropTypes.string.isRequired
};

HistoryView.defaultProps = {

};


// EXPORTS //

export default HistoryView;
