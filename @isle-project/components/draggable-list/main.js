// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shuffle from '@stdlib/random/shuffle';
import { DndProvider } from 'react-dnd';
import IS_TOUCH_DEVICE from '@stdlib/assert/is-touch-device';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import noop from '@stdlib/utils/noop';
import Card from './card.js';


// VARIABLES //

const DnDBackend = IS_TOUCH_DEVICE ? TouchBackend : HTML5Backend;


// MAIN //

/**
* A list of draggable elements that can be re-ordered by the students.
*
* @property {Array} data - array of objects with `id` and `text` keys
* @property {Function} onChange - callback invoked with newly ordered data array on each change
* @property {Function} onInit - callback function invoked after mounting of component
* @property {boolean} shuffle - controls whether data elements should be shuffled in initial display
* @property {boolean} disabled - controls whether elements can be dragged or not
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class DraggableList extends Component {
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
	};

	render() {
		const { cards } = this.state;
		return (
			<DndProvider backend={DnDBackend} >
				<div className={this.props.className} style={{
					maxWidth: '600px',
					margin: '0 auto 10px',
					...this.props.style
				}}>
					{cards.map( ( card, i ) => {
						if ( !card ) {
							return null;
						}
						return (
							<Card key={card.id}
								index={i}
								id={card.id}
								text={card.text}
								moveCard={this.props.disabled ? noop : this.moveCard}
							/>
						);
					})}
				</div>
			</DndProvider>
		);
	}
}


// PROPERTIES //

DraggableList.defaultProps = {
	onChange(){},
	onInit(){},
	shuffle: false,
	disabled: false,
	className: '',
	style: {}
};

DraggableList.propTypes = {
	data: PropTypes.array.isRequired,
	onChange: PropTypes.func,
	onInit: PropTypes.func,
	shuffle: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default DraggableList;
