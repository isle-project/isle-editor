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
				cardState: []
			};
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
					cardStyles={this.props.cardStyles}
					id={id}>
					<div key="front">{front}</div>
					<div key="back">{back}</div>
			</FlippableCard>
			);
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
		values: []
    };

    // EXPORTS //

    export default MultiCards;
