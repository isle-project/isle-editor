/* eslint-disable max-lines, max-nested-callbacks */

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EOL } from 'os';
import { ipcRenderer } from 'electron';
import axios from 'axios';
import { basename, dirname, relative, resolve, join, extname } from 'path';
import { copyFileSync, createWriteStream, writeFileSync } from 'fs';
import { spawn } from 'child_process';
import https from 'https';
import http from 'http';
import url from 'url';
import markdownit from 'markdown-it';
import vex from 'vex-js';
import { ContextMenuTrigger } from 'react-contextmenu';
import logger from 'debug';
import contains from '@stdlib/assert/contains';
import isURI from '@stdlib/assert/is-uri';
import isRelativePath from '@stdlib/assert/is-relative-path';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import exists from '@stdlib/fs/exists';
import noop from '@stdlib/utils/noop';
import objectKeys from '@stdlib/utils/keys';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isObject from '@stdlib/assert/is-plain-object';
import startsWith from '@stdlib/string/starts-with';
import endsWith from '@stdlib/string/ends-with';
import lowercase from '@stdlib/string/lowercase';
import replace from '@stdlib/string/replace';
import readFile from '@stdlib/fs/read-file';
import max from '@stdlib/math/base/special/max';
import readJSON from '@stdlib/fs/read-json';
import Loadable from 'components/internal/loadable';
import MonacoEditor from 'react-monaco-editor';
import createResourcesDirectoryIfNeeded from 'utils/create-resources-directory-if-needed';
import SpellChecker from 'utils/spell-checker';
import today from 'utils/today';
import formatError from 'utils/format-error';
import VIDEO_EXTENSIONS from './video_extensions.json';
import IMAGE_EXTENSIONS from './image_extensions.json';
import MonacoDragNDropProvider from './monaco_drag_provider.js';
const EditorContextMenu = Loadable( () => import( 'editor-components/components-contextmenu' ) );
import loadRequires from '../preview/load_requires.js';
import scrollIntoView from './scroll_into_view.js';
import './editor.css';


// VARIABLES //

