// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { resolve, join } from 'path';
import { ContextMenuTrigger } from 'react-contextmenu';
import logger from 'debug';
import noop from '@stdlib/utils/noop';
import objectKeys from '@stdlib/utils/keys';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import startsWith from '@stdlib/string/starts-with';
import replace from '@stdlib/string/replace';
import readFile from '@stdlib/fs/read-file';
import Loadable from 'components/loadable';
import MonacoEditor from 'react-monaco-editor';
import SpellChecker from 'utils/spell-checker';
const ComponentConfigurator = Loadable( () => import( './component_configurator.js' ) );
const EditorContextMenu = Loadable( () => import( './context_menu.js' ) );
import './editor.css';


// VARIABLES //

const debug = logger( 'isle:editor' );
const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const BASE_PATH = IS_PACKAGED ? join( process.resourcesPath, 'app' ) : '.';
const RE_ANSI = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[a-zA-Z\d]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g; // eslint-disable-line no-control-regex
const RE_EMPTY_SPANS = /<span \/>/g;
const RE_EXPORT = /export = [a-z0-9]+/;
const RE_FRAGMENT = /<\/?React.Fragment>/g;
const MONACO_OPTIONS = {
	contextmenu: false,
	minimap: {
		enabled: false
	},
	lightbulb: {
		enabled: true
	},
	tabCompletion: 'on',
	wordWrap: 'on',
	snippetSuggestions: 'top',
	suggestOnTriggerCharacters: true,
	quickSuggestions: true,
	quickSuggestionsDelay: 500,
	dragAndDrop: true,
	scrollbar: {
		useShadows: true,
		verticalHasArrows: true,
		horizontalHasArrows: true,
		vertical: 'visible',
		verticalScrollbarSize: 12,
		horizontalScrollbarSize: 12,
		arrowSize: 15
	}
};


// MAIN //

