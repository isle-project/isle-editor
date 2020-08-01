// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import generateUID from 'utils/uid';
import Image from 'components/image';
import ResponseVisualizer from 'components/response-visualizer';
import TimedButton from 'components/timed-button';
import HintButton from 'components/hint-button';
import ChatButton from 'components/chat-button';
import Sketchpad from 'components/sketchpad';
import FeedbackButtons from 'components/feedback';
import SessionContext from 'session/context.js';
import blobToBase64 from 'utils/blob-to-base64';
import { IMAGE_QUESTION_SUBMISSION, IMAGE_QUESTION_OPEN_HINT } from 'constants/actions.js';
import './load_translations.js';
import './image_question.css';


// VARIABLES //

const uid = generateUID( 'image-question' );
const debug = logger( 'isle:image-question' );


// MAIN //

/**
* A question that asks the user to upload an image.
*
* @property {string} question - question for which the student has to bring the available `options` into the correct order
* @property {Array} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {Object} sketchpad - properties to be passed to <Sketchpad /> component; sketchpad will not be rendered if set to `null`
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback  which is triggered after dragging an element; has two parameters: a `boolean` indicating whether the elements were placed in the correct order and and `array` with the current ordering
* @property {Function} onSubmit - callback invoked when answer is submitted; has as a sole parameter a `boolean` indicating whether the elements were placed in the correct order
*/
class ImageQuestion extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );

		// Initialize state variables...
		this.state = {
			submitted: false,
			src: null
		};
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const session = this.context;
		session.log({
			id: this.id,
			type: IMAGE_QUESTION_OPEN_HINT,
			value: idx
		});
	}

	sendSubmitNotification = () => {
		const session = this.context;
		session.addNotification({
			title: this.props.t('sunmitted'),
			message: this.props.t('answer-submitted'),
			level: 'info'
		});
	}

	handleSubmit = () => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		this.props.onSubmit();
		this.setState({
			submitted: true
		});
		if ( this.state.src ) {
			session.log({
				id: this.id,
				type: IMAGE_QUESTION_SUBMISSION,
				value: this.state.src
			});
		} else {
			const canvas = document.getElementById( this.id+'-canvas' );
			canvas.toBlob( ( blob ) => {
				blobToBase64( blob ).then( src => {
					session.log({
						id: this.id,
						type: IMAGE_QUESTION_SUBMISSION,
						value: src
					});
					this.setState({
						src
					});
				});
			});
		}
	}

	/**
	* Event handler ignoring default dragging behavior and preventing bubbling-up.
	*/
	ignoreDrag = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
	}

	/**
	* Creates FileReader and attaches event listener for when the file is ready.
	*/
	handleFileUpload = () => {
		const reader = new FileReader();
		const selectedFile = this.fileUpload.files[ 0 ];
		reader.addEventListener( 'load', this.onFileRead, false );
		reader.readAsDataURL( selectedFile );
	}

	/**
	* Event handler invoked when user drags file onto the upload area.
	*/
	onFileDrop = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
		const dt = evt.dataTransfer;
		const reader = new FileReader();
		let file = null;
		if ( dt.items ) {
			if ( dt.items[ 0 ].kind === 'file' ) {
				file = dt.items[ 0 ].getAsFile();
			}
		} else {
			file = dt.files[ 0 ];
		}
		this.mimeType = file.type;
		if ( file ) {
			reader.addEventListener( 'load', this.onFileRead, false );
			reader.readAsDataURL( file );
		}
	}

	onFileRead = ( event ) => {
		let result = event.target.result;
		this.setState({
			src: result
		});
	}

	render() {
		const nHints = this.props.hints.length;
		return (
			<Card id={this.id} className={`image-question ${this.props.className}`} style={this.props.style} >
				<Card.Body style={{ width: this.props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
					<label>{this.props.question}</label>
					{ this.state.src ?
						<Image
							className="image-question-image center"
							alt={this.props.t('upload')}
							src={this.state.src}
						/> :
						<Fragment>
							<div
								className="image-question-dropzone"
								onDrop={this.onFileDrop}
								onDragOver={this.ignoreDrag}
								onDragEnd={this.ignoreDrag}
							>
								<span>{this.props.t('drop-file')}</span>
							</div>
							<p className="center">{this.props.t('or')}</p>
							<input
								id={this.id+'-upload'}
								className="image-question-upload center"
								type="file"
								accept="image/*"
								onChange={this.handleFileUpload}
								ref={fileUpload => {
									this.fileUpload = fileUpload;
								}}
							/>
							<p className="center">{this.props.t('or')}</p>
							{this.props.sketchpad ? <Sketchpad
								id={this.id}
								hideNavigationButtons hideSaveButtons hideTransmitButtons
								canvasWidth={900}
								canvasHeight={600}
								{...this.props.sketchpad}
							/> : null}
						</Fragment>
					}
					{ this.props.feedback ? <FeedbackButtons vertical
						id={this.id+'_feedback'}
						style={{
							position: 'absolute',
							right: '4px',
							top: '4px'
						}}
					/> : null }
					<ResponseVisualizer
						buttonLabel="Answers" id={this.id}
						info={IMAGE_QUESTION_SUBMISSION}
						data={{
							question: this.props.question,
							type: 'image'
						}}
					/>
					<div className="image-question-toolbar">
						{ nHints > 0 ?
							<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
							null
						}
						{ this.state.src ? <Button size="sm" variant="warning" onClick={() => {
							this.setState({ src: null });
						}}>{this.props.t('reset')}</Button> : null }
						<TimedButton
							className="submit-button" variant="primary" size="sm" onClick={this.handleSubmit}
						>
							{ this.state.submitted ? this.props.t('resubmit') : this.props.t('submit') }
						</TimedButton>
						{
							this.props.chat ?
								<ChatButton for={this.id} /> : null
						}
					</div>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

ImageQuestion.defaultProps = {
	question: '',
	hints: [],
	hintPlacement: 'bottom',
	feedback: true,
	chat: false,
	disableSubmitNotification: false,
	className: '',
	sketchpad: {},
	style: {},
	onSubmit() {}
};

ImageQuestion.propTypes = {
	question: PropTypes.string,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	disableSubmitNotification: PropTypes.bool,
	className: PropTypes.string,
	sketchpad: PropTypes.object,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

ImageQuestion.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'image-question' )( ImageQuestion );
