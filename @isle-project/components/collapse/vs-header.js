// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './vertical-slider.css';


// MAIN //

/**
* An ISLE component that allows to slideDown and slideUp - JQuery style - the header section.
*/
class VSHeader extends Component {
	render() {
		return (
			<button
				onClick={this.props.onClick}
				aria-label="Collapsable Header"
				className={`vertical-slider-header ${this.props.className ? this.props.className : 'vertical-slider-header-default'}`}
				style={this.props.style}
			>
				{this.props.children}
			</button>
		);
	}
}


// PROPERTIES //

VSHeader.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	style: PropTypes.object
};

VSHeader.defaultProps = {
	className: '',
	style: {}
};


// EXPORTS //

export default VSHeader;
