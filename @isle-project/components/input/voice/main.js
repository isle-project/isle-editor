// MODULES //

import React, { Fragment, useCallback, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import SessionContext from '@isle-project/session/context.js';
import { i18n } from '@isle-project/locales';
import Microphone from './microphone.js';
import './voice.css';


// VARIABLES //

const debug = logger( 'isle:voice-input' );


// FUNCTIONS //

function getSpeechRecognition() {
	try {
		const SpeechRecognition = global.SpeechRecognition || global.webkitSpeechRecognition; //eslint-disable-line
		if ( SpeechRecognition ) {
			return true;
		}
		return false;
	} catch ( error) {
		return false;
	}
}

function createGrammarList( grammars ) {
	const SpeechGrammarList = global.SpeechGrammarList || global.webkitSpeechGrammarList; //eslint-disable-line
	const grammarList = new SpeechGrammarList();
	for ( let i = 0; i < grammars.length; i++ ) {
		const { src, weight } = grammars[ i ];
		grammarList.addFromString( src, weight );
	}
	return grammarList;
}


// MAIN //

/**
* A voice input component.
*
* @property {boolean} autorecord - controls whether to automatically start recording
* @property {string} defaultValue - default text value
* @property {Array} grammars - speech grammar list (unsupported)
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
* @property {Function} stopTooltip - tooltip message displayed while recording
* @property {Function} startTooltip - tooltip message displayed while not recording
* @property {string} tooltipPlacement - direction of the tooltip
* @property {number} width - voice input width (in px)
* @property {number} height - voice input height (in px)
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
const VoiceInput = ( props ) => {
	const { autorecord, bind, defaultValue, grammars, id,
		maxAlternatives, remote, startTooltip, stopTooltip, speechInterface,
		onChange, onClick, onFinalText, onRecordingStart, onRecordingStop, onSegment, onSubmit, timeout } = props;
	const [ isRecording, setIsRecording ] = useState( autorecord );
	const session = useContext( SessionContext );
	const { t } = useTranslation( 'input' );
	const [ value, setValue ] = useState(
		bind && session.state ? session.state[ bind ]: defaultValue,
	);
	const recognizerRef = useRef();
	const timerRef = useRef();

	const handleChange = useCallback( ( event ) => {
		const newValue = event.target.value;
		setValue( newValue );
		onChange( newValue );
		if ( bind ) {
			global.lesson.setState({
				[ bind ]: newValue
			});
		}
	}, [ bind, onChange ] );

	const handleKeyDown = useCallback( ( event ) => {
		switch ( event.keyCode ) {
		case 13:
			onSubmit( value );
			break;
		default:
			break;
		}
	}, [ value, onSubmit ] );

	const stop = useCallback( () => {
		debug( 'Set `isRecording` to false...' );
		setIsRecording( false );
		if ( recognizerRef.current ) {
			recognizerRef.current.stop();
		}
		onRecordingStop();
	}, [ onRecordingStop ] );

	const start = useCallback( () => {
		recognizerRef.current = null;
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //eslint-disable-line
		if ( SpeechRecognition ) {
			const recognizer = new SpeechRecognition();
			recognizer.lang = i18n.language;
			recognizer.continuous = true;
			recognizer.interimResults = true;
			recognizer.maxAlternatives = maxAlternatives;
			recognizer.grammars = createGrammarList( grammars );

			recognizer.onerror = ( event ) => {
				debug( 'Encountered an error...' );
				if (
					event.error === 'not-allowed' ||
					event.error === 'service-not-allowed'
				)
					{
						setIsRecording( false );
						return session.addNotification({
							title: 'Not allowed',
							message: 'No permission to use the speech recognition service',
							level: 'error',
							position: 'tr'
						});
					}
				try {
					recognizer.start();
				} catch ( err ) {
					debug( err );
				}
			};
			recognizer.onend = () => {
				debug('onend: %s', id );
				if ( isRecording ) {
					// Restart recording after it stopped due to no voice input for a few seconds:
					recognizer.start();
				}
			};
			recognizer.onstart = () => {
				debug('onstart: %s', id );
				onRecordingStart();
			};
			recognizer.onresult = ( event ) => {
				debug( 'Processing result...' );
				if ( typeof ( event.results ) === 'undefined' ) {
					debug( 'Something went wrong...' );
					return;
				}
				for ( let i = event.resultIndex; i < event.results.length; ++i ) {
					const results = event.results[ i ];
					if ( event.results[ i ].isFinal ) {
						if ( timeout ) {
							timerRef.current = setTimeout( stop, timeout );
						}
						debug( 'Received final text' );
						let text;
						if ( maxAlternatives > 1 ) {
							text = new Array( results.length );
							for ( let i = 0; i < results.length; i++ ) {
								text[ i ] = results[ i ].transcript;
							}
						} else {
							text = results[ 0 ].transcript;
						}
						setValue( text );
						onFinalText( text );
						if ( speechInterface ) {
							speechInterface.check( text, {
								onStart: () => {
									stop();
								},
								onEnd: () => {
									start();
								}
							});
						}
					}
					else {
						if ( timerRef.current ) {
							clearTimeout( timerRef.current );
						}
						let text;
						if ( maxAlternatives > 1 ) {
							text = new Array( results.length );
							for ( let i = 0; i < results.length; i++ ) {
								text[ i ] = results[ i ].transcript;
							}
						} else {
							text = results[ 0 ].transcript;
						}
						setValue( text );
						onSegment( text );
					}
				}
			};
			recognizer.start();
			recognizerRef.current = recognizer;
		}
		debug( 'Set `isRecording` to true...' );
		setIsRecording( true );
	}, [ grammars, id, isRecording, maxAlternatives, onRecordingStart, session, speechInterface, stop, timeout, onFinalText, onSegment ] );

	const tooltipMessage = useCallback( ( recognizable ) => {
		let text = '';
		if ( !recognizable ) {
			text = 'Your browser does not support voice recognition. You may use the Chrome Browser instead';
		}
		else if ( isRecording === true ) {
			text = stopTooltip || t('click-to-stop-recording');
		}
		else {
			text = startTooltip || t('click-to-start-recording');
		}
		return text;
	}, [ isRecording, startTooltip, stopTooltip, t ] );

	useEffect( () => {
		if ( remote ) {
			window.onkeydown = ( event ) => {
				switch ( event.keyCode ) {
					case remote.stop:
						stop();
					break;
					case remote.start:
						if ( !isRecording ) {
							start();
						}
					break;
					case remote.toggle:
						if ( !isRecording ) {
							start();
						} else {
							stop();
						}
					break;
				}
			};
		}
		if ( autorecord ) {
			debug( 'Should record voice...' );
			start();
		}
	}, [ autorecord, remote, isRecording, start, stop ] );

	const handleClick = useCallback( ( event ) => {
		onClick( event );
		if ( isRecording ){
			stop();
		}
		else {
			start();
		}
	}, [ isRecording, start, stop, onClick ] );

	let mike = 'voice-microphone';
	if ( isRecording === true ) {
		mike = 'voice-microphone voice-recording';
	}
	const x = getSpeechRecognition();
	const text = tooltipMessage( x );
	const tooltip = <Tooltip id={`${props.id}-voice-input-tooltip`} >
		{text}
	</Tooltip>;
	switch ( props.mode ) {
		case 'full':
			return (
				<Fragment>
					{ props.legend ? <label>{props.legend}</label> : null }
					<div className={`input voice-input ${props.className}`} style={{ height: props.height, width: props.width, ...props.style }} >
						<input
							className="voice-input-text"
							type="text"
							onKeyDown={handleKeyDown}
							onChange={handleChange}
							placeholder={props.placeholder !== null ? props.placeholder : t('enter-text')}
							value={value}
						/>
						<OverlayTrigger placement={props.tooltipPlacement} overlay={tooltip}>
							<Microphone onClick={handleClick} className={mike} />
						</OverlayTrigger>
					</div>
				</Fragment>
			);
		case 'status':
			return (
				<Fragment>
					{ props.legend ? <label>{props.legend}</label> : null }
					<div className={`voice-input-status-text ${props.className}`} style={{ height: props.height, width: props.width, ...props.style }} >
						<div
							className="voice-input-status"
						>
							{value}
						</div>
						<OverlayTrigger placement="bottom" overlay={tooltip}>
							<Microphone onClick={handleClick} className={mike} />
						</OverlayTrigger>
					</div>
				</Fragment>
			);
		case 'microphone':
			return (
				<Fragment>
					{ props.legend ? <label>{props.legend}</label> : null }
					<div className={`voice-solo-microphone ${props.className}`} style={{ height: props.height, width: props.width, ...props.style }}>
						<OverlayTrigger placement="bottom" overlay={tooltip}>
							<Microphone onClick={handleClick} className={mike} />
						</OverlayTrigger>
					</div>
				</Fragment>
			);
		case 'none':
			return null;
	}
};


// PROPERTIES //

VoiceInput.defaultProps = {
	autorecord: false,
	defaultValue: '',
	grammars: [],
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
	placeholder: null,
	remote: null,
	className: '',
	style: {},
	timeout: null,
	stopTooltip: null,
	startTooltip: null,
	tooltipPlacement: 'left',
	width: 500,
	height: 36
};

VoiceInput.propTypes = {
	autorecord: PropTypes.bool,
	defaultValue: PropTypes.string,
	grammars: PropTypes.array,
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
	className: PropTypes.string,
	style: PropTypes.object,
	timeout: PropTypes.number,
	stopTooltip: PropTypes.string,
	startTooltip: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ]),
	width: PropTypes.number,
	height: PropTypes.number
};


// EXPORTS //

export default VoiceInput;
