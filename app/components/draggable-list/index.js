// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shuffle from '@stdlib/random/shuffle';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './card.js';


// MAIN //

/**
* A list of draggable elements that can be re-ordered by the students.
*
* @property {Array} data - array of objects with `id` and `text` keys
* @property {Function} onChange - callback invoked with newly ordered data array on each change
* @property {Function} onInit - callback function invoked after mounting of component
* @property {boolean} shuffle - controls whether data elements should be shuffled in initial display
*/
class Container extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			cards: props.shuffle ?
				shuffle( this.props.data ) :
				this.props.data
		};
	}

	componentDidMount() {
		this.props.onInit( this.state.cards );
	}

	moveCard = ( dragIndex, hoverIndex ) => {
		const cards = this.state.cards.slice();
		const dragCard = cards[ dragIndex ];
		cards.splice( dragIndex, 1 );
		cards.splice( hoverIndex, 0, dragCard );
		this.setState({
			cards
		}, () => {
			this.props.onChange( this.state.cards );
		});
	}

	render() {
		const { cards } = this.state;
		return (
			<div style={{
				maxWidth: '600px',
				margin: '0 auto 10px'
			}}>
				{cards.map( ( card, i ) => {
					return (
						<Card key={card.id}
							index={i}
							id={card.id}
							text={card.text}
							moveCard={this.moveCard}
						/>
					);
				})}
			</div>
		);
	}
}


// PROPERTIES //

Container.defaultProps = {
	onChange(){},
	onInit(){},
	shuffle: false
};

Container.propTypes = {
	data: PropTypes.array.isRequired,
	onChange: PropTypes.func,
	onInit: PropTypes.func,
	shuffle: PropTypes.bool
};


// EXPORTS //

export default DragDropContext( HTML5Backend )( Container );
