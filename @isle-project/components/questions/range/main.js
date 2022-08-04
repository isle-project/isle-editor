// MODULES //

import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import logger from 'debug';
import PINF from '@stdlib/constants/float64/pinf';
import NINF from '@stdlib/constants/float64/ninf';
import minimum from '@stdlib/math/base/special/min';
import maximum from '@stdlib/math/base/special/max';
import roundn from '@stdlib/math/base/special/roundn';
import isnan from '@stdlib/assert/is-nan';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import ChatButton from '@isle-project/components/internal/chat-button';
import TimedButton from '@isle-project/components/timed-button';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import NumberInput from '@isle-project/components/input/number';
import HintButton from '@isle-project/components/hint-button';
import FeedbackButtons from '@isle-project/components/feedback';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import { OPEN_HINT, SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import './range_question.css';


// VARIABLES //

const debug = logger( 'isle:range-question' );


// MAIN //

/**
* A range question component that asks students to supply a lower and upper end point.
*
* @property {(string|node)} question - displayed question
* @property {Array<number>} solution - two-element array containing the endpoints of the correct range
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {Array} labels - two-element array of custom labels other than "Lower" and "Upper"
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {number} digits - number of digits that have to match between solution and user-supplied answer. If not given or set to null, the component checks for strict equality. If set to 0, checks for integer equality
* @property {number} max - maximum input value
* @property {number} min - minimum input value
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {number} nTries - after how many tries feedback should be supplied (if `provideFeedback` is `true`)
* @property {boolean} submitAfterFeedback - controls whether one should be able to resubmit even after the solution has been revealed
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
* @property {Object} style - CSS inline styles
* @property {Function} onChangeUpper - callback triggered after the upper bound is changed by the user
* @property {Function} onChangeLower - callback triggered after the lower bound is changed by the user
* @property {Function} onChange - callback triggered after a bound is changed by the user (with lower and upper bound as arguments)
* @property {Function} onSubmit - callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly answered (if applicable, `null` otherwise) and the supplied answer as the second parameter
 */
const RangeQuestion = ( props ) => {
	const { digits, min, max, points, question, solution, until, feedback, style,
		provideFeedback, submitAfterFeedback, hints, nTries, chat, labels,
		onChangeUpper, onChangeLower, onChange, onSubmit } = props;
	const session = useContext( SessionContext );

	const [ lower, setLower ] = useState( min );
	const [ upper, setUpper ] = useState( max );
	const [ submitted, setSubmitted ] = useState( false );
	const [ correct, setCorrect ] = useState({ lower: false, upper: false });
	const [ numSubmissions, setNumSubmissions ] = useState( 0 );
	const { t } = useTranslation( 'questions/range' );
	const { logAction, id } = useActionLogger( 'RANGE_QUESTION', props );

	const handleChangeUpper = useCallback( ( newValue ) => {
		setUpper( newValue );
		onChangeUpper( maximum( newValue, lower ) );
		onChange( [ lower, maximum( newValue, lower ) ] );
	}, [ lower, onChange, onChangeUpper ] );
	const handleChangeLower = useCallback( ( newValue ) => {
		setLower( newValue );
		onChangeLower( minimum( newValue, upper ) );
		onChange( [ minimum( newValue, upper ), upper ] );
	}, [ upper, onChange, onChangeLower ] );
	const handleBlurUpper = useCallback( ( value ) => {
		if ( value <= lower ) {
			setUpper( lower );
		}
	}, [ lower ] );
	const handleBlurLower = useCallback( ( value ) => {
		if ( value >= upper ) {
			setLower( upper );
		}
	}, [ upper ] );
	const logHint = useCallback( ( idx ) => {
		debug( 'Logging hint...' );
		logAction( OPEN_HINT, idx );
	}, [ logAction ] );
	const submitHandler = useCallback( () => {
		let correct = { lower: false, upper: false };
		const lowerVal = parseFloat( lower );
		const upperVal = parseFloat( upper );
		if ( !isUndefinedOrNull( solution ) ) {
			if ( digits === null ) {
				correct.lower = lowerVal === solution[ 0 ];
				correct.upper = upperVal === solution[ 1 ];
			} else {
				correct.lower = roundn( lowerVal, -digits ) === roundn( solution[0], -digits );
				correct.upper = roundn( upperVal, -digits ) === roundn( solution[1], -digits );
			}
			onSubmit( correct, [ lowerVal, upperVal ] );
			if ( provideFeedback ) {
				let message;
				let level;
				if ( correct.lower && correct.upper ) {
					message = t('submission-correct');
					level = 'success';
				} else {
					message = numSubmissions + 1 < nTries ?
						t('submission-try-again') + ' (' +
							t('tries', { count:
								nTries - numSubmissions + 1
							}) + ').' : t('submission-incorrect');
					level = 'error';
				}
				session.addNotification({
					title: t('answer-submitted'),
					message,
					level
				});
			} else {
				session.addNotification({
					title: submitted ? t('answer-resubmitted') : t('answer-submitted'),
					message: submitted ?
						t('resubmission-message') :
						t('submission-message'),
					level: 'info'
				});
			}
		} else {
			onSubmit( null, [ lowerVal, upperVal ] );
			session.addNotification({
				title: submitted ? t('answer-resubmitted') : t('answer-submitted'),
				message: submitted ?
					t('resubmission-message') :
					t('submission-message'),
				level: 'success'
			});
		}
		setSubmitted( true );
		setCorrect( correct );
		setNumSubmissions( numSubmissions + 1 );
		logAction( SUBMISSION, JSON.stringify( [ lower, upper ] ) );
	}, [ digits, lower, upper, onSubmit, numSubmissions, nTries, provideFeedback, logAction, session, solution, submitted, t ] );
	const handleKeyPress = useCallback( ( event ) => {
		if ( event.charCode === 13 ) {
			// Manually trigger blur event since not happening when pressing ENTER:
			if ( document && document.activeElement ) {
				debug( 'Trigger blur event...' );
				document.activeElement.blur();
			}
			setTimeout( submitHandler, 50 );
		}
	}, [ submitHandler ] );
	useEffect(() => {
		if ( solution && !isnan( solution[ 1 ] ) && !isnan( solution[ 0 ] ) ) {
			setLower( min );
			setUpper( max );
			setSubmitted( false );
			setCorrect({ lower: false, upper: false });
		}
	}, [ question, solution, min, max ]);
	const solutionPresent = solution !== null;
	const isDisabled = submitted && solutionPresent && (
		( numSubmissions >= props.nTries && !submitAfterFeedback ) ||
		( correct.lower && correct.upper )
	);
	const renderSubmitButton = () => {
		if ( until && session.startTime > until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{t('question-closed')}</span>;
		}
		return (
			<TimedButton
				className="submit-button"
				variant="primary"
				size="sm"
				disabled={isDisabled}
				onClick={submitHandler}
			>
				{ submitted && submitAfterFeedback ? t('resubmit') : t('submit') }
			</TimedButton>
		);
	};
	const nHints = hints.length;
	return (
		<Card id={id} className="range-question" style={style} >
			<Card.Body style={{ width: feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }}>
				{ question ? <label>{question}</label> : null }
				<div className="range-question-input-wrapper" >
					<NumberInput
						step="any"
						legend={labels ? labels[ 0 ] : t('lower')}
						onChange={handleChangeLower}
						defaultValue={lower}
						disabled={isDisabled || correct.lower}
						inline
						width={90}
						min={min}
						max={max}
						numbersOnly={false}
						onBlur={handleBlurLower}
						onKeyPress={handleKeyPress}
					/>
					{ submitted && solutionPresent && provideFeedback ?
						<Badge bg={correct.lower ? 'success' : 'danger'} style={{ fontSize: 18 }}>
							{correct.lower ? t('correct') :
								( numSubmissions >= nTries ) ? `${t('solution')}:   ${solution[ 0 ]}` : `${t('try-again')}`}
						</Badge> :
						null
					}
					<NumberInput
						step="any"
						legend={labels ? labels[ 1 ] : t('upper')}
						onChange={handleChangeUpper}
						defaultValue={upper}
						disabled={isDisabled || correct.upper}
						inline
						width={90}
						min={min}
						max={max}
						numbersOnly={false}
						onBlur={handleBlurUpper}
						onKeyPress={handleKeyPress}
					/>
					{ submitted && solutionPresent && provideFeedback ?
						<Badge bg={correct.upper ? 'success' : 'danger'} style={{ fontSize: 18 }}>
							{correct.upper ? t('correct') :
								( numSubmissions >= nTries ) ? `${t('solution')}:   ${solution[ 1 ]}` : `${t('try-again')}`}
						</Badge> :
						null
					}
				</div>
				<ButtonToolbar className="range-question-toolbar" >
					<ResponseVisualizer
						buttonLabel={t('answers')}
						id={id}
						data={{
							type: 'range',
							question: question,
							solution: solution
						}}
						info="RANGE_QUESTION_SUBMISSION"
						style={{ marginLeft: '3px', marginRight: '3px' }}
						points={points}
					/>
					{ nHints > 0 ?
						<HintButton onClick={logHint} hints={hints} placement={props.hintPlacement} /> :
						null
					}
					{ chat ? <div style={{ display: 'inline-block', marginLeft: '4px' }}>
						<ChatButton for={id} />
					</div> : null }
					{renderSubmitButton()}
				</ButtonToolbar>
				{ feedback ? <FeedbackButtons
					id={id+'_feedback'}
					style={{ marginRight: 5, marginTop: -5 }}
				/> : null }
				<GradeFeedbackRenderer for={id} points={points} />
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

RangeQuestion.defaultProps = {
	question: '',
	solution: null,
	hints: [],
	hintPlacement: 'top',
	labels: null,
	feedback: true,
	chat: false,
	digits: 3,
	max: PINF,
	min: NINF,
	nTries: 1,
	provideFeedback: true,
	submitAfterFeedback: false,
	until: null,
	points: 10,
	style: {},
	onChangeUpper() {},
	onChangeLower() {},
	onChange() {},
	onSubmit() {}
};

RangeQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	solution: PropTypes.arrayOf( PropTypes.number ),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	labels: PropTypes.array,
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	digits: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
	nTries: PropTypes.number,
	provideFeedback: PropTypes.bool,
	submitAfterFeedback: PropTypes.bool,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	style: PropTypes.object,
	onChangeLower: PropTypes.func,
	onChangeUpper: PropTypes.func,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default withPropCheck( RangeQuestion );
