
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isFunction from '@stdlib/assert/is-function';


// MAIN //

class KeyControls extends Component {
	constructor( props ) {
		super( props );
    }

    componentDidMount() {
        document.addEventListener('keydown', this.triggerEvent );
    }


    componentWillUnmount() {
        document.removeEventListener('keydown', this.triggerEvent );
    }

    triggerEvent = ( event ) => {
        const keyName = event.key;

        const fn = this.props.actions[keyName];
        if ( isFunction(fn) ) {
            fn();
        }
    }


	render() {
        return null;
	}
}


// DEFAULT PROPERTIES //

KeyControls.defaultProps = {
    actions: {}
};


// PROPERTY TYPES //

KeyControls.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func)
};

KeyControls.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default KeyControls;
