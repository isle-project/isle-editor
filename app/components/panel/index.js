// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import './panel.css';


// MAIN //

/**
* Card component.
*
* @property {string} className - CSS class name
* @property {string} header - panel heading (h3)
* @property {Object} style - CSS inline styles
*/
class Wrapper extends Component {
	render() {
		return ( <Card {...this.props} className={`panel ${this.props.className}`} >
			{ this.props.header ? <Card.Header as="h3">
				{this.props.header}
			</Card.Header> : null }
			<Card.Body style={this.props.style} >
				{this.props.children}
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

Wrapper.propTypes = {
	className: PropTypes.string,
	header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	style: PropTypes.object
};

Wrapper.defaultProps = {
	className: '',
	header: null,
	style: {}
};


// EXPORTS //

export default Wrapper;
