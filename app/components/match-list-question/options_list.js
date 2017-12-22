// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import floor from '@stdlib/math/base/special/floor';
import randu from '@stdlib/math/base/random/randu';


// MAIN //

class OptionsList extends Component {
	static styles = {
		container: {
			flex: 1,
			listStyleType: 'none',
			padding: 0
		},
		option: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '10px 0px',
			margin: '10px',
			border: 'solid 1px gainsboro',
			cursor: 'pointer'
		}
	}

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
		const styles = OptionsList.styles;
		const selected = Object.assign({}, styles.option, {
			backgroundColor: 'gainsboro'
		});
		this.options = this.options || this.shuffle( this.props.options );
		const { active, onSelect, answers } = this.props;
		return (
			<ul style={styles.container}>
				{
					this.options.map( ( q, i ) => {
						let style = ( q === active ) ? selected : styles.option;
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
	active: PropTypes.bool.isRequired,
	answers: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired
};


// EXPORTS //

export default OptionsList;
