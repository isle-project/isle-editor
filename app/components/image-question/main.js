// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import { toJpeg } from 'html-to-image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import contains from '@stdlib/assert/contains';
import generateUID from 'utils/uid';
import Image from 'components/image';
import Spinner from 'components/internal/spinner';
import ResponseVisualizer from 'components/response-visualizer';
import SolutionButton from 'components/solution-button';
import TimedButton from 'components/timed-button';
import HintButton from 'components/hint-button';
import ChatButton from 'components/chat-button';
import Sketchpad from 'components/sketchpad';
import FeedbackButtons from 'components/feedback';
import GradeFeedbackRenderer from 'components/internal/grade-feedback-renderer';
import SessionContext from 'session/context.js';
import blobToBase64 from 'utils/blob-to-base64';
import { IMAGE_QUESTION_SUBMISSION, IMAGE_QUESTION_OPEN_HINT } from 'constants/actions.js';
import './load_translations.js';
import './image_question.css';


// VARIABLES //

const uid = generateUID( 'image-question' );
const debug = logger( 'isle:image-question' );
const RE_IMAGE_SRC = /src="([^"]*)"/;


// MAIN //

/**
* A question that asks the user to upload an image.
*
* @property {(string|node)} question - question for which the student has to bring the available `options` into the correct order
* @property {Array} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {Object} sketchpad - properties to be passed to <Sketchpad /> component; to render the sketchpad, pass in at least an empty object `{}`
* @property {string} solution - image URL of model solution
* @property {Date} until - time until students should be allowed to submit answers
* @property {boolean} disableSubmitNotification - controls whether a notification should be displayed after submitting an image
* @property {number} points - maximum number of points awarded in grading
* @property {string} className - class name
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
			src: null,
			exhaustedHints: props.hints.length === 0,
			displaySolution: false,
			isProcessing: false
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
			title: this.props.t('submitted'),
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

	toggleSpinner = () => {
		this.setState({
			isProcessing: !this.state.isProcessing
		});
	}

	/**
	* Event handler invoked when user drags file onto the upload area.
	*/
	onDrop = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
		this.toggleSpinner();
		const dt = evt.dataTransfer;
		const reader = new FileReader();
		let file = null;
		if ( dt.items && dt.items.length > 0 ) {
			const item = dt.items[ 0 ];
			if ( item.kind === 'file' ) {
				file = item.getAsFile();
			}
			else if ( item.kind === 'string' ) {
				item.getAsString( ( str ) => {
					if ( contains( str, '<img' ) ) {
						const match = str.match( RE_IMAGE_SRC );
						if ( match ) {
							this.setState({
								src: match[ 1 ]
							}, this.toggleSpinner );
						}
					} else if ( contains( str, '<thead' ) ) {
						const node = document.createElement( 'table' );
						node.innerHTML = str;
						document.body.appendChild( node );
						toJpeg( node, {
							backgroundColor: 'white',
							style: {
								fontSize: 12
							},
							width: 600
						}).then( data => {
							this.setState({
								src: data
							}, this.toggleSpinner );
							node.remove();
						});
					} else {
						const node = document.createElement( 'pre' );
						node.innerHTML = str;
						document.body.appendChild( node );
						toJpeg( node, {
							backgroundColor: 'white',
							style: {
								fontSize: 14
							}
						}).then( data => {
							this.setState({
								src: data
							}, this.toggleSpinner );
							node.remove();
						});
					}
				});
			}
		}
		else if ( dt.files && dt.files.length > 0 ) {
			file = dt.files[ 0 ];
		}
		if ( file ) {
			this.mimeType = file.type;
			if ( file ) {
				reader.addEventListener( 'load', this.onFileRead, false );
				reader.readAsDataURL( file );
			}
		}
	}

	onFileRead = ( event ) => {
		let result = event.target.result;
		this.setState({
			src: result
		});
	}

	handleSolutionClick = () => {
		this.setState({
			displaySolution: !this.state.displaySolution
		});
	}

	renderSubmitButton() {
		const session = this.context;
		if ( this.props.until && session.startTime > this.props.until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{this.props.t('question-closed')}</span>;
		}
		return (
			<TimedButton
				className="submit-button" variant="primary" size="sm" onClick={this.handleSubmit}
			>
				{ this.state.submitted ? this.props.t('resubmit') : this.props.t('submit') }
			</TimedButton>
		);
	}

	render() {
		const nHints = this.props.hints.length;
		const solutionButton = <SolutionButton
			disabled={!this.state.submitted || !this.state.exhaustedHints}
			onClick={this.handleSolutionClick}
			hasHints={this.props.hints.length > 0}
		/>;

		let content;
		if ( !this.state.isProcessing ) {
			content = this.state.src ?
			<div className="center" style={{ maxWidth: 600 }}>
				{this.state.displaySolution ?
					<Image
						alt={this.props.t('model-solution')}
						src={this.props.solution}
						width="100%" height="auto"
						style={{
							border: 'solid 1px gold'
						}}
					/> : <Image
						alt={this.props.t('upload')}
						src={this.state.src}
						width="100%" height="auto"
					/>
				}
			</div>:
			<Fragment>
				<div
					className="image-question-dropzone"
					onDrop={this.onDrop}
					onDragOver={this.ignoreDrag}
					onDragEnd={this.ignoreDrag}
				>
					<span>{this.props.t('drop-image')}</span>
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
				{this.props.sketchpad ?
				<Fragment>
					<p className="center">{this.props.t('or')}</p>
					<Sketchpad
						id={this.id}
						hideNavigationButtons hideSaveButtons hideTransmitButtons
						canvasWidth={900}
						canvasHeight={600}
						{...this.props.sketchpad}
					/>
				</Fragment> : null}
			</Fragment>;
		}
		return (
			<Card id={this.id} className={`image-question ${this.props.className}`} style={this.props.style} >
				<Card.Body style={{ width: this.props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
					<label>{this.props.question}</label>
					<Spinner running={this.state.isProcessing} width={256} height={128} />
					{content}
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
						points={this.props.points}
					/>
					<div className="image-question-toolbar">
						{ nHints > 0 ?
							<HintButton
								onClick={this.logHint}
								hints={this.props.hints}
								placement={this.props.hintPlacement}
								onFinished={() => {
									this.setState({ exhaustedHints: true });
								}}
							/> :
							null
						}
						{ this.state.src ? <Button size="sm" variant="warning" onClick={() => {
							this.setState({ src: null });
						}}>{this.props.t('reset')}</Button> : null }
						{this.renderSubmitButton()}
						{this.props.solution ? solutionButton : null}
						{
							this.props.chat ?
								<ChatButton for={this.id} /> : null
						}
					</div>
					<GradeFeedbackRenderer for={this.id} points={this.props.points} />
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
	sketchpad: null,
	solution: null,
	until: null,
	points: 10,
	style: {},
	onSubmit() {}
};

ImageQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	disableSubmitNotification: PropTypes.bool,
	className: PropTypes.string,
	sketchpad: PropTypes.object,
	solution: PropTypes.string,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

ImageQuestion.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'image-question' )( ImageQuestion );
