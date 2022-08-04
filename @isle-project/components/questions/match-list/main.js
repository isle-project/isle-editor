// MODULES //

import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import SolutionButton from '@isle-project/components/solution-button';
import ChatButton from '@isle-project/components/internal/chat-button';
import HintButton from '@isle-project/components/hint-button';
import Tooltip from '@isle-project/components/tooltip';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import FeedbackButtons from '@isle-project/components/feedback';
import Text from '@isle-project/components/text';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import { OPEN_HINT, SUBMISSION, TOGGLE_SOLUTION } from '@isle-project/constants/actions.js';
import { RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import createColorScale from './create_color_scale.js';
import OptionsList from './options_list.js';
import './match_list_question.css';


// VARIABLES //

const debug = logger( 'isle:match-list-question' );


// MAIN //

/**
* An ISLE component that renders a question in which the learner has to match elements from two lists with each other in the correct way.
*
* @property {(string|node)} question - question to be displayed at the top of the match list question component
* @property {Array} elements - an `array` holding the correct pairs displayed at the top of the free text question component. Each `array` element must be an `object` with `a` and `b` properties; supply elements with only `a` or `b` properties to add distractor answers
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} provideFeedback - indicates whether the solution should be accessible after learners submit their answers
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {Array} colorScale - if set, the supplied colors are used for the tiles
* @property {string} shuffle - specifies whether to shuffle the `left`, `right`, or `both` columns whose elements have to be matched; supply `none` or any other value to not shuffle elements on either side (may be useful in case when there is no solution present)
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} submissionMsg - notification displayed when the learner first submits his answer
* @property {string} resubmissionMsg - notification displayed for all submissions after the first one
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback invoked when students submits an answer
* @property {Function} onChange - callback invoked when students changes an answer
*/
const MatchListQuestion = ( props ) => {
	const { question, elements, hints, submissionMsg, resubmissionMsg,
		disableSubmitNotification, onSubmit, until, onChange
	} = props;
	const { retrieveLastAction, logAction, id } = useActionLogger( 'MATCH_LIST_QUESTION', props );
	const session = useContext( SessionContext );
	const { t } = useTranslation( 'questions/match-list' );

	const [ leftSelected, setLeftSelected ] = useState( null );
	const [ rightSelected, setRightSelected ] = useState( null );
	const [ colorScale, setColorScale ] = useState( props.colorScale ? props.colorScale : createColorScale( 2 * elements.length ) );
	const lastAnswer = retrieveLastAction( SUBMISSION );
	const [ answers, setAnswers ] = useState( lastAnswer || [] );
	const [ userAnswers, setUserAnswers ] = useState( null );
	const [ submitted, setSubmitted ] = useState( false );

	const setToLastAction = useCallback( () => {
		debug( `Set submission to last action for question ${id} if available...` );
		const value = retrieveLastAction( SUBMISSION );
		if ( value ) {
			const elements = JSON.parse( value );
			setAnswers( elements.map( ( q, i ) => {
				if ( !q.a || !q.b ) {
					return q;
				}
				return {
					...q,
					color: colorScale[ i ]
				};
			}) );
			setSubmitted( true );
		}
	}, [ colorScale, retrieveLastAction, id ] );

	useEffect( () => {
		const unsubscribe = session.subscribe( ( type ) => {
			if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
				setToLastAction();
			}
		});
		return () => {
			unsubscribe();
		};
	}, [ session, setToLastAction ] );

	useEffect( () => {
		if ( leftSelected && rightSelected ) {
			const newAnswers = answers.slice();
			const newColorScale = colorScale.slice();
			newAnswers.push({
				a: leftSelected,
				b: rightSelected,
				color: newColorScale.pop()
			});
			setLeftSelected( null );
			setRightSelected( null );
			setAnswers( newAnswers );
			setColorScale( newColorScale );
		}
	}, [ leftSelected, rightSelected, answers, colorScale ]);

	const logHint = useCallback( ( idx ) => {
		debug( 'Logging hint...' );
		logAction( OPEN_HINT, idx );
	}, [ logAction ] );
	const sendSubmitNotification = useCallback( () => {
		if ( submitted ) {
			session.addNotification({
				title: t('answer-resubmitted'),
				message: resubmissionMsg,
				level: 'info'
			});
		} else {
			session.addNotification({
				title: t('answer-submitted'),
				message: submissionMsg,
				level: 'info'
			});
		}
	}, [ session, submissionMsg, resubmissionMsg, submitted, t ] );
	const toggleSolution = useCallback( () => {
		const { elements, colorScale } = props;
		let solutionColorScale;
		if ( !colorScale ) {
			solutionColorScale = createColorScale( 2 * elements.length );
		} else {
			solutionColorScale = colorScale;
		}
		logAction( TOGGLE_SOLUTION );
		if ( !userAnswers ) {
			setUserAnswers( answers );
			setAnswers( elements.map( ( q, i ) => {
				if ( !q.a || !q.b ) {
					return q;
				}
				return {
					...q,
					color: solutionColorScale[ i ]
				};
			}) );
		} else {
			// Revert answers
			setUserAnswers( null );
			setAnswers( userAnswers );
		}
	}, [ props, userAnswers, answers, logAction ] );
	const handleSubmit = useCallback( () => {
		if ( !disableSubmitNotification ) {
			sendSubmitNotification();
		}
		setSubmitted( true );
		const newAnswers = answers.map( ans => ({ a: ans.a, b: ans.b }) );
		logAction( SUBMISSION, JSON.stringify( newAnswers ) );
		onSubmit( newAnswers );
	}, [ answers, disableSubmitNotification, logAction, sendSubmitNotification, onSubmit ] );
	const renderSubmitButton = useCallback( ( unfinished ) => {
		if ( until && session.startTime > until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{t('question-closed')}</span>;
		}
		return (
			<Tooltip id={`${id}_tooltip`} tooltip={t('submit-tooltip')} >
				<div style={{ display: 'inline-block' }}>
					<Button
						className="submit-button"
						variant="primary"
						size="sm"
						onClick={handleSubmit}
						style={{
							pointerEvents: unfinished ? 'none' : null
						}}
						disabled={unfinished}
					>
						{ !submitted ? t('submit') : t('resubmit') }
					</Button>
				</div>
			</Tooltip>
		);
	}, [ session, handleSubmit, submitted, t, until ] );

	const handleLeftSelection = useCallback( ( option ) => {
		const newColorScale = colorScale.slice();
		const newAnswers = answers.filter(
			answer => {
				if ( answer.a === option || answer.b === option ) {
					newColorScale.push( answer.color );
				}
				return answer.a !== option && answer.b !== option;
			}
		);
		setAnswers( newAnswers );
		setColorScale( newColorScale );
		setLeftSelected( option );
		onChange( newAnswers );
	}, [ answers, colorScale, onChange ] );

	const handleRightSelection = useCallback( ( option ) => {
		const newColorScale = colorScale.slice();
		const newAnswers = answers.filter(
			answer => {
				if ( answer.a === option || answer.b === option ) {
					newColorScale.push( answer.color );
				}
				return answer.a !== option && answer.b !== option;
			}
		);
		setAnswers( newAnswers );
		setColorScale( newColorScale );
		setRightSelected( option );
		onChange( answers );
	}, [ answers, colorScale, onChange ] );

	if ( elements.some( x => !x.a && !x.b ) ) {
		return <Alert variant="danger" >{t('expect-a-or-b-for-each-element')}</Alert>;
	}
	const nHints = hints.length;
	const solutionButton = <SolutionButton onClick={toggleSolution} disabled={!submitted} />;
	const optionsLeft = [];
	const optionsRight = [];
	let nComplete = 0;
	for ( let i = 0; i < elements.length; i++ ) {
		const { a, b } = elements[ i ];
		optionsLeft.push( a || null );
		optionsRight.push( b || null );
		if ( a && b ) {
			nComplete += 1;
		}
	}
	const unfinished = answers.length !== nComplete;
	return (
		<div id={id} className={`match-list-question-container ${props.className}`} style={props.style} >
			{ isString( question ) ? <Text inline className="question" raw={question} /> : <span className="question">{question}</span> }
			<i style={{ fontSize: '0.8rem' }} >{t('instructions', { complete: nComplete })}</i>
			<div className="match-list-question-lists">
				<OptionsList
					options={optionsLeft}
					onSelect={handleLeftSelection}
					answers={answers}
					active={leftSelected}
					shuffle={props.shuffle === 'left' || props.shuffle === 'both'}
				/>
				<OptionsList
					options={optionsRight}
					onSelect={handleRightSelection}
					answers={answers}
					active={rightSelected}
					baseColor="rgb(250,250,255)"
					shuffle={props.shuffle === 'right' || props.shuffle === 'both'}
				/>
			</div>
			<div className="match-list-question-controls">
				{renderSubmitButton( unfinished )}
				{ props.provideFeedback ? solutionButton : null }
				{ nHints > 0 ?
					<HintButton onClick={logHint} hints={props.hints} placement={props.hintPlacement} /> :
					null
				}
				{
					props.chat ?
						<div style={{ display: 'inline-block', marginLeft: '4px' }}>
							<ChatButton for={id} />
						</div> : null
				}
				<ResponseVisualizer
					buttonLabel={t('answers')}
					info="MATCH_LIST_SUBMISSION"
					id={id}
					data={{
						type: 'matches',
						left: props.elements.map( x => x.a ),
						right: props.elements.map( x => x.b ),
						question: props.question,
						solution: props.elements
					}}
					points={props.points}
				/>
			</div>
			{ props.feedback ? <FeedbackButtons
				style={{ marginTop: '5px', marginRight: '8px' }}
				id={id+'_feedback'}
			/> : null }
			<GradeFeedbackRenderer for={id} points={props.points} />
		</div>
	);
};


// PROPERTIES //

MatchListQuestion.defaultProps = {
	question: '',
	elements: [],
	hints: [],
	hintPlacement: 'bottom',
	provideFeedback: true,
	feedback: true,
	chat: false,
	colorScale: null,
	shuffle: 'both',
	disableSubmitNotification: false,
	submissionMsg: 'You have successfully submitted your answer.',
	resubmissionMsg: 'You have successfully re-submitted your answer.',
	until: null,
	points: 10,
	className: '',
	style: {},
	onChange() {},
	onSubmit() {}
};

MatchListQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	elements: PropTypes.arrayOf( PropTypes.shape({
		a: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node
		]),
		b: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node
		])
	}) ),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	provideFeedback: PropTypes.bool,
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	colorScale: PropTypes.array,
	shuffle: PropTypes.oneOf([ 'left', 'right', 'both', 'none' ]),
	disableSubmitNotification: PropTypes.bool,
	submissionMsg: PropTypes.string,
	resubmissionMsg: PropTypes.string,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default withPropCheck( MatchListQuestion );
