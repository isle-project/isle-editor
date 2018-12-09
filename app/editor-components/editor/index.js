// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonacoEditor from 'react-monaco-editor';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from 'react-contextmenu';
import noop from '@stdlib/utils/noop';
import groupBy from '@stdlib/utils/group-by';
import contains from '@stdlib/assert/contains';
import trim from '@stdlib/string/trim';
import AnimationHelp from 'editor-components/animation-help';
import allSnippets from 'snippets';
import ComponentConfigurator from './component_configurator.js';
import COMPONENTS from './components.json';
import provideCompletionItemsFactory from './provide_attribute_factory.js';
import './editor.css';


// VARIABLES //

const RE_ANSI = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[a-zA-Z\d]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g; // eslint-disable-line no-control-regex
const RE_EMPTY_SPANS = /<span \/>/g;
const RE_FRAGMENT = /<\/?React.Fragment>/g;
const snippets = groupBy( allSnippets, groupIndicator );


// FUNCTIONS //

function groupIndicator( v ) {
	v.name = trim( v.name );
	if ( contains( COMPONENTS.R, v.name ) ) {
		return 'rComponents';
	}
	if ( contains( COMPONENTS.PRESENTATION, v.name ) ) {
		return 'presentation';
	}
	if ( contains( COMPONENTS.PLOTS, v.name ) ) {
		return 'plots';
	}
	if ( contains( COMPONENTS.VICTORY, v.name ) ) {
		return 'victory';
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
			selectedComponent: {},
			showComponentConfigurator: false
		};
	}

	componentDidMount() {
		window.addEventListener( 'resize', this.updateDimensions );

		this.monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
			noSemanticValidation: true,
			noSyntaxValidation: true
		});
		this.monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
			noLib: false,
			allowNonTsExtensions: true,
			jsx: 2
		});

		this._completionProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ '<' ],
			provideCompletionItems: provideCompletionItemsFactory( this.monaco )
		});
	}

	componentDidUpdate( prevProps ) {
		if (
			this.monaco &&
			this.props.lintErrors.length !== prevProps.lintErrors.length
		) {
			const errs = this.props.lintErrors.map( e => {
				let bare = e.message.replace( RE_ANSI, '' );
				bare = bare.replace( RE_EMPTY_SPANS, '' );
				bare = bare.replace( RE_FRAGMENT, '' );
				return {
					startLineNumber: e.line - 1,
					startColumn: 1,
					endLineNumber: e.line - 1,
					endColumn: e.column,
					message: bare,
					severity: e.severity
				};
			});
			const model = this.editor.getModel();
			this.monaco.editor.setModelMarkers( model, 'test', errs );
		}
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.updateDimensions );
		this._completionProvider.dispose();
	}

	updateDimensions = () => {
		this.editor.layout();
	}

	handleChange = ( newValue ) => {
		this.props.onChange( newValue );
	}

	toggleComponentConfigurator = ( data ) => {
		this.customClick = false;
		this.setState({
			selectedComponent: data,
			showComponentConfigurator: !this.state.showComponentConfigurator
		});
	}


	toggleAnimationHelp = () => {
		this.setState({
			showAnimationHelp: !this.state.showAnimationHelp
		});
	}

	handleContextMenuClick = ( evt, data ) => {
		if ( !this.customClick ) {
			const controller = this.editor.getContribution( 'snippetController2' );
			controller.insert( data.value );
			this.editor.focus();
		} else {
			this.toggleComponentConfigurator( data );
		}
	}

	handleComponentInsertion = ( text ) => {
		this.setState({
			selectedComponent: {},
			showComponentConfigurator: !this.state.showComponentConfigurator
		}, () => {
			const selection = this.editor.getSelection();
			const range = new this.monaco.Range( selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn );
			const id = { major: 1, minor: 1 };
			const op = {
				identifier: id,
				range: range,
				text: String( text ),
				forceMoveMarkers: true
			};
			this.editor.executeEdits( 'my-source', [ op ] );
		});
	}

	handleCustomInsertClick = ( evt, data ) => {
		this.customClick = true;
		// Propagate to `handleContextMenuClick`...
	}

	renderMenuItem = ( obj, idx ) => {
		return ( <MenuItem
			key={idx}
			data={obj}
			onClick={this.handleContextMenuClick}
		>
			{obj.name}
			<div
				className="fa fa-cogs"
				style={{
					float: 'right'
				}}
				onClick={this.handleCustomInsertClick}
			/>
		</MenuItem>
		);
	}

	render() {
		const currentFontSize = parseFloat( localStorage.getItem( 'fontSize' ) ) || 14;
		return (
			<div>
				<ContextMenuTrigger id="editorWindow" holdToDisplay={-1} style={{ height: '100%', width: '100%' }} >
					<MonacoEditor
						height={window.innerHeight - 90}
						width={window.innerWidth - this.props.splitPos}
						language="javascript"
						defaultValue={this.props.value}
						options={{
							fontSize: currentFontSize,
							contextmenu: false,
							minimap: {
								enabled: false
							},
							tabCompletion: 'on',
							wordWrap: 'on',
							snippetSuggestions: 'top',
							scrollbar: {
								useShadows: true,
								verticalHasArrows: true,
								horizontalHasArrows: true,
								vertical: 'visible',
								verticalScrollbarSize: 12,
								horizontalScrollbarSize: 12,
								arrowSize: 15
							}
						}}
						onChange={this.handleChange}
						editorDidMount={( editor, monaco ) => {
							this.editor = editor;
							this.monaco = monaco;
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
					<SubMenu title="Presentation">
						{snippets.presentation.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Plots">
						{snippets.plots.map( this.renderMenuItem )}
						<SubMenu title="Victory Charts">
							{snippets.victory.map( this.renderMenuItem )}
						</SubMenu>
					</SubMenu>
					<MenuItem onClick={this.toggleAnimationHelp}>Animation Help
					</MenuItem>
				</ContextMenu>
				<ComponentConfigurator
					show={this.state.showComponentConfigurator}
					onHide={this.toggleComponentConfigurator}
					onInsert={this.handleComponentInsertion}
					component={this.state.selectedComponent}
				/>
				{ this.state.showAnimationHelp ? <AnimationHelp onHide={this.toggleAnimationHelp} /> : null }
			</div>
		);
	}
}


// PROPERTIES //

Editor.defaultProps = {
	onChange: noop,
	value: '',
	cursorStart: 1
};

Editor.propTypes = {
	cursorStart: PropTypes.number,
	onChange: PropTypes.func,
	value: PropTypes.string,
	lintErrors: PropTypes.array.isRequired,
	splitPos: PropTypes.number.isRequired
};


// EXPORTS //

export default Editor;
