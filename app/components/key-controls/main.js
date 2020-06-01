
// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logger from 'debug';
import objectKeys from '@stdlib/utils/keys';
import isFunction from '@stdlib/assert/is-function';
import SessionContext from 'session/context.js';


// VARIABLES //

const debug = logger( 'isle:key-controls' );


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
				const node = ReactDOM.findDOMNode( this.props.container );
				node.addEventListener( 'keydown', this.triggerEvent );
			} catch ( err ) {
				debug( err.message );
			}
		} else {
			document.addEventListener( 'keydown', this.triggerDocEvent );
		}
	}

	removeListeners = ( container ) => {
		const keys = objectKeys( this.props.actions );
		debug( `Remove keydown event listeners for ${container ? 'container' : 'document'}: ${keys.join( ', ')}` );
		if ( container ) {
			try {
				const node = ReactDOM.findDOMNode( container );
				node.removeEventListener( 'keydown', this.triggerEvent );
			} catch ( err ) {
				debug( err.message );
			}
		}
		document.removeEventListener( 'keydown', this.triggerDocEvent );
	}

	triggerEvent = ( event ) => {
		const keyName = event.key;
		debug( `Received key press for container: ${keyName}` );
		const fn = this.props.actions[ keyName ];
		const modifier = event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
		if (
			document.activeElement === this.props.container &&
			!modifier &&
			isFunction( fn )
		) {
			event.preventDefault();
			event.stopPropagation();
			fn( event );
		}
	}

	triggerDocEvent = ( event ) => {
		const keyName = event.key;
		const modifier = event.ctrlKey || event.shiftKey || event.altKey || event.metaKey;
		debug( `Received key press for document: ${keyName}` );
		const fn = this.props.actions[ keyName ];
		if ( !modifier && isFunction( fn ) ) {
			event.preventDefault();
			event.stopPropagation();
			fn( event );
		}
	}

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
	container: PropTypes.oneOfType([ PropTypes.object, PropTypes.element ])
};

KeyControls.contextType = SessionContext;


// EXPORTS //

export default KeyControls;
