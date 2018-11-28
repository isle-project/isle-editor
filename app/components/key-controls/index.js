
// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logger from 'debug';
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
		this.addListeners();
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.container !== prevProps.container ) {
			this.removeListeners( prevProps.container );
			this.addListeners();
		}
	}

	componentWillUnmount() {
		this.removeListeners();
	}

	addListeners = () => {
		debug( `Add keydown event listeners for ${this.props.container ? 'container' : 'document'}...` );
		if ( this.props.container ) {
			const node = ReactDOM.findDOMNode( this.props.container );
			node.addEventListener( 'keydown', this.triggerEvent );
		} else {
			document.addEventListener( 'keydown', this.triggerEvent );
		}
	}

	removeListeners = ( container ) => {
		debug( `Remove keydown event listeners for ${container ? 'container' : 'document'}...` );
		if ( container ) {
			const node = ReactDOM.findDOMNode( container );
			node.removeEventListener( 'keydown', this.triggerEvent );
		} else {
			document.removeEventListener( 'keydown', this.triggerEvent );
		}
	}


	triggerEvent = ( event ) => {
		const keyName = event.key;
		debug( `Received key press: ${keyName}` );
		const fn = this.props.actions[ keyName ];
		if ( isFunction( fn ) ) {
			event.preventDefault();
			fn();
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
	container: PropTypes.node
};

KeyControls.contextType = SessionContext;


// EXPORTS //

export default KeyControls;
