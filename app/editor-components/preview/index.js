// MODULES //

/*
	Disable no-new-func warning as evaluating code in an editor
	is one of the few valid use-cases of this otherwise dangerous function:
*/
/* eslint no-new-func: 0 */

import React, { Component } from 'react';
import { transformSync } from '@babel/core';
import PropTypes from 'prop-types';
import logger from 'debug';
import { dirname, resolve, extname } from 'path';
import { readFileSync } from 'fs';
import objectKeys from '@stdlib/utils/keys';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import isRelativePath from '@stdlib/assert/is-relative-path';
import isObjectArray from '@stdlib/assert/is-object-array';
import isObject from '@stdlib/assert/is-object';
import repeat from '@stdlib/string/repeat';
import markdownToHTML from 'utils/markdown-to-html';
import pluginTransformJSX from 'babel-plugin-transform-react-jsx';
import Provider from 'components/provider';
import Session from 'session';
import transformToPresentation from 'utils/transform-to-presentation';
import createScope from './create_scope.js';
import loadRequires from './load_requires.js';
import applyStyles from './apply_styles.js';
import './preview.css';


// VARIABLES //

const OPTS = {
	plugins: [ pluginTransformJSX ]
};
const debug = logger( 'isle-editor:preview' );
const RE_LINES = /\r?\n/g;


// FUNCTIONS //

function clearGlobalVariables( oldPreamble ) {
	const { require } = oldPreamble;
	let keys = objectKeys( require );
	for ( let i = 0; i < keys.length; i++ ) {
		global[ keys[ i ] ] = void 0;
	}
}


// MAIN //

class Preview extends Component {
	constructor( props ) {
		debug( 'Create preview pane...' );
		super( props );

		const offline = props.currentMode === 'offline';
		const session = new Session( props.preamble, offline );
		this.session = session;
		this.scope = createScope( session );
		const lessonState = session.config.state;
		this.state = {
			...lessonState,
			isLoading: true
		};
		global.lesson = this;
		if ( isObject( props.preamble ) ) {
			try {
				if ( props.preamble.instructorNotes ) {
					let instructorNotes = props.preamble.instructorNotes;
					if ( extname( instructorNotes ) === '.md' ) {
						if ( isRelativePath( instructorNotes ) ) {
							const fPath = resolve( dirname( props.filePath ), instructorNotes );
							instructorNotes = readFileSync( fPath );
							instructorNotes = instructorNotes.toString();
						} else if ( isAbsolutePath( instructorNotes ) ) {
							instructorNotes = readFileSync( instructorNotes );
							instructorNotes = instructorNotes.toString();
						}
						props.preamble.instructorNotes = instructorNotes;
					}
				}
			} catch ( err ) {
				props.encounteredError( new Error( 'Ensure that instructor notes path is correct.' ) );
			}
			try {
				applyStyles( props.preamble, props.filePath || '' );
			} catch ( err ) {
				props.encounteredError( err );
			}
		}
	}

	async componentDidMount() {
		debug( 'Preview did mount.' );
		const { preamble, filePath } = this.props;
		if ( isObject( preamble ) ) {
			await this.loadRequires( preamble, filePath );
		}
	}

	shouldComponentUpdate( nextProps, nextState ) {
		if (
			this.props.code !== nextProps.code ||
			this.props.preambleText !== nextProps.preambleText ||
			this.props.currentMode !== nextProps.currentMode ||
			this.props.currentRole !== nextProps.currentRole ||
			this.props.hideToolbar !== nextProps.hideToolbar ||
			this.state.isLoading !== nextState.isLoading
		) {
			return true;
		}
		const lessonState = this.session.config.state;
		const keys = objectKeys( lessonState );
		for ( let i = 0; i < keys.length; i++ ) {
			if ( this.state[ keys[ i ] ] !== nextState[ keys[ i ] ] ) {
				return true;
			}
		}
		return false;
	}

	componentDidUpdate( prevProps ) {
		debug( 'Preview did update.' );
		if (
			this.props.preambleText !== prevProps.preambleText ||
			this.props.currentMode !== prevProps.currentMode ||
			this.props.currentRole !== prevProps.currentRole
		) {
			const offline = this.props.currentMode === 'offline';
			const session = new Session( this.props.preamble, offline );
			this.session = session;
			this.scope = createScope( session );
			let lessonState = session.config.state;
			this.setState({
				...lessonState,
				isLoading: true
			}, async () => {
				clearGlobalVariables( prevProps.preamble );
				await this.handlePreambleChange( this.props.preamble );
			});
		}
	}

	componentWillUnmount() {
		debug( 'Preview will unmount...' );
	}

	async loadRequires( preamble, filePath ) {
		const { encounteredError } = this.props;
		try {
			const err = await loadRequires( preamble.require, filePath || '' );
			this.setState({
				isLoading: false
			}, () => {
				if ( err ) {
					encounteredError( new Error( `Error encountered while loading 'require' statements: ${err.message}` ) );
				}
				debug( 'Finished loading all `requires`...' );
			});
		} catch ( err ) {
			this.setState({
				isLoading: false
			}, () => {
				encounteredError( err );
			});
		}
	}

