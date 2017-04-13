// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import floor from '@stdlib/math/base/special/floor';


// TIMER //

class Timer extends Component {
	constructor( props ) {
		super( props );
		const storedTimeLeft = localStorage.getItem( this.getTimerId() );
		this.state = {
			timeLeft:  storedTimeLeft || props.duration
		};
	}

	getTimerId() {
		const { id } = this.props;
		return `timer::${id}`;
	}

	fmtTime( time ) {
		let minutes = floor( time / 60 );
		let seconds = time - minutes * 60;

		// Pad minutes and seconds with zeroes:
		minutes =  minutes < 10 ? `0${minutes}` : minutes;
		seconds =  seconds < 10 ? `0${seconds}` : seconds;

		return `${minutes}:${seconds}`;
	}

	startCountdown() {
		const countdown = setInterval( () => {
			// Decrement the time by 1:
			this.setState({
				timeLeft: Math.max( 0, this.state.timeLeft - 1 )
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

	componentDidUpdate( prevProps, prevState ) {
		// Check if the clock should be active:
		if ( this.props.active && !this.state.countdown ) {
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

	render() {
		const style = {
			position: 'fixed',
			top: 0,
			right: 0,
			marginTop: 100,
			marginRight: 25,
			zIndex: 9999,
			fontSize: 24,
			color: 'white',
			backgroundColor: '#383D48',
			paddingLeft: 10,
			paddingRight: 10,
			borderRadius: 3
		};

		return (
			<div style={style}>
				{this.fmtTime( this.state.timeLeft )}
			</div>
		);
	}
}


// PROPERTY TYPES //

Timer.propTypes = {
	id: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	duration: PropTypes.number.isRequired,
	onTimeUp: PropTypes.func.isRequired
};


// EXPORTS //

export default Timer;