class Editor extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectedComponent: {},
			showComponentConfigurator: false,
			sourceFiles: {}
		};
	}

	async componentDidMount() {
		window.addEventListener( 'resize', this.updateDimensions );

		const { default: provideAttributeFactory } = await import( './provide_attribute_factory.js' );
		const { default: providePreambleFactory } = await import( './provide_preamble_factory.js' );
		const { default: provideRequireFactory } = await import( './provide_require_factory.js' );
		const { default: provideSnippetFactory } = await import( './provide_snippet_factory.js' );
		const { default: providePreambleHoverFactory } = await import( './provide_preamble_hover_factory.js' );
		const { default: provideSnippetHoverFactory } = await import( './provide_snippet_hover_factory.js' );

		this.monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
			noSemanticValidation: true,
			noSyntaxValidation: true,
			lib: [ 'es6' ]
		});
		this.monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
			noLib: false,
			allowNonTsExtensions: true,
			jsx: 2
		});

		if ( !this.newRequires ) {
			this.newRequires = objectKeys( this.props.preamble.require );
		}
		this.checkRequires( this.newRequires, this.props.preamble );

		this._codeActionProvider = this.monaco.languages.registerCodeActionProvider( 'javascript', {
			provideCodeActions: this.provideCodeActions
		});

		this._attributeProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ ' ', '\n' ],
			provideCompletionItems: provideAttributeFactory( this.monaco )
		});
		this._snippetProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ '<' ],
			provideCompletionItems: provideSnippetFactory( this.monaco )
		});
		this._preambleProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ '\n', ' ', '\t' ],
			provideCompletionItems: providePreambleFactory( this.monaco )
		});
		this._preambleHoverProvider = this.monaco.languages.registerHoverProvider( 'javascript', {
			provideHover: providePreambleHoverFactory( this.monaco )
		});
		this._snippetHoverProvider = this.monaco.languages.registerHoverProvider( 'javascript', {
			provideHover: provideSnippetHoverFactory( this.monaco )
		});
		this._requireProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ '(' ],
			provideCompletionItems: provideRequireFactory( this.monaco )
		});

		this.editTextCommand = this.editor.addCommand( 'fix-spelling', ( _, text, p ) => {
			const range = new this.monaco.Range( p.startLineNumber, p.startColumn, p.endLineNumber, p.endColumn );
			const id = { major: 1, minor: 1 };
			const fix = {
				title: `Change to ${text}`,
				identifier: id,
				range,
				text: String( text )
			};
			this.editor.executeEdits( 'my-source', [ fix ] );
		});
	}

	shouldComponentUpdate( prevProps, prevState ) {
		if (
			this.props.filePath !== prevProps.filePath ||
			this.props.preamble.title !== prevProps.preamble.title ||
			this.props.lintErrors.length !== prevProps.lintErrors.length ||
			this.props.spellingErrors.length !== prevProps.spellingErrors.length ||
			this.props.splitPos !== prevProps.splitPos ||
			this.props.hideToolbar !== prevProps.hideToolbar ||
			this.state.showComponentConfigurator !== prevState.showComponentConfigurator ||
			this.state.selectedComponent !== prevState.selectedComponent ||
			this.state.sourceFiles !== prevState.sourceFiles
		) {
			return true;
		}
		this.newRequires = objectKeys( this.props.preamble.require );
		this.oldRequires = objectKeys( prevProps.preamble.require );
		if ( this.newRequires.length !== this.oldRequires.length ) {
			return true;
		}
		return false;
	}

	componentDidUpdate( prevProps ) {
		if ( !this.monaco ) {
			return;
		}
		if ( this.props.spellingErrors.length !== prevProps.spellingErrors.length ) {
			const errs = this.props.spellingErrors;
			const model = this.editor.getModel();
			this.monaco.editor.setModelMarkers( model, 'spelling', errs );
		}
		if ( this.props.lintErrors.length !== prevProps.lintErrors.length ) {
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
			this.monaco.editor.setModelMarkers( model, 'eslint', errs );
		}
		if ( !this.newRequires || !this.oldRequires ) {
			this.newRequires = objectKeys( this.props.preamble.require );
			this.checkRequires( this.newRequires, this.props.preamble );
		}
		else if ( this.newRequires.length === this.oldRequires.length ) {
			this.checkRequires( this.newRequires, this.props.preamble );
		}
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.updateDimensions );
		this._codeActionProvider.dispose();
		this._attributeProvider.dispose();
		this._snippetProvider.dispose();
		this._preambleProvider.dispose();
		this._requireProvider.dispose();
		this._preambleHoverProvider.dispose();
		this._snippetHoverProvider.dispose();
	}

	provideCodeActions = ( textModel, range, context ) => {
		const out = [];
		context.markers
			.filter( marker => marker.owner === 'spelling' )
			.forEach( problem => {
				const suggestions = SpellChecker.typo.suggest( problem.code );
				for ( let i = 0; i < suggestions.length; i++ ) {
					const text = suggestions[ i ];
					out.push({
						command: {
							id: this.editTextCommand,
							title: 'Fix the spelling',
							arguments: [ text, problem ]
						},
						title: `Change to ${text}`
					});
				}
			});
		return out;
	}

	checkRequires = ( names, preamble ) => {
		for ( let i = 0; i < names.length; i++ ) {
			const name = names[ i ];
			let path = preamble.require[ name ];
			if ( isString( path ) && startsWith( path, '@stdlib' ) ) {
				path = resolve( join( BASE_PATH, 'node_modules' ), path, 'docs', 'types', 'index.d.ts' );
				this.readTypeDefinition( path );
			}
		}
	}

	readTypeDefinition = ( path ) => {
		if ( this.state.sourceFiles[ path ] ) {
			return;
		}
		readFile( path, {
			'encoding': 'utf8'
		}, ( err, res ) => {
			if ( err ) {
				return debug( err );
			}
			debug( 'Successfully read type definition...' );
			res = replace( res, RE_EXPORT, '' );
			const disposable = this.monaco.languages.typescript.javascriptDefaults.addExtraLib( res, path );
			const sourceFiles = this.state.sourceFiles;
			sourceFiles[ path ] = disposable;
			this.setState({
				sourceFiles
			});
		});
	}

	updateDimensions = () => {
		this.editor.layout({
			width: window.innerWidth * ( 1.0 - this.props.splitPos ),
			height: window.innerHeight - ( this.props.hideToolbar ? 2 : 90 )
		});
	}

	handleChange = ( newValue ) => {
		this.props.onChange( newValue );
	}

	toggleComponentConfigurator = ( data ) => {
		this.setState({
			selectedComponent: data,
			showComponentConfigurator: !this.state.showComponentConfigurator
		});
	}

	handleContextMenuClick = ( customClick, data ) => {
		debug( 'Handle click to open context menu... ' );
		if ( !customClick ) {
			debug( 'Insert snippet into editor...' );
			const controller = this.editor.getContribution( 'snippetController2' );
			controller.insert( data.value );
			this.editor.focus();
		} else {
			debug( 'Open component configuration modal window...' );
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

	onEditorMount = ( editor, monaco ) => {
		this.editor = editor;
		this.monaco = monaco;
	}

	render() {
		MONACO_OPTIONS.fontSize = this.props.fontSize;
		debug( 'Re-rendering monaco editor...' );
		return (
			<div>
				<ContextMenuTrigger id="editor-context-menu" holdToDisplay={-1} style={{ height: '100%', width: '100%' }} >
					<MonacoEditor
						height={window.innerHeight - ( this.props.hideToolbar ? 2 : 90 )}
						width={window.innerWidth * ( 1.0 - this.props.splitPos )}
						language="javascript"
						value={this.props.value}
						options={MONACO_OPTIONS}
						onChange={this.handleChange}
						editorDidMount={this.onEditorMount}
					/>
				</ContextMenuTrigger>
				<EditorContextMenu
					onContextMenuClick={this.handleContextMenuClick}
				/>
				{ this.state.showComponentConfigurator ? <ComponentConfigurator
					show={this.state.showComponentConfigurator}
					onHide={this.toggleComponentConfigurator}
					onInsert={this.handleComponentInsertion}
					component={this.state.selectedComponent}
				/> : null }
			</div>
		);
	}
}


// PROPERTIES //

Editor.defaultProps = {
	filePath: '',
	fontSize: 14,
	onChange: noop,
	value: ''
};

Editor.propTypes = {
	filePath: PropTypes.string,
	fontSize: PropTypes.number,
	onChange: PropTypes.func,
	preamble: PropTypes.object.isRequired,
	value: PropTypes.string,
	lintErrors: PropTypes.array.isRequired,
	spellingErrors: PropTypes.array.isRequired,
	splitPos: PropTypes.number.isRequired,
	hideToolbar: PropTypes.bool.isRequired
};


// EXPORTS //

export default Editor;
