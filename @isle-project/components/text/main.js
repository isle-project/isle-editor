// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import markdownit from 'markdown-it';
import katex from '@iktakahiro/markdown-it-katex';
import logger from 'debug';
import ltrim from '@stdlib/string/left-trim';
import VoiceControl from '@isle-project/components/internal/voice-control';


// VARIABLES //

const debug = logger( 'isle:text' );
const VOICE_COMMANDS = [
	{
		command: 'textToSpeech',
		trigger: 'text to speech',
		description: 'Read out the text'
	}
];
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.use( katex, {
	throwOnError: false,
	errorColor: '#cc0000'
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
	constructor( props ) {
		super( props );

		this.state = {
			rawUnaltered: props.raw,
			raw: props.raw
				.split( '\n' )
				.map( x => ltrim( x ) )
				.join( '\n' )
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		if ( nextProps.raw !== prevState.rawUnaltered ) {
			newState.rawUnaltered = nextProps.raw;
			newState.raw = nextProps.raw
				.split( '\n' )
				.map( x => ltrim( x ) )
				.join( '\n' );
		}
		return newState;
	}

	textToSpeech() {
		debug( 'Read out text: '+this.props.raw );
		const ssu = new SpeechSynthesisUtterance( this.props.raw );
		ssu.lang = 'en-US';
		window.speechSynthesis.speak( ssu );
	}

	render() {
		if ( this.props.raw ) {
			let raw = this.state.raw;
			const node = {
				'__html': this.props.inline ? md.renderInline( raw ) : md.render( raw )
			};
			/* eslint-disable react/no-danger */
			return (
				<div className={this.props.className} style={this.props.style} >
					<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
					<div dangerouslySetInnerHTML={node}></div>
				</div>
			);
			/* eslint-enable react/no-danger */
		}
		const nodes = React.Children.map( this.props.children, child => {
			if ( typeof child === 'string' ) {
				/* eslint-disable-next-line react/no-danger */
				return <span dangerouslySetInnerHTML={{ __html: md.render( child ) }} />;
			}
			return child;
		});
		return (
			<div className={this.props.className} style={this.props.style} >
				{nodes}
			</div>
		);
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
