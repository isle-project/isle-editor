// MODULES //

/*
	Disable no-new-func warning as evaluating code in an editor is one of the few valid use-cases of this otherwise dangerous function:
*/
/* eslint no-new-func: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Portal } from 'react-portal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { transformSync } from '@babel/core';
import logger from 'debug';
import objectKeys from '@stdlib/utils/keys';
import isObject from '@stdlib/assert/is-object';
import repeat from '@stdlib/string/repeat';
import replace from '@stdlib/string/replace';
import markdownToHTML from 'utils/markdown-to-html';
import pluginTransformJSX from '@babel/plugin-transform-react-jsx';
import Provider from '@isle-project/components/internal/provider';
import Session from '@isle-project/session';
import loadRequires from 'utils/load-requires';
import transformToPresentation from 'utils/transform-to-presentation';
import isleFileIncludes from './isle_file_includes.js';
import createScope from './create_scope.js';
import applyStyles from './apply_styles.js';
import DragLayer from './drag_layer.js';
import './preview.css';


// VARIABLES //

const OPTS = {
	plugins: [ pluginTransformJSX ],
	retainLines: false,
	sourceMaps: false,
	ast: false,
	comments: false
};
const debug = logger( 'isle-editor:preview' );
const RE_LINES = /\r?\n/g;
const RE_COMMENTS = /<!--([\S\s]*?)-->/g;
const RE_PREAMBLE = /---([\S\s]*?)---/;


// FUNCTIONS //

/**
 * Clears the global variables that were `require`d from the old preamble.
 *
 * @param {Object} oldPreamble - old preamble
 */
