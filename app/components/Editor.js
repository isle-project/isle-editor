// MODULES //

import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import ace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/github';
import 'brace/ext/searchbox';
import 'brace/ext/language_tools';
import aceSnippets from './../snippets';
import { noop } from 'lodash';


// VARIABLES //

const langTools = ace.acequire( 'ace/ext/language_tools' );

const customCompleter = {
	getCompletions( editor, session, pos, prefix, callback ) {
		if ( prefix.length === 0 ) {
			callback( null, []);
			return;
		}

		callback( null, [
			{ name: 'Tex', value: '<TeX></TeX>', score: 1, meta: 'LaTeX Equation' }
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
		this.editor.getSession().setMode( 'ace/mode/markdown' );
		this.editor.getSession().setUseWrapMode( true );
		this.editor.setTheme( 'ace/theme/github' );
		this.editor.setFontSize( 14 );
		this.editor.on( 'change', this.onChange );
		this.editor.setValue( this.props.value, -1 );

		this.editor.setOptions({
			maxLines: 99999,
			minLines: 50,
			enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: false,
			highlightActiveLine: true
		});

		this.editor.setShowPrintMargin( false );
		this.editor.focus();

		aceSnippets( ace, this.editor );
		this.interval = setInterval( () => this.editor.resize(), 100 );
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
