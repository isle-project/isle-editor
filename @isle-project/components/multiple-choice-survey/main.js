// MODULES //

import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import tabulate from '@stdlib/utils/tabulate';
import Plotly from '@isle-project/components/plotly';
import Panel from '@isle-project/components/panel';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import StoppableButton from '@isle-project/components/stoppable-button';
import SessionContext from '@isle-project/session/context.js';
import { SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import AnswerOption from './answer_option';
import './multiple-choice-survey.css';


// VARIABLES //

const debug = logger( 'isle:multiple-choice-survey' );


// MAIN //

/**
* A survey component in which the instructor may collect multiple-choice survey data from students in real-time.
*
* @property {(string|node)} question - string indicating the question to ask the students
* @property {boolean} allowMultipleAnswers - controls whether one wishes to allow students to answer the survey multiple times
* @property {boolean} anonymous - controls whether student answers are anonymized
* @property {Array} answers - array indicating answer choices for the students
* @property {boolean} multipleAnswers - indicates whether students may select more than one answer. Note that this differs from allowMultipleAnswers in that allow makes students able to submit the question multiple times
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - function to be called when an answer is submitted
*/
const MultipleChoiceSurvey = ( props ) => {
	const { id, logAction } = useActionLogger( 'MULTIPLE_CHOICE_SURVEY', props );
	const { t } = useTranslation( 'surveys' );
	const { allowMultipleAnswers, anonymous, answers, multipleAnswers, question, onSubmit } = props;
	const session = useContext( SessionContext );
	const [ submitted, setSubmitted ] = useState( false );
	const [ paused, setPaused ] = useState( false );
	const [ answerSelected, setAnswerSelected ] = useState( false );
	const [ active, setActive ] = useState(
		multipleAnswers ? new Array( answers.length ) : null
	);
	const [ data, setData ] = useState({ counts: [], freqTable: null });

	const submitQuestion = useCallback( () => {
		logAction( SUBMISSION, active, {
			anonymous: anonymous
		}, 'members' );
		if ( !allowMultipleAnswers ) {
			setSubmitted( true );
		}
		session.addNotification({
			title: t('submitted'),
			message: t('answer-submitted'),
			level: 'success'
		});
		onSubmit( active );
	}, [ active, allowMultipleAnswers, anonymous, logAction, session, onSubmit, t ] );
	const onData = useCallback( ( data ) => {
		debug( 'MultipleChoiceSurvey is receiving data: ' + JSON.stringify( data ) );
		const tabulated = tabulate( data );
		const counts = tabulated.map( d => {
			return {
				x: answers[ d[ 0 ] ],
				y: d[ 1 ]
			};
		});
		const freqTable = <table className="table table-bordered">
			<tr>
				<th>{t('category')}</th>
				<th>{t('count')}</th>
				<th>{t('relative-frequency')}</th>
			</tr>
			{tabulated.map( ( elem, row ) => {
				return ( <tr key={row}>
					{elem.map( ( x, col ) => {
						if ( col === 0 ) {
							x = answers[ x ];
						}
						else if ( col === 2 ) {
							x = x.toFixed( 3 );
						}
						return <td key={`${row}:${col}`}>{x}</td>;
					})}
				</tr> );
			})}
		</table>;
		setData({
			counts,
			freqTable
		});
	}, [ answers, t ] );
	const renderAnswerOptionsSingle = useCallback( ( key, id ) => {
		return (
			<AnswerOption
				key={id}
				no={id}
				answerContent={key}
				active={active === id}
				submitted={submitted}
				onAnswerSelected={() => {
					if ( !submitted ) {
						setActive( id );
						setAnswerSelected( true );
					}
				}}
			/>
		);
	}, [ active, submitted ] );
	const renderAnswerOptionsMultiple = useCallback( ( key, id ) => {
		return (
			<AnswerOption
				key={key}
				no={id}
				answerContent={key}
				active={active[ id ]}
				submitted={submitted}
				onAnswerSelected={() => {
					if ( !submitted ) {
						let newActive = active.slice();
						newActive[ id ] = !newActive[ id ];
						setActive( newActive );
						setAnswerSelected( true );
					}
				}}
			/>
		);
	}, [ active, submitted ] );

	let disabled;
	if ( multipleAnswers ) {
		disabled = submitted;
	} else {
		disabled = submitted || !answerSelected;
	}
	return (
		<Panel id={id} style={props.style} >
			<Container>
				<Row>
					<Col md={6}>
						<Card body className="multiple-choice-survey">
							<p>
								<label>{question}</label>
								{paused ?
									<i className="fas fa-lock" style={{ float: 'right' }} ></i> :
									null
								}
							</p>
							{ multipleAnswers ? <span>{t('multiple-answers')}</span> : null }
							<ListGroup fill >
								{ multipleAnswers ?
									answers.map( renderAnswerOptionsMultiple ) :
									answers.map( renderAnswerOptionsSingle )
								}
							</ListGroup>
							<StoppableButton
								id={id}
								disabled={disabled}
								onClick={submitQuestion}
								onPaused={setPaused}
							>
								{submitted ? t('submitted') : t('submit')}
							</StoppableButton>
						</Card>
					</Col>
					<Col md={6}>
						<RealtimeMetrics for={[ id ]} onData={onData} />
						{isEmptyArray( data.counts ) ?
							<h3>{t('no-responses-yet')}</h3> :
							<Plotly
								data={[{
									x: data.counts.map( val => val.x ),
									y: data.counts.map( val => val.y ),
									type: 'bar'
								}]}
								layout={{
									width: 400,
									height: 300
								}}
								removeButtons
							/>
						}
						<p>
							{data.freqTable}
						</p>
					</Col>
				</Row>
			</Container>
			<ResponseVisualizer
				buttonLabel={t('responses')} id={id}
				data={{
					type: 'factor',
					levels: props.answers
				}}
				info="MULTIPLE_CHOICE_SURVEY_SUBMISSION"
			/>
		</Panel>
	);
};


// PROPERTIES //

MultipleChoiceSurvey.defaultProps = {
	question: '',
	allowMultipleAnswers: false,
	anonymous: false,
	answers: [],
	multipleAnswers: false,
	style: {},
	onSubmit() {}
};

MultipleChoiceSurvey.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	answers: PropTypes.array,
	multipleAnswers: PropTypes.bool,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default withPropCheck( MultipleChoiceSurvey );
