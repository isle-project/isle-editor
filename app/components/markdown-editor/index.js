/* eslint-disable max-lines */

// MODULES //

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import pdfMake from 'pdfmake/build/pdfmake';
import Button from 'react-bootstrap/Button';
import replace from '@stdlib/string/replace';
import startsWith from '@stdlib/string/starts-with';
import endsWith from '@stdlib/string/ends-with';
import uppercase from '@stdlib/string/uppercase';
import removeLast from '@stdlib/string/remove-last';
import removeFirst from '@stdlib/string/remove-first';
import contains from '@stdlib/assert/contains';
import ResponseVisualizer from 'components/response-visualizer';
import base64toBlob from 'utils/base64-to-blob';
import SessionContext from 'session/context.js';
import SimpleMDE from './simplemde.js';
import generatePDF from './generate_pdf.js';
import Loadable from 'components/loadable';
import titleTagConvert from './title_tag_convert.js';
import createHTML from './create_html.js';
import { MARKDOWN_EDITOR_PEER_COMMENTS, MARKDOWN_EDITOR_PEER_REPORT, PLOT_DRAGGED, MARKDOWN_EDITOR_SUBMIT } from 'constants/actions.js';


// MAIN //

/**
* A markdown editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.
*
* @property {string} defaultValue - default text of the editor
* @property {boolean} sendSubmissionEmails - controls whether to send confirmation emails with PDF/HTML output upon submission
* @property {Array} toolbarConfig - array of toolbar element identifiers to be displayed
* @property {Object} options - options passed to the SimpleMDE constructor, the package on which this component is based; see their documentation for available options
* @property {boolean} autoSave - controls whether the editor should save the current text to the local storage of the browser at a given time interval
* @property {boolean} groupMode - controls whether to sync editor changes across users
* @property {Object} peerReview - if not null, enables peer review mode in which each submission is sent to another randomly chosen student and vice versa
* @property {number} intervalTime - time between auto saves
* @property {boolean} voiceControl - controls whether voice input is enabled
* @property {number} voiceTimeout - time in milliseconds after a chunk of recorded voice input is inserted
* @property {string} language - language identifier
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked when editor text changes; receives the current text as its sole argument
*/
class MarkdownEditor extends Component {
	constructor( props ) {
		super( props );

		let value = props.defaultValue;
		let hash = {};
		let out;
		this.id = props.id || uid( props );
		if ( props.autoSave ) {
			const previous = localStorage.getItem( this.id );
			if ( previous ) {
				out = remakeText( previous );
				value = out.text;
				hash = out.hash;
			}
		}
			'insert_columns': {
				name: 'insert_new_columns',
				action: () => {
					this.toggleColumnSelect();
				},
				className: 'fa fa-ellipsis-h',
				title: 'Insert Columns'
			},
			'font_size': {
				name: 'font_size',
				className: 'font_size_button',
				title: 'Select Font Size'
			}
		};
		loadFonts();
	}

	componentDidMount() {
		this.interval = setInterval( this.handleAutosave, this.props.intervalTime );
		this.initializeEditor();
		const toolbars = this.wrapper.getElementsByClassName( 'editor-toolbar' );
		if ( toolbars.length > 0 ) {
			const editorToolbar = toolbars[ 0 ];
			const fontSizeToRemove = editorToolbar.getElementsByClassName( 'font_size_button' );
			if ( fontSizeToRemove.length > 0 ) {
				ReactDOM.render( <input type='number' min={4} max={99}
					onChange={( event ) => {
						this.setState({
							fontSize: event.target.value
						});
					}}
					defaultValue={this.state.fontSize}
					className='font_size_input'
				/>, fontSizeToRemove[ 0 ] );
			}
		}
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( action && action.id === this.id ) {
				if ( action.type === 'MARKDOWN_EDITOR_PEER_REPORT' ) {
					localStorage.setItem( this.id+'_peer_report', action.value );
					this.addPeerReportNotification( action.value );
				}
				else if ( action.type === 'MARKDOWN_EDITOR_PEER_COMMENTS' ) {
					localStorage.setItem( this.id+'_peer_comments', action.value );
					this.addPeerComments( action.value );
				}
				else if ( action.type === PLOT_DRAGGED && action.email !== session.user.email ) {
					const { html, key } = JSON.parse( action.value );
					const { hash } = this.state;
					hash[ key ] = html;
					this.setState({
						hash
					});
				}
			}
		});
		window.addEventListener( 'beforeunload', this.handleAutosave );
	}

	componentWillUnmount() {
		this.handleAutosave();
		if ( this.interval ) {
			clearInterval( this.interval );
		}
		this.unsubscribe();
		window.removeEventListener( 'beforeunload', this.handleAutosave );
	}


	logChange() {
		const { change } = this.state;
		if ( change.origin && change.text.length > 0 ) {
			let origin = change.origin;
			if ( startsWith( origin, '+' ) ) {
				origin = removeFirst( origin );
			}
			const session = this.context;
			session.log({
				id: this.id,
				type: 'MARKDOWN_EDITOR_'+uppercase( origin ),
				value: JSON.stringify( change, replacer, 2 )
			});
			return true;
		}
		return false;
	}

	handleAutosave = () => {
		let text = this.state.value;
		text = replacePlaceholders( text, this.state.hash );
		localStorage.setItem( this.id, text );
		const logged = this.logChange();
		if ( logged ) {
			this.setState({
				change: {
					'text': []
				}
			});
		}
	}

	render() {
		const session = this.context;
		return (
			<Fragment>
				<div id={this.id} ref={( div ) => { this.wrapper = div; }} className="markdown-editor" style={this.props.style} >
					<textarea ref={( area ) => { this.simplemdeRef = area; }} autoComplete="off" {...this.props.options} />
					{ contains( this.props.toolbarConfig, 'submit' ) ?
					<ResponseVisualizer
						id={this.id}
						data={{
							type: 'text'
						}}
						info={MARKDOWN_EDITOR_SUBMIT}
						style={{ padding: 5 }}
					/> : null }
				</div>
				<ColumnSelect
					show={this.state.showColumnSelect}
					onHide={()=>{
						this.setState({
							showColumnSelect: false
						});
					}}
					onClick={( tblString )=>{
						const c = this.simplemde.codemirror.getCursor();
						this.simplemde.codemirror.replaceRange( tblString, c );
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

MarkdownEditor.defaultProps = {
	defaultValue: DEFAULT_VALUE,
	sendSubmissionEmails: true,
	options: {},
	autoSave: true,
	groupMode: false,
	intervalTime: 60000,
	peerReview: null,
	style: {},
	onChange() {}
};

MarkdownEditor.propTypes = {
	defaultValue: PropTypes.string,
	sendSubmissionEmails: PropTypes.bool,
	options: PropTypes.object,
	autoSave: PropTypes.bool,
	groupMode: PropTypes.bool,
	intervalTime: PropTypes.number,

	style: PropTypes.object,
	onChange: PropTypes.func
};

MarkdownEditor.contextType = SessionContext;

	peerReview: PropTypes.shape({
		submitButtonLabel: PropTypes.string,
		reviewButtonLabel: PropTypes.string
	}),
// EXPORTS //

export default MarkdownEditor;
