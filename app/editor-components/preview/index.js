// MODULES //

/*
	Disable no-new-func warning as evaluating code in an editor
	is one of the few valid use-cases of this otherwise dangerous function:
*/
/* eslint no-new-func: 0 */

import React, { Component } from 'react';
import { transform } from 'babel-core';
import PropTypes from 'prop-types';
import logger from 'debug';
import { dirname, resolve, extname } from 'path';
import { readFileSync } from 'fs';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import isRelativePath from '@stdlib/assert/is-relative-path';
import isObject from '@stdlib/assert/is-object';
import repeat from '@stdlib/string/repeat';
import markdownToHTML from 'utils/markdown-to-html';
import pluginTransformJSX from 'babel-plugin-transform-react-jsx';
import Provider from 'components/provider';
import Lesson from 'components/lesson';
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
			...lessonState
		};
		this.shouldRenderPreview = true;

		if ( isObject( props.preamble ) ) {
			try {
				loadRequires( props.preamble.require, props.filePath || '' );
			} catch ( err ) {
				props.encounteredError( err );
			}
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

	componentDidMount() {
		debug( 'Preview did mount.' );
	}

	shouldComponentUpdate( nextProps, nextState ) {
		if (
			this.props.code !== nextProps.code ||
			this.props.preambleText !== nextProps.preambleText ||
			this.props.currentMode !== nextProps.currentMode ||
			this.props.currentRole !== nextProps.currentRole
		) {
			return true;
		}
		return false;
	}

	componentDidUpdate( prevProps ) {
		debug( 'Preview will update.' );
		if (
			this.props.preambleText !== prevProps.preambleText ||
			this.props.currentMode !== prevProps.currentMode ||
			this.props.currentRole !== prevProps.currentRole
		) {
			this.handlePreambleChange( this.props.preamble );
			const offline = this.props.currentMode === 'offline';
			const session = new Session( this.props.preamble, offline );
			this.session = session;
			this.scope = createScope( session );
			let lessonState = session.config.state;
			this.setState({
				...lessonState
			});
		}
	}

	handlePreambleChange = ( newPreamble ) => {
		debug( 'Handle preamble change...' );
		try {
			loadRequires( newPreamble.require, this.props.filePath || '' );
		} catch ( err ) {
			return this.props.encounteredError( err );
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
		code = code.replace( /---([\S\s]*)---/, replacer );
		code = code.replace( /<!--([\S\s]*)-->/, replacer );

		// Replace Markdown by HTML...
		code = markdownToHTML( code, {
			escapeBackslash: true,
			addEmptySpans: preamble.type !== 'presentation'
		});

		if ( preamble.type === 'presentation' ) {
			debug( 'Should render a presentation...' );
			code = transformToPresentation( code, preamble );
		}
		if ( !preamble.hideToolbar ) {
			noEmptyLines += 1;
			code = '<StatusBar className="fixedPos" />' + code;
		}

		// Prepend empty lines so line numbers in error stack traces match:
		code = repeat( '\n', noEmptyLines ) + code;
		code = `var out = <React.Fragment>${code}</React.Fragment>`;
		this.props.onCode( code );

		debug( 'Transpile code to ES5...' );
		es5code = transform( code, OPTS );
		es5code.code += '\n\n return out;';
		if ( es5code && es5code.code ) {
			const SCOPE_KEYS = Object.keys( this.scope );
			const SCOPE_VALUES = SCOPE_KEYS.map( key => this.scope[key] );
			const f = new Function( '_poly', ...SCOPE_KEYS, es5code.code ).bind( this );
			const out = f( '_poly', ...SCOPE_VALUES );
			return out;
		}
	}

	render() {
		debug( 'Rendering preview...' );
		const className = this.props.preamble.type === 'presentation' ? 'Presentation' : 'Lesson';
		return ( <Provider session={this.session} currentRole={this.props.currentRole}>
			<Lesson className={className} >
				{this.renderPreview()}
			</Lesson>
		</Provider> );
	}
}


// PROPERTIES //

Preview.defaultProps = {
	code: '',
	onCode() {}
};

Preview.propTypes = {
	code: PropTypes.string,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	onCode: PropTypes.func,
	preamble: PropTypes.object.isRequired,
	preambleText: PropTypes.string.isRequired
};


// EXPORTS //

export default Preview;
