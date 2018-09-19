// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Modal from 'react-bootstrap/lib/Modal';
import Tooltip from 'components/tooltip';
import TextArea from 'components/text-area';
import CheckboxInput from 'components/input/checkbox';
import InstructorBar from 'components/instructor-bar';
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
			...ORIGINAL_STATE
		};
	}

	/**
	* Callback invoked when user clicks on the "Confused" button. Sends
	* data to server and display notification.
	*/
	submitConfused = () => {
		const { session } = this.context;
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
	}

	/**
	* Callback invoked when the user clicks the "Understood" button. Sends
	* data to server and display notification.
	*/
	submitUnderstood = () => {
		const { session } = this.context;
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
	}

	submitFeedback = () => {
		const { session } = this.context;

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
		const tpos = (this.props.vertical ? 'left' : 'bottom');
		return (
			<div className="feedback-buttons" style={{ ...this.props.style }}>
				<ButtonGroup style={{ float: 'right' }} vertical={this.props.vertical} >
					<Tooltip id="tooltip_confused" placement={tpos} tooltip={<strong> I am confused.</strong>}>
						<Button className="feedback-button" bsSize="small" onClick={this.submitConfused}>
							<Confused className="icon" />
						</Button>
					</Tooltip>
					<Tooltip id="tooltip_understood" placement={tpos} tooltip={<strong> Makes sense.</strong>} >
						<Button className="feedback-button" bsSize="small" onClick={this.submitUnderstood}>
							<Understood className="icon" />
						</Button>
					</Tooltip>
					<Tooltip placement={tpos} id="tooltip_feedback" tooltip={<strong> I have feedback. </strong>} >
						<Button className="feedback-button" bsSize="small" onClick={this.openModal}>
							<Feedback className="icon" />
						</Button>
					</Tooltip>
					<InstructorBar buttonLabel="" buttonStyle={{ fontSize: '10px', lineHeight: this.props.vertical ? '2em' : '37px' }} showID={false} id={this.props.id} />
				</ButtonGroup>
				<Modal
					show={this.state.showModal}
					onHide={this.closeModal}
					bsSize="lg"
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
						<Button bsStyle="primary" onClick={this.submitFeedback}>
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

FeedbackButtons.contextTypes = {
	session: PropTypes.object
};

FeedbackButtons.defaultProps = {
	vertical: false,
	style: {}
};


// EXPORTS //

export default FeedbackButtons;
