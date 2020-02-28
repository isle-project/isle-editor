// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextEditor from 'components/text-editor';
import VoiceInput from 'components/input/voice';
import Tooltip from 'components/tooltip';
import { P } from 'pdfmake/build/pdfmake';


// VARIABLES //

const debug = logger( 'isle:statusbar:voice-control' );


// MAIN //

class VoiceControl extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			recordedText: null,
			transcript: [],
			showTranscriptEditor: false
		};
	}

	handleFinalVoiceInput = ( text ) => {
		const recordedText = text[ 0 ];
		const transcript = this.state.transcript;
		transcript.push( recordedText );
		this.setState({
			transcript,
			recordedText
		}, this.renderRecordedText );
		setTimeout(() => {
			this.setState({ recordedText: null }, this.renderRecordedText );
		}, 3000 );
		const session = this.props.session;
		session.speechInterface.check( text );
	}

	handleVoiceInput = ( text ) => {
		debug( 'Received voice input: ' + text );
		const recordedText = text[ 0 ];
		this.setState({
			recordedText
		}, this.renderRecordedText );
	}

	stopRecording = () => {
		this.setState({ recordedText: null }, this.renderRecordedText );
	}

	toggleTranscriptEditor = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		this.setState({
			showTranscriptEditor: !this.state.showTranscriptEditor
		});
	}

	handleVoiceInputChange = ( event ) => {
		event.stopPropagation();
	}

	renderRecordedText = () => {
		if ( this.state.recordedText ) {
			this.displayedText.innerHTML = this.state.recordedText;
		} else {
			this.displayedText.innerHTML = '';
		}
	}

	render() {
		const session = this.props.session;
		let transcriptText = '';
		if ( this.state.showTranscriptEditor ) {
			const date = new Date();
			transcriptText += `# Transcript for ISLE lesson ${session.namespaceName+'/'+session.lessonName}`;
			if ( !isEmptyObject( session.user ) ) {
				transcriptText += `\n## by ${session.user.name} (${session.user.email})`;
			}
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
						onClick={this.handleVoiceInputChange}
						mode="microphone" width={18} height={18}
						stopTooltip="Disable voice recording / control (F9)"
						startTooltip="Enable voice recording / control (F9)"
						onSegment={this.handleVoiceInput}
						onFinalText={this.handleFinalVoiceInput}
						onRecordingStop={this.stopRecording}
						maxAlternatives={5}
						remote={{
							toggle: 120 // F9
						}}
					/>
				</div>
				{ this.state.transcript.length > 0 ? <Tooltip placement="bottom" tooltip="Open transcript" >
					<span role="button" tabIndex={0}
						onClick={this.toggleTranscriptEditor} onKeyPress={this.toggleTranscriptEditor}
						className="statusbar-transcript-editor statusbar-icon"
					>
						<span className="fa fa-xs fa-closed-captioning" />
					</span>
				</Tooltip> : null }
				<span
					ref={( span ) => { this.displayedText = span; }}
					className="statusbar-voice-text"
				></span>
				{ this.state.showTranscriptEditor ? <Modal
					show={this.state.showTranscriptEditor}
					onHide={this.toggleTranscriptEditor}
					dialogClassName="modal-100w"
				>
					<Modal.Header closeButton >
						<Modal.Title as="h3">
							Transcript
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
								title: 'Load latest transcript',
								body: 'Clicking this button will discard the current file and load the latest transcript.',
								buttonLabel: 'Confirm',
								tooltip: 'Load latest transcript',
								notificationTitle: 'Transcript loaded',
								notification: 'The current file has been successfully discarded and the latest transcript loaded into the editor.',
								icon: <i className="prosemirror-icon fa fa-closed-captioning"></i>
							}}
							canLoadHTML={false}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.toggleTranscriptEditor}>Close</Button>
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
