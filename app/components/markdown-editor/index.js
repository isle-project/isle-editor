// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'simplemde';
import markdownIt from 'markdown-it';
import katex from 'markdown-it-katex';
import FileSaver from 'file-saver';
import { generate } from 'randomstring';
import isArray from '@stdlib/assert/is-array';
import replace from '@stdlib/string/replace';
import hasOwnProp from '@stdlib/assert/has-own-property';
import VoiceInput from 'components/input/voice';
import 'simplemde/dist/simplemde.min.css';
import './markdown-editor.css';
import { clearInterval } from 'timers';


// VARIABLES //

const RE_IMG = /<img[^>]*\/>/g;

const md = markdownIt({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.use( katex, {
	throwOnError: false,
	errorColor: '#cc0000'
});

const createHTML = ( title, body ) => `<!doctype html>
<html lang=en>
	<head>
		<meta charset=utf-8>
		<title>${title}</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css" integrity="sha384-B41nY7vEWuDrE9Mr+J2nBL0Liu+nl/rBXTdpQal730oTHdlrlXHzYMOhDU60cwde" crossorigin="anonymous">
		<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css' />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
		<style media="screen" type="text/css">
			body {
				font-family: 'Open Sans', sans-serif;
				font-size: 16px !important;
				margin-left: auto;
				margin-right: auto;
				padding: 10px;
				width: 100%;
				max-width: 1200px;
				height: 100%;
				display: block;
			}
			h1 {
				color: #2e4468;
				font-size: 40px;
				font-weight: bold;
				letter-spacing: 1px;
			}
			h2 {
				font-size: 32px;
				color: #3c763d;
				font-weight: 600;
			}
			h3 {
				font-size: 24px;
				color: #2e4468;
				font-weight: 600;
			}
			h4 {
				font-size: 20px;
				color: #ca5800;
				font-weight: 600;
			}
			tr {
				display: table-row;
				vertical-align: inherit;
				border-color: inherit;
			}
			th {
				color: #464a4c;
				background-color: #eceeef;
				padding: .3rem;
				border-top: 1px solid #eceeef;
				text-align: left;
				font-weight: bold;
			}
			th, td {
				display: table-cell;
			}
			td {
				padding: .3rem;
				vertical-align: top;
				border-top: 1px solid #eceeef;
			}
			thead {
				display: table-header-group;
				vertical-align: middle;
			}
			table {
				width: 100%;
				max-width: 100%;
				margin-bottom: 1rem;
				display: table;
				border-spacing: 2px;
				border-color: grey;
			}
			a {
				color: #2e4468;
			}
		</style>
		<script src="https://use.fontawesome.com/1ef7eff9d5.js"></script>
	</head>
	<body>
	${body}
	</body>
</html>`;


// MAIN //

class MarkdownEditor extends Component {
	constructor( props ) {
		super( props );

		var value = props.defaultValue;	
		if ( props.id ) {
			var previous = localStorage.getItem(props.id);
			if ( previous ) {
				value = previous;
			}
		}

		this.state = {
			value: value,
			hash: {}
		};
	}

	handleAutosave = () => {
		console.log('frank');
		if ( this.props.id && this.state && this.state.value ) {
			localStorage.setItem(this.props.id, this.state.value);
		}
	}

	componentDidMount() {
		console.log('line 150');
		this.interval = setInterval( this.handleAutosave, this.props.intervalTime );
		this.simplemde = new SimpleMDE({
			element: this.simplemdeRef,
			initialValue: this.state.value,
			previewRender: this.previewRender,
			toolbar: this.createToolbar(),
			autoRefresh: true,
			forceSync: true,
			...this.props.options
		});
		console.log(this.simplemde);

		setTimeout(() => {
			this.simplemde.codemirror.refresh();
			console.log('hi philipp');
		}, 4000);

		console.log('line 158');
		// This.simplemde.codemirror.refresh();

		// Add event listeners:
		this.simplemde.codemirror.on( 'change', () => {
			console.log('line 164');
			this.setState({
				value: this.simplemde.value()
			}, () => {
				console.log('line 168');
				this.props.onChange( this.state.value );
			});
		});

		this.simplemde.codemirror.on( 'cursorActivity', () => {
			console.log('line 182');
		});

		this.simplemde.codemirror.on( 'focus', () => {
			console.log('line 186');
		});

		this.simplemde.codemirror.on( 'refresh', () => {
			console.log('line 190');
		});

		this.simplemde.codemirror.on( 'update', () => {
			console.log('line 194');
		});



		this.simplemde.codemirror.on( 'drop', ( instance, event ) => {
			event.preventDefault();
			const key = event.dataTransfer.getData( 'text/plain' );
			const html = event.dataTransfer.getData( 'text/html' );
			const coords = instance.coordsChar({
				left: event.x + window.pageXOffset,
				top: event.y + window.pageYOffset
			});
			if ( key && html ) {
				const { hash } = this.state;
				hash[ key ] = html;
				instance.replaceRange( key, coords );
				this.setState({
					hash
				});
			}
			else if ( key && !html ) {
				instance.replaceRange( key, coords );
			}
			else if ( !key && html ) {
				instance.replaceRange( html, coords );
			}
		});
	}

	componentDidUnmount() {
		clearInterval(this.interval);
	}

	replacePlaceholders( plainText ) {
		console.log('line 210');
		console.log('line 212');
		const { hash } = this.state;
		for ( let key in hash ) {
			if ( hasOwnProp( hash, key ) ) {
				plainText = replace( plainText, key, hash[ key ]);
			}
		}
		return plainText;
	}

	handleFileSelect = ( evt ) => {
		const files = evt.target.files;
		const reader = new FileReader();
		reader.onload = () => {
			let text = reader.result;
			const hash = {};
			const matches = text.match( RE_IMG );
			if ( isArray( matches ) ) {
				for ( let i = 0; i < matches.length; i++ ) {
					let replacement = `<!-- IMAGE_${generate( 3 )} -->`;
					hash[ replacement ] = matches[ i ];
					text = replace( text, matches[ i ], replacement );
				}
				this.setState({
					hash
				});
			}
			this.simplemde.codemirror.execCommand( 'selectAll' );
			this.simplemde.codemirror.replaceSelection( text );
		};
		reader.readAsText( files[ 0 ] );
	}

	createToolbar() {
		const title = document.title || 'provisoric';
		const toolbar = [
			'bold', 'italic', 'strikethrough', '|', 'heading', 'quote', 'unordered-list', 'ordered-list', 'link', '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide',
			{
				name: 'open_markdown',
				action: (editor) => {
					const input = document.createElement( 'input' );
					input.type = 'file';
					input.addEventListener( 'change', this.handleFileSelect, false );
					input.click();
				},
				className: 'fa fa-folder-open',
				title: 'Open Markdown File'
			},
			{
				name: 'save_markdown',
				action: (editor) => {
					let text = this.simplemde.value();
					text = this.replacePlaceholders( text );
					const blob = new Blob([ text ], {
						type: 'text/html'
					});
					FileSaver.saveAs( blob, title+'.md' );
				},
				className: 'fa fa-file-text',
				title: 'Save Markdown File'
			},
			{
				name: 'html',
				action: (editor) => {
					const mdValue = this.simplemde.value();
					const body = this.previewRender( mdValue );
					const html = createHTML( title, body );
					const blob = new Blob([ html ], {
						type: 'text/html'
					});
					FileSaver.saveAs( blob, title+'.html' );
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
		// Take the plaintext and insert the images via hash
		console.log('line 313');
		console.log('line 315');
		plainText = this.replacePlaceholders( plainText );
		// Now render the markdown
		return md.render( plainText );
	}

	allowDrop( event ) {
		event.preventDefault();
	}

	renderVoiceControl() {
		if ( !this.props.voiceControl ) return null;
		return (
			<VoiceInput mode="status"
				language={this.props.language}
				timeout={this.props.voiceTimeout}
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
	autoSave: true,
	defaultValue: '',
	intervalTime: 3000,
	language: 'en-US',
	onChange() {},
	options: {},
	voiceControl: false,
	voiceTimeout: 5000
};


// PROPERTY TYPES //

MarkdownEditor.propTypes = {
	autoSave: PropTypes.bool,
	defaultValue: PropTypes.string,
	intervalTime: PropTypes.number,
	language: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.object,
	voiceControl: PropTypes.bool,
	voiceTimeout: PropTypes.number
};

MarkdownEditor.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MarkdownEditor;
