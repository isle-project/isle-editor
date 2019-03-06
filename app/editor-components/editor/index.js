// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { resolve, join } from 'path';
import { ContextMenuTrigger } from 'react-contextmenu';
import logger from 'debug';
import MonacoEditor from 'react-monaco-editor';
import noop from '@stdlib/utils/noop';
import objectKeys from '@stdlib/utils/keys';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import startsWith from '@stdlib/string/starts-with';
import replace from '@stdlib/string/replace';
import readFile from '@stdlib/fs/read-file';
import Loadable from 'components/loadable';
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
	tabCompletion: 'on',
	wordWrap: 'on',
	snippetSuggestions: 'top',
	suggestOnTriggerCharacters: true,
	quickSuggestions: true,
	quickSuggestionsDelay: 500,
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

		this.checkRequires( this.props.preamble );

		this._attributeProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ ' ', '\n' ],
			provideCompletionItems: provideAttributeFactory( this.monaco )
		});
		this._snippetProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ '<' ],
			provideCompletionItems: provideSnippetFactory( this.monaco )
		});
		this._preambleProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ '\n', ' ' ],
			provideCompletionItems: providePreambleFactory( this.monaco )
		});
		this._requireProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
			triggerCharacters: [ '(' ],
			provideCompletionItems: provideRequireFactory( this.monaco )
		});
	}

	componentDidUpdate( prevProps ) {
		if ( !this.monaco ) {
			return;
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
			this.monaco.editor.setModelMarkers( model, 'test', errs );
		}
		else if ( this.props.preamble !== prevProps.preamble ) {
			this.checkRequires( this.props.preamble );
		}
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.updateDimensions );
		this._attributeProvider.dispose();
		this._snippetProvider.dispose();
		this._preambleProvider.dispose();
		this._requireProvider.dispose();
	}

	checkRequires = ( preamble ) => {
		const requires = preamble.require;
			const names = objectKeys( requires );
			for ( let i = 0; i < names.length; i++ ) {
				const name = names[ i ];
				let path = requires[ name ];
				if ( isString( path ) && startsWith( path, '@stdlib' ) ) {
					path = replace( path, '@stdlib', '@stdlib/stdlib/lib/node_modules/@stdlib' );
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
		this.editor.layout();
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
		if ( !customClick ) {
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

	onEditorMount = ( editor, monaco ) => {
		this.editor = editor;
		this.monaco = monaco;
	}

	render() {
		MONACO_OPTIONS.fontSize = this.props.fontSize;
		return (
			<div>
				<ContextMenuTrigger id="editorWindow" holdToDisplay={-1} style={{ height: '100%', width: '100%' }} >
					<MonacoEditor
						height={window.innerHeight - 90}
						width={window.innerWidth - this.props.splitPos}
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
	fontSize: 14,
	onChange: noop,
	value: ''
};

Editor.propTypes = {
	fontSize: PropTypes.number,
	onChange: PropTypes.func,
	preamble: PropTypes.object.isRequired,
	value: PropTypes.string,
	lintErrors: PropTypes.array.isRequired,
	splitPos: PropTypes.number.isRequired
};


// EXPORTS //

export default Editor;
