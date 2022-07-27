// MODULES //

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import randomShuffle from '@stdlib/random/shuffle';
import hash from 'object-hash';


// MAIN //

const OptionsList = ({ active, answers, baseColor, options, shuffle, onSelect }) => {
	const optionsRef = useRef( shuffle ? randomShuffle( options ) : options );
	const hashRef = useRef( hash( options ) );
	useEffect( () => {
		const newHash = hash( options );
		if ( hashRef.current !== newHash ) {
			optionsRef.current = shuffle ? randomShuffle( options ) : options;
			hashRef.current = newHash;
		}
	}, [ options, shuffle ] );
	return (
		<ul className="match-list-question-ul" >
			{
				optionsRef.current.map( ( q, i ) => {
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
						style.backgroundColor = ( q === active ) ? 'gainsboro' : baseColor;
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
};


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
