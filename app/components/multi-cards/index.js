import React from 'react';
import PropTypes from 'prop-types';
import FlippableCard from 'components/flippable-card';
// MAIN //

/**
* The **MultiCards** allows to render two-side memory cards
*
*/

class MultiCards extends React.Component {
		constructor( props ) {
			super( props );

			this.state = {
				cardMatrix: this.setMatrix()
			};
		}

		setMatrix() {
			var matrix = [];
			for (var i = 0; i< this.props.values.length; i++) {
				matrix.push( false );
				}
			return matrix;
		}

		getCard( ndx ) {
			var id = this.props.id + '_' + ndx;
			var values = this.props.values;
			var front='front value not defined';
			var back = 'back value not defined';

			if (values[ndx]) {
				if (values[ndx].front) 	front = values[ndx].front;
				if (values[ndx].back) 	back = values[ndx].back;
			}

			return (
				<FlippableCard
					parent={this}
					cardStyles={this.props.cardStyles}
					onChange={this.change}
					ndx={ndx}
					id={id}>
					<div key="front">{front}</div>
					<div key="back">{back}</div>
			</FlippableCard>
			);
		}

		change = (ndx, value) => {
			let matrix = this.state.cardMatrix.slice(0);
			matrix[ndx] = value;

			this.setState({
				cardMatrix: matrix
			});
		}

		renderCards() {
			let list = [];
			for (var i = 0; i < this.props.number; i++) {
				list.push( this.getCard(i) );
			}
			return list;
		}

    render() {
        return (
            <div>
                { this.renderCards() }
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
		id: PropTypes.string,
		number: PropTypes.number,
		onChange: PropTypes.function,
		values: PropTypes.arrayOf(PropTypes.object)
    };

	MultiCards.defaultProps = {
		cardStyles: {
			container: {},
			front: {},
			back: {}
		},
		id: null,
		number: 2,
		onChange() {},
		values: []
    };

    // EXPORTS //

    export default MultiCards;
