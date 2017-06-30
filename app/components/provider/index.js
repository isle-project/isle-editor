// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// PROVIDER //

class Provider extends Component {

	getChildContext() {
		return {
			session: this.props.session
		};
	}

	render() {
		return this.props.children;
	}

}


// TYPES //

Provider.childContextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Provider;