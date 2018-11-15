// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import floor from '@stdlib/math/base/special/floor';
import randu from '@stdlib/random/base/randu';


// VARIABLES //

// MAIN //

class OptionsList extends Component {
	constructor( props ) {
		super( props );
	}

	shuffle( array ) {
		let currentIndex = array.length;
		let temporaryValue;
		let randomIndex;
		while ( currentIndex !== 0 ) {
			// Pick a remaining element...
			randomIndex = floor( randu() * currentIndex );
			currentIndex -= 1;
			// And swap it with the current element...
			temporaryValue = array[ currentIndex ];
			array[ currentIndex ] = array[ randomIndex ];
			array[ randomIndex ] = temporaryValue;
		}
		return array;
	}

	render() {
		const optionStyle = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '10px 0px',
			margin: '10px',
			border: 'solid 1px gainsboro',
			cursor: 'pointer',
			backgroundColor: this.props.baseColor
		};

		const selected = Object.assign({}, optionStyle, {
			backgroundColor: 'gainsboro'
		});
		const options = this.props.shuffle ? this.shuffle( this.props.options ) : this.props.options;
		this.options = this.options || options;
		const { active, onSelect, answers } = this.props;
		return (
			<ul style={{ flex: 1, listStyleType: 'none', padding: 0 }}>
				{
					this.options.map( ( q, i ) => {
						let style = ( q === active ) ? selected : optionStyle;
						const match = answers.filter( answer => {
							return answer.a === q || answer.b === q;
						});
						style = match[ 0 ] ?
							Object.assign({}, style, {
								backgroundColor: match[ 0 ].color
							}) :
							style;
						return (
							<li
								key={i}
								onClick={() => onSelect( q )}
								style={style}
							>
								{q}
							</li>
						);
					})
				}
			</ul>
		);
	}
}


// PROPERTY TYPES //

OptionsList.propTypes = {
	active: PropTypes.string,
	answers: PropTypes.array.isRequired,
	baseColor: PropTypes.string,
	onSelect: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	shuffle: PropTypes.bool.isRequired
};

OptionsList.defaultProps = {
	active: null,
	baseColor: 'transparent'
};


// EXPORTS //

export default OptionsList;
