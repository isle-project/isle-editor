// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import floor from '@stdlib/math/base/special/floor';
import max from '@stdlib/math/base/special/max';
import './timer.css';


// MAIN //

/**
* Displays a timer that will trigger a predefined callback when the time is up. An example use case is the timing of quizzes.
*
* @property {boolean} active - flag that can be toggled to start or pause the timer
* @property {number} duration - duration in seconds for the timer
* @property {string} id - the unique `string` ID for the timer. The timer component is persistent over page refreshes
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
		return `timer::${id}`;
	}

	fmtTime( time ) {
		let minutes = floor( time / 60 );
		let seconds = time - minutes * 60;

		// Pad minutes and seconds with zeroes:
		minutes = minutes < 10 ? `0${minutes}` : minutes;
		seconds = seconds < 10 ? `0${seconds}` : seconds;
		return `${minutes}:${seconds}`;
	}

	startCountdown() {
		const countdown = setInterval( () => {
			// Decrement the time by 1:
			this.setState({
				timeLeft: max( 0, this.state.timeLeft - 1 )
			});
			localStorage.setItem( this.getTimerId(), this.state.timeLeft );

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
		return (
			<div style={this.props.style} className="timer-div">
				{this.fmtTime( this.state.timeLeft )}
			</div>
		);
	}
}


// PROPERTIES //

Timer.propTypes = {
	active: PropTypes.bool.isRequired,
	duration: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired,
	style: PropTypes.object,
	onTimeUp: PropTypes.func
};

Timer.defaultProps = {
	style: {},
	onTimeUp() {}
};


// EXPORTS //

export default Timer;
