// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlippableCard from 'components/flippable-card';


// MAIN //

/**
* An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory).
*
* @property {Array<Object>} values - the values for the respective cards, input in an array that has entry fields for a `front` and `back` value. Such a value could be a string, but also a full fledged ISLE component.
* @property {Array<Object>} cardStyles - allows to override the given styles. Handles objects with  `container`, `front` and `back` keys.
*/
class MultiCards extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			cardState: []
		};
	}

	getCard( ndx ) {
		const id = this.props.id + '_' + ndx;
		const values = this.props.values;
		let front='front value not defined';
		let back = 'back value not defined';

		if ( values[ndx] ) {
			if ( values[ndx].front ) {
				front = values[ndx].front;
			}
			if ( values[ndx].back ) {
				back = values[ndx].back;
			}
		}
		return (
			<FlippableCard cardStyles={this.props.cardStyles} id={id}>
				<div>{front}</div>
				<div>{back}</div>
			</FlippableCard>
		);
	}

	renderCards() {
		let list = [];
		for ( let i = 0; i < this.props.values.length; i++ ) {
			list.push( this.getCard( i ) );
		}
		return list;
	}

	render() {
		return (
			<div>
				{this.renderCards()}
			</div>
		);
	}
}


// PROPERTIES //

MultiCards.propTypes = {
	cardStyles: PropTypes.shape({
		container: PropTypes.object,
		front: PropTypes.object,
		back: PropTypes.object
	}),
	values: PropTypes.arrayOf(PropTypes.object)
};

MultiCards.defaultProps = {
	cardStyles: {
		container: {},
		front: {},
		back: {}
	},
	values: []
};


// EXPORTS //

export default MultiCards;
