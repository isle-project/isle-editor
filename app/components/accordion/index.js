// MODULES //

import React, { Component } from 'react';
import Collapse from 'react-bootstrap/lib/Collapse';


// MAIN //

class Accordion extends Component {
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
		return React.Children.map( this.props.children, ( elem, idx ) => {
			return <Collapse key={idx} >{elem}</Collapse>;
		});
	}
}


// PROPERTIES //

Accordion.defaultProps = {};

Accordion.propTypes = {};


// EXPORTS //

export default Accordion;
