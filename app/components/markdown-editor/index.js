// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'simplemde';
import replace from '@stdlib/string/replace';
import hasOwnProp from '@stdlib/assert/has-own-property';
import markdownIt from 'markdown-it';
import VoiceInput from 'components/input/voice';
import FileSaver from 'file-saver';
import './markdown-editor.css';

// VARIABLES //

const md = markdownIt({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});

const createHTML = ( title, body ) => `<!doctype html>
<html lang=en>
	<head>
		<meta charset=utf-8>
		<title>${title}</title>
	</head>
	<body>
	${body}
	</body>
</html>`;


// MAIN //

class MarkdownEditor extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			value: props.defaultValue,
			hash: {}
		};
	}


	componentDidMount() {
		this.simplemde = new SimpleMDE({
			element: this.simplemdeRef,
			initialValue: this.props.defaultValue,
			previewRender: this.previewRender,
			toolbar: this.createToolbar(),
			...this.props.options
		});

		// Add event listeners:
		this.simplemde.codemirror.on( 'change', () => {
			this.setState({
				value: this.simplemde.value()
			}, () => {
				this.props.onChange( this.state.value );
			});
		});
		this.simplemde.codemirror.on( 'drop', ( instance, event ) => {
			event.preventDefault();
			const key = event.dataTransfer.getData( 'text/plain' );
			const html = event.dataTransfer.getData( 'text/html' );
			const { hash } = this.state;
			hash[ key ] = html;
			instance.replaceSelection( key );
			this.setState({
				hash
			});
		});
	}

	createToolbar() {
		const toolbar = [
			'bold', 'italic', 'strikethrough', '|', 'heading', 'quote', 'unordered-list', 'ordered-list', 'link', '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide',
			{
				name: 'markdown',
				action: (editor) => {
					const mdValue = this.simplemde.value();
					const blob = new Blob([ mdValue ], { type: 'text/html'});
					FileSaver.saveAs( blob, 'provisoric.md' );
				},
				className: 'fa fa-file-text',
				title: 'Save Markdown File'
			},
			{
				name: 'html',
				action: (editor) => {
					const mdValue = this.simplemde.value();
					const body = this.previewRender( mdValue );
					const html = createHTML( 'provisoric', body );
					const blob = new Blob([ html ], { type: 'text/html'});
					FileSaver.saveAs( blob, 'provisoric.html' );
				},
				className: 'fa fa-save',
				title: 'Save HTML File'
			}
		];
		if ( this.props.voiceControl) {
			toolbar.push({
				name: 'custom',
				action: ( editor ) => {
					this.voiceRef.handleClick();
				},
				className: 'fa fa-microphone',
				title: 'Record Text'
			});
		}
		return toolbar;
	}


	recordedText = (text) => {
		var sel = this.simplemde.codemirror.somethingSelected();
		if ( sel ) {
			this.simplemde.codemirror.replaceSelection( text);
		}
		else {
			var c = this.simplemde.codemirror.getCursor();
			this.simplemde.codemirror.replaceRange( text, c);
		}
	}

	previewRender = ( plainText ) => {
		const { hash } = this.state;
		for ( let key in hash ) {
			if ( hasOwnProp( hash, key ) ) {
				plainText = replace( plainText, key, hash[ key ]);
			}
		}
		return md.render( plainText );
	}

	allowDrop( event ) {
		event.preventDefault();
	}

	renderVoiceControl() {
		if ( !this.props.voiceControl ) return null;
		return (
			<VoiceInput mode="status"
				timeout={5000}
				width='90%'
				onFinalText={this.recordedText} ref={( voice ) => { this.voiceRef = voice; }} />
		);
	}

	render() {
		return (
			<div className="markdown-editor">
				<textarea ref={( area ) => { this.simplemdeRef = area; }} autoComplete="off" {...this.props.options} />
				{ this.renderVoiceControl() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

MarkdownEditor.defaultProps = {
	defaultValue: '',
	onChange() {},
	options: {},
	voiceControl: false
};


// PROPERTY TYPES //

MarkdownEditor.propTypes = {
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.object,
	voiceControl: PropTypes.bool
};


// EXPORTS //

export default MarkdownEditor;
