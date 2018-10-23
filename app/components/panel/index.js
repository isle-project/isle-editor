// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import './panel.css';


// MAIN //

/**
* Card component.
*
* @property {string} header - panel heading (h3)
*/
class Wrapper extends Component {
	render() {
		return ( <Card {...this.props} className="panel" >
			{ this.props.header ? <Card.Header as="h3">
				{this.props.header}
			</Card.Header> : null }
			<Card.Body>
				{this.props.children}
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

Wrapper.propTypes = {
	'header': PropTypes.string
};

Wrapper.defaultProps = {
	'header': null
};


// EXPORTS //

export default Wrapper;
