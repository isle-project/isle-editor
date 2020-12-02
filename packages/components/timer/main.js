// MODULES //

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import max from '@stdlib/math/base/special/max';
import fmtPositiveTime from './positive_time.js';
import fmtNegativeTime from './negative_time.js';
import './timer.css';


// VARIABLES //

const debug = logger( 'isle:timer' );


// FUNCTIONS //

function timerID( id ) {
	if ( !id ) {
		return null;
	}
	return `timer::${id}`;
}


// MAIN //

/**
* Displays a timer that will trigger a predefined callback when the time is up. An example use case is the timing of quizzes.
*
* @property {boolean} active - flag that can be toggled to start or pause the timer
* @property {number} duration - duration in seconds for the timer
* @property {boolean} invisible - controls whether the timer should be hidden
* @property {boolean} belowZero - controls whether timer continues counting after the duration is exhausted
* @property {string} id - the unique `string` ID for the timer. If an ID is set, the timer component is persistent over page refreshes
* @property {string} legend - text displayed in front of the timer
* @property {Object} style - CSS inline styles
* @property {Function} onTimeUp - callback invoked when the timer runs out
*/
const Timer = ({ id, active, duration, invisible, belowZero, legend, style, onTimeUp }) => {
	const storedTimeLeft = localStorage.getItem( timerID( id ) );
	const [ timeLeft, setTimeLeft ] = useState( storedTimeLeft || duration );
	const [ prevDuration, setPrevDuration ] = useState( duration );
	const [ finished, setFinished ] = useState( false );
	const [ countdown, setCountdown ] = useState( null );

	if ( duration !== prevDuration ) {
		debug( 'Duration changed since last render...' );
		setTimeLeft( duration );
		setPrevDuration( duration );
	}
	useEffect( () => {
		if ( active && !countdown ) {
			debug( 'Starting countdown...' );
			const interval = setInterval( () => {
				setTimeLeft( timeLeft => {
					const newTimeLeft = timeLeft - 1;
					const key = timerID( id );
					if ( key ) {
						localStorage.setItem( key, newTimeLeft );
					}
					if ( !finished && newTimeLeft <= 0 ) {
						if ( !belowZero ) {
							clearInterval( countdown );
						}
						onTimeUp();
						setFinished( true );
					}
					return newTimeLeft;
				});
			}, 1000 );
			setCountdown( interval );
		}
		return () => {
			debug( 'Cancel the countdown on unmount of component...' );
			if ( countdown ) {
				clearInterval( countdown );
			}
		};
	}, [ active, belowZero, countdown, finished, id, onTimeUp ]);

	if ( invisible ) {
		return null;
	}
	const format = timeLeft > 0 ? fmtPositiveTime : fmtNegativeTime;
	return (
		<div style={style} className={`timer-div ${timeLeft < 0 ? 'timer-danger' : 'timer-info'}`}>
			{legend}
			{format( belowZero ? timeLeft : max( timeLeft, 0 ) )}
		</div>
	);
};


// PROPERTIES //

Timer.propTypes = {
	id: PropTypes.string,
	active: PropTypes.bool.isRequired,
	belowZero: PropTypes.bool,
	duration: PropTypes.number.isRequired,
	invisible: PropTypes.bool,
	legend: PropTypes.string,
	style: PropTypes.object,
	onTimeUp: PropTypes.func
};

Timer.defaultProps = {
	id: null,
	belowZero: false,
	invisible: false,
	legend: '',
	style: {},
	onTimeUp() {}
};


// EXPORTS //

export default Timer;
