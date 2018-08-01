// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoiceControl from 'components/voice-control';


// VARIABLES //

const VOICE_COMMANDS = [
	{
		command: 'textToSpeech',
		trigger: 'text to speech',
		description: 'Read out the text'
	}
];


// MAIN //

class Text extends Component {
	textToSpeech() {
		var ssu = new SpeechSynthesisUtterance( this.props.raw );
		ssu.lang = 'en-US';
		window.speechSynthesis.speak( ssu );
	}
	render() {
		return (
			<span style={this.props.style}>
				<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
				{this.props.raw}
			</span>
		);
	}
}


// PROPERTIES //

Text.defaultProps = {
	raw: '',
	style: {},
	voiceID: null
};

Text.propTypes = {
	raw: PropTypes.string,
	style: PropTypes.object,
	voiceID: PropTypes.string
};


// EXPORTS //

export default Text;
