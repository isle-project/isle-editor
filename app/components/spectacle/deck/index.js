// MODULES //

import React, { Component, Fragment } from 'react';
import { Deck } from 'spectacle';
import KeyControls from 'components/key-controls';
import VoiceControl from 'components/voice-control';


// VARIABLES //

const VOICE_COMMANDS = [
	{
		command: 'nextSlide',
		trigger: [ 'next' ]
	},
	{
		command: 'previousSlide',
		trigger: [ 'previous' ]
	}
];


// MAIN //

class CustomDeck extends Component {
	nextSlide() {
		const e = new KeyboardEvent( 'keydown', {
			'bubbles': true,
			'key': 'ArrowRight',
			'code': 'ArrowRight'
		});
		delete e.keyCode;
		Object.defineProperty( e, 'keyCode', {
			'value': 39
		});
		document.dispatchEvent( e );
	}

	previousSlide() {
		const e = new KeyboardEvent( 'keydown', {
			'bubbles': true,
			'key': 'ArrowLeft',
			'code': 'ArrowLeft'
		});
		delete e.keyCode;
		Object.defineProperty( e, 'keyCode', {
			'value': 37
		});
		document.dispatchEvent( e );
	}

	render() {
		return ( <Fragment>
			<VoiceControl commands={VOICE_COMMANDS} hide reference={this} id="slide" />
			<KeyControls actions={{
				'ArrowUp': this.nextSlide,
				'ArrowDown': this.previousSlide
			}} />
			<Deck {...this.props} >{this.props.children}</Deck>
		</Fragment> );
	}
}


// EXPORTS //

export default CustomDeck;
