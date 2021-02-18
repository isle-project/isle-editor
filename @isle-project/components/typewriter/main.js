// MODULES //

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import randu from '@stdlib/random/base/randu';
import useRandomInterval from '@isle-project/utils/hooks/use-random-interval';
import isElectron from '@isle-project/utils/is-electron';
import keystroke from './keystroke.ogg';
import './typewriter.css';


// VARIABLES //

const debug = logger( 'isle:typewriter' );
const DEFAULT_STATE = {
	displayedText: '',
	counter: 0,
	arrayCounter: 0
};


// MAIN //

/**
* An ISLE component that allows you to create a typewriter effect
*
* @property {(string|Array<string>)} text - the full text to be displayed or an array of texts to be displayed sequentially
* @property {number} hold - if text is an array of strings, hold specifies the duration the line will be displayed before it passes over to the next item in the array
* @property {number} interval - the interval of the typewriter (in milliseconds)
* @property {number} delay - initial delay before typewriter starts (in milliseconds)
* @property {boolean} random - if random is set, the keystrokes will be performed with a certain, "humane" randomness
* @property {boolean} sound - the typed keystroke will be also heard
* @property {Object} style - CSS inline styles
*/
const Typewriter = ({ text, hold, interval, delay, random, sound, style }) => {
	const [ state, setState ] = useState( DEFAULT_STATE );
	const [ holding, setHolding ] = useState( false );
	const [ inViewport, setInViewport ] = useState( false );
	const audio = useRef( new Audio( keystroke ) );
	const cleanupInterval = useRef();
	const elemRef = useRef( null );

	const playAudio = useCallback( ( char ) => {
		audio.current.volume = 0.3 + ( randu() * 0.7 );
		if ( char !== ' ' ) {
			audio.current.play();
		}
	}, [ audio ] );

	const isInViewport = useCallback( () => {
		if ( !elemRef.current ) {
			return false;
		}
		const top = elemRef.current.getBoundingClientRect().top;
		setInViewport( top >= 0 && top <= window.innerHeight );
	}, [] );

	useEffect( () => {
		const node = isElectron ? document.getElementById( 'Lesson' ) : document;
		node.addEventListener( 'scroll', isInViewport );

		return () => {
			node.removeEventListener( 'scroll', isInViewport );
		};
	}, [ isInViewport ] );

	const args = random ? [ interval * 0.5, interval * 1.5, delay ] : [ interval, interval, delay ];
	cleanupInterval.current = useRandomInterval( () => {
		if ( !inViewport || holding ) {
			return;
		}
		if ( isArray( text ) ) {
			if ( state.arrayCounter < text.length ) {
				const current = text[ state.arrayCounter ];

				debug( 'Check if the text is fully displayed...' );
				if ( state.counter < current.length ) {
					debug( 'Print one more character of the current text...' );
					const n = state.counter + 1;
					const text = current.slice( 0, n );
					if ( sound ) {
						playAudio( text[ text.length - 1 ] );
					}
					setState({
						counter: n,
						displayedText: text,
						arrayCounter: state.arrayCounter
					});
				}
				else {
					debug( 'Advances to the next text in the array...' );
					setHolding( true );
					setTimeout( () => {
						setHolding( false );
						setState({
							counter: 0,
							displayedText: state.displayedText,
							arrayCounter: state.arrayCounter + 1
						});
					}, hold );
				}
			} else {
				cleanupInterval.current();
			}
		} else if ( state.counter < text.length ) {
			const n = state.counter + 1;
			const copiedText = text.slice( 0, n );
			if ( sound ) {
				playAudio( copiedText[ text.length - 1 ] );
			}
			setState({
				counter: n,
				displayedText: copiedText,
				arrayCounter: state.arrayCounter
			});
		} else {
			cleanupInterval.current();
		}
	}, ...args );

	useEffect( () => {
		setState( DEFAULT_STATE );
	}, [ delay, text, interval, hold, sound ] );
	return (
		<span className="typewriter" style={style} ref={elemRef} >
			{state.displayedText}
		</span>
	);
};


// PROPERTIES //

Typewriter.propTypes = {
	delay: PropTypes.number,
	hold: PropTypes.number,
	interval: PropTypes.number,
	random: PropTypes.bool,
	sound: PropTypes.bool,
	style: PropTypes.object,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf( PropTypes.string )
	])
};

Typewriter.defaultProps = {
	delay: null,
	hold: 2000,
	interval: 100,
	random: false,
	sound: false,
	style: {},
	text: ''
};


// EXPORTS //

export default Typewriter;
