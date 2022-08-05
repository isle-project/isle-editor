
// MODULES //

import React, { useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import mean from '@isle-project/utils/statistic/mean';
import stdev from '@isle-project/utils/statistic/stdev';
import NumberInput from '@isle-project/components/input/number';
import Plotly from '@isle-project/components/plotly';
import Panel from '@isle-project/components/panel';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import StoppableButton from '@isle-project/components/stoppable-button';
import SessionContext from '@isle-project/session/context.js';
import { SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import './number-survey.css';


// VARIABLES //

const debug = logger( 'isle:number-survey' );
const SD = 'SD';


// MAIN //

/**
* A survey component in which the instructor may collect numeric survey data from students in real-time.
*
* @property {(string|node)} question - the question to be displayed
* @property {boolean} allowMultipleAnswers - controls whether the same user (or session if anonymous) may submit multiple answers)
* @property {boolean} anonymous - Allows for the students to submit data anonymously. Note that if this option is set to "true", then the instructors will be unable to see the ID of the submitting student
* @property {(number|string)} step - A `string` or `numeric` value indicating the step of the arrows seen when hovering the cursor above the input box. If `'any'`, the step will be set to `1`
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback function invoked once students submits an answer
*/
const NumberSurvey = ( props ) => {
	const { id, logAction } = useActionLogger( 'NUMBER_SURVEY', props );
	const { t } = useTranslation( 'surveys' );
	const session = useContext( SessionContext );
	const [ submitted, setSubmitted ] = useState( false );
	const [ paused, setPaused ] = useState( false );
	const [ value, setValue ] = useState( 0.0 );
	const [ data, setData ] = useState({ values: [], sd: null, avg: null });
	const { anonymous, onSubmit } = props;

	const submitQuestion = useCallback( () => {
		logAction( SUBMISSION, value, {
			anonymous: anonymous
		}, 'members' );
		setSubmitted( true );
		session.addNotification({
			title: t('submitted'),
			message: t('answer-submitted'),
			level: 'success'
		});
		onSubmit( value );
	}, [ anonymous, logAction, onSubmit, session, t, value ] );
	const onData = useCallback( ( data ) => {
		debug( 'NumberSurvey is receiving data: ' + JSON.stringify( data ) );
		setData({
			values: data,
			avg: mean( data ),
			sd: stdev( data )
		});
	}, [] );

	const disabled = submitted && !props.allowMultipleAnswers;
	return (
		<Panel>
			<Container>
				<Row>
					<Col md={6}>
						<Card className="number-survey" body>
							<Card.Title as="h5">{props.question}</Card.Title>
							<label htmlFor={`number-survey-input-${id}`}>{t('your-answer')}:</label>
							<NumberInput
								{...props}
								inline
								id={`number-survey-input-${id}`}
								disabled={disabled}
								onChange={setValue}
							/>
							{paused ?
								<i className="fas fa-lock" style={{ float: 'right' }} ></i> :
								null
							}
							<StoppableButton
								id={id}
								disabled={disabled}
								onClick={submitQuestion}
								onPaused={setPaused}
							>{disabled ? t('submitted') : t('submit')}</StoppableButton>
						</Card>
					</Col>
					<Col md={6}>
						<RealtimeMetrics for={[ id ]} onData={onData} />
						{isEmptyArray( data ) ?
							<h3>{t('no-responses-yet')}</h3> :
							<Plotly
								data={[{
									x: data.values,
									type: 'histogram'
								}]}
								layout={{
									width: 400,
									height: 300
								}}
								removeButtons
							/>
						}
						{ isNumber( data.avg ) && isNumber( data.sd ) ?
							<p>{t('average-is')} {data.avg.toFixed( 3 )} ({SD}: {data.sd.toFixed( 3 )}).
							</p> : null
						}
					</Col>
				</Row>
			</Container>
			<ResponseVisualizer
				buttonLabel={t('responses')} id={id}
				info="NUMBER_SURVEY_SUBMISSION"
			/>
		</Panel>
	);
};


// PROPERTIES //

NumberSurvey.defaultProps = {
	question: '',
	allowMultipleAnswers: false,
	anonymous: false,
	step: 'any',
	style: {},
	onSubmit() {}
};

NumberSurvey.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default withPropCheck( NumberSurvey );
