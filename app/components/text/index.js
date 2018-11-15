// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import markdownIt from 'markdown-it';
import logger from 'debug';
import VoiceControl from 'components/voice-control';


// VARIABLES //

const debug = logger( 'isle:text' );
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

/**
* Text component, which allows rendering of raw text as Markdown and enables voice control.
*
* @property {string} raw - text to be rendered
* @property {boolean} inline - controls whether to render the Markdown as inline text
* @property {string} className - class names
* @property {Object} style - CSS inline styles
* @property {string} voiceID - voice control identifier
*/
class Text extends Component {
	textToSpeech() {
		debug( 'Read out text: '+this.props.raw );
		var ssu = new SpeechSynthesisUtterance( this.props.raw );
		ssu.lang = 'en-US';
		window.speechSynthesis.speak( ssu );
	}
	render() {
		const node = {
			'__html': this.props.inline ? md.renderInline( this.props.raw ) : md.render( this.props.raw )
		};
		/* eslint-disable react/no-danger */
		return (
			<div className={this.props.className} style={this.props.style}>
				<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
				<div dangerouslySetInnerHTML={node}></div>
			</div>
		);
		/* eslint-enable react/no-danger */
	}
}


// PROPERTIES //

Text.defaultProps = {
	raw: '',
	className: '',
	inline: false,
	style: {},
	voiceID: null
};

Text.propTypes = {
	raw: PropTypes.string,
	className: PropTypes.string,
	inline: PropTypes.bool,
	style: PropTypes.object,
	voiceID: PropTypes.string
};


// EXPORTS //

export default Text;
