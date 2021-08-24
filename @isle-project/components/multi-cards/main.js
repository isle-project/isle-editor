// MODULES //

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import shuffle from '@stdlib/random/shuffle';
import incrspace from '@stdlib/array/incrspace';
import isObjectArray from '@stdlib/assert/is-object-array';
import isNull from '@stdlib/assert/is-null';
import FlippableCard from '@isle-project/components/flippable-card';
import duplicateElements from './duplicate_elements';


// VARIABLES //

const debug = logger( 'isle:multi-cards' );


// MAIN //

/**
* An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory).
*
* @property {Array<Object>} values - the values for the respective cards, input in an array that has entry fields for a `front` and `back` value. Such a value could be a string, but also a full fledged ISLE component
* @property {boolean} memory - whether to enable the memory game mode in which one has to match pairs of the supplied values
* @property {boolean} oneTime - indicates whether the flip process may be executed just once
* @property {Object} animation - if set the component uses an entry animation; the object contains a name (like `anim-scale-up`) and a duration (like `1.7s` = 1.7 seconds)
* @property {Object} style - CSS inline styles
* @property {Object} containerStyle - CSS style of the card containers
* @property {Object} frontStyle - CSS style of the front of the cards
* @property {Object} backStyle - CSS style of the back of the cards
* @property {Function} onChange - a function that receives the matrix of the flippable cards
* @property {Function} onMemoryComplete - callback invoked if the memory game is complete
*/
const MultiCards = ({ id, animation, values, memory, oneTime, style, containerStyle, frontStyle, backStyle, onChange, onMemoryComplete }) => {
	const len = memory ? values.length*2 : values.length;
	const [ state, setState ] = useState({
		cardList: new Array( len ).fill({}),
		blocked: false
	});
	const [ opened, setOpened ] = useState( null );
	const [ solved, setSolved ] = useState( 0 );
	const positions = useRef(
		memory ? shuffle( incrspace( 0, len, 1 ) ) : incrspace( 0, len, 1 )
	);
	const { t } = useTranslation( 'general' );

	useEffect( () => {
		const len = memory ? values.length*2 : values.length;
		setState({
			cardList: new Array( len ).fill({}),
			opened: null
		});
		setSolved( 0 );
		positions.current = memory ? shuffle( incrspace( 0, len, 1 ) ) : incrspace( 0, len, 1 );
	}, [ memory, values ]);

	useEffect( () => {
		if ( solved === values.length ) {
			debug( 'Completed memory game...' );
			onMemoryComplete();
		}
	}, [ solved, values, onMemoryComplete ] );

	if ( !isObjectArray( values ) ) {
		return <Alert variant="danger" >{t('expected-object-array', { field: 'values' })}</Alert>;
	}
	const list = new Array( len );
	if ( memory ) {
		const duplicates = duplicateElements( values );
		for ( let i = 0; i < state.cardList.length; i++ ) {
			list[ positions.current[ i ] ] = <FlippableCard
				value={state.cardList[ i ].opened}
				disabled={state.blocked}
				containerStyle={{ float: 'left', ...containerStyle }} frontStyle={frontStyle} backStyle={backStyle}
				onChange={( value ) => {
					const { cardList, blocked } = state;
					const arr = cardList.slice();
					if ( blocked || arr[ i ].solved ) {
						return;
					}
					arr[ i ] = {
						...arr[ i ],
						opened: value
					};
					setState({
						cardList: arr,
						blocked: opened ? true : false
					});
					if ( isNull( opened ) ) {
						debug( `Clicked on first card at index ${i}...` );
						setOpened( i );
						onChange( arr );
					} else {
						setTimeout( () => {
							debug( `Clicked on second card at index ${i}...` );
							if (
								i % 2 === 0 && opened === i + 1 ||
								i % 2 === 1 && opened === i - 1
							) {
								debug( 'Found match...' );
								arr[ opened ] = {
									opened: true,
									solved: true
								};
								arr[ i ] = {
									opened: true,
									solved: true
								};
								setSolved( solved + 1 );
							} else {
								debug( `Close both opened cards (${i}, ${opened}) as no match is found...` );
								arr[ opened ] = {
									solved: false,
									opened: false
								};
								arr[ i ] = {
									solved: false,
									opened: false
								};
							}
							setOpened( null );
							setState({
								cardList: arr,
								blocked: false
							});
							onChange( arr );
						}, 1200 );
					}
				}} oneTime={oneTime}
				id={`${id}_${i}`} key={i}
			>
				<div>{duplicates[ i ].front}</div>
				<div>{duplicates[ i ].back}</div>
			</FlippableCard>;
		}
	} else {
		for ( let i = 0; i < values.length; i++ ) {
			list[ positions.current[ i ] ] = <FlippableCard
				value={state.cardList[ i ].opened}
				containerStyle={{ float: 'left', ...containerStyle }} frontStyle={frontStyle} backStyle={backStyle}
				onChange={( value ) => {
					const arr = state.cardList.slice();
					arr[ i ] = {
						opened: value
					};
					setState({
						cardList: arr,
						opened: state.opened
					});
					onChange( arr );
				}}
				oneTime={oneTime}
				id={`${id}_${i}`} key={i}
			>
				<div>{values[ i ].front}</div>
				<div>{values[ i ].back}</div>
			</FlippableCard>;
		}
	}
	return (
		<div style={{
			overflow: 'auto',
			animationName: animation.name,
			animationDuration: animation.duration,
			...style
		}} >
			{list}
		</div>
	);
};


// PROPERTIES //

MultiCards.propTypes = {
	animation: PropTypes.object,
	memory: PropTypes.bool,
	onChange: PropTypes.func,
	onMemoryComplete: PropTypes.func,
	oneTime: PropTypes.bool,
	values: PropTypes.arrayOf( PropTypes.object ),
	style: PropTypes.object,
	containerStyle: PropTypes.object,
	frontStyle: PropTypes.object,
	backStyle: PropTypes.object
};

MultiCards.defaultProps = {
	animation: {},
	memory: null,
	onChange() {},
	onMemoryComplete() {},
	oneTime: false,
	values: [],
	style: {},
	containerStyle: {},
	frontStyle: {},
	backStyle: {}
};


// EXPORTS //

export default MultiCards;
