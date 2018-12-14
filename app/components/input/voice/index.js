// MODULES //

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import logger from 'debug';
import Input from 'components/input/base';
import OverlayTrigger from 'components/overlay-trigger';
import SessionContext from 'session/context.js';
import Microphone from './microphone.js';
import './voice.css';


// VARIABLES //

const debug = logger( 'isle:voice-input' );


// MAIN //

/**
* A voice input component.
*
* @property {boolean} autorecord - controls whether to automatically start recording
* @property {string} defaultValue - default text value
* @property {Array} grammars - speech grammar list (unsupported)
* @property {string} language - language identifier
* @property {string} legend - legend displayed in front of input field
* @property {string} mode - set to `full` to display a text input field alongside the microphone, `status` to only display a statusbar with the transcribed texts, `microphone` to show just a button to toggle recording, or `none` when the voice input should be invisible and purely controlled via hotkeys / voice commands
* @property {number} maxAlternatives - maximum number of alternatives provided per speech recognition result
* @property {Function} onChange - callback function invoked when text input value is updated
* @property {Function} onClick - callback function invoked when clicking on the microphone button
* @property {Function} onFinalText - callback function invoked once final text is received
* @property {Function} onSegment - callback function invoked with text segments
* @property {Function} onRecordingStart - callback function invoked when recording is started
* @property {Function} onRecordingStop - callback function invoked once recording is stopped
* @property {Function} onSubmit - callback function when submitting text input value by hitting "Enter"
* @property {string} placeholder - text input placeholder
* @property {Object} remote - object with `start`, `stop`, and `toggle` and associated hotkeys
* @property {Function} timeout - number of milliseconds after which to timeout the recording
* @property {Function} stopTooltip - tooltip message desplayed while recording
* @property {Function} startTooltip - tooltip message desplayed while not recording
* @property {string} tooltipPlacement - direction of the tooltip
* @property {number} width - voice input width (in px)
* @property {number} height - voice input height (in px)
* @property {Object} style - CSS inline styles
*/
class VoiceInput extends Input {
	constructor( props, context ) {
		super( props );
		const session = context;
		this.state = {
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue,
			isRecording: props.autorecord
		};

		if ( props.remote ) {
			window.onkeydown = this.remoteControl;
		}
		if ( props.autorecord ) {
			debug( 'Should record voice...' );
			this.start();
		}
	}

	remoteControl = ( event ) => {
		switch ( event.keyCode ) {
			case this.props.remote.stop:
				this.stop();
			break;
			case this.props.remote.start:
				if ( !this.state.isRecording ) {
					this.start();
				}
			break;
			case this.props.remote.toggle:
				if ( !this.state.isRecording ) {
					this.start();
				} else {
					this.stop();
				}
			break;
		}
	}

	setTimeout() {
		this.timer = setTimeout( this.stop, this.props.timeout );
	}

	segment( results ) {
		if ( this.timer ) {
			clearTimeout( this.timer );
		}
		let text;
		if ( this.props.maxAlternatives > 1 ) {
			text = new Array( results.length );
			for ( let i = 0; i < results.length; i++ ) {
				text[ i ] = results[ i ].transcript;
			}
		} else {
			text = results[ 0 ].transcript;
		}
		this.setState({
			value: text
		});
		this.props.onSegment( text );
	}

	finalText( results ) {
		if ( this.props.timeout ) {
			this.setTimeout();
		}
		debug( 'Received final text' );
		let text;
		if ( this.props.maxAlternatives > 1 ) {
			text = new Array( results.length );
			for ( let i = 0; i < results.length; i++ ) {
				text[ i ] = results[ i ].transcript;
			}
		} else {
			text = results[ 0 ].transcript;
		}
		this.setState({
			value: text
		});
		this.props.onFinalText( text );
	}

	onResult = ( event ) => {
		debug( 'Processing result...' );
		if ( typeof ( event.results ) === 'undefined' ) {
			debug( 'Something went wrong...' );
			return;
		}
		for ( let i = event.resultIndex; i < event.results.length; ++i ) {
			if ( event.results[ i ].isFinal ) {
				this.finalText( event.results[ i ] );
			}
			else {
				this.segment( event.results[ i ] );
			}
		}
	}

	createGrammarList() {
		var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList; //eslint-disable-line
		var grammarList = new SpeechGrammarList();
		for ( let i = 0; i < this.props.grammars.length; i++ ) {
			var { src, weight } = this.props.grammars[ i ];
			grammarList.addFromString( src, weight );
		}
		return grammarList;
	}

