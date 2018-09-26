// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/lib/Collapse';


// MAIN //

class Accordion extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );

		this.state = {
			active: props.active
		};
	}

	/**
	* React component render method
	*/
	render() {
		return React.Children.map( this.props.children, ( elem, idx ) => {
			return (
				<Collapse
					key={idx}
					in={idx === this.state.active}
					onClick={() => {
						this.setState({
							active: idx
						});
					}}
				>
					{elem}
				</Collapse>
			);
		});
	}
}


// PROPERTIES //

Accordion.defaultProps = {
	active: 0
};

Accordion.propTypes = {
	active: PropTypes.number
};


// EXPORTS //

export default Accordion;
