// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'simplemde';
import replace from '@stdlib/string/replace';
import hasOwnProp from '@stdlib/assert/has-own-property';
import markdownIt from 'markdown-it';


// VARIABLES //

const md = markdownIt({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});


// MAIN //

class MarkdownEditor extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: props.defaultValue,
			hash: {}
		};

		this.previewRender = ( plainText ) => {
			const { hash } = this.state;
			for ( let key in hash ) {
				if ( hasOwnProp( hash, key ) ) {
					plainText = replace( plainText, key, hash[ key ]);
				}
			}
			return md.render( plainText );
		};
	}

	componentDidMount() {
		this.simplemde = new SimpleMDE({
			element: this.simplemdeRef,
			initialValue: this.props.defaultValue,
			previewRender: this.previewRender,
			toolbar: [
				'bold', 'italic', 'strikethrough', '|', 'heading', 'quote', 'unordered-list', 'ordered-list', 'link', '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide',
				{
					name: 'custom',
					action: function customFunction( editor ){
						// Add your own code
					},
					className: 'fa fa-save',
					title: 'Save HTML File'
				}
			]
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

	allowDrop( event ) {
		event.preventDefault();
	}

	render() {
		return (
			<textarea ref={( area ) => { this.simplemdeRef = area; }} autoComplete="off" {...this.props.options} />
		);
	}
}


// DEFAULT PROPERTIES //

MarkdownEditor.defaultProps = {
	defaultValue: '',
	onChange() {},
	options: {}
};


// PROPERTY TYPES //

MarkdownEditor.propTypes = {
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.object
};


// EXPORTS //

export default MarkdownEditor;
