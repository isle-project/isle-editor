// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import Alert from 'react-bootstrap/lib/Alert';
import Collapse from 'components/collapse';


// VARIABLES //

const debug = logger( 'isle:accordion' );


// MAIN //

/**
* An accordion component controlling vertical sliders.
*
* @property {number} active - index of slider to be opened at the beginning
* @property {Array} headers - array of header names
* @property {string} headerClassName - this overrules the given className of the headers
* @property {object} headerStyle - one may also assign a style to the header bars
*/
class Accordion extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );

		this.state = {
			active: props.active,
			prevActive: props.active
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.active !== prevState.prevActive ) {
			const newState = {
				active: nextProps.active,
				prevActive: nextProps.active
			};
			return newState;
		}
		return null;
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
		if ( !isArray( this.props.children ) ) {
			return <Alert variant="danger" >The accordion requires at least two child elements for it to be rendered.</Alert>;
		}
		const out = [];
		const headers = this.props.headers || [];
		for ( let i = 0; i < this.props.children.length; i++ ) {
			const child = this.props.children[ i ];
			const elem = (
				<Collapse
					key={i}
					visible={i === this.state.active}
					header={headers[ i ] || `Header ${i+1}`}
					headerClassName={this.props.headerClassName}
					headerStyle={this.props.headerStyle}
					onClick={this.clickFactory( this.props.children.length, i )}
				>
					{child}
				</Collapse>
			);
			out.push( elem );
		}
		return out;
	}
}


// PROPERTIES //

Accordion.defaultProps = {
	active: 0,
	headers: null,
	headerClassName: null,
	headerStyle: null
};

Accordion.propTypes = {
	active: PropTypes.number,
	headers: PropTypes.arrayOf( PropTypes.string ),
	headerStyle: PropTypes.object,
	headerClassName: PropTypes.string
};


// EXPORTS //

export default Accordion;
