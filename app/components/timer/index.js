// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import floor from '@stdlib/math/base/special/floor';
import max from '@stdlib/math/base/special/max';
import './timer.css';


// FUNCTIONS //

/**
* Formats time in the format `minutes:seconds`.
*
* @private
* @param {number} time - time in minutes
* @returns {string} formatted time string of the format `minutes:seconds`
*/
function fmtTime( time ) {
	let minutes = floor( time / 60 );
	let seconds = time - minutes * 60;

	// Pad minutes and seconds with zeroes:
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;
	return `${minutes}:${seconds}`;
}


// MAIN //

/**
* Displays a timer that will trigger a predefined callback when the time is up. An example use case is the timing of quizzes.
*
* @property {boolean} active - flag that can be toggled to start or pause the timer
* @property {number} duration - duration in seconds for the timer
* @property {boolean} invisible - controls whether the timer should be hidden
* @property {string} id - the unique `string` ID for the timer. If an ID is set, the timer component is persistent over page refreshes
* @property {string} legend - text displayed in front of the timer
* @property {Object} style - CSS inline styles
* @property {Function} onTimeUp - callback invoked when the timer runs out
*/
class Timer extends Component {
	constructor( props ) {
		super( props );
		const storedTimeLeft = localStorage.getItem( this.getTimerId() );
		this.state = {
			timeLeft: storedTimeLeft || props.duration
		};
	}

	componentDidMount() {
		this.startCountdown();
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.duration !== this.props.duration ) {
			newState.timeLeft = nextProps.duration;
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	componentDidUpdate( prevProps, prevState ) {
		// Check if the clock should be active:
		if (
			this.props.active &&
			!prevProps.active &&
			!this.state.countdown
		) {
			this.startCountdown();
		}
	}

	componentWillUnmount() {
		const { countdown } = this.state;
		// Cancel the countdown on unmount of component:
		if ( countdown ) {
			clearInterval( countdown );
		}
	}

	getTimerId() {
		const { id } = this.props;
		if ( !id ) {
			return null;
		}
		return `timer::${id}`;
	}

	startCountdown() {
		const countdown = setInterval( () => {
			// Decrement the time by 1:
			this.setState({
				timeLeft: max( 0, this.state.timeLeft - 1 )
			});
			const id = this.getTimerId();
			if ( id ) {
				localStorage.setItem( id, this.state.timeLeft );
			}

			// Call the callback when the time left is 0:
			if ( this.state.timeLeft <= 0 ) {
				clearInterval( countdown );
				// Calls the callback...
				this.props.onTimeUp();
			}
		}, 1000 );

		// Store the countdown reference:
		this.setState({ countdown });
	}

	render() {
		if ( this.props.invisible ) {
			return null;
		}
		return (
			<div style={this.props.style} className="timer-div">
				{this.props.legend}
				{fmtTime( this.state.timeLeft )}
			</div>
		);
	}
}


// PROPERTIES //

Timer.propTypes = {
	id: PropTypes.string,
	active: PropTypes.bool.isRequired,
	duration: PropTypes.number.isRequired,
	invisible: PropTypes.bool,
	legend: PropTypes.string,
	style: PropTypes.object,
	onTimeUp: PropTypes.func
};

Timer.defaultProps = {
	id: null,
	invisible: false,
	legend: '',
	style: {},
	onTimeUp() {}
};


// EXPORTS //

export default Timer;
