// MODULES //

import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import DraggableList from '@isle-project/components/draggable-list';
import TimedButton from '@isle-project/components/timed-button';
import HintButton from '@isle-project/components/hint-button';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import ChatButton from '@isle-project/components/internal/chat-button';
import FeedbackButtons from '@isle-project/components/feedback';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import { OPEN_HINT, SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import './order_question.css';


// VARIABLES //

const debug = logger( 'isle:order-question' );


// MAIN //

/**
* An order question component that asks student to bring a collection of elements into the correct order.
*
* @property {(string|node)} question - question for which the student has to bring the available `options` into the correct order
* @property {Array} options - an array of texts which the student has to bring into the correct ordering (assumed to be the supplied order)
* @property {boolean} provideFeedback - controls whether to show a notification displaying whether the submitted answer is correct or not
* @property {Array} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} failureMsg - message to be displayed when student submits a wrong answer
* @property {string} successMsg - message to be displayed when student submits the correct answer
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback  which is triggered after dragging an element; has two parameters: a `boolean` indicating whether the elements were placed in the correct order and and `array` with the current ordering
* @property {Function} onSubmit - callback invoked when answer is submitted; has as a sole parameter a `boolean` indicating whether the elements were placed in the correct order
*/
const OrderQuestion = ( props ) => {
	const { disableSubmitNotification, onChange, onSubmit } = props;
	const { logAction, id } = useActionLogger( 'ORDER_QUESTION', props );
	const session = useContext( SessionContext );
	const { t } = useTranslation( 'questions/order' );
	const [ submitted, setSubmitted ] = useState( false );
	const [ options, setOptions ]= useState(
		props.options.map( ( val, idx ) => {
			return {
				id: idx,
				text: val
			};
		})
	);
	const [ state, setState ] = useState({
		cards: null,
		correct: false
	});
	useEffect( () => {
		setOptions(
			props.options.map( ( val, idx ) => {
				return {
					id: idx,
					text: val
				};
			})
		);
	}, [ props.options ] );

	const handleChange = useCallback( ( cards ) => {
		let correct = true;
		for ( let i = 0; i < cards.length; i++ ) {
			if ( cards[ i ].id !== i ) {
				correct = false;
				break;
			}
		}
		onChange( cards, correct );
		setState({
			cards,
			correct
		});
		setSubmitted( false );
	}, [ onChange ] );

	const logHint = useCallback( ( idx ) => {
		debug( 'Logging hint...' );
		logAction( OPEN_HINT, idx );
	}, [ logAction ] );

	const sendSubmitNotification = useCallback( () => {
		if ( props.provideFeedback ) {
			if ( state.correct ) {
				session.addNotification({
					title: t('correct'),
					message: props.successMsg || t('submission-correct'),
					level: 'success'
				});
			} else {
				session.addNotification({
					title: t('incorrect'),
					message: props.failureMsg || t('submission-incorrect'),
					level: 'error'
				});
			}
		} else {
			session.addNotification({
				title: t('submitted'),
				message: t('submission-message'),
				level: 'info'
			});
		}
	}, [ props.failureMsg, props.successMsg, state.correct, props.provideFeedback, session, t ] );
	const handleSubmit = useCallback( () => {
		if ( !disableSubmitNotification ) {
			sendSubmitNotification();
		}
		onSubmit( state.cards, state.correct );
		setSubmitted( true );
		logAction( SUBMISSION, state.cards.map( x => x.text ).join( ' -> ' ) );
	}, [ disableSubmitNotification, sendSubmitNotification, logAction, state, onSubmit ] );
	const nHints = props.hints.length;
	return (
		<Card id={id} className="order-question" style={props.style} >
			<Card.Body style={{ width: props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
				<label>{props.question}</label>
				<DraggableList
					shuffle data={options}
					onChange={handleChange}
					onInit={handleChange}
					disabled={submitted && state.correct}
				/>
				<div className="order-question-toolbar">
					{ nHints > 0 ?
						<HintButton onClick={logHint} hints={props.hints} placement={props.hintPlacement} /> :
						null
					}
					{ props.until && session.startTime > props.until ?
						<span className="title" style={{ marginLeft: 4 }} >{t('question-closed')}</span> :
						<TimedButton
							className="submit-button" variant="primary" size="sm"
							onClick={handleSubmit}
							disabled={submitted && state.correct}
						>
							{ submitted ? t('resubmit') : t('submit') }
						</TimedButton>
					}
					{
						props.chat ?
							<ChatButton for={id} /> : null
					}
				</div>
				<ResponseVisualizer
					id={id}
					data={{
						type: 'factor',
						question: props.question,
						solution: props.options
					}}
					info="ORDER_QUESTION_SUBMISSION"
					points={props.points}
				/>
				{ props.feedback ? <FeedbackButtons
					id={id+'_feedback'}
				/> : null }
				<GradeFeedbackRenderer for={id} points={props.points} />
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

OrderQuestion.defaultProps = {
	question: '',
	provideFeedback: true,
	hints: [],
	hintPlacement: 'bottom',
	feedback: true,
	chat: false,
	failureMsg: null,
	successMsg: null,
	disableSubmitNotification: false,
	until: null,
	points: 10,
	style: {},
	onChange() {},
	onSubmit() {}
};

OrderQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	options: PropTypes.array.isRequired,
	provideFeedback: PropTypes.bool,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	disableSubmitNotification: PropTypes.bool,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default withPropCheck( OrderQuestion );
