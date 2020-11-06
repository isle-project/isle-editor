// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormGroup from 'react-bootstrap/FormGroup';
import Modal from 'react-bootstrap/Modal';
import generateUID from 'utils/uid/incremental';
import Tooltip from 'components/tooltip';
import TextArea from 'components/input/text-area';
import CheckboxInput from 'components/input/checkbox';
import ResponseVisualizer from 'components/internal/response-visualizer';
import SessionContext from 'session/context.js';
import { USER_FEEDBACK_CONFUSED, USER_FEEDBACK_UNDERSTOOD, USER_FEEDBACK_FORM } from 'constants/actions.js';
import Confused from '-!svg-react-loader!./../../img/confused.svg';
import Understood from '-!svg-react-loader!./../../img/lightbulb.svg';
import Feedback from '-!svg-react-loader!./../../img/feedback.svg';
import './load_translations.js';
import './feedback.css';


// VARIABLES //

const ORIGINAL_STATE = {
	showModal: false,
	needsExplanation: false,
	noUnderstanding: false,
	noLogic: false
};
const uid = generateUID( 'feedback' );


// MAIN //

/**
* Buttons to collect user feedback.
*
* @property {boolean} customFeedback - controls whether the component accepts custom feedback
* @property {string} confusedMsg - message to be displayed in tooltip for confused button
* @property {string} feedbackMsg - message to be displayed in tooltip for detailed feedback button
* @property {string} understoodMsg - message to be displayed in tooltip for understood button
* @property {boolean} vertical - buttons are displayed vertically if set to `true`
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class FeedbackButtons extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid();
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
			id: this.id,
			type: USER_FEEDBACK_CONFUSED,
			value: 'confused'
		}, 'members' );
		session.addNotification({
			title: this.props.t( 'thank-you' ),
			message: this.props.t( 'submit-confused-message' ),
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
			id: this.id,
			type: USER_FEEDBACK_UNDERSTOOD,
			value: 'understood'
		}, 'members' );
		session.addNotification({
			title: this.props.t( 'thank-you' ),
			message: this.props.t( 'submit-understood-message' ),
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
			id: this.id,
			type: USER_FEEDBACK_FORM,
			value: formData
		}, 'members' );

		this.setState({
			...ORIGINAL_STATE
		});
		session.addNotification({
			title: this.props.t( 'thank-you' ),
			message: this.props.t( 'submit-custom-message' ),
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
			<div id={this.id} className={`feedback-buttons ${this.props.className}`} >
				<ButtonGroup style={{ float: 'right', ...this.props.style }} vertical={this.props.vertical} >
					{ this.state.submittedBinaryChoice ?
						<Fragment>
							<Button aria-label="Confused" variant="light" disabled className="feedback-button-disabled" size="small" >
								<Confused className="feedback-icon" />
							</Button>
							<Button aria-label="Understood" variant="light" disabled className="feedback-button-disabled" size="small" >
								<Understood className="feedback-icon" />
							</Button>
						</Fragment> :
						<Fragment>
							<Tooltip id="tooltip_confused" placement={tpos} tooltip={<strong>{this.props.confusedMsg || this.props.t('not-clear')}</strong>}>
								<Button aria-label="Confused" variant="light" className="feedback-button" size="small" onClick={this.submitConfused}>
									<Confused className="feedback-icon" />
								</Button>
							</Tooltip>
							<Tooltip id="tooltip_understood" placement={tpos} tooltip={<strong>{this.props.understoodMsg || this.props.t('makes-sense')}</strong>} >
								<Button aria-label="Understood" variant="light" className="feedback-button" size="small" onClick={this.submitUnderstood}>
									<Understood className="feedback-icon" />
								</Button>
							</Tooltip>
						</Fragment>
					}
					{ this.props.customFeedback ? <Tooltip placement={tpos} id="tooltip_feedback" tooltip={<strong>{this.props.feedbackMsg || this.props.t('have-feedback')}</strong>} >
						<Button aria-label={this.props.t('give-custom-feedback')} variant="light" className="feedback-button" size="small" onClick={this.openModal}>
							<Feedback className="feedback-icon" />
						</Button>
					</Tooltip> : null }
					<ResponseVisualizer
						variant="light"
						buttonLabel={this.props.vertical ? '' : this.props.t( 'responses' )}
						buttonStyle={{
							fontSize: '10px',
							lineHeight: this.props.vertical ? '2em' : 'inherit'
						}}
						style={{
							width: '100%'
						}}
						showID={false}
						id={this.id}
						success={USER_FEEDBACK_UNDERSTOOD}
						danger={USER_FEEDBACK_CONFUSED}
						info={USER_FEEDBACK_FORM}
						noSessionRegistration
					/>
				</ButtonGroup>
				<Modal
					show={this.state.showModal}
					onHide={this.closeModal}
					dialogClassName="modal-50w"
					title={this.props.t('feedback')}
					backdrop={true}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">{this.props.t('feedback')}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup>
							<CheckboxInput
								onChange={() => {
									this.setState({
										noUnderstanding: !this.state.noUnderstanding
									});
								}}
								legend={this.props.t('no-understanding')}
							/>
							<CheckboxInput
								onChange={() => {
									this.setState({
										needsExplanation: !this.state.needsExplanation
									});
								}}
								legend={this.props.t('needs-detailed-explanation')}
							/>
							<CheckboxInput
								onChange={() => {
									this.setState({
										noLogic: !this.state.noLogic
									});
								}}
								legend={this.props.t('cannot-follow')}
							/>
						</FormGroup>
						<TextArea
							ref={( div ) => { this.textarea = div; }}
							legend={this.props.t('textarea-legend')}
							text={this.props.t('enter-text')}
							resizable="none"
							rows={6}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeModal}>
							{this.props.t('cancel')}
						</Button>
						<Button variant="primary" onClick={this.submitFeedback}>
							{this.props.t('submit')}
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
	confusedMsg: PropTypes.string,
	feedbackMsg: PropTypes.string,
	understoodMsg: PropTypes.string,
	customFeedback: PropTypes.bool,
	vertical: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
};

FeedbackButtons.contextType = SessionContext;

FeedbackButtons.defaultProps = {
	customFeedback: true,
	confusedMsg: null,
	feedbackMsg: null,
	understoodMsg: null,
	vertical: false,
	className: '',
	style: {}
};


// EXPORTS //

export default withTranslation( 'feedback' )( FeedbackButtons );
