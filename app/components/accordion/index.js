// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Card from 'react-bootstrap/lib/Card';
import Collapse from 'react-bootstrap/lib/Collapse';
import objectKeys from '@stdlib/utils/keys';


// VARIABLES //

const debug = logger( 'isle:accordion' );


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

	clickFactory = ( len, idx ) => {
		return () => {
			const active = ( this.state.active === idx ) ? (idx+1) % len : idx;
			debug( `Open accordion element at index ${active}...` );
			this.setState({
				active
			});
		};
	}

	/**
	* React component render method
	*/
	render() {
		const keys = objectKeys( this.props.nodes );
		const out = [];
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const elem = (
				<Card>
					<Card.Header onClick={this.clickFactory( keys.length, i )}>
						{key}
					</Card.Header>
					<Collapse
						key={i}
						in={i === this.state.active}
					>
						{this.props.nodes[ key ]}
					</Collapse>
				</Card>
			);
			out.push( elem );
		}
		return out;
	}
}


// PROPERTIES //

Accordion.defaultProps = {
	active: 0,
	nodes: {}
};

Accordion.propTypes = {
	active: PropTypes.number,
	nodes: PropTypes.object
};


// EXPORTS //

export default Accordion;
