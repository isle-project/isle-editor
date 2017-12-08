// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './speech-recognition.css';


// MAIN //

class SpeechRecognition extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			recognized: 'recognized text',
			finalText:  '',
			isRecording: props.autoplay
		};

		this.segment.bind( this );
		this.finalText.bind( this );
	}

	componentDidMount() {
		if ( this.props.autoplay ) this.record();
	}

	checkName ( text ) {
		var x = text.search( this.props.name );
		if ( x !== -1 )  {
			console.log( "ONNAME TRIGGERED" );
			this.props.onName( text );
		}
	}
	
	segment( text ) {
		this.setState({
			recognized: text
		});

		this.props.onSegment( text );
	}

	finalText( text ) {
		console.log( "FinalText" );
		this.checkName( text );
		this.setState({
			recognized: text,
			finalText: text
		});

		this.props.onFinalText( text );
	}

	onResult = ( event ) => {
		if ( typeof( event.results ) === 'undefined' ) { //Something is wrong…
			this.recognizer.stop();
			console.log( "something went wrong ");
			return;
		}

		for ( var i = event.resultIndex; i < event.results.length; ++i ) {      
			if ( event.results[ i ].isFinal )  {
				this.finalText ( event.results[ i ][ 0 ].transcript );
			}   
			else {
				this.segment ( event.results[ i ][ 0 ].transcript ); 
			}	
		} 
	}

	record() {
		console.log( "Recording!" );
		this.recognizer = null;

		var recognizer = new webkitSpeechRecognition();
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

	renderText () {
		if ( this.props.showText ) {
			return (
				<div class = "speech_recognition_text">
					{ this.state.recognized }
				</div>
			);
		}
	}

	renderMicrophone() {
		if ( this.props.autoplay ) return null;
		if ( this.state.isRecording === false ) {
			return (
				<div onClick = { this.record.bind( this ) } class = "microphone">
				🎙
				</div>
			);
		} else {
			return (
				<div onClick = { this.stop.bind( this ) } class = "isRecording">
				🎙
				</div>
			);			
		}
	}

	render() {
		return (
			<div class = { this.props.className } id = { this.props.id }>
				{ this.renderText() }
				{ this.renderMicrophone() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

SpeechRecognition.defaultProps = {
	id: "SpeechRecognition",
	className: "speech_recognition",
	name: "Olivia",
	showText: false,
	language: "en-US",
	onSegment: function() {},
	onFinalText: function() {},
	onName: function() {},
	autoplay: false
};


// PROPERTY TYPES //

SpeechRecognition.propTypes = {
	id: PropTypes.string,
	showText: PropTypes.bool,
	className: PropTypes.string,
	name: PropTypes.string,
	language: PropTypes.string,
	aiml: PropTypes.string || PropTypes.array,
	callbacks: PropTypes.string,
	onSegment: PropTypes.func,
	onFinalText: PropTypes.func,
	onName: PropTypes.func,
	autoplay: PropTypes.bool

};


// CONTEXT TYPES //

SpeechRecognition.contextTypes = {
};


// EXPORTS //

export default SpeechRecognition;