const debug = logger( 'isle:editor' );
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.disable( 'code' );
const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const BASE_PATH = IS_PACKAGED ? join( process.resourcesPath, 'app' ) : '.';
const RE_DATE = /date: ([^\n]+)/;
const RE_AUTHOR = /author: ([^\n]+)/;
const RE_EXPORT = /export = [a-z0-9]+/;
const RE_IMG_SRC = /src="([^"]+)"/;
const RE_INCLUDE = /<!-- #include "([^"]+)"/;
const RE_RELATIVE_FILE = /\.\.?\/[^\n"?:*<>|]+\.[a-z0-9]+/gi;
const NUM_WRAPPER_LINES = 8;
const RE_TAG_START = /^(?:\s*|\s*['"]?[\da-z]+['"]?:\s*)<([a-z]+[0-9]*)/i;
const MONACO_OPTIONS = {
	contextmenu: false,
	glyphMargin: true,
	lineNumbersMinChars: 3,
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
	folding: true,
	foldingHighlight: true,
	foldingStrategy: 'auto',
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
	return {
		startLineNumber: e.line - NUM_WRAPPER_LINES,
		startColumn: 1,
		endLineNumber: e.line - NUM_WRAPPER_LINES,
		endColumn: e.column,
		message: formatError( e.message ),
		severity: e.severity
	};
};
const ISLE_SERVER = localStorage.getItem( 'server' );
const ISLE_SERVER_TOKEN = localStorage.getItem( 'token' );
let overlayInstallWidget = null;


// MAIN //

class Editor extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			sourceFiles: {}
		};
		this.decorations = [];
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

		if ( !this._codeActionProvider ) {
			this._codeActionProvider = this.monaco.languages.registerCodeActionProvider( 'javascript', {
				provideCodeActions: this.provideCodeActions
			});
		}
		if ( !this._attributeProvider ) {
			this._attributeProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
				triggerCharacters: [ ' ', '\n' ],
				provideCompletionItems: provideAttributeFactory( this.monaco )
			});
		}
		if ( !this._snippetProvider ) {
			this._snippetProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
				triggerCharacters: [ '<' ],
				provideCompletionItems: provideSnippetFactory( this.monaco )
			});
		}
		if ( !this._preambleProvider ) {
			this._preambleProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
				triggerCharacters: [ '\n', ' ', '\t' ],
				provideCompletionItems: providePreambleFactory( this.monaco )
			});
		}
		if ( !this._preambleHoverProvider ) {
			this._preambleHoverProvider = this.monaco.languages.registerHoverProvider( 'javascript', {
				provideHover: providePreambleHoverFactory( this.monaco )
			});
		}
		if ( !this._snippetHoverProvider ) {
			this._snippetHoverProvider = this.monaco.languages.registerHoverProvider( 'javascript', {
				provideHover: provideSnippetHoverFactory( this.monaco )
			});
		}
		if ( !this._requireProvider ) {
			this._requireProvider = this.monaco.languages.registerCompletionItemProvider( 'javascript', {
				triggerCharacters: [ '(' ],
				provideCompletionItems: provideRequireFactory( this.monaco )
			});
		}
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

		this.addAuthor = this.editor.addCommand( 'add-author', ( _, otherAuthors, p ) => {
			const range = new this.monaco.Range( p.startLineNumber, p.startColumn, p.endLineNumber, p.endColumn );
			const id = { major: 1, minor: 1 };
			const fix = {
				title: 'Add to authors',
				identifier: id,
				range,
				text: `author: ${this.props.author}, ${otherAuthors}`
			};
			this.editor.executeEdits( 'my-source', [ fix ] );
		});

		this.installDependencies = this.editor.addCommand( 'install-dependencies', ( _, requires, p ) => {
			if ( overlayInstallWidget ) {
				this.editor.removeOverlayWidget( overlayInstallWidget );
				overlayInstallWidget = null;
			}
			const keys = objectKeys( requires );
			const deps = [];
			for ( let i = 0; i < keys.length; i++ ) {
				const lib = requires[ keys[ i ] ];
				if (
					!isAbsolutePath( lib ) &&
					!/\.(\/|\\)/.test( lib ) &&
					!isURI( lib ) &&
					!contains( lib, '@stdlib' )
				) {
					deps.push( lib );
				}
			}
			const self = this;
			overlayInstallWidget = {
				domNode: null,
				pre: null,
				getId() {
					return 'my.overlay.widget';
				},
				getDomNode() {
					if ( !this.domNode ) {
						this.domNode = document.createElement( 'div' );
						this.domNode.style.right = '20px';
						this.domNode.style.top = '12px';
						this.domNode.style.width = '400px';

						const button = document.createElement( 'button' );
						button.innerHTML = 'X';
						button.style.position = 'absolute';
						button.style.right = '5px';
						button.style.top = '5px';
						button.style.border = '0';
						button.style.background = 'none';
						button.style.cursor = 'pointer';
						button.addEventListener( 'click', () => {
							self.editor.removeOverlayWidget( overlayInstallWidget );
						});
						this.domNode.appendChild( button );

						this.pre = document.createElement( 'pre' );
						this.pre.innerHTML = `Installing ${deps.join( ', ')}... <br />`;
						this.pre.style.background = 'lightgrey';
						this.pre.style.whiteSpace = 'pre-wrap';
						this.domNode.appendChild( this.pre );
					}
					return this.domNode;
				},
				getPosition() {
					return null;
				}
			};
			this.editor.addOverlayWidget( overlayInstallWidget );
			if ( !this.props.filePath ) {
				overlayInstallWidget.pre.innerHTML = 'Please save file before installing packages.';
				return;
			}
			const destDir = dirname( this.props.filePath );
			const fileName = basename( this.props.filePath, '.isle' );
			const isleDir = join( destDir, `${fileName}-resources` );
			createResourcesDirectoryIfNeeded( isleDir, fileName );
			if ( deps.length === 0 ) {
				overlayInstallWidget.pre.innerHTML = 'No packages to install.';
				return;
			}
			let npmPath;
			let PATH = process.env.PATH; // eslint-disable-line no-process-env
			if ( IS_PACKAGED ) {
				npmPath = join( process.resourcesPath, 'node_modules', '.bin', 'npm' );
				const bin = join( process.resourcesPath, 'node_modules', '.bin' );
				PATH = PATH.concat( ':', bin );
				PATH = PATH.concat( ':', '/usr/local/bin' );
			} else {
				npmPath = 'npm';
			}
			const npm = spawn( npmPath, [ 'install', deps, '--no-audit', '--no-save' ], {
				env: {
					'npm_config_loglevel': 'error',
					'PATH': PATH
				},
				cwd: isleDir
			});
			npm.stdout.on( 'data', ( data ) => {
				const str = data.toString();
				if ( !contains( str, 'looking for funding' ) ) {
					overlayInstallWidget.pre.innerHTML += str;
				}
			});
			npm.stderr.on( 'data', ( data ) => {
				overlayInstallWidget.pre.innerHTML += data;
			});
			npm.on( 'close', ( code ) => {
				setTimeout( () => {
					this.editor.removeOverlayWidget( overlayInstallWidget );
				}, 15000 );
			});
		});

		this.updateRemoteResources = this.editor.addCommand( 'update-resources', async ( _, requires, p ) => {
			let keys = objectKeys( requires );
			for ( let i = 0; i < keys.length; i++ ) {
				global[ keys[ i ] ] = void 0;
			}
			const err = await loadRequires( requires, this.props.filePath );
			const overlayWidget = {
				domNode: null,
				pre: null,
				getId() {
					return 'success.widget';
				},
				getDomNode() {
					if ( !this.domNode ) {
						this.domNode = document.createElement( 'div' );
						this.domNode.style.right = '20px';
						this.domNode.style.top = '12px';
						this.domNode.style.width = '400px';

						this.pre = document.createElement( 'pre' );
						this.pre.innerHTML = '';
						this.pre.style.whiteSpace = 'pre-wrap';
						this.pre.style.color = 'white';
						this.domNode.appendChild( this.pre );
					}
					return this.domNode;
				},
				getPosition() {
					return null;
				}
			};
			this.editor.addOverlayWidget( overlayWidget );
			if ( !err ) {
				overlayWidget.pre.innerHTML = 'Finished updating remote resources.';
				overlayWidget.pre.style.background = 'green';
			} else {
				overlayWidget.pre.innerHTML = 'Encountered an error '+err.message;
				overlayWidget.pre.style.background = 'red';
			}
			setTimeout( () => {
				this.editor.removeOverlayWidget( overlayWidget );
			}, 5000 );
		});

		this.scrollIntoViewInPreview = this.editor.addCommand( 'scroll-into-view', ( _, line ) => {
			scrollIntoView( line );
		});

		this.copyToLocal = this.editor.addCommand( 'copy-to-local', ( _, resURL, type, ext, p ) => {
			const destDir = dirname( this.props.filePath );
			const fileName = basename( this.props.filePath, '.isle' );
			const isleDir = join( destDir, `${fileName}-resources` );
			let subdir = type;
			const resDir = join( isleDir, subdir );
			createResourcesDirectoryIfNeeded( isleDir, fileName );
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
			manifest.include[ includeName ] = {
				lastAccessed: new Date().toLocaleString(),
				origin: url
			};
			createResourcesDirectoryIfNeeded( isleDir, fileName );
			const includeResources = join( includePath, `${includeName}-resources` );
			if ( !exists.sync( includeResources ) ) {
				createResourcesDirectoryIfNeeded( includeResources, includeName );
			}
			writeFileSync( manifestPath, JSON.stringify( manifest, null, 2 ) );
			if ( !endsWith( url, '.isle' ) ) {
				url += '/index.isle';
			}
			import( 'd3' ).then( d3 => {
				const { text } = d3;
				text( url ).then( res => {
					const files = res.match( RE_RELATIVE_FILE );
					let done = 0;
					if ( !files ) {
						writeFileSync( outPath, res );
						const fix = {
							title: 'Copy to local',
							identifier: id,
							range,
							text: localPath
						};
						this.editor.executeEdits( 'my-source', [ fix ] );
						return;
					}
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
		});

		this.openISLEFile = this.editor.addCommand( 'open-file', ( _, lessonPath, p ) => {
			debug( `Opening ${lessonPath} in new window...` );
			const destDir = dirname( this.props.filePath );
			ipcRenderer.send( 'open-file', {
				path: join( destDir, lessonPath )
			});
		});
		const errs = this.props.lintErrors.map( mapErrors );
		const model = this.editor.getModel();
		this.monaco.editor.setModelMarkers( model, 'eslint', errs );

		const preamble = model.findNextMatch( '---([\\S\\s\\n]*?)---', 0, true, false, null, false );
		if ( preamble && preamble.range ) {
			this.editor.deltaDecorations( this.decorations, [
				{
					range: preamble.range,
					options: {
						isWholeLine: true,
						className: 'preamble_content'
					}
				}
			]);
		}
		const node = this.editor.getContainerDomNode();
		node.addEventListener( 'dblclick', () => {
			const selection = this.editor.getSelection();
			this.decorations = this.editor.deltaDecorations( this.decorations, [] );
			const lineNumber = selection.startLineNumber;
			scrollIntoView( lineNumber );
			const elem = document.getElementById( 'line-'+selection.startLineNumber );
			if ( elem ) {
				const event = new MouseEvent( 'dblclick', {
					'view': window,
					'bubbles': true,
					'cancelable': true
				});
				elem.dispatchEvent( event );
			}
		});
	}

	shouldComponentUpdate( prevProps, prevState ) {
		if (
			this.props.filePath !== prevProps.filePath ||
			this.props.elementRangeVersion !== prevProps.elementRangeVersion ||
			this.props.preamble.title !== prevProps.preamble.title ||
			this.props.lintErrors.length !== prevProps.lintErrors.length ||
			this.props.spellingErrors.length !== prevProps.spellingErrors.length ||
			this.props.splitPos !== prevProps.splitPos ||
			this.props.height !== prevProps.height ||
			this.props.insertionText !== prevProps.insertionText ||
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
		if ( this.props.insertionText && !prevProps.insertionText ) {
			const selection = this.editor.getSelection();
			const range = new this.monaco.Range( selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn );
			const id = { major: 1, minor: 1 };
			const op = {
				identifier: id,
				range: range,
				text: String( this.props.insertionText ),
				forceMoveMarkers: true
			};
			this.immediateUpdate = true;
			this.editor.executeEdits( 'my-source', [ op ] );
		}
		if ( this.props.elementRangeVersion !== prevProps.elementRangeVersion ) {
			if ( this.props.elementRangeAction === 'delete' ) {
				const id = { major: 1, minor: 1 };
				const op = {
					identifier: id,
					range: {
						...this.props.elementRange,
						startColumn: 1,
						endColumn: Infinity
					},
					text: '',
					forceMoveMarkers: true
				};
				this.immediateUpdate = true;
				this.editor.executeEdits( 'my-source', [ op ] );
			}
			else if ( this.props.elementRangeAction === 'reveal' ) {
				this.editor.revealLineInCenter( this.props.elementRange.startLineNumber );
				this.decorations = this.editor.deltaDecorations( this.decorations, [
					{
						range: this.props.elementRange,
						options: {
							isWholeLine: true,
							className: 'highlighted_content'
						}
					}
				]);
				this.hasHighlight = true;
			}
			else if ( this.props.elementRangeAction === 'select' ) {
				const range = this.props.elementRange;
				this.editor.setPosition({ lineNumber: range.startLineNumber, column: Infinity });
			}
			else {
				this.editor.revealLineInCenter( this.props.elementRange.startLineNumber );
				this.decorations = this.editor.deltaDecorations( this.decorations, [
					{
						range: this.props.elementRange,
						options: {
							isWholeLine: true,
							className: 'highlighted_content',
							glyphMarginClassName: 'configurator_glyph',
							glyphMarginHoverMessage: {
								value: 'Click on the cogs to open component configurator'
							}
						}
					},
					{
						range: {
							startLineNumber: this.props.elementRange.startLineNumber,
							endLineNumber: this.props.elementRange.startLineNumber
						},
						options: {
							glyphMarginClassName: 'configurator-glyph-icon fas fa-cogs glyph-icon'
						}
					}
				]);
				this.hasHighlight = true;
				if ( this.props.elementRangeAction === 'trigger_configurator' ) {
					this.triggerConfiguratorViaGlyph();
				}
			}
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
		if ( this.editor ) {
			this.editor.dispose();
		}
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
			else if ( startsWith( line, 'author: ' ) ) {
				const { matches, range } = model.findNextMatch( RE_AUTHOR, 0, true, true, null, true );
				actions.push({
					command: {
						id: this.addAuthor,
						title: 'Add myself to author list (as specified in preamble template)',
						arguments: [ matches[ 1 ], range ]
					},
					title: 'Add myself to author list (as specified in preamble template)'
				});
			}
			else if ( startsWith( line, 'require:' ) ) {
				actions.push({
					command: {
						id: this.installDependencies,
						title: 'Install dependencies',
						arguments: [ this.props.preamble.require, range ]
					},
					title: 'Install dependencies'
				});
				actions.push({
					command: {
						id: this.updateRemoteResources,
						title: 'Update remote resources',
						arguments: [ this.props.preamble.require, range ]
					},
					title: 'Update remote resources'
				});
			}
			const selectedText = model.getValueInRange( selection );
			if ( isURI( selectedText ) ) {
				const ext = extname( url.parse( selectedText ).pathname );
				if ( contains( IMAGE_EXTENSIONS, lowercase( ext ) ) ) {
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
					if ( contains( IMAGE_EXTENSIONS, lowercase( ext ) ) ) {
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
			else if ( startsWith( selectedText, '<!-- #include "' ) || startsWith( line, '<!-- #include "' ) ) {
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
						const includeName = basename( lessonURL, extname( lessonURL ) );
						const entry = manifest.include[ includeName ];
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
			if ( RE_TAG_START.test( line ) ) {
				actions.push({
					command: {
						id: this.scrollIntoViewInPreview,
						title: 'Scroll component into view (double-click)',
						arguments: [ selection.startLineNumber ]
					},
					title: 'Scroll component into view (double-click)'
				});
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
		debug( 'Window was resized...' );
		this.editor.layout({
			width: window.innerWidth * ( 1.0 - this.props.splitPos ),
			height: this.props.height
		});
		this.forceUpdate(); // Ensure Monaco editor is resized...
	}

	handleChange = ( newValue, event ) => {
		if ( this.hasHighlight ) {
			this.decorations = this.editor.deltaDecorations( this.decorations, [
				{
					range: this.props.elementRange,
					options: {
						isWholeLine: true
					}
				}
			] );
			this.hasHighlight = false;
		}
		this.props.onChange( newValue, this.immediateUpdate );
		this.immediateUpdate = false;
	}

	toggleComponentConfigurator = ( data ) => {
		this.props.setConfiguratorComponent({
			component: data
		});
		this.props.toggleConfigurator( true );
	}

	handleContextMenuClick = ( customClick, data ) => {
		debug( 'Handle click to open context menu... ' );
		if ( data.lineNumber ) {
			debug( 'Set position to line '+data.lineNumber+'...' );
			this.editor.setPosition({ lineNumber: data.lineNumber, column: Infinity });
		}
		if ( !customClick ) {
			debug( 'Insert snippet into editor...' );
			const controller = this.editor.getContribution( 'snippetController2' );
			if ( data.context === 'preview' ) {
				data.value = EOL + data.value;
			}
			this.immediateUpdate = true;
			controller.insert( data.value );
			this.editor.focus();
		} else {
			debug( 'Open component configuration modal window...' );
			this.toggleComponentConfigurator( data );
		}
	}

	translateLesson = async ( language ) => {
		const editorDiv = document.getElementsByClassName( 'monaco-editor' )[ 0 ];
		editorDiv.style.opacity = 0.4;
		this.editor.updateOptions({ readOnly: true });
		try {
			const res = await axios.post( ISLE_SERVER+'/translate_lesson', {
				target_lang: language,
				text: this.props.value
			}, {
				headers: {
					'Authorization': 'JWT ' + ISLE_SERVER_TOKEN
				}
			});
			this.editor.updateOptions({ readOnly: false });
			editorDiv.style.opacity = 1.0;
			this.props.onChange( res.data.text );
		} catch ( err ) {
			this.editor.updateOptions({ readOnly: false });
			editorDiv.style.opacity = 1.0;
			vex.dialog.alert( 'Translation failed. Make sure you have access to the translation service through your ISLE server. Error encountered: '+err.message );
		}
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
			createResourcesDirectoryIfNeeded( isleDir, fileName );
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
			createResourcesDirectoryIfNeeded( isleDir, fileName );
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
		const range = new this.monaco.Range( coords[0], coords[1], coords[0], coords[1] );
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
					if ( contains( IMAGE_EXTENSIONS, lowercase( ext ) ) ) {
						text = `<Image src="${text}" alt="Enter description" width="50%" height="auto" />`;
					}
				}
			}
			this.insertTextAtPos( text, [ target.position.lineNumber, target.position.column ], true );
		}
		if ( e.dataTransfer.files ) {
			if ( !this.props.filePath ) {
				const self = this;
				const overlaySaveWidget = {
					domNode: null,
					pre: null,
					getId() {
						return 'overlay.save.widget';
					},
					getDomNode() {
						if ( !this.domNode ) {
							this.domNode = document.createElement( 'div' );
							this.domNode.style.right = '20px';
							this.domNode.style.top = '12px';
							this.domNode.style.width = '400px';

							const button = document.createElement( 'button' );
							button.innerHTML = 'X';
							button.style.position = 'absolute';
							button.style.right = '5px';
							button.style.top = '5px';
							button.style.border = '0';
							button.style.background = 'none';
							button.style.cursor = 'pointer';
							button.addEventListener( 'click', () => {
								self.editor.removeOverlayWidget( overlaySaveWidget );
							});
							this.domNode.appendChild( button );
							this.pre = document.createElement( 'pre' );
							this.pre.innerHTML = 'You must save the file before you can insert content such as images via drag & drop.';
							this.pre.style.background = 'lightgrey';
							this.pre.style.whiteSpace = 'pre-wrap';
							this.domNode.appendChild( this.pre );
						}
						return this.domNode;
					},
					getPosition() {
						return null;
					}
				};
				this.editor.addOverlayWidget( overlaySaveWidget );
			}
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

	extractComponentFromSelection = () => {
		const model = this.editor.getModel();
		const { elementRange } = this.props;
		if ( !elementRange ) {
			return null;
		}
		const range = {
			startLineNumber: elementRange.startLineNumber,
			endLineNumber: elementRange.endLineNumber + 1
		};
		const selection = new this.monaco.Selection( range.startLineNumber, 0, range.endLineNumber, 0 );

		this.editor.setSelection( selection );
		let content = model.getValueInRange( range );
		let match = content.match( RE_TAG_START );
		if ( !match ) {
			content = md.render( content );
			match = content.match( RE_TAG_START );
		}
		return { match, content };
	}

	triggerConfiguratorViaGlyph = () => {
		const { match, content } = this.extractComponentFromSelection();
		if ( match ) {
			this.toggleComponentConfigurator({
				name: match[ 1 ],
				value: content
			});
		}
	}

	onEditorMount = ( editor, monaco ) => {
		this.editor = editor;
		this.monaco = monaco;

		this.editor.onMouseDown( ( e ) => {
			const target = e.target;
			if ( target && target.element && target.element.classList.contains( 'glyph-icon' ) ) {
				this.triggerConfiguratorViaGlyph();
			}
		});
	}

	render() {
		MONACO_OPTIONS.fontSize = this.props.splitPos !== 1 ? this.props.fontSize : 4;
		debug( 'Re-rendering monaco editor...' );

		const dragProvider = new MonacoDragNDropProvider( this.handleDrop, this.editor, this.monaco );
		let outerStyle;
		if ( this.props.splitPos === 1 ) {
			// Need to place Monaco editor outside of split pane hidden from view since we cannot set its width to zero as this causes a crash and there is no headless mode but we need to interact with the editor.
			outerStyle = {
				position: 'absolute',
				top: -2000,
				left: -2000
			};
		} else {
			outerStyle = null;
		}
		return (
			<div style={outerStyle} >
				<ContextMenuTrigger
					id="editor-context-menu" holdToDisplay={-1}
					style={{ height: '100%', width: '100%' }}
					collect={() => {
						return { context: 'editor' };
					}}
				>
					<div {...dragProvider.props}>
						<MonacoEditor
							height={this.props.height}
							width={max( window.innerWidth * ( 1.0 - this.props.splitPos ), 300 )}
							language="javascript"
							value={this.props.value}
							options={MONACO_OPTIONS}
							onChange={this.handleChange}
							editorDidMount={this.onEditorMount}
						/>
					</div>
				</ContextMenuTrigger>
				<EditorContextMenu
					id="editor-context-menu"
					onContextMenuClick={this.handleContextMenuClick}
					onTranslate={this.translateLesson}
				/>
			</div>
		);
	}
}


// PROPERTIES //

Editor.defaultProps = {
	filePath: '',
	fontSize: 14,
	insertionText: null,
	elementRange: null,
	elementRangeAction: null,
	onChange: noop,
	value: ''
};

Editor.propTypes = {
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	filePath: PropTypes.string,
	fontSize: PropTypes.number,
	insertionText: PropTypes.string,
	onChange: PropTypes.func,
	preamble: PropTypes.object.isRequired,
	author: PropTypes.string.isRequired,
	value: PropTypes.string,
	elementRange: PropTypes.object,
	elementRangeAction: PropTypes.string,
	lintErrors: PropTypes.array.isRequired,
	spellingErrors: PropTypes.array.isRequired,
	splitPos: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	height: PropTypes.number.isRequired
};


// EXPORTS //

export default Editor;
