// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import './previous_arrow.css';


// VARIABLES //

const RE = /disabled/;


// MAIN //

class PreviousArrow extends Component {
	render() {
		const disabled = RE.test( this.props.className );
		return (
			<Button className="slider-previous-button"
				size="small"
				onClick={this.props.onClick}
				style={{
					position: 'absolute',
					display: 'block',
					left: '-10px',
					bottom: '-25px',
					zIndex: 100
				}}
				disabled={disabled}
			>Previous</Button>
		);
	}
}


// DEFAULT PROPERTIES //

PreviousArrow.defaultProps = {
	className: '',
	onClick() {}
};


// PROPERTY TYPES //

PreviousArrow.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func
};


// EXPORTS //

export default PreviousArrow;

