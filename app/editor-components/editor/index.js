// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ace from '@planeshifter/brace';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from 'react-contextmenu';
import '@planeshifter/brace/mode/html';
import '@planeshifter/brace/theme/github';
import '@planeshifter/brace/ext/searchbox';
import '@planeshifter/brace/ext/language_tools';
import noop from '@stdlib/utils/noop';
import groupBy from '@stdlib/utils/group-by';
import contains from '@stdlib/assert/contains';
import aceSnippets, { snippetText } from 'snippets';
import ComponentConfigurator from './component_configurator.js';
import COMPONENTS from './components.json';
import extractSnippets from './extract_snippets.js';
import './editor.css';


// CONSTANTS //

const NO_ATTRIBUTE_WARNING_REGEXP = /Unexpected character in unquoted attribute/;
const NO_DOCTYPE_REGEXP = /doctype first\. Expected/;


// VARIABLES //

const langTools = ace.acequire( 'ace/ext/language_tools' );
const snippets = groupBy( extractSnippets( snippetText ), groupIndicator );

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


// FUNCTIONS //

function groupIndicator( v ) {
	if ( contains( COMPONENTS.R, v.name ) ) {
		return 'rComponents';
	}
	if ( contains( COMPONENTS.LEARNING, v.name ) ) {
		return 'learning';
	}
	if ( contains( COMPONENTS.SURVEY, v.name ) ) {
		return 'surveys';
	}
	if ( contains( COMPONENTS.INPUT, v.name ) ) {
		return 'inputs';
	}
	if ( contains( COMPONENTS.QUESTION, v.name ) ) {
		return 'questions';
	}
	if ( contains( COMPONENTS.DISPLAY, v.name ) ) {
		return 'displayComponents';
	}
	if ( contains( COMPONENTS.MAIN, v.name ) ) {
		return 'main';
	}
	return 'general';
}


// MAIN //

class Editor extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectedComponent: null,
			showComponentConfigurator: false
		};

		this.onChange = () => {
			this.props.onChange( this.editor.getValue() );
		};
	}

	componentDidMount() {
		langTools.addCompleter( customCompleter );

		this.editor = ace.edit( this.editorWindow );
		global.editor = this.editor;
		this.editor.$blockScrolling = Infinity;

		const session = this.editor.getSession();
		session.setMode( 'ace/mode/html' );
		session.setUseWrapMode( true );
		this.editor.setTheme( 'ace/theme/github' );

		const currentFontSize = parseFloat( localStorage.getItem( 'fontSize' ) ) || 14;
		this.editor.setFontSize( currentFontSize );

		// Add event listener:
		this.editor.on( 'change', this.onChange );

		this.editor.setValue( this.props.value, this.props.cursorStart );

		this.editor.setOptions({
			maxLines: 5000,
			minLines: 50,
			enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: true,
			highlightActiveLine: true
		});

		this.editor.setShowPrintMargin( false );
		this.editor.setAutoScrollEditorIntoView( true );
		this.editor.focus();

		this.snippetManager = aceSnippets( ace, this.editor );
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
	}

	componentDidUpdate() {
		if ( this.editor && this.editor.getValue() !== this.props.value ) {
			const pos = this.editor.getCursorPosition();
			this.editor.setValue( this.props.value, this.props.cursorStart );
			this.editor.moveCursorToPosition( pos );
		}
	}

	componentWillUnmount() {
		this.editor.destroy();
		this.editor = null;
		clearInterval( this.interval );
	}

	toggleComponentConfigurator = ( name ) => {
		this.customClick = false;
		this.setState({
			selectedComponent: name,
			showComponentConfigurator: !this.state.showComponentConfigurator
		});
	}

	handleContexMenuClick = ( evt, data ) => {
		if ( !this.customClick ) {
			this.snippetManager.insertSnippetForSelection( this.editor, data.value );
			this.editor.focus();
			this.editor.tabstopManager.tabNext();
		} else {
			this.toggleComponentConfigurator( data.name );
		}
	}

	handleComponentInsertion = ( text ) => {
		this.setState({
			selectedComponent: null,
			showComponentConfigurator: !this.state.showComponentConfigurator
		}, () => {
			this.editor.insert( String( text ) );
		});
	}

	handleCustomInsertClick = ( evt, data ) => {
		this.customClick = true;
		// Propagate to `handleContexMenuClick`...
	}

	renderMenuItem = ( obj, idx ) => {
		return ( <MenuItem
			key={idx}
			data={obj}
			onClick={this.handleContexMenuClick}
		>
			{obj.name}
			<Glyphicon
				style={{ float: 'right' }}
				glyph="cog"
				onClick={this.handleCustomInsertClick}
			/>
		</MenuItem>
		);
	}

	render() {
		return (
			<div>
				<ContextMenuTrigger id="editorWindow">
					<div
						ref={( div ) => {
							this.editorWindow = div;
						}}
						onChange={this.onChange}
						style={{
							'height': '100%',
							'width': '100%',
							'zIndex': 100
						}}
					/>
				</ContextMenuTrigger>
				<ContextMenu id="editorWindow">
					{snippets.main.map( this.renderMenuItem )}
					<SubMenu title="Display">
						{snippets.displayComponents.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Inputs">
						{snippets.inputs.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Questions">
						{snippets.questions.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Surveys">
						{snippets.surveys.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="R Components">
						{snippets.rComponents.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Learning Components">
						{snippets.learning.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="General">
						{snippets.general.map( this.renderMenuItem )}
					</SubMenu>
				</ContextMenu>
				<ComponentConfigurator
					show={this.state.showComponentConfigurator}
					onHide={this.toggleComponentConfigurator}
					onInsert={this.handleComponentInsertion}
					name={this.state.selectedComponent}
					scope={this.props.scope}
				/>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

Editor.defaultProps = {
	onChange: noop,
	scope: {},
	value: '',
	cursorStart: 1
};


// PROPERTY TYPES //

Editor.propTypes = {
	cursorStart: PropTypes.number,
	onChange: PropTypes.func,
	scope: PropTypes.object,
	value: PropTypes.string
};


// EXPORTS //

export default Editor;
