// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import markdownIt from 'markdown-it';
import VoiceControl from 'components/voice-control';


// VARIABLES //

const VOICE_COMMANDS = [
	{
		command: 'textToSpeech',
		trigger: 'text to speech',
		description: 'Read out the text'
	}
];
const md = markdownIt({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});


// MAIN //

class Text extends Component {
	textToSpeech() {
		var ssu = new SpeechSynthesisUtterance( this.props.raw );
		ssu.lang = 'en-US';
		window.speechSynthesis.speak( ssu );
	}
	render() {
		const node = {
			'__html': md.render( this.props.raw )
		};
		/* eslint-disable react/no-danger */
		return (
			<span style={this.props.style}>
				<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
				<span dangerouslySetInnerHTML={node}></span>
			</span>
		);
		/* eslint-enable react/no-danger */
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
