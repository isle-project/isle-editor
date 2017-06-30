// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react/lib/update';
import Card from './card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


// MAIN //

class Container extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			cards: this.props.data
		};

		this.moveCard = ( dragIndex, hoverIndex ) => {
			const { cards } = this.state;
			const dragCard = cards[ dragIndex ];

			this.setState( update( this.state, {
				cards: {
					$splice: [
						[ dragIndex, 1 ],
						[ hoverIndex, 0, dragCard ]
					]
				}
			}), () => {
				this.props.onChange( this.state.cards );
			});
		};
	}

	componentDidMount() {
		this.props.onInit( this.state.cards );
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


// DEFAULT PROPERTIES //

Container.defaultProps = {
	onChange(){},
	onInit(){}
};


// PROPERTY TYPES //

Container.propTypes = {
	onChange: PropTypes.func,
	onInit: PropTypes.func
};


// EXPORTS //

export default DragDropContext( HTML5Backend )( Container );
