// MODULES //

import radium from 'radium';
import React, { Component } from 'react';
import { Button, ButtonGroup, FormGroup, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from 'components/styles';
import TextArea from 'components/text-area';
import CheckboxInput from 'components/input/checkbox';


// FEEDBACK BUTTONS //

class FeedbackButtons extends Component {

	constructor() {
		super();

		this.state = {
			showModal: false
		};

		/**
		* Callback invoked when user clicks on the "Confused" button. Sends
		* data to server and display notification.
		*/
		this.submitConfused = () => {
			global.lesson.session.log({
				id: this.props.for,
				type: 'USER_FEEDBACK_CONFUSED',
				value: 'confused'
			});
			global.lesson.addNotification({
				title: 'Thank you!',
				message: 'We are sorry to hear that. Your feedback helps us to improve the material.',
				level: 'info',
				position: 'tr'
			});
		};

		/**
		* Callback invoked when the user clicks the "Understood" button. Sends
		* data to server and display notification.
		*/
		this.submitUnderstood = () => {
			global.lesson.session.log({
				id: this.props.for,
				type: 'USER_FEEDBACK_UNDERSTOOD',
				value: 'understood'
			});
			global.lesson.addNotification({
				title: 'Thank you!',
				message: 'Glad to hear that! Thank you for your feedback.',
				level: 'info',
				position: 'tr'
			});
		};

		this.submitFeedback = () => {

			// Fetch form values.
			const formData = {
				noUnderstanding: this.refs.checkbox01.state.value,
				needsExplanation: this.refs.checkbox02.state.value,
				noLogic: this.refs.checkbox03.state.value,
				comments: this.refs.textarea.state.text
			};

			global.lesson.session.log({
				id: this.props.for,
				type: 'USER_FEEDBACK_FORM',
				value: formData
			});

			this.setState({ showModal: false });

			global.lesson.addNotification({
				title: 'Thank you!',
				message: 'Thank you for for taking the time to send us feedback.',
				level: 'info',
				position: 'tr'
			});
		};

	}

	/*
	* React component render method.
	*/
	render() {
		const closeModal = () => this.setState({ showModal: false });
		const openModal = () => this.setState({ showModal: true });

		return (
			<div className="feedbackButtons" style={{ float: 'right' }}>
				<ButtonGroup style={{ float: 'right' }} vertical>
					<OverlayTrigger placement="left" overlay={ <Tooltip id="tooltip_confused"><strong> I am confused. </strong></Tooltip>}>
						<Button bsSize="small" onClick={this.submitConfused}>
							<div key="confused" style={[ styles.icon, styles[ 'confused' ] ]} />
						</Button>
					</OverlayTrigger>
					<OverlayTrigger placement="left" overlay={ <Tooltip id="tooltip_understood"><strong> Makes sense. </strong></Tooltip>}>
						<Button bsSize="small" onClick={this.submitUnderstood}>
							<div key="understood" style={[ styles.icon, styles[ 'understood' ] ]} />
						</Button>
					</OverlayTrigger>
					<OverlayTrigger placement="left" overlay={ <Tooltip id="tooltip_feedback"><strong> I have feedback. </strong></Tooltip>}>
						<Button bsSize="small" onClick={openModal}>
							<div key="feedback" style={[ styles.icon, styles[ 'feedback' ] ]} />
						</Button>
					</OverlayTrigger>
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
								ref="checkbox01"
								legend="I do not understand this at all."
							/>
							<CheckboxInput
								ref="checkbox02"
								legend="This needs a more detailed explanation."
							/>
							<CheckboxInput
								ref="checkbox03"
								legend="I can't follow the logic."
							/>
						</FormGroup>
						<TextArea
							ref="textarea"
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


// PROPERTY TYPES //

FeedbackButtons.propTypes = {
	for: React.PropTypes.string.isRequired,
	url: React.PropTypes.string
};


// DEFAULT PROPERTIES //

FeedbackButtons.defaultProps = {
	url: ''
};


// EXPORTS //

export default radium( FeedbackButtons );