	handlePreambleChange = async ( newPreamble ) => {
		debug( 'Handle preamble change...' );
		try {
			const err = await this.loadRequires( newPreamble, this.props.filePath || '' );
			this.setState({
				isLoading: false
			}, () => {
				if ( err ) {
					this.props.encounteredError( err );
				}
				debug( 'Finished loading all `requires`...' );
			});
		} catch ( err ) {
			this.setState({
				isLoading: false
			}, () => {
				this.props.encounteredError( err );
			});
		}
		try {
			let instructorNotes = newPreamble.instructorNotes;
			if ( instructorNotes && extname( instructorNotes ) === '.md' ) {
				if ( isRelativePath( instructorNotes ) ) {
					const fPath = resolve( dirname(this.props.filePath), instructorNotes );
					instructorNotes = readFileSync( fPath );
					instructorNotes = instructorNotes.toString();
				} else if ( isAbsolutePath( instructorNotes ) ) {
					instructorNotes = readFileSync( instructorNotes );
					instructorNotes = instructorNotes.toString();
				}
				newPreamble.instructorNotes = instructorNotes;
			}
		} catch ( err ) {
			return this.props.encounteredError( new Error( 'Ensure that instructor notes path is correct' ) );
		}
		try {
			applyStyles( newPreamble, this.props.filePath || '' );
		} catch ( err ) {
			return this.props.encounteredError( err );
		}
	}

	renderPreview = () => {
		debug( 'Should render the lesson...' );
		let es5code;
		let { code, preamble } = this.props;

		// Remove preamble and comments:
		let noEmptyLines = 0;
		const replacer = ( match, p1 ) => {
			noEmptyLines += ( p1.match( RE_LINES ) || '').length;
			return '';
		};
		code = code.replace( /^---([\S\s]*?)---/, replacer );
		code = code.replace( /<!--([\S\s]*)-->/, replacer );

		// Replace Markdown by HTML...
		code = markdownToHTML( code, this.props.filePath, preamble.type !== 'presentation' );

		if ( preamble.type === 'presentation' ) {
			debug( 'Should render a presentation...' );
			code = transformToPresentation( code, preamble );
		}
		let additions = '';
		if ( !preamble.removeStatusBar ) {
			additions = '<StatusBar className="fixedPos" />';
		}
		if ( !preamble.removeToolbar ) {
			let elements = '[';
			if ( isObjectArray( preamble.toolbar ) ) {
				preamble.toolbar.forEach( ( x, i ) => {
					elements += `{name: '${x.name}', component: ${x.component}, icon: '${x.icon}' }`;
					if ( i < preamble.toolbar.length - 1 ) {
						elements += ', ';
					}
				});
			}
			elements += ']';
			additions += `<Toolbar elements={${elements}} />`;
		}
		additions += '\n';
		noEmptyLines += 1;
		code = additions + code;

		// Prepend empty lines so line numbers in error stack traces match:
		code = repeat( '\n', noEmptyLines ) + code;
		code = `<Lesson
			className="${preamble.type === 'presentation' ? 'Presentation' : 'Lesson'}"
			style={{
				overflowY: 'scroll',
				height: 'calc(100vh - ${this.props.hideToolbar ? 2 : 90}px)',
				minHeight: 'calc(100vh - ${this.props.hideToolbar ? 2 : 90}px)'
			}}
		>
			${code}
		</Lesson>`;
		code = `var out = ${code}`;
		this.props.onCode( code );

		debug( 'Transpile code to ES5...' );
		try {
			es5code = transformSync( code, OPTS );
		}
		catch ( err ) {
			this.props.encounteredError( err );
			return null;
		}
		es5code.code += '\n\n return out;';
		if ( es5code && es5code.code ) {
			const SCOPE_KEYS = Object.keys( this.scope );
			const SCOPE_VALUES = SCOPE_KEYS.map( key => this.scope[key] );
			const f = new Function( '_poly', ...SCOPE_KEYS, es5code.code ).bind( this );
			try {
				const out = f( '_poly', ...SCOPE_VALUES );
				return out;
			}
			catch ( err ) {
				this.props.encounteredError( err );
				return null;
			}
		}
	}

	render() {
		debug( 'Rendering preview...' );
		return ( <Provider session={this.session} currentRole={this.props.currentRole}>
			{ this.state.isLoading ? 'Loading...' : this.renderPreview()}
		</Provider> );
	}
}


// PROPERTIES //

Preview.defaultProps = {
	code: '',
	onCode() {},
	hideToolbar: {}
};

Preview.propTypes = {
	code: PropTypes.string,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	onCode: PropTypes.func,
	preamble: PropTypes.object.isRequired,
	preambleText: PropTypes.string.isRequired,
	hideToolbar: PropTypes.bool
};


// EXPORTS //

export default Preview;
