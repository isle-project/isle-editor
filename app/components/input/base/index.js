/* eslint-disable react/no-unused-state, react/no-unused-prop-types */

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class Input extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: props.defaultValue
		};

		this.handleChange = ( event ) => {
			this.setState({
				value: event.target.value
			});
		};
	}

	render() {
		return (
			<div></div>
		);
	}
}


// DEFAULT PROPERTIES //

Input.defaultProps = {
	defaultValue: 0,
	legend: '',
	onChange() {}
};


// PROPERTY TYPES //

Input.propTypes = {
	defaultValue: PropTypes.number,
	legend: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
	onChange: PropTypes.func
};


// EXPORTS //

export default Input;
