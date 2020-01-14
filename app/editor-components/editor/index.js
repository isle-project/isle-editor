// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { basename, dirname, relative, resolve, join, extname } from 'path';
import { copyFileSync, mkdirSync, createWriteStream, writeFileSync } from 'fs';
import https from 'https';
import http from 'http';
import url from 'url';
import { text } from 'd3';
import { ContextMenuTrigger } from 'react-contextmenu';
import logger from 'debug';
import contains from '@stdlib/assert/contains';
import isURI from '@stdlib/assert/is-uri';
import isRelativePath from '@stdlib/assert/is-relative-path';
import exists from '@stdlib/fs/exists';
import noop from '@stdlib/utils/noop';
import objectKeys from '@stdlib/utils/keys';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isObject from '@stdlib/assert/is-plain-object';
import startsWith from '@stdlib/string/starts-with';
import endsWith from '@stdlib/string/ends-with';
import replace from '@stdlib/string/replace';
import readFile from '@stdlib/fs/read-file';
import readJSON from '@stdlib/fs/read-json';
import Loadable from 'components/loadable';
import { ipcRenderer } from 'electron';
import MonacoEditor from 'react-monaco-editor';
import SpellChecker from 'utils/spell-checker';
import today from 'utils/today';
import VIDEO_EXTENSIONS from './video_extensions.json';
import IMAGE_EXTENSIONS from './image_extensions.json';
import MonacoDragNDropProvider from './monaco_drag_provider.js';
const ComponentConfigurator = Loadable( () => import( './component_configurator.js' ) );
const EditorContextMenu = Loadable( () => import( './context_menu.js' ) );
import './editor.css';


// VARIABLES //

