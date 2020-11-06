// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shuffle from '@stdlib/random/shuffle';


// MAIN //

class OptionsList extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const options = this.props.shuffle ? shuffle( this.props.options ) : this.props.options;
		this.options = this.options || options;
		const { active, onSelect, answers } = this.props;
		return (
			<ul className="match-list-question-ul" >
				{
					this.options.map( ( q, i ) => {
						if ( !q ) {
							return null;
						}
						const match = answers.filter( answer => {
							return answer.a === q || answer.b === q;
						});
						const style = {};
						if ( match[ 0 ] ) {
							style.backgroundColor = match[ 0 ].color;
						} else {
							style.backgroundColor = ( q === active ) ? 'gainsboro' : this.props.baseColor;
						}
						const selectItem = () => onSelect( q );
						return (
							<div
								role="button" tabIndex={0}
								onClick={selectItem}
								onKeyPress={selectItem}
								key={i}
							>
								<li
									className="match-list-question-item"
									style={style}
								>
									{q}
								</li>
							</div>
						);
					})
				}
			</ul>
		);
	}
}


// PROPERTIES //

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
