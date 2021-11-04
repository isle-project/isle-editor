
// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logger from 'debug';
import objectKeys from '@stdlib/utils/keys';
import lowercase from '@stdlib/string/lowercase';
import isFunction from '@stdlib/assert/is-function';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import SessionContext from '@isle-project/session/context.js';


// VARIABLES //

const debug = logger( 'isle:key-controls' );
const RE_ALPHABETIC = /^[a-z]$/i;
const INPUTS = [ 'input', 'textarea' ];


// MAIN //

/**
* Keyboard controls.
*
* @property {Object} actions - object mapping key codes to events
* @property {Node} container - DOM node for which to attach event listeners
*/
class KeyControls extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		debug( 'Component has mounted...' );
		this.addListeners();
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.container !== prevProps.container ) {
			debug( 'Container has changed, re-attach event listeners...' );
			this.removeListeners( prevProps.container );
			this.addListeners();
		}
	}

	componentWillUnmount() {
		debug( 'Component has unmounted...' );
		this.removeListeners();
	}

	addListeners = () => {
		const keys = objectKeys( this.props.actions );
		debug( `Add keydown event listeners for ${this.props.container ? 'container' : 'document'}: ${keys.join( ', ')}` );
		if ( this.props.container ) {
			try {
				let node;
				if ( isString( this.props.container ) ) {
					node = document.querySelector( this.props.container );
				} else {
					node = ReactDOM.findDOMNode( this.props.container );
				}
				node.addEventListener( 'keydown', this.triggerEvent );
			} catch ( err ) {
				debug( err.message );
			}
		} else {
			document.addEventListener( 'keydown', this.triggerDocEvent );
		}
	};

	removeListeners = ( container ) => {
		const keys = objectKeys( this.props.actions );
		debug( `Remove keydown event listeners for ${container ? 'container' : 'document'}: ${keys.join( ', ')}` );
		if ( container ) {
			try {
				let node;
				if ( isString( this.props.container ) ) {
					node = document.querySelector( this.props.container );
				} else {
					node = ReactDOM.findDOMNode( this.props.container );
				}
				node.removeEventListener( 'keydown', this.triggerEvent );
			} catch ( err ) {
				debug( err.message );
			}
		}
		document.removeEventListener( 'keydown', this.triggerDocEvent );
	};

	triggerEvent = ( event ) => {
		let keyName = event.key;
		debug( `Received key press for container: ${keyName}` );
		let modifiers = '';
		if ( event.ctrlKey ) {
			modifiers += 'ctrl+';
		}
		if ( event.shiftKey ) {
			keyName = lowercase( keyName );
			modifiers += 'shift+';
		}
		if ( event.altKey ) {
			modifiers += 'alt+';
		}
		if ( event.metaKey ) {
			modifiers += 'meta+';
		}
		const fn = this.props.actions[ modifiers+keyName ];
		if (
			document.activeElement === this.props.container &&
			isFunction( fn )
		) {
			if ( !modifiers && RE_ALPHABETIC.test( keyName ) && document.activeElement !== document.body ) {
				const el = document.activeElement;
				const inTextField = el && ( INPUTS.indexOf( el.tagName.toLowerCase() ) !== -1 || el.isContentEditable );
				if ( inTextField || el.tagName === 'CANVAS' ) {
					return;
				}
			}
			event.preventDefault();
			event.stopPropagation();
			fn( event );
		}
	};

	triggerDocEvent = ( event ) => {
		let keyName = event.key;
		debug( `Received key press for document: ${keyName}` );
		let modifiers = '';
		if ( event.ctrlKey ) {
			modifiers += 'ctrl+';
		}
		if ( event.shiftKey ) {
			keyName = lowercase( keyName );
			modifiers += 'shift+';
		}
		if ( event.altKey ) {
			modifiers += 'alt+';
		}
		if ( event.metaKey ) {
			modifiers += 'meta+';
		}
		const fn = this.props.actions[ modifiers+keyName ];
		if ( isFunction( fn ) ) {
			if (
				!modifiers &&
				RE_ALPHABETIC.test( keyName ) &&
				document.activeElement !== document.body
			) {
				const el = document.activeElement;
				const inTextField = el && ( INPUTS.indexOf( el.tagName.toLowerCase() ) !== -1 || el.isContentEditable );
				if ( inTextField || el.tagName === 'CANVAS' ) {
					return;
				}
			}
			event.preventDefault();
			event.stopPropagation();
			fn( event );
		}
	};

	render() {
		return null;
	}
}


// PROPERTIES //

KeyControls.defaultProps = {
	actions: {},
	container: null
};

KeyControls.propTypes = {
	actions: PropTypes.objectOf( PropTypes.func ),
	container: PropTypes.oneOfType([ PropTypes.object, PropTypes.element, PropTypes.string ])
};

KeyControls.contextType = SessionContext;


// EXPORTS //

export default KeyControls;
