// MODULES //

import React, { Fragment, useCallback, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormGroup from 'react-bootstrap/FormGroup';
import Modal from 'react-bootstrap/Modal';
import generateUID from '@isle-project/utils/uid/incremental';
import Tooltip from '@isle-project/components/tooltip';
import TextArea from '@isle-project/components/input/text-area';
import CheckboxInput from '@isle-project/components/input/checkbox';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import SessionContext from '@isle-project/session/context.js';
import { USER_FEEDBACK_CONFUSED, USER_FEEDBACK_UNDERSTOOD, USER_FEEDBACK_FORM } from '@isle-project/constants/actions.js';
import Confused from '-!svg-react-loader!./img/confused.svg';
import Understood from '-!svg-react-loader!./img/lightbulb.svg';
import Feedback from '-!svg-react-loader!./img/feedback.svg';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './feedback.css';


// VARIABLES //

const DEFAULT_CUSTOM_FEEDBACK = {
	needsExplanation: false,
	noUnderstanding: false,
	noLogic: false,
	comments: ''
};
const uid = generateUID( 'feedback' );


// FUNCTIONS //

const FeedbackModal = ({ closeModal, id, session, t }) => {
	const [ customFeedback, setCustomFeedback ] = useState( DEFAULT_CUSTOM_FEEDBACK );

	const submitFeedback = useCallback( () => {
		session.log({
			id: id,
			type: USER_FEEDBACK_FORM,
			value: customFeedback
		}, 'members' );

		setCustomFeedback( DEFAULT_CUSTOM_FEEDBACK );
		closeModal();
		session.addNotification({
			title: t( 'thank-you' ),
			message: t( 'submit-custom-message' ),
			level: 'info',
			position: 'tr'
		});
	}, [ closeModal, customFeedback, id, session, t ] );

	return (
		<Modal
			show={true}
			onHide={closeModal}
			dialogClassName="modal-50w"
			title={t('feedback')}
			backdrop={true}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-lg">{t('feedback')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<FormGroup>
					<CheckboxInput
						onChange={() => {
							setCustomFeedback({
								...customFeedback,
								noUnderstanding: !customFeedback.noUnderstanding
							});
						}}
						legend={t('no-understanding')}
					/>
					<CheckboxInput
						onChange={() => {
							setCustomFeedback({
								...customFeedback,
								needsExplanation: !customFeedback.needsExplanation
							});
						}}
						legend={t('needs-detailed-explanation')}
					/>
					<CheckboxInput
						onChange={() => {
							setCustomFeedback({
								...customFeedback,
								noLogic: !customFeedback.noLogic
							});
						}}
						legend={t('cannot-follow')}
					/>
				</FormGroup>
				<TextArea
					onChange={( comments ) => {
						setCustomFeedback({
							...customFeedback,
							comments
						});
					}}
					legend={t('textarea-legend')}
					text={t('enter-text')}
					resizable="none"
					rows={6}
				/>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={closeModal} >
					{t('cancel')}
				</Button>
				<Button variant="primary" onClick={submitFeedback}>
					{t('submit')}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};


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
const FeedbackButtons = ( props ) => {
	const id = useRef( props.id || uid( props ) );
	const session = useContext( SessionContext );
	const { t } = useTranslation( 'feedback' );
	const [ submittedBinary, setSubmittedBinary ] = useState( false );
	const [ showModal, setShowModal ] = useState( false );

	const submitConfused = useCallback( () => {
		session.log({
			id: id.current,
			type: USER_FEEDBACK_CONFUSED,
			value: 'confused'
		}, 'members' );
		session.addNotification({
			title: t( 'thank-you' ),
			message: t( 'submit-confused-message' ),
			level: 'info',
			position: 'tr'
		});
		setSubmittedBinary( true );
	}, [ session, t ] );
	const submitUnderstood = useCallback( () => {
		session.log({
			id: id.current,
			type: USER_FEEDBACK_UNDERSTOOD,
			value: 'understood'
		}, 'members' );
		session.addNotification({
			title: t( 'thank-you' ),
			message: t( 'submit-understood-message' ),
			level: 'info',
			position: 'tr'
		});
		setSubmittedBinary( true );
	}, [ session, t ] );

	const closeModal = () => {
		setShowModal( false );
	};
	const openModal = () => {
		setShowModal( true );
	};
	const tpos = props.vertical ? 'left' : 'bottom';
	return (
		<div id={id.current} className={`feedback-buttons ${props.className}`} >
			<ButtonGroup style={{ float: 'right', ...props.style }} vertical={props.vertical} >
				{ submittedBinary ?
					<Fragment>
						<Button aria-label="Confused" variant="light" disabled className="feedback-button-disabled" size="small" >
							<Confused className="feedback-icon" />
						</Button>
						<Button aria-label="Understood" variant="light" disabled className="feedback-button-disabled" size="small" >
							<Understood className="feedback-icon" />
						</Button>
					</Fragment> :
					<Fragment>
						<Tooltip id="tooltip_confused" placement={tpos} tooltip={<strong>{props.confusedMsg || t('not-clear')}</strong>}>
							<Button aria-label="Confused" variant="light" className="feedback-button" size="small" onClick={submitConfused}>
								<Confused className="feedback-icon" />
							</Button>
						</Tooltip>
						<Tooltip id="tooltip_understood" placement={tpos} tooltip={<strong>{props.understoodMsg || t('makes-sense')}</strong>} >
							<Button aria-label="Understood" variant="light" className="feedback-button" size="small" onClick={submitUnderstood}>
								<Understood className="feedback-icon" />
							</Button>
						</Tooltip>
					</Fragment>
				}
				{ props.customFeedback ? <Tooltip placement={tpos} id="tooltip_feedback" tooltip={<strong>{props.feedbackMsg || t('have-feedback')}</strong>} >
					<Button aria-label={t('give-custom-feedback')} variant="light" className="feedback-button" size="small" onClick={openModal}>
						<Feedback className="feedback-icon" />
					</Button>
				</Tooltip> : null }
				<ResponseVisualizer
					variant="light"
					buttonLabel={props.vertical ? '' : t( 'responses' )}
					buttonStyle={{
						fontSize: '10px',
						lineHeight: props.vertical ? '2em' : 'inherit'
					}}
					style={{
						width: '100%'
					}}
					showID={false}
					id={id.current}
					success={USER_FEEDBACK_UNDERSTOOD}
					danger={USER_FEEDBACK_CONFUSED}
					info={USER_FEEDBACK_FORM}
					noSessionRegistration
				/>
			</ButtonGroup>
			{ showModal ? <FeedbackModal
				closeModal={closeModal} id={id.current} session={session} t={t}
			/> : null }
		</div>
	);
};


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

export default withPropCheck( FeedbackButtons );
