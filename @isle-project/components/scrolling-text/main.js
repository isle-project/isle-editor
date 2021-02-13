// MODULES //

import React, { useEffect, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import rdunif from '@stdlib/random/base/discrete-uniform';
import './ticker.css';


// FUNCTIONS //

function getAnimation( direction, inTime, outTime, hold ) {
	let ani = '';
	const waitTime = ( inTime + hold );
	switch ( direction ) {
		case 'left':
			ani = 'ticker-slide-in-right ';
			ani += inTime + 's forwards';
			ani += ', ticker-slide-out-left ';
			ani += outTime + 's ' + waitTime + 's forwards';
		break;
		case 'right':
			ani = 'ticker-slide-in-left ';
			ani += inTime + 's forwards';
			ani += ', ticker-slide-out-right ';
			ani += outTime + 's ' + waitTime + 's forwards';
		break;
		case 'down':
			ani = 'ticker-slide-in-top ';
			ani += inTime + 's forwards';
			ani += ', ticker-slide-out-bottom ';
			ani += outTime + 's ' + waitTime + 's forwards';
		break;
		case 'up':
			ani = 'ticker-slide-in-bottom ';
			ani += inTime + 's forwards';
			ani += ', ticker-slide-out-top ';
			ani += outTime + 's ' + waitTime + 's forwards';
		break;
		case 'focus':
			ani = 'ticker-text-focus-in ';
			ani += inTime + 's forwards';
			ani += ', ticker-text-blur-out ';
			ani += outTime + 's ' + waitTime + 's forwards';
		break;
		case 'tracking':
			ani = 'ticker-tracking-in-contract-bck ';
			ani += inTime + 's forwards';
			ani += ', ticker-tracking-out-expand-fwd ';
			ani += outTime + 's ' + waitTime + 's forwards';
		break;
		case 'swirl':
			ani = 'ticker-swirl-in-fwd ';
			ani += inTime + 's forwards';
			ani += ', ticker-swirl-out-bck ';
			ani += outTime + 's ' + waitTime + 's forwards';
		break;
	}
	return ani;
}


// MAIN //

/**
* A dynamic background component that cycles through a list of texts  at a specified interval.
*
* @property {Array} text - list of texts to be displayed
* @property {boolean} loop - indicates whether the process shall be displayed infinitely
* @property {string} direction - the direction of the text flow (either `left`, `right`, `up`, `down`, `tracking`, `focus`, or `swirl`)
* @property {number} hold - the time the text remains still (in seconds)
* @property {number} wait - the time before a new text arrives (in seconds)
* @property {number} inTime - time of the entrance effect (in seconds)
* @property {number} outTime - time of the exit effect (in seconds)
* @property {string} className - class name
* @property {Object} style - CSS styles of the text
*/
const ScrollingText = ({ text, loop, direction, wait, inTime, outTime, hold, className, style }) => {
	const [ counter, setCounter ] = useState( 0 );
	const intervalRef = useRef();

	const reset = useCallback( () => {
		if ( loop ) {
			setCounter( 0 );
		}
		else {
			clearInterval( intervalRef.current );
		}
	}, [ loop ] );
	const next = useCallback( () => {
		if ( counter < text.length -1 ) {
			setCounter( counter + 1 );
		}
		else {
			reset();
		}
	}, [ counter, text, reset ] );

	const interval = wait + inTime + outTime + hold;
	useEffect( () => {
		intervalRef.current = setInterval( next, interval * 1000 );
		return () => {
			if ( intervalRef.current ) {
				clearInterval( intervalRef.current );
			}
		};
	}, [ interval, next ] );
	const key = rdunif( 0, 100 );
	return (
		<div style={{ overflow: 'hidden', width: '100%' }} >
			<div
				className={className}
				style={{
					animation: getAnimation( direction, inTime, outTime, hold ),
					...style
				}}
				key={key}
			>{text[ counter]}</div>
		</div>
	);
};


// PROPERTIES //

ScrollingText.propTypes = {
	text: PropTypes.arrayOf( PropTypes.string ),
	loop: PropTypes.bool,
	direction: PropTypes.string,
	hold: PropTypes.number,
	wait: PropTypes.number,
	inTime: PropTypes.number,
	outTime: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object
};

ScrollingText.defaultProps = {
	text: [],
	loop: false,
	direction: 'right',
	hold: 5,
	wait: 3,
	inTime: 1,
	outTime: 1,
	className: '',
	style: {}
};


// EXPORTS //

export default ScrollingText;
