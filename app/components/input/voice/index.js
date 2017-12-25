// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger} from 'react-bootstrap';
import Input from 'components/input/base';
import Microphone from '-!svg-react-loader!./../../../img/microphone.svg';
import './voice.css';


// MAIN //

class VoiceInput extends Input {
	constructor( props, context ) {
		super( props );

		const { session } = context;
		this.state = {
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue,
			isRecording: props.autorecord
		};
	}

	segment( text ) {
		this.setState({
			value: text
		});

		this.props.onSegment( text );
	}

	finalText( text ) {
		console.log( 'Received final text' );

		this.setState({
			value: text
		});
		this.props.onFinalText( text );
	}


	onResult = ( event ) => {
		if ( typeof ( event.results ) === 'undefined' ) {
			this.recognizer.stop();
			console.log( 'Something went wrong...' );
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

	createGrammarList() {
		var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList; //eslint-disable-line
		var grammarList = new SpeechGrammarList();
		for (var i = 0; i < this.props.grammars.length; i++) {
			var { src, weight} = this.props.grammars[ i ];
			grammarList.addFromString( src, weight );
		}
		return grammarList;
	}


	start() {
		this.recognizer = null;
		var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; //eslint-disable-line
		const recognizer = new SpeechRecognition();
		recognizer.lang = this.props.language;
		recognizer.continuous = true;
		recognizer.interimResults = true;
		this.recognizer = recognizer;
		this.recognizer.grammars = this.createGrammarList();

		this.recognizer.onerror = () => {
			console.log('ON ERROR ' + this.props.id);
		};

		this.recognizer.onend = () => {
			console.log('ON END ' + this.props.id);
		};

		this.recognizer.onstart = () => {
			console.log('ON START' + this.props.id);
		};

		this.recognizer.onaudioend = () => {
			console.log('ON AUDIO END ' + this.props.id);
		};

		this.recognizer.onaudiostart = () =>{
			console.log('ON AUDIO START	 ' + this.props.id);
		};

		this.recognizer.onsoundend = () => {
			console.log('ON SOUND END ' + this.props.id);
		};

		this.recognizer.onsoundstart = () =>{
			console.log('ON SOUND START' + this.props.id);
		};

		this.recognizer.onspeechend = () => {
			console.log('ON SPEECH END ' + this.props.id);
		};

		this.recognizer.onspeechstart = () => {
			console.log('ON SPEECH START	 ' + this.props.id);
		};

		this.recognizer.nomatch = () => {
			console.log('ON NO MATCH' + this.props.id);
		};

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

	handleChange = ( event ) => {
		const value = event.target.value;
		this.setState({
			value
		}, () => {
			this.props.onChange( value );
			if ( this.props.bind ) {
				global.lesson.setState({
					[ this.props.bind ]: value
				});
			}
		});
	}

	handleKeyDown = ( event ) => {
		switch ( event.keyCode ) {
		case 13:
			this.props.onSubmit( this.state.value );
			break;
		default:
			break;
		}
	}

	handleClick = () => {
		if ( this.state.isRecording ){
			this.stop();
		}
		else {
			this.start();
		}
	}

	getSpeechRecognition() {
		try {
			var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; //eslint-disable-line
			if ( SpeechRecognition) return true;
			return false;
		} catch ( error) {
			return false;
		}
	}

	tooltipMessage( recognizable ) {
		let text = '';
		if (!recognizable ) {
			text = 'Your browser does not support voice recognition. You may use the Chrome Browser instead';
		}
		else if ( this.state.isRecording === true) {
			text = 'Click to stop recording';
		}
		else {
			text = 'Click to start recording';
		}
		return text;
	}

	renderTooltip() {
		let x = this.getSpeechRecognition();
		let text = this.tooltipMessage( x );
		return (
			<Tooltip id="VoiceInputTooltip">
				{text}
			</Tooltip>
		);
	}

	render() {
		let mike = 'voice-microphone';
		if ( this.state.isRecording === true) mike = 'voice-microphone voice-recording';

		return (
			<div className="voice-input" style={{ width: this.props.width }} >
				{ this.props.legend ? <label>{this.props.legend}:</label> : <span /> }
				<input
					className="voice-input-text"
					type="text"
					onKeyDown={this.handleKeyDown}
					onChange={this.handleChange}
					placeholder={this.props.placeholder}
					value={this.state.value}
					ref={( input ) => {
						this.textInput = input;
					}}
				/>
				<OverlayTrigger placement="bottom" overlay={this.renderTooltip()}>
					<Microphone onClick={this.handleClick} className={mike} />
				</OverlayTrigger>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

VoiceInput.defaultProps = {
	autorecord: false,
	defaultValue: '',
	grammars: [],
	language: 'en-US',
	legend: '',
	onChange() {},
	onFinalText() {},
	onSegment() {},
	onSubmit() {},
	placeholder: 'Enter text',
	width: 500
};


// PROPERTY TYPES //

VoiceInput.propTypes = {
	autorecord: PropTypes.bool,
	defaultValue: PropTypes.string,
	grammars: PropTypes.array,
	language: PropTypes.string,
	legend: PropTypes.string,
	onChange: PropTypes.func,
	onFinalText: PropTypes.func,
	onSegment: PropTypes.func,
	onSubmit: PropTypes.func,
	placeholder: PropTypes.string,
	width: PropTypes.number
};


// CONTEXT TYPES //

VoiceInput.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default VoiceInput;
