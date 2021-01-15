// MODULES //

import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import shuffle from '@stdlib/random/shuffle';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import * as d3 from 'd3';
import generateUID from '@isle-project/utils/uid';
import SolutionButton from '@isle-project/components/solution-button';
import ChatButton from '@isle-project/components/chat-button';
import HintButton from '@isle-project/components/hint-button';
import Tooltip from '@isle-project/components/tooltip';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import FeedbackButtons from '@isle-project/components/feedback';
import Text from '@isle-project/components/text';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import { MATCH_LIST_TOGGLE_SOLUTION, MATCH_LIST_OPEN_HINT, MATCH_LIST_SUBMISSION } from '@isle-project/constants/actions.js';
import { addResources } from '@isle-project/locales';
import OptionsList from './options_list.js';
import './match_list_question.css';


// VARIABLES //

addResources( 'MatchListQuestion' );
const debug = logger( 'isle:match-list-question' );
const uid = generateUID( 'match-list-question' );


// FUNCTIONS //

function createColorScale( length ) {
	const color = d3.scaleLinear().domain([ 1, length ])
		.interpolate( d3.interpolateHclLong )
		.range([ d3.rgb( 'violet' ), d3.rgb( 'yellow' ) ]);

	const colorScale = new Array( length );
	for ( let i = 0; i < length; i++ ) {
		colorScale[ i ] = color( i );
	}
	return shuffle( colorScale );
}


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
* @property {string} shuffle - specifies whether to shuffle the `left`, `right`, or `both` columns whose elements have to be matched
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} submissionMsg - notification displayed when the learner first submits his answer
* @property {string} resubmissionMsg - notification displayed for all submissions after the first one
* @property {number} maxlength - maximum allowed number of characters
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback invoked when students submits an answer
*/
const MatchListQuestion = ( props ) => {
	const { question, elements, hints } = props;
	const id = useRef( props.id || uid( props ) );
	const session = useContext( SessionContext );

	const [ leftSelected, setLeftSelected ] = useState( null );
	const [ rightSelected, setRightSelected ] = useState( null );
	const [ colorScale, setColorScale ] = useState( props.colorScale ? props.colorScale : createColorScale( 2 * elements.length ) );
	const [ answers, setAnswers ] = useState([]);
	const [ userAnswers, setUserAnswers ] = useState( null );
	const [ submitted, setSubmitted ] = useState( false );

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

	const logHint = ( idx ) => {
		debug( 'Logging hint...' );
		session.log({
			id: id.current,
			type: MATCH_LIST_OPEN_HINT,
			value: idx
		});
	};
	const sendSubmitNotification = () => {
		if ( submitted ) {
			session.addNotification({
				title: props.t('answer-resubmitted'),
				message: props.resubmissionMsg,
				level: 'info'
			});
		} else {
			session.addNotification({
				title: props.t('answer-submitted'),
				message: props.submissionMsg,
				level: 'info'
			});
		}
	};
	const toggleSolution = () => {
		const { elements, colorScale } = props;
		let solutionColorScale;
		if ( !colorScale ) {
			solutionColorScale = createColorScale( 2 * elements.length );
		} else {
			solutionColorScale = colorScale;
		}
		session.log({
			id: id.current,
			type: MATCH_LIST_TOGGLE_SOLUTION,
			value: null
		});
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
	};
	const handleSubmit = () => {
		if ( !props.disableSubmitNotification ) {
			sendSubmitNotification();
		}
		setSubmitted( true );
		const newAnswers = answers.map( ans => ({ a: ans.a, b: ans.b }) );
		session.log({
			id: id.current,
			type: MATCH_LIST_SUBMISSION,
			value: JSON.stringify( newAnswers )
		});
		props.onSubmit( newAnswers );
	};
	const renderSubmitButton = ( unfinished ) => {
		if ( props.until && session.startTime > props.until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{props.t('question-closed')}</span>;
		}
		return (
			<Tooltip id={`${id.current}_tooltip`} tooltip={props.t('submit-tooltip')} >
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
						{ !submitted ? props.t('submit') : props.t('resubmit') }
					</Button>
				</div>
			</Tooltip>
		);
	};
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
		<div id={id.current} className={`match-list-question-container ${props.className}`} style={props.style} >
			{ isString( question ) ? <Text inline className="question" raw={question} /> : <span className="question">{question}</span> }
			<i style={{ fontSize: '0.8rem' }} >{props.t('instructions', { complete: nComplete })}</i>
			<div className="match-list-question-lists">
				<OptionsList
					options={optionsLeft}
					onSelect={( option ) => {
						const newColorScale = colorScale.slice();
						setAnswers( answers.filter(
							answer => {
								if ( answer.a === option || answer.b === option ) {
									newColorScale.push( answer.color );
								}
								return answer.a !== option && answer.b !== option;
							}
						) );
						setColorScale( newColorScale );
						setLeftSelected( option );
					}}
					answers={answers}
					active={leftSelected}
					shuffle={props.shuffle === 'left' || props.shuffle === 'both'}
				/>
				<OptionsList
					options={optionsRight}
					onSelect={( option ) => {
						const newColorScale = colorScale.slice();
						setAnswers( answers.filter(
							answer => {
								if ( answer.a === option || answer.b === option ) {
									newColorScale.push( answer.color );
								}
								return answer.a !== option && answer.b !== option;
							}
						) );
						setColorScale( newColorScale );
						setRightSelected( option );
					}}
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
							<ChatButton for={id.current} />
						</div> : null
				}
				<ResponseVisualizer
					buttonLabel={props.t('answers')}
					info={MATCH_LIST_SUBMISSION}
					id={id.current}
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
				id={id.current+'_feedback'}
			/> : null }
			<GradeFeedbackRenderer for={id.current} points={props.points} />
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
	onSubmit() {}
};

MatchListQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	elements: PropTypes.arrayOf( PropTypes.shape({
		a: PropTypes.string.isRequired,
		b: PropTypes.string.isRequired
	}) ),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	provideFeedback: PropTypes.bool,
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	colorScale: PropTypes.array,
	shuffle: PropTypes.oneOf([ 'left', 'right', 'both' ]),
	disableSubmitNotification: PropTypes.bool,
	submissionMsg: PropTypes.string,
	resubmissionMsg: PropTypes.string,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'MatchListQuestion' )( MatchListQuestion );
