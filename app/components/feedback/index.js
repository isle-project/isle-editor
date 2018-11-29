// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Modal from 'react-bootstrap/lib/Modal';
import Tooltip from 'components/tooltip';
import TextArea from 'components/input/text-area';
import CheckboxInput from 'components/input/checkbox';
import ResponseVisualizer from 'components/response-visualizer';
import SessionContext from 'session/context.js';
import Confused from '-!svg-react-loader!./../../img/confused.svg';
import Understood from '-!svg-react-loader!./../../img/lightbulb.svg';
import Feedback from '-!svg-react-loader!./../../img/feedback.svg';
import './feedback.css';


// VARIABLES //

const ORIGINAL_STATE = {
	showModal: false,
	needsExplanation: false,
	noUnderstanding: false,
	noLogic: false
};


// MAIN //

/**
* Buttons to collect user feedback.
*
* @property {boolean} vertical - buttons are displayed vertically if set to `true`
* @property {Object} style - CSS inline styles
*/
class FeedbackButtons extends Component {
	constructor() {
		super();

		this.state = {
			submittedBinaryChoice: false,
			...ORIGINAL_STATE
		};
	}

	/**
	* Callback invoked when user clicks on the "Confused" button. Sends
	* data to server and display notification.
	*/
	submitConfused = () => {
		const session = this.context;
		session.log({
			id: this.props.id,
			type: 'USER_FEEDBACK_CONFUSED',
			value: 'confused'
		}, 'members' );
		session.addNotification({
			title: 'Thank you!',
			message: 'We are sorry to hear that. Your feedback helps us to improve the material.',
			level: 'info',
			position: 'tr'
		});
		this.setState({
			submittedBinaryChoice: true
		});
	}

	/**
	* Callback invoked when the user clicks the "Understood" button. Sends
	* data to server and display notification.
	*/
	submitUnderstood = () => {
		const session = this.context;
		session.log({
			id: this.props.id,
			type: 'USER_FEEDBACK_UNDERSTOOD',
			value: 'understood'
		}, 'members' );
		session.addNotification({
			title: 'Thank you!',
			message: 'Glad to hear that! Thank you for your feedback.',
			level: 'info',
			position: 'tr'
		});
		this.setState({
			submittedBinaryChoice: true
		});
	}

	submitFeedback = () => {
		const session = this.context;

		// Fetch form values.
		const formData = {
			noUnderstanding: this.state.noUnderstanding,
			needsExplanation: this.state.needsExplanation,
			noLogic: this.state.noLogic,
			comments: this.textarea.state.value
		};
		session.log({
			id: this.props.id,
			type: 'USER_FEEDBACK_FORM',
			value: formData
		}, 'members' );

		this.setState({
			...ORIGINAL_STATE
		});
		session.addNotification({
			title: 'Thank you!',
			message: 'Thank you for for taking the time to send us feedback.',
			level: 'info',
			position: 'tr'
		});
	}

	closeModal = () => {
		return this.setState({ ...ORIGINAL_STATE });
	}

	openModal = () => {
		this.setState({ showModal: true });
	}

	/*
	* React component render method.
	*/
	render() {
		const tpos = this.props.vertical ? 'left' : 'bottom';
		return (
			<div id={this.props.id} lassName="feedback-buttons" style={{ ...this.props.style }}>
				<ButtonGroup style={{ float: 'right' }} vertical={this.props.vertical} >
					{ this.state.submittedBinaryChoice ?
						<Fragment>
							<Button variant="light" disabled className="feedback-button-disabled" size="small" >
								<Confused className="feedback-icon" />
							</Button>
							<Button variant="light" disabled className="feedback-button-disabled" size="small" >
								<Understood className="feedback-icon" />
							</Button>
						</Fragment> :
						<Fragment>
							<Tooltip id="tooltip_confused" placement={tpos} tooltip={<strong> I am confused.</strong>}>
								<Button variant="light" className="feedback-button" size="small" onClick={this.submitConfused}>
									<Confused className="feedback-icon" />
								</Button>
							</Tooltip>
							<Tooltip id="tooltip_understood" placement={tpos} tooltip={<strong> Makes sense.</strong>} >
								<Button variant="light" className="feedback-button" size="small" onClick={this.submitUnderstood}>
									<Understood className="feedback-icon" />
								</Button>
							</Tooltip>
						</Fragment>
					}
					<Tooltip placement={tpos} id="tooltip_feedback" tooltip={<strong> I have feedback. </strong>} >
						<Button variant="light" className="feedback-button" size="small" onClick={this.openModal}>
							<Feedback className="feedback-icon" />
						</Button>
					</Tooltip>
					<ResponseVisualizer
						variant="light"
						buttonLabel={this.props.vertical ? '' : 'Responses'}
						buttonStyle={{
							fontSize: '10px',
							lineHeight: this.props.vertical ? '2em' : 'inherit'
						}}
						style={{
							width: '100%'
						}}
						showID={false}
						id={this.props.id}
						success="USER_FEEDBACK_UNDERSTOOD"
						danger="USER_FEEDBACK_CONFUSED"
					/>
				</ButtonGroup>
				<Modal
					show={this.state.showModal}
					onHide={this.closeModal}
					dialogClassName="modal-50w"
					title="Feedback"
					backdrop={true}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">Feedback</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup>
							<CheckboxInput
								onChange={() => {
									this.setState({
										noUnderstanding: !this.state.noUnderstanding
									});
								}}
								legend="I do not understand this at all."
							/>
							<CheckboxInput
								onChange={() => {
									this.setState({
										needsExplanation: !this.state.needsExplanation
									});
								}}
								legend="This needs a more detailed explanation."
							/>
							<CheckboxInput
								onChange={() => {
									this.setState({
										noLogic: !this.state.noLogic
									});
								}}
								legend="I can't follow the logic."
							/>
						</FormGroup>
						<TextArea
							ref={( div ) => { this.textarea = div; }}
							legend="I have the following comments (optional):"
							text="Enter text"
							resizable={false}
							rows={6}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeModal}>
							Cancel
						</Button>
						<Button variant="primary" onClick={this.submitFeedback}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
				<div id="response"></div>
			</div>
		);
	}
}


// PROPERTIES //

FeedbackButtons.propTypes = {
	id: PropTypes.string.isRequired,
	vertical: PropTypes.bool,
	style: PropTypes.object
};

FeedbackButtons.contextType = SessionContext;

FeedbackButtons.defaultProps = {
	vertical: false,
	style: {}
};


// EXPORTS //

export default FeedbackButtons;
