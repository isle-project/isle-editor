// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class Calculator extends Component {
	/**
	* Constructor function
	*/
	constructor() {
		super();
	}

	/**
	* React component render method
	*/
	render() {
		return this.state.visible ?
			<div>{this.props.children}</div> :
			<span />;
	}
}


// DEFAULT PROPERTIES //

Calculator.defaultProps = {};


// PROPERTY TYPES //

Calculator.propTypes = {};


// EXPORTS //

export default Calculator;
