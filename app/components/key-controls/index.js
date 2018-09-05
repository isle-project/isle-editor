
// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logger from 'debug';
import isFunction from '@stdlib/assert/is-function';


// VARIABLES //

const debug = logger( 'isle-editor:key-controls' );


// MAIN //

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


// DEFAULT PROPERTIES //

KeyControls.defaultProps = {
	actions: {},
	container: null
};


// PROPERTY TYPES //

KeyControls.propTypes = {
	actions: PropTypes.objectOf( PropTypes.func ),
	container: PropTypes.node
};

KeyControls.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default KeyControls;
