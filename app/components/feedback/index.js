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
import './feedback.css';
import Confused from '-!svg-react-loader!./../../img/confused.svg';
import Understood from '-!svg-react-loader!./../../img/lightbulb.svg';
import Feedback from '-!svg-react-loader!./../../img/feedback.svg';


// MAIN //

class FeedbackButtons extends Component {
	constructor() {
		super();

		this.state = {
			showModal: false
		};
	}

	/**
	* Callback invoked when user clicks on the "Confused" button. Sends
	* data to server and display notification.
	*/
	submitConfused = () => {
		const { session } = this.context;
		session.log({
			id: this.props.for,
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
			id: this.props.for,
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
			noUnderstanding: this.checkbox01.state.value,
			needsExplanation: this.checkbox02.state.value,
			noLogic: this.checkbox03.state.value,
			comments: this.textarea.state.value
		};
		session.log({
			id: this.props.for,
			type: 'USER_FEEDBACK_FORM',
			value: formData
		}, 'members' );

		this.setState({ showModal: false });
		session.addNotification({
			title: 'Thank you!',
			message: 'Thank you for for taking the time to send us feedback.',
			level: 'info',
			position: 'tr'
		});
	}

	/*
	* React component render method.
	*/
	render() {
		const closeModal = () => this.setState({ showModal: false });
		const openModal = () => this.setState({ showModal: true });
		const tpos = (this.props.vertical ? 'left' : 'bottom');

		return (
			<div className="feedback-buttons" style={{ float: 'right' }}>
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
						<Button className="feedback-button" bsSize="small" onClick={openModal}>
							<Feedback className="icon" />
						</Button>
					</Tooltip>
				</ButtonGroup>
				<Modal
					show={this.state.showModal}
					onHide={closeModal}
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
								ref={( div ) => { this.checkbox01 = div; }}
								legend="I do not understand this at all."
							/>
							<CheckboxInput
								ref={( div ) => { this.checkbox02 = div; }}
								legend="This needs a more detailed explanation."
							/>
							<CheckboxInput
								ref={( div ) => { this.checkbox03 = div; }}
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
						<Button onClick={closeModal}>
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


// TYPES //

FeedbackButtons.propDescriptions = {
	for: 'id of the component for which feedback shall be collected',
	vertical: 'buttons are displayed vertically if set to `true`'
};

FeedbackButtons.propTypes = {
	for: PropTypes.string.isRequired,
	vertical: PropTypes.bool
};

FeedbackButtons.contextTypes = {
	session: PropTypes.object
};


// DEFAULT PROPERTIES //

FeedbackButtons.defaultProps = {
	vertical: false
};


// EXPORTS //

export default FeedbackButtons;
