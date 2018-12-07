// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randu from '@stdlib/random/base/randu';


// VARIABLES //

const SOUND_FILE = 'https://isle.heinz.cmu.edu/keystroke2_1544120411143.ogg';


// MAIN //

/**
* An ISLE component that allows you to create a typewriter effect
*
* @property {number} deviation - allows you to specify the randomness
* @property {number} interval - the interval of the typewriter
* @property {boolean} random -if random is set, the keystrokes will be performed with a certain, "humane" randomness
* @property {boolean} sound - the typed keystroke will be also heard
* @property {string} text - the full text to be displayed
* @property {Object} style - CSS inline styles
*/
class Typewriter extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			actualText: '',
			ct: 0
		};
	}

	playAudio = () => {
		if ( !this.audio ) {
			this.audio = new Audio( SOUND_FILE );
		}
		this.audio.volume = 0.3 + ( randu() * 0.7 );
		this.audio.play();
	}

	setText = () => {
		if ( this.state.ct < this.props.text.length ) {
			const n = this.state.ct + 1;
			const text = this.props.text.slice( 0, n );
			if ( this.props.sound ) {
				this.playAudio();
			}
			this.setState({
				ct: n,
				actualText: text
			});
		}
	}

	next() {
		let next = this.props.interval;
		if ( this.props.random ) {
			next = ( randu() * this.props.deviation ) - (this.props.deviation*0.5);
			next = parseInt(next, 10);
			next += this.props.interval;
		}
		setTimeout( this.setText, next );
	}

	process() {
		if ( !this.state.started ) {
			this.init();
		}
		else {
			this.next();
		}
	}

	type( ) {
		this.process();
		return (
			<div style={this.props.style}>
				{this.state.actualText}
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.type()}
			</div>
		);
	}
}


// PROPERTIES //

Typewriter.propTypes = {
	deviation: PropTypes.number,
	interval: PropTypes.number,
	random: PropTypes.bool,
	sound: PropTypes.bool,
	style: PropTypes.object,
	text: PropTypes.string
};

Typewriter.defaultProps = {
	deviation: 30,
	interval: 100,
	random: false,
	sound: false,
	style: {},
	text: ''
};


// EXPORTS //

export default Typewriter;