function clearGlobalVariables( oldPreamble ) {
	debug( 'Clearing global variables...' );
	const { require } = oldPreamble;
	let keys = objectKeys( require );
	for ( let i = 0; i < keys.length; i++ ) {
		if ( global[ keys[ i ] ] ) {
			global[ keys[ i ] ] = void 0;
		}
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
			isLoading: true,
			includes: null
		};
		global.lesson = this;
		if ( isObject( props.preamble ) ) {
			try {
				applyStyles( props.preamble, props.filePath || '' );
			} catch ( err ) {
				props.encounteredError( err );
			}
		}
	}

	async componentDidMount() {
		debug( 'Preview did mount.' );
		this._isMounted = true;
		const { preamble, filePath } = this.props;
		if ( isObject( preamble ) ) {
			await this.loadRequires( preamble, filePath );
		}
		const includes = await isleFileIncludes( this.props.code, preamble, filePath );
		if ( this._isMounted ) {
			// eslint-disable-next-line react/no-did-mount-set-state
			this.setState({
				includes
			});
		}
	}

	shouldComponentUpdate( nextProps, nextState ) {
		if (
			this.props.version !== nextProps.version ||
			this.props.currentMode !== nextProps.currentMode ||
			this.props.currentRole !== nextProps.currentRole
		) {
			return true;
		}
		if (
			!nextProps.autoUpdatePreview
		) {
			return false;
		}
		if (
			this.props.code !== nextProps.code ||
			this.props.autoUpdatePreview !== nextProps.autoUpdatePreview ||
			this.props.preambleText !== nextProps.preambleText ||
			this.props.unavailableHeight !== nextProps.unavailableHeight
		) {
			return true;
		}
		const keys = objectKeys( this.state );
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
			const lessonState = session.config.state || {};
			this.setState({
				...lessonState,
				isLoading: true
			});
			clearGlobalVariables( prevProps.preamble );
			this.handlePreambleChange( this.props.preamble );
		}
	}

	componentWillUnmount() {
		debug( 'Preview will unmount...' );
		this._isMounted = false;
	}

	loadRequires = async ( preamble, filePath ) => {
		debug( 'Loading requires...' );
		const { encounteredError, t } = this.props;
		try {
			const err = await loadRequires( preamble.require, filePath || '' );
			if ( !err && !this._isMounted ) {
				return this.props.resetError();
			}
			if ( this._isMounted ) {
				this.setState({
					isLoading: false
				}, () => {
					if ( err ) {
						encounteredError( new Error( `${t('error-during-require')} ${err.message}` ) );
					}
					debug( 'Finished loading all `requires`...' );
				});
			}
		} catch ( err ) {
			if ( this._isMounted ) {
				this.setState({
					isLoading: false
				}, () => {
					encounteredError( err );
				});
			}
		}
	};

	handlePreambleChange = async ( newPreamble ) => {
		debug( 'Handle preamble change...' );
		await this.loadRequires( newPreamble, this.props.filePath || '' );
		try {
			applyStyles( newPreamble, this.props.filePath || '' );
		} catch ( err ) {
			return this.props.encounteredError( err );
		}
	};

	renderPreview = () => {
		debug( 'Should render the lesson...' );
		let es5code;
		let { code, preamble } = this.props;

		// Remove preamble and comments:
		let noEmptyLines = 0;

		const keys = objectKeys( this.state.includes );
		for ( let i = 0; i < keys.length; i++ ) {
			code = code.replace( keys[ i ], this.state.includes[ keys[ i ] ] );
		}

		// Remove preamble and keep track of lines to add:
		code = code.replace( RE_PREAMBLE, ( _, p1 ) => {
			noEmptyLines += ( p1.match( RE_LINES ) || '' ).length;
			return '';
		});

		// Replace comments with empty lines:
		code = code.replace( RE_COMMENTS, ( _, p1 ) => {
			return repeat( '\n', ( p1.match( RE_LINES ) || '' ).length );
		});

		const isPresentation = preamble.type === 'presentation' || code.includes( '<Slide ' );

		// Replace Markdown by HTML...
		try {
			code = markdownToHTML( code, {
				filePath: this.props.filePath,
				addEmptySpans: true,
				lineNumber: noEmptyLines,
				addLineWrappers: true
			});
		} catch ( err ) {
			err.message = replace( err.message, '\n', '\n | ' );
			this.props.encounteredError( err );
			return null;
		}
		if ( isPresentation ) {
			debug( 'Should render a presentation...' );
			code = transformToPresentation( code, preamble );
		}
		let additions = '';
		if ( !preamble.removeStatusBar ) {
			additions = '<StatusBar className="fixedPos" />';
		}
		if ( !preamble.removeToolbar ) {
			additions += '<Toolbar />';
		}
		additions += '\n';
		noEmptyLines += 1;
		code = additions + code;

		// Prepend empty lines so line numbers in error stack traces match:
		code = repeat( '\n', noEmptyLines ) + code;

		// eslint-disable-next-line i18next/no-literal-string
		code = `<ErrorBoundary><Lesson
			className="${preamble.type === 'presentation' ? 'Presentation' : 'Lesson'}"
			style={{
				height: 'calc(100vh - ${this.props.unavailableHeight}px)',
				minHeight: 'calc(100vh - ${this.props.unavailableHeight}px)'
			}}
		>
			${code}
		</Lesson></ErrorBoundary>`;
		code = `const out = ${code}`;
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
			PropTypes.resetWarningCache();
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
	};

	render() {
		debug( 'Rendering preview...' );
		return (
			<DndProvider backend={HTML5Backend} >
				<Portal
					node={document.body}
				>
					<DragLayer />
				</Portal>
				<Provider session={this.session} currentRole={this.props.currentRole} >
					{ this.state.isLoading ? 'Loading...' : this.renderPreview()}
				</Provider>
			</DndProvider>
		);
	}
}


// PROPERTIES //

Preview.defaultProps = {
	code: '',
	onCode() {}
};

Preview.propTypes = {
	autoUpdatePreview: PropTypes.bool.isRequired,
	code: PropTypes.string,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	encounteredError: PropTypes.func.isRequired,
	resetError: PropTypes.func.isRequired,
	onCode: PropTypes.func,
	preamble: PropTypes.object.isRequired,
	preambleText: PropTypes.string.isRequired,
	unavailableHeight: PropTypes.number.isRequired
};


// EXPORTS //

export default withTranslation( 'Editor' )( Preview );
