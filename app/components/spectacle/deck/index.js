// MODULES //

import React, { Component, Fragment } from 'react';
import { Deck } from 'spectacle';
import endsWith from '@stdlib/string/ends-with';
import Timer from 'components/timer';
import KeyControls from 'components/key-controls';
import VoiceControl from 'components/voice-control';
import VOICE_COMMANDS from './voice_commands.json';


// MAIN //

/**
* Spectacle slide deck. Wraps `<Slide>` tags.
*/
class CustomDeck extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			totalDuration: null
		};
	}

	componentDidMount() {
		let totalDuration = 0;
		React.Children.forEach( this.props.children, ( child, i ) => {
			totalDuration += ( child.props.duration ? child.props.duration : 0 );
		});
		this.setState({
			totalDuration
		});
	}

	nextSlide = () => {
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

	previousSlide = () => {
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
		const presenterMode = endsWith( window.location.hash, '?presenter' );
		return ( <Fragment>
			<VoiceControl commands={VOICE_COMMANDS} hide reference={this} id="slide" />
			<KeyControls actions={{
				'PageUp': this.nextSlide,
				'PageDown': this.previousSlide
			}} />
			{ presenterMode ? <Timer
				legend="Total: "
				duration={this.state.totalDuration}
				style={{ top: '40px' }}
			/> : null}
			<Deck {...this.props} >{this.props.children}</Deck>
		</Fragment> );
	}
}


// EXPORTS //

export default CustomDeck;
