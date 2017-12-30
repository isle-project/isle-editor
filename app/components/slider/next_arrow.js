// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './next_arrow.css';

// VARIABLES //

const RE = /disabled/;


// MAIN //

class NextArrow extends Component {
	render() {
		const disabled = RE.test( this.props.className );
		return (
			<Button className='slider-next-button'
				bsSize="small"
				onClick={this.props.onClick}
				style={{
					position: 'absolute',
					display: 'block',
					right: '-10px',
					bottom: '-25px',
					zIndex: 100
				}}
				disabled={disabled}
			>Next</Button>
		);
	}
}


// DEFAULT PROPERTIES //

NextArrow.defaultProps = {
	className: '',
	onClick() {}
};


// PROPERTY TYPES //

NextArrow.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func
};


// EXPORTS //

export default NextArrow;
