// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './speech-recognition.css';
const debug = require( 'debug' )( 'isle-editor' );


// MAIN //

class SpeechRecognition extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			recognized: 'recognized text',
			// TODO: this is not used yet
			finalText: '',  // eslint-disable-line
			isRecording: props.autoplay
		};

		this.segment.bind( this );
		this.finalText.bind( this );
	}

	componentDidMount() {
		if ( this.props.autoplay ) this.record();
	}

	checkName( text ) {
		var x = text.search( this.props.name );
		if ( x !== -1 ) {
			debug( 'trigger onName...' );
			this.props.onName( text );
		}
	}

	segment( text ) {
		this.setState({
			recognized: text
		});

		this.props.onSegment( text );
	}

	checkNonames( text ) {
		let s = text;
		for ( let i = 0; i < this.props.nonames.length; i++ ) {
			const n = this.props.nonames[ i ];
			if ( text.search( n ) !== 1 ) {
				debug( 'Substitute name...' );
				s = text.replace( n, this.props.name );
			}
		}
		return s;
	}

	finalText( text ) {
		debug( 'Received final text' );
		text = this.checkNonames( text );
		this.checkName( text );

		this.setState({
			recognized: text,
			finalText: text //eslint-disable-line
		});
		this.props.onFinalText( text );
	}

	onResult = ( event ) => {
		if ( typeof ( event.results ) === 'undefined' ) {
			this.recognizer.stop();
			debug( 'Something went wrong...' );
			return;
		}

		for ( let i = event.resultIndex; i < event.results.length; ++i ) {
			if ( event.results[ i ].isFinal ) {
				this.finalText( event.results[ i ][ 0 ].transcript );
			}
			else {
				this.segment( event.results[ i ][ 0 ].transcript );
			}
		}
	}

	record() {
		debug( 'Recording speech...' );
		this.recognizer = null;
		var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; //eslint-disable-line
		const recognizer = new SpeechRecognition();
		recognizer.lang = this.props.language;
		recognizer.continuous = true;
		recognizer.interimResults = true;
		this.recognizer = recognizer;
		recognizer.onresult = this.onResult;
		recognizer.start();
		this.setState({
			isRecording: true
		});
	}

	stop() {
		this.recognizer.stop();

		this.setState({
			isRecording: false
		});
	}

	renderText() {
		if ( this.props.showText ) {
			return (
				<div className="speech_recognition_text">
					{ this.state.recognized }
				</div>
			);
		}
	}

	trigger() {
		if ( this.state.isRecording ){
			this.stop();
		}
		else {
			this.record();
		}
	}

	renderMicrophone() {
		if ( this.props.autoplay ) return null;
		if ( this.state.isRecording === false ) {
			return (
				<div onClick={this.record.bind( this )} className="microphone">
				🎙
				</div>
			);
		}
		return (
			<div onClick={this.stop.bind( this )} className="isRecording">
			🎙
			</div>
		);
	}

	render() {
		return (
			<div className={this.props.className} id={this.props.id}>
				{ this.renderText() }
				{ this.renderMicrophone() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

SpeechRecognition.defaultProps = {
	id: 'SpeechRecognition',
	className: 'speech_recognition',
	name: 'Olivia',
	nonames: [ 'Bolivia', 'Lydia', 'Bolivian' ],
	showText: false,
	language: 'en-US',
	onSegment() {},
	onFinalText() {},
	onName() {},
	autoplay: false
};


// PROPERTY TYPES //

SpeechRecognition.propTypes = {
	autoplay: PropTypes.bool,
	className: PropTypes.string,
	id: PropTypes.string,
	language: PropTypes.string,
	name: PropTypes.string,
	nonames: PropTypes.array,
	onFinalText: PropTypes.func,
	onName: PropTypes.func,
	onSegment: PropTypes.func,
	showText: PropTypes.bool
};


// CONTEXT TYPES //

SpeechRecognition.contextTypes = {
};


// EXPORTS //

export default SpeechRecognition;
