// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randu from '@stdlib/random/base/randu';
import isArray from '@stdlib/assert/is-array';


// VARIABLES //

const SOUND_FILE = 'https://isle.heinz.cmu.edu/keystroke2_1544120411143.ogg';


// MAIN //

/**
* An ISLE component that allows you to create a typewriter effect
*
* @property {number} deviation - allows you to specify the randomness
* @property {number} hold - if text is an array of strings, hold specified the duration the full will be displayed before it passes over to the next item in the array
* @property {number} interval - the interval of the typewriter
* @property {boolean} random -if random is set, the keystrokes will be performed with a certain, "humane" randomness
* @property {boolean} sound - the typed keystroke will be also heard
* @property {string} text - the full text to be displayed
* @property {Object} style - CSS inline styles
*/
class Typewriter extends Component {
	constructor( props ) {
		super( props );
		this.started = false;

		this.state = {
			actualText: '',
			ct: 0,
			textCt: 0
		};
	}

	componentWillUnmount() {
		if (this.timeout) {
			console.log( this.timeout );
			clearTimeout(this.timeout);
			this.timeout = 0;
		}
	}

	init() {
		if ( !this.audio ) {
			this.audio = new Audio( SOUND_FILE );
		}

		if ( this.props.delay !== null) {
			this.timeout = setTimeout(() => {
				this.started = true;
				this.next();
			}, this.props.delay);
		}
		else {
			this.started = true;
			this.next();
		}
	}

	playAudio = (char) => {
		this.audio.volume = 0.3 + ( randu() * 0.7 );
		if (char !== ' ') this.audio.play();
	}

	setText = () => {
		if ( this.state.ct < this.props.text.length ) {
			const n = this.state.ct + 1;
			const text = this.props.text.slice( 0, n );

			if ( this.props.sound ) {
				const actualChar = text[text.length-1];
				this.playAudio( actualChar );
			}
			this.setState({
				ct: n,
				actualText: text
			});
		}
	}

	setArrayText = () => {
		if ( this.state.textCt < this.props.text.length) {
			let current = this.props.text[this.state.textCt];
			// check if the text is fullay displayed
			if ( this.state.ct < current.length ) {
				const n = this.state.ct + 1;
				const text = current.slice( 0, n );

				if ( this.props.sound ) {
					const actualChar = text[text.length-1];
					this.playAudio( actualChar );
				}

				this.setState({
					ct: n,
					actualText: text
				});
			}
			else {
				let ct = this.state.textCt + 1;

				this.timeout = setTimeout(() => {
					this.setState({
						ct: 0,
						textCt: ct
					});
				}, this.props.hold);
			}
		}
	}

	next() {
		let next = this.props.interval;
		if ( this.props.random ) {
			next = ( randu() * this.props.deviation ) - (this.props.deviation*0.5);
			next = parseInt(next, 10);
			next += this.props.interval;
		}
		if (isArray(this.props.text)) this.timeout = setTimeout( this.setArrayText, next );
		else this.timeout=setTimeout( this.setText, next );
	}

	process = () => {
		if ( this.started === false ) {
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
	delay: PropTypes.number,
	hold: PropTypes.number,
	interval: PropTypes.number,
	random: PropTypes.bool,
	sound: PropTypes.bool,
	style: PropTypes.object,
	text: PropTypes.string
};

Typewriter.defaultProps = {
	deviation: 30,
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
