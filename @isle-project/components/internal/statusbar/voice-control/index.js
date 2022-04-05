// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextEditor from '@isle-project/components/text-editor';
import VoiceInput from '@isle-project/components/input/voice';
import Tooltip from '@isle-project/components/tooltip';
import { MEMBER_ACTION, VOICE_TEXT, VOICE_TEXT_SEGMENT } from '@isle-project/constants/events.js';


// VARIABLES //

const debug = logger( 'isle:statusbar:voice-control' );


// FUNCTIONS //

function stopPropagation( event ) {
	event.stopPropagation();
}


// MAIN //

class VoiceControl extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			recordedText: null,
			transcript: [],
			showTranscriptEditor: false,
			isSegment: false
		};
	}

	componentDidMount() {
		const session = this.props.session;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === MEMBER_ACTION ) {
				if ( action.type === VOICE_TEXT ) {
					this.setState({
						recordedText: action.value,
						isSegment: false
					}, this.renderRecordedText );
					setTimeout(() => {
						this.setState({ recordedText: null }, this.renderRecordedText );
					}, 3000 );
				}
				else if ( action.type === VOICE_TEXT_SEGMENT ) {
					this.setState({
						recordedText: action.value,
						isSegment: true
					}, this.renderRecordedText );
				}
			}
		});
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	handleFinalVoiceInput = ( text ) => {
		const recordedText = text[ 0 ];
		const transcript = this.state.transcript;
		transcript.push( recordedText );
		this.setState({
			transcript,
			recordedText,
			isSegment: false
		}, this.renderRecordedText );
		setTimeout(() => {
			this.setState({ recordedText: null }, this.renderRecordedText );
		}, 3000 );
		const session = this.props.session;
		session.log({
			id: VOICE_TEXT,
			type: VOICE_TEXT,
			value: recordedText,
			noSave: true
		}, 'members' );
	};

	handleVoiceInput = ( text ) => {
		debug( 'Received voice input: ' + text );
		const recordedText = text[ 0 ];
		this.setState({
			recordedText,
			isSegment: true
		}, this.renderRecordedText );
		const session = this.props.session;
		session.log({
			id: VOICE_TEXT_SEGMENT,
			type: VOICE_TEXT_SEGMENT,
			value: recordedText,
			noSave: true
		}, 'members' );
	};

	handleStartRecording = () => {
		const session = this.props.session;
		session.setVoiceRecordingStatus( true );
	};

	handleStopRecording = () => {
		this.setState({
			recordedText: null
		}, this.renderRecordedText );
		const session = this.props.session;
		session.setVoiceRecordingStatus( false );
	};

	toggleTranscriptEditor = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		this.setState({
			showTranscriptEditor: !this.state.showTranscriptEditor
		});
	};

	renderRecordedText = () => {
		if ( this.state.recordedText ) {
			this.displayedText.innerHTML = this.state.recordedText;
		} else {
			this.displayedText.innerHTML = '';
		}
	};

	render() {
		const session = this.props.session;
		let transcriptText = '';
		if ( this.state.showTranscriptEditor ) {
			const date = new Date();
			transcriptText += `# ${this.props.t( 'transcript-header' )} ${session.namespaceName+'/'+session.lessonName}`;
			if ( !isEmptyObject( session.user ) ) {
				// eslint-disable-next-line i18next/no-literal-string
				transcriptText += `\n## ${this.props.t( 'by' )} ${session.user.name} (${session.user.email})`;
			}
			// eslint-disable-next-line i18next/no-literal-string
			transcriptText += `\n### ${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
			transcriptText += '\n\n\n';
			transcriptText += this.state.transcript.join( '\n' );
		}
		return (
			<Fragment>
				<div
					className="statusbar-voice"
					style={{
						display: !session.config.hideVoiceControl ? 'inherit' : 'none'
					}}
				>
					<VoiceInput
						id="statusbar-voice"
						onClick={stopPropagation}
						mode="microphone" width={18} height={18}
						stopTooltip={`${this.props.t( 'disable-voice' )} (F9)`}
						startTooltip={`${this.props.t( 'enable-voice' )} (F9)`}
						onSegment={this.handleVoiceInput}
						onFinalText={this.handleFinalVoiceInput}
						onRecordingStart={this.handleStartRecording}
						onRecordingStop={this.handleStopRecording}
						maxAlternatives={5}
						speechInterface={session.speechInterface}
						remote={{
							toggle: 120 // F9
						}}
					/>
				</div>
				{ this.state.transcript.length > 0 ? <Tooltip placement="bottom" tooltip={this.props.t( 'open-transcript' )} >
					<span role="button" tabIndex={0}
						onClick={this.toggleTranscriptEditor} onKeyPress={this.toggleTranscriptEditor}
						className="statusbar-transcript-editor statusbar-icon"
					>
						<span className="fa fa-xs fa-closed-captioning" />
					</span>
				</Tooltip> : null }
				<span
					ref={( span ) => { this.displayedText = span; }}
					style={{
						color: this.state.isSegment ? 'darkslategray' : 'black'
					}}
					className="statusbar-voice-text"
				></span>
				{ this.state.showTranscriptEditor ? <Modal
					show={this.state.showTranscriptEditor}
					onHide={this.toggleTranscriptEditor}
					dialogClassName="modal-100w"
				>
					<Modal.Header closeButton >
						<Modal.Title as="h3">
							{this.props.t( 'transcript' )}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{
						height: window.innerHeight * 0.8
					}}>
						<TextEditor
							id={`${session.namespaceName}-${session.lessonName}-transcript`}
							defaultValue={transcriptText}
							allowSubmissions={false}
							resetModal={{
								title: this.props.t( 'load-latest-transcript' ),
								body: this.props.t( 'transcript-click-discard' ),
								buttonLabel: this.props.t( 'confirm' ),
								tooltip: this.props.t( 'load-latest-transcript' ),
								notificationTitle: this.props.t( 'transcript-loaded' ),
								notification: this.props.t( 'transcript-discard-notification' ),
								icon: <i className="prosemirror-icon fa fa-closed-captioning"></i>
							}}
							canLoadHTML={false}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.toggleTranscriptEditor}>{this.props.t( 'close' )}</Button>
					</Modal.Footer>
				</Modal> : null }
			</Fragment>
		);
	}
}


// PROPERTIES //

VoiceControl.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default VoiceControl;