const debug = logger( 'isle:editor' );
const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const BASE_PATH = IS_PACKAGED ? join( process.resourcesPath, 'app' ) : '.';
const RE_ANSI = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[a-zA-Z\d]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g; // eslint-disable-line no-control-regex
const RE_DATE = /date: ([^\n]+)/;
const RE_EMPTY_SPANS = /<span \/>/g;
const RE_EXPORT = /export = [a-z0-9]+/;
const RE_FRAGMENT = /<\/?React.Fragment>/g;
const RE_IMG_SRC = /src="([^"]+)"/;
const RE_INCLUDE = /<!-- #include "([^"]+)"/;
const RE_RELATIVE_FILE = /\.\.?\/[^\n"?:*<>|]+\.[a-z0-9]+/gi;
const NUM_WRAPPER_LINES = 9;
const RE_STATUSBAR = /<StatusBar[^\n]+\n/;
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
const mapErrors = e => {
	let bare = e.message.replace( RE_ANSI, '' );
	bare = bare.replace( RE_STATUSBAR, '\n' );
	bare = bare.replace( '</Lesson>', '' );
	bare = bare.replace( RE_EMPTY_SPANS, '' );
	bare = bare.replace( RE_FRAGMENT, '' );
	bare = bare.replace( '&lt;', '<' );
	bare = bare.replace( '&gt;', '>' );
	return {
		startLineNumber: e.line - NUM_WRAPPER_LINES,
		startColumn: 1,
		endLineNumber: e.line - NUM_WRAPPER_LINES,
		endColumn: e.column,
		message: bare,
		severity: e.severity
	};
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
			noSuggestionDiagnostics: true,
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

		this.changeToRemote = this.editor.addCommand( 'change-to-remote', ( _, resURL, entry, p ) => {
			const range = new this.monaco.Range( p.startLineNumber, p.startColumn, p.endLineNumber, p.endColumn );
			const id = { major: 1, minor: 1 };
			const fix = {
				title: 'Change to remote',
				identifier: id,
				range,
				text: entry.origin
			};
			this.editor.executeEdits( 'my-source', [ fix ] );
		});

		this.changeToCurrentDate = this.editor.addCommand( 'change-to-current-date', ( _, p ) => {
			const range = new this.monaco.Range( p.startLineNumber, p.startColumn, p.endLineNumber, p.endColumn );
			const id = { major: 1, minor: 1 };
			const fix = {
				title: 'Change to current date',
				identifier: id,
				range,
				text: `date: ${today()}`
			};
			this.editor.executeEdits( 'my-source', [ fix ] );
		});

		this.copyToLocal = this.editor.addCommand( 'copy-to-local', ( _, resURL, type, ext, p ) => {
			const destDir = dirname( this.props.filePath );
			const fileName = basename( this.props.filePath, '.isle' );
			const isleDir = join( destDir, `${fileName}-resources` );
			let subdir = type;
			const resDir = join( isleDir, subdir );
			if ( !exists.sync( isleDir ) ) {
				mkdirSync( isleDir );
				mkdirSync( join( isleDir, 'img' ) );
				mkdirSync( join( isleDir, 'video' ) );
				mkdirSync( join( isleDir, 'include' ) );
			}
			const manifestPath = join( isleDir, 'manifest.json' );
			let manifest = readJSON.sync( manifestPath );
			if ( manifest instanceof Error ) {
				manifest = {
					resources: {}
				};
			}
			const { href, pathname, search } = url.parse( resURL );
			const name = decodeURIComponent( basename( pathname ) );
			const destFilePath = join( resDir, name );
			if ( !manifest.resources ) {
				manifest.resources = {};
			}
			manifest.resources[ name ] = {
				lastAccessed: new Date().toLocaleString(),
				origin: resURL
			};
			writeFileSync( manifestPath, JSON.stringify( manifest, null, 2 ) );
			const file = createWriteStream( destFilePath );
			const get = startsWith( resURL, 'https' ) ? https.get : http.get;
			get( href, ( response ) => {
				response.pipe( file );
				file.on( 'finish', ( err ) => {
					if ( err ) {
						return debug( err );
					}
					const range = new this.monaco.Range( p.startLineNumber, p.startColumn, p.endLineNumber, p.endColumn );
					const id = { major: 1, minor: 1 };
					const fix = {
						title: 'Copy to local',
						identifier: id,
						range,
						text: './' + relative( destDir, destFilePath ) + ( search || '' )
					};
					this.editor.executeEdits( 'my-source', [ fix ] );
					file.close();
				});
			});
		});

		this.copyIncludeToLocal = this.editor.addCommand( 'copy-include-to-local', ( _, url, p ) => {
			const range = new this.monaco.Range( p.startLineNumber, p.startColumn, p.endLineNumber, p.endColumn );
			const id = { major: 1, minor: 1 };
			const destDir = dirname( this.props.filePath );
			const fileName = basename( this.props.filePath, '.isle' );
			const isleDir = join( destDir, `${fileName}-resources` );

			const manifestPath = join( isleDir, 'manifest.json' );
			let manifest = readJSON.sync( manifestPath );
			if ( manifest instanceof Error ) {
				manifest = {
					include: {}
				};
			}
			const includeName = basename( url );
			const includePath = join( isleDir, 'include' );
			const outPath = join( includePath, `${includeName}.isle` );
			const localPath = './' + relative( destDir, outPath );
			manifest.include[ localPath ] = {
				lastAccessed: new Date().toLocaleString(),
				origin: url
			};
			if ( !exists.sync( isleDir ) ) {
				mkdirSync( isleDir );
				mkdirSync( join( isleDir, 'img' ) );
				mkdirSync( join( isleDir, 'video' ) );
				mkdirSync( includePath );
			}
			const includeResources = join( includePath, `${includeName}-resources` );
			if ( !exists.sync( includeResources ) ) {
				mkdirSync( includeResources );
				mkdirSync( join( includeResources, 'img' ) );
				mkdirSync( join( includeResources, 'video' ) );
			}
			writeFileSync( manifestPath, JSON.stringify( manifest, null, 2 ) );
			if ( !endsWith( url, '.isle' ) ) {
				url += '/index.isle';
			}
			text( url ).then( res => {
				const files = res.match( RE_RELATIVE_FILE );
				let done = 0;
				files.forEach( ( match ) => {
					// Replace path:
					res = replace( res, match, join( includePath, match ) );

					// Download all remote resources to disk:
					const remotePath = join( dirname( url ), match );
					const destFilePath = join( includePath, match );
					const file = createWriteStream( destFilePath );
					const get = startsWith( url, 'https' ) ? https.get : http.get;
					const handleResponse = ( response ) => {
						response.pipe( file );
						const onDone = ( err ) => {
							done += 1;
							if ( done === files.length ) {
								writeFileSync( outPath, res );
								const fix = {
									title: 'Copy to local',
									identifier: id,
									range,
									text: localPath
								};
								this.editor.executeEdits( 'my-source', [ fix ] );
							}
							if ( err ) {
								return debug( err );
							}
							file.close();
						};
						file.on( 'finish', onDone );
					};
					get( remotePath, handleResponse );
				});
			});
		});

		this.openISLEFile = this.editor.addCommand( 'open-file', ( _, lessonURL, p ) => {
			ipcRenderer.send( 'open-file', {
				path: lessonURL
			});
		});

		const errs = this.props.lintErrors.map( mapErrors );
		const model = this.editor.getModel();
		this.monaco.editor.setModelMarkers( model, 'eslint', errs );
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
			const errs = this.props.lintErrors.map( mapErrors );
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
		if ( this._codeActionProvider ) {
			this._codeActionProvider.dispose();
		}
		if ( this._attributeProvider ) {
			this._attributeProvider.dispose();
		}
		if ( this._snippetProvider ) {
			this._snippetProvider.dispose();
		}
		if ( this._preambleProvider ) {
			this._preambleProvider.dispose();
		}
		if ( this._requireProvider ) {
			this._requireProvider.dispose();
		}
		if ( this._preambleHoverProvider ) {
			this._preambleHoverProvider.dispose();
		}
		if ( this._snippetHoverProvider ) {
			this._snippetHoverProvider.dispose();
		}
	}

	provideCodeActions = ( textModel, range, context ) => {
		const actions = [];
		context.markers
			.filter( marker => marker.owner === 'spelling' )
			.forEach( problem => {
				const suggestions = SpellChecker.typo.suggest( problem.code );
				for ( let i = 0; i < suggestions.length; i++ ) {
					const text = suggestions[ i ];
					actions.push({
						command: {
							id: this.editTextCommand,
							title: 'Fix the spelling',
							arguments: [ text, problem ]
						},
						title: `Change to ${text}`
					});
				}
			});
		const selection = this.editor.getSelection();
		const model = this.editor.getModel();
		if ( model ) {
			const line = model.getLineContent( selection.startLineNumber );
			if ( startsWith( line, 'date: ' ) ) {
				const { range } = model.findNextMatch( RE_DATE, 0, true, true, null, false );
				actions.push({
					command: {
						id: this.changeToCurrentDate,
						title: 'Change to current date',
						arguments: [ range ]
					},
					title: 'Change to current date'
				});
			}
			const selectedText = model.getValueInRange( selection );
			if ( isURI( selectedText ) ) {
				const ext = extname( url.parse( selectedText ).pathname );
				if ( contains( IMAGE_EXTENSIONS, ext ) ) {
					actions.push({
						command: {
							id: this.copyToLocal,
							title: 'Copy image to local location',
							arguments: [ selectedText, 'img', ext, selection ]
						},
						title: 'Copy image to local location'
					});
				} else if ( contains( VIDEO_EXTENSIONS, ext ) ) {
					actions.push({
						command: {
							id: this.copyToLocal,
							title: 'Copy video to local location',
							arguments: [ selectedText, 'video', ext, selection ]
						},
						title: 'Copy video to local location'
					});
				}
			}
			else if ( startsWith( selectedText, '<img' ) || startsWith( selectedText, '<Image' ) ) {
				const model = this.editor.getModel();
				const { matches, range } = model.findNextMatch( RE_IMG_SRC, 0, true, false, null, true );
				range.startColumn += 5; // handles leading src="
				range.endColumn -= 1; // handles trailing "
				if ( matches ) {
					const imgURL = matches[ 1 ];
					const ext = extname( url.parse( imgURL ).pathname );
					if ( contains( IMAGE_EXTENSIONS, ext ) ) {
						if ( isURI( imgURL ) ) {
							actions.push({
								command: {
									id: this.copyToLocal,
									title: 'Copy image to local location',
									arguments: [ imgURL, 'img', ext, range ]
								},
								title: 'Copy image to local location'
							});
						}
						else if ( isRelativePath( imgURL ) ) {
							const destDir = dirname( this.props.filePath );
							const fileName = basename( this.props.filePath, extname( this.props.filePath ) );
							const isleDir = join( destDir, `${fileName}-resources` );
							const manifestPath = join( isleDir, 'manifest.json' );
							const manifest = readJSON.sync( manifestPath );
							const entry = manifest.resources[ basename( imgURL ) ];
							if ( entry ) {
								actions.push({
									command: {
										id: this.changeToRemote,
										title: 'Replace local resource by remote file',
										arguments: [ imgURL, entry, range ]
									},
									title: 'Replace local resource by remote file (pinned version: '+entry.lastAccessed+')'
								});
							}
						}
					}
				}
			}
			else if ( startsWith( selectedText, '<!-- #include "' ) ) {
				const model = this.editor.getModel();
				const { matches, range } = model.findNextMatch( RE_INCLUDE, 0, true, false, null, true );
				range.startColumn += 15; // handles leading src=" <!-- #include "
				range.endColumn -= 1; // handles trailing "
				if ( matches ) {
					const lessonURL = matches[ 1 ];
					if ( isURI( lessonURL ) ) {
						actions.push({
							command: {
								id: this.copyIncludeToLocal,
								title: 'Download included lesson and all associated resources',
								arguments: [ lessonURL, range ]
							},
							title: 'Download included lesson and all associated resources'
						});
					}
					else if ( isRelativePath( lessonURL ) ) {
						const destDir = dirname( this.props.filePath );
						const fileName = basename( this.props.filePath, extname( this.props.filePath ) );
						const isleDir = join( destDir, `${fileName}-resources` );
						const manifestPath = join( isleDir, 'manifest.json' );
						const manifest = readJSON.sync( manifestPath );
						const entry = manifest.resources[ basename( lessonURL ) ];
						if ( entry ) {
							actions.push({
								command: {
									id: this.changeToRemote,
									title: 'Replace local resource by remote file',
									arguments: [ lessonURL, entry, range ]
								},
								title: 'Replace local resource by remote file (pinned version: '+entry.lastAccessed+')'
							});
						}
						actions.push({
							command: {
								id: this.openISLEFile,
								title: 'Load ISLE file in new window',
								arguments: [ lessonURL ]
							},
							title: 'Load ISLE file in new window'
						});
					}
				}
			}
		}
		return {
			actions,
			dispose(){}
		};
	}

	checkRequires = ( names, preamble ) => {
		for ( let i = 0; i < names.length; i++ ) {
			const name = names[ i ];
			if ( isObject( preamble.require ) ) {
				let path = preamble.require[ name ];
				if ( isString( path ) && startsWith( path, '@stdlib' ) ) {
					path = resolve( join( BASE_PATH, 'node_modules' ), path, 'docs', 'types', 'index.d.ts' );
					this.readTypeDefinition( path );
				}
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

	insertImgAtPos = (
		file,
		coords = [0, 0],
		placeCursor= false
	) => {
		const range = new this.monaco.Range( coords[0], coords[1], coords[0], coords[1] );
		if ( this.props.filePath ) {
			const destDir = dirname( this.props.filePath );
			const fileName = basename( this.props.filePath, extname( this.props.filePath ) );
			const { name, path } = file;
			const isleDir = join( destDir, `${fileName}-resources` );
			const imgDir = join( isleDir, 'img' );
			if ( !exists.sync( isleDir ) ) {
				mkdirSync( isleDir );
				mkdirSync( imgDir );
				mkdirSync( join( isleDir, 'video' ) );
				mkdirSync( join( isleDir, 'include' ) );
			}
			const destPath = join( imgDir, name );
			copyFileSync( path, destPath );
			const src = './' + relative( destDir, destPath );
			const text = `<Image src="${src}" alt="Enter description" width="50%" height="auto" />`;
			if ( placeCursor ) {
				const selection = new this.monaco.Selection( coords[0], coords[1], coords[0], coords[1] );
				this.editor.executeEdits( 'insert', [{ range, text, forceMoveMarkers: true }], [ selection ] );
				this.editor.focus();
			} else {
				this.editor.executeEdits( 'insert', [{ range, text, forceMoveMarkers: true }]);
			}
			this.editor.pushUndoStop();
		}
	}

	insertVideoAtPos = (
		file,
		coords = [ 0, 0 ],
		placeCursor= false
	) => {
		const range = new this.monaco.Range( coords[0], coords[1], coords[0], coords[1] );
		if ( this.props.filePath ) {
			const destDir = dirname( this.props.filePath );
			const fileName = basename( this.props.filePath, extname( this.props.filePath ) );
			const { name, path } = file;
			const isleDir = join( destDir, `${fileName}-resources` );
			const videoDir = join( isleDir, 'video' );
			if ( !exists.sync( isleDir ) ) {
				mkdirSync( isleDir );
				mkdirSync( isleDir );
				mkdirSync( videoDir );
				mkdirSync( join( isleDir, 'img' ) );
				mkdirSync( join( isleDir, 'include' ) );
			}
			const destPath = join( videoDir, name );
			copyFileSync( path, destPath );
			const src = './' + relative( destDir, destPath );
			const text = `<VideoPlayer url="${src}" />`;
			if ( placeCursor ) {
				const selection = new this.monaco.Selection(coords[0], coords[1], coords[0], coords[1]);
				this.editor.executeEdits( 'insert', [{ range, text, forceMoveMarkers: true }], [selection]);
				this.editor.focus();
			} else {
				this.editor.executeEdits( 'insert', [{ range, text, forceMoveMarkers: true }]);
			}
			this.editor.pushUndoStop();
		}
	}

	insertTextAtPos = (
		text,
		coords = [0, 0],
		placeCursor= false
	) => {
		const range = new this.monaco.Range(coords[0], coords[1], coords[0], coords[1]);
		if ( placeCursor ) {
			const selection = new this.monaco.Selection(coords[0], coords[1], coords[0], coords[1]);
			this.editor.executeEdits( 'insert', [{ range, text, forceMoveMarkers: true }], [ selection ] );
			this.editor.focus();
		} else {
			this.editor.executeEdits( 'insert', [{ range, text, forceMoveMarkers: true }] );
		}
		this.editor.pushUndoStop();
	}

	handleDrop = ( e, target ) => {
		let text = e.dataTransfer.getData( 'text' );
		if ( text ) {
			if ( isURI( text ) ) {
				if ( contains( text, this.props.preamble.server ) ) {
					text = `<!-- #include "${text}" -->`;
				} else if (
					contains( text, 'youtu' )
				) {
					text = `<VideoPlayer url="${text}" />`;
				}
				else {
					const ext = extname( url.parse( text ).pathname );
					if ( contains( IMAGE_EXTENSIONS, ext ) ) {
						text = `<Image src="${text}" alt="Enter description" width="50%" height="auto" />`;
					}
				}
			}
			this.insertTextAtPos( text, [ target.position.lineNumber, target.position.column ], true );
		}
		if ( e.dataTransfer.files ) {
			for ( let i = 0; i < e.dataTransfer.files.length; i++) {
				const file = e.dataTransfer.files[ i ];
				if ( startsWith( file.type, 'image' ) ) {
					this.insertImgAtPos( file, [ target.position.lineNumber, target.position.column ], true );
				}
				else if ( startsWith( file.type, 'video' ) ) {
					this.insertVideoAtPos( file, [ target.position.lineNumber, target.position.column ], true );
				}
			}
		}
	};

	onEditorMount = ( editor, monaco ) => {
		this.editor = editor;
		this.monaco = monaco;
	}

	render() {
		MONACO_OPTIONS.fontSize = this.props.fontSize;
		debug( 'Re-rendering monaco editor...' );

		const dragProvider = new MonacoDragNDropProvider( this.handleDrop, this.editor, this.monaco );
		return (
			<div>
				<ContextMenuTrigger id="editor-context-menu" holdToDisplay={-1} style={{ height: '100%', width: '100%' }} >
					<div {...dragProvider.props}>
						<MonacoEditor
							height={window.innerHeight - ( this.props.hideToolbar ? 2 : 90 )}
							width={window.innerWidth * ( 1.0 - this.props.splitPos )}
							language="javascript"
							value={this.props.value}
							options={MONACO_OPTIONS}
							onChange={this.handleChange}
							editorDidMount={this.onEditorMount}
						/>
					</div>
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