	start() {
		this.recognizer = null;
		var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //eslint-disable-line
		if ( SpeechRecognition ) {
			const recognizer = new SpeechRecognition();
			recognizer.lang = this.props.language;
			recognizer.continuous = true;
			recognizer.interimResults = true;
			recognizer.maxAlternatives = this.props.maxAlternatives;
			this.recognizer = recognizer;
			this.recognizer.grammars = this.createGrammarList();

			this.recognizer.onerror = ( event ) => {
				debug( 'Encountered an error...' );
				if (
					event.error === 'not-allowed' ||
					event.error === 'service-not-allowed'
				) {
					this.setState({
						isRecording: false
					});
					return this.context.addNotification({
						title: 'Not allowed',
						message: 'No permission to use the speech recognition service',
						level: 'error',
						position: 'tr'
					});
				}
				try {
					this.recognizer.start();
				} catch ( err ) {
					debug( err );
				}
			};

			this.recognizer.onend = () => {
				debug('onend: %s', this.props.id );
				if ( this.state.isRecording ) {
					// Restart recording after it stopped due to no voice input for a few seconds:
					this.recognizer.start();
				}
			};

			this.recognizer.onstart = () => {
				debug('onstart: %s', this.props.id );
				this.props.onRecordingStart();
			};

			recognizer.onresult = this.onResult;
			recognizer.start();
		}

		debug( 'Set `isRecording` to true...' );
		this.setState({
			isRecording: true
		});
	}


	stop = () => {
		debug( 'Set `isRecording` to false...' );
		this.setState({
			isRecording: false
		}, () => {
			if ( this.recognizer ) {
				this.recognizer.stop();
			}
			this.props.onRecordingStop();
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

	handleClick = ( event ) => {
		this.props.onClick( event );
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
		if ( !recognizable ) {
			text = 'Your browser does not support voice recognition. You may use the Chrome Browser instead';
		}
		else if ( this.state.isRecording === true ) {
			text = this.props.stopTooltip;
		}
		else {
			text = this.props.startTooltip;
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
		if ( this.state.isRecording === true ) {
			mike = 'voice-microphone voice-recording';
		}
		switch ( this.props.mode ) {
		case 'full':
			return (
				<Fragment>
					{ this.props.legend ? <label>{this.props.legend}</label> : null }
					<div className="input voice-input" style={{ height: this.props.height, width: this.props.width, ...this.props.style }} >
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
						<OverlayTrigger placement={this.props.tooltipPlacement} overlay={this.renderTooltip()}>
							<Microphone onClick={this.handleClick} className={mike} />
						</OverlayTrigger>
					</div>
				</Fragment>
			);
		case 'status':
			return (
				<Fragment>
					{ this.props.legend ? <label>{this.props.legend}</label> : null }
					<div className="voice-input-status-text" style={{ height: this.props.height, width: this.props.width, ...this.props.style }} >
						<div
							className="voice-input-status"
						>
							{this.state.value}
						</div>
						<OverlayTrigger placement="bottom" overlay={this.renderTooltip()}>
							<Microphone onClick={this.handleClick} className={mike} />
						</OverlayTrigger>
					</div>
				</Fragment>
			);
		case 'microphone':
			return (
				<Fragment>
					{ this.props.legend ? <label>{this.props.legend}</label> : null }
					<div className="voice-solo-microphone" style={{ height: this.props.height, width: this.props.width, ...this.props.style }}>
						<OverlayTrigger placement="bottom" overlay={this.renderTooltip()}>
							<Microphone onClick={this.handleClick} className={mike} />
						</OverlayTrigger>
					</div>
				</Fragment>
			);
		case 'none':
			return null;
		}
	}
}


// PROPERTIES //

VoiceInput.defaultProps = {
	autorecord: false,
	defaultValue: '',
	grammars: [],
	language: 'en-US',
	legend: '',
	mode: 'full',
	maxAlternatives: 1,
	onChange() {},
	onClick() {},
	onFinalText() {},
	onSegment() {},
	onRecordingStart() {},
	onRecordingStop() {},
	onSubmit() {},
	placeholder: 'Enter text',
	remote: null,
	style: {},
	timeout: null,
	stopTooltip: 'Click to stop recording',
	startTooltip: 'Click to start recording',
	tooltipPlacement: 'left',
	width: 500,
	height: 36
};

VoiceInput.propTypes = {
	autorecord: PropTypes.bool,
	defaultValue: PropTypes.string,
	grammars: PropTypes.array,
	language: PropTypes.string,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	mode: PropTypes.string,
	maxAlternatives: PropTypes.number,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	onFinalText: PropTypes.func,
	onRecordingStart: PropTypes.func,
	onRecordingStop: PropTypes.func,
	onSegment: PropTypes.func,
	onSubmit: PropTypes.func,
	placeholder: PropTypes.string,
	remote: PropTypes.object,
	style: PropTypes.object,
	timeout: PropTypes.number,
	stopTooltip: PropTypes.string,
	startTooltip: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ]),
	width: PropTypes.number,
	height: PropTypes.number
};

VoiceInput.contextType = SessionContext;


// EXPORTS //

export default VoiceInput;
