// MODULES //

import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import ace from 'brace';
import 'brace/mode/isle';
import 'brace/theme/github';
import 'brace/ext/searchbox';
import 'brace/ext/language_tools';
import aceSnippets from './../snippets';
import { noop } from 'lodash';


// CONSTANTS //

const NO_ATTRIBUTE_WARNING_REGEXP = /Unexpected character in unquoted attribute/;
const NO_DOCTYPE_REGEXP = /doctype first\. Expected/;


// VARIABLES //

const langTools = ace.acequire( 'ace/ext/language_tools' );

const customCompleter = {
	getCompletions( editor, session, pos, prefix, callback ) {
		if ( prefix.length === 0 ) {
			callback( null, []);
			return;
		}

		callback( null, [
			// { name: 'Markdown', value: '<md></md>', score: 1, meta: 'Markdown' }
		]);
	}
};


// EDITOR //

const Editor = React.createClass({
	propTypes: {
		onChange: PropTypes.func,
		value: PropTypes.string
	},

	getDefaultProps() {
		return {
			onChange: noop,
			value: ''
		};
	},

	componentDidMount() {
		langTools.addCompleter( customCompleter );

		this.editor = ace.edit( ReactDom.findDOMNode( this ) );
		this.editor.$blockScrolling = Infinity;

		const session = this.editor.getSession();
		session.setMode( 'ace/mode/isle' );
		session.setUseWrapMode( true );
		this.editor.setTheme( 'ace/theme/github' );
		this.editor.setFontSize( 14 );
		this.editor.on( 'change', this.onChange );
		this.editor.setValue( this.props.value, -1 );

		this.editor.setOptions({
			maxLines: 99999,
			minLines: 50,
			enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: true,
			highlightActiveLine: true
		});

		this.editor.setShowPrintMargin( false );
		this.editor.focus();

		aceSnippets( ace, this.editor );
		this.interval = setInterval( () => this.editor.resize(), 100 );

		// Handle unwanted annotations and remove them:
		session.on( 'changeAnnotation', () => {
			const annotations = session.getAnnotations() || [];
			const len = annotations.length;
			let i = len;
			while ( i-- ) {
				if ( NO_DOCTYPE_REGEXP.test( annotations[ i ].text ) ||
					NO_ATTRIBUTE_WARNING_REGEXP.test( annotations[ i ].text )
				) {
					annotations.splice( i, 1 );
				}
			}
			if ( len > annotations.length ) {
				session.setAnnotations( annotations );
			}
		});
	},

	componentWillReceiveProps( nextProps ) {
		if ( this.editor.getValue() !== nextProps.value ) {
			this.editor.setValue( nextProps.value, -1 );
		}
	},

	componentWillUnmount() {
		this.editor.destroy();
		clearInterval( this.interval );
	},

	onChange() {
		this.props.onChange( this.editor.getValue() );
	},

	render() {
		return (
			<div onChange={this.onChange} />
		);
	}
});


// EXPORTS //

export default Editor;
