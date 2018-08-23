// MODULES //

import React, { Component } from 'react';


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


// PROPERTY TYPES //

Calculator.propDescriptions = {};

Calculator.defaultProps = {};

Calculator.propTypes = {};


// EXPORTS //

export default Calculator;
