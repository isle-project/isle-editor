// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Deck } from 'spectacle';
import endsWith from '@stdlib/string/ends-with';
import Timer from 'components/timer';
import KeyControls from 'components/key-controls';
import VoiceControl from 'components/voice-control';
import VOICE_COMMANDS from './voice_commands.json';


// MAIN //

/**
* Spectacle slide deck. Wraps `<Slide>` tags.
*
* @property {boolean} autoplay - automatically advance slides
* @property {number} autoplayDuration - global autoplay duration (in milliseconds)
* @property {boolean} autoplayLoop - keep slides in loop
* @property {boolean} autoplayOnStart - start presentation with autoplay on/not paused
* @property {boolean} controls - show control arrows when not in fullscreen
* @property {number} contentHeight - baseline content area height
* @property {number} contentWidth - baseline content area width
* @property {boolean} disableKeyboardControls - toggle keyboard control
* @property {string} progress - progress indicator (accepts `pacman`, `bar`, `number` or `none`)
* @property {boolean} showFullscreenControl - show the fullscreen control button in bottom right of the screen
* @property {Array} transition - global slide transitions (accepts `slide`, `zoom`, `fade` or `spin`, which can be combined)
* @property {number} transitionDuration - global transition duration (in milliseconds)
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


// PROPERTIES //

CustomDeck.defaultProps = {
	autoplay: false,
	autoplayDuration: 7000,
	autoplayLoop: true,
	autoplayOnStart: true,
	controls: true,
	contentHeight: 700,
	contentWidth: 1000,
	disableKeyboardControls: false,
	progress: 'pacman',
	showFullscreenControl: true,
	transition: null,
	transitionDuration: 500
};

CustomDeck.propTypes = {
	autoplay: PropTypes.bool,
	autoplayDuration: PropTypes.number,
	autoplayLoop: PropTypes.bool,
	autoplayOnStart: PropTypes.bool,
	controls: PropTypes.bool,
	contentHeight: PropTypes.number,
	contentWidth: PropTypes.number,
	disableKeyboardControls: PropTypes.bool,
	progress: PropTypes.oneOf([ 'pacman', 'bar', 'number', 'none' ]),
	showFullscreenControl: PropTypes.bool,
	transition: PropTypes.array,
	transitionDuration: PropTypes.number
};


// EXPORTS //

export default CustomDeck;
