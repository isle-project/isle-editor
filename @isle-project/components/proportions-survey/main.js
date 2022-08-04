
// MODULES //

import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import ProportionsInput from '@isle-project/components/input/proportions';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import StoppableButton from '@isle-project/components/stoppable-button';
import SessionContext from '@isle-project/session/context.js';
import Panel from '@isle-project/components/panel';
import { SUBMISSION } from '@isle-project/constants/actions.js';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import sum from '@isle-project/utils/statistic/sum';
import './proportions_survey.css';


// VARIABLES //

const debug = logger( 'isle:proportions-survey' );


// MAIN //

/**
* Component that allows a group of people to vote on the weights and importance of given options.
*
* @property {number} question - the question to be displayed
* @property {Array} legends - legend labels that describe the options to be weighed
* @property {boolean} allowMultipleAnswers - controls whether one wishes to allow students to answer the survey multiple times
* @property {boolean} anonymous - controls whether student answers are anonymized
* @property {boolean} disabled - controls whether the survey is deactivated
* @property {number} group - group display heading
* @property {number} precision - displayed precision of proportion values
* @property {number} step - the step of the arrows seen when hovering the cursor above the input box
* @property {number} colors - array of colors for the pie chart components. If not defined, a pre-defined color scale will be used
* @property {number} personalHeight - proportions input height for individual student (in px)
* @property {number} groupHeight - proportions input height for group display (in px)
* @property {number} margin - proportion input margin (in px)
* @property {Function} onSubmit - callback function invoked once students submits an answer
*/
const ProportionsSurvey = ( props ) => {
	const { id, logAction } = useActionLogger( 'PROPORTIONS_SURVEY' );
	const { t } = useTranslation( 'surveys' );
	const session = useContext( SessionContext );
	const [ submitted, setSubmitted ] = useState( false );
	const [ paused, setPaused ] = useState( false );
	const len = props.legends.length;
	const [ value, setValue ] = useState( new Array( len ).fill( 100.0 / len ) );
	const [ data, setData ] = useState({
		values: null,
		nResults: 0
	});
	const { anonymous, legends, onSubmit } = props;
	const submitQuestion = useCallback( () => {
		debug( 'Sending the data: ' + value );
		logAction( SUBMISSION, JSON.stringify( value ), { anonymous: anonymous }, 'members' );
		setSubmitted( true );
		session.addNotification({
			title: t( 'submitted' ),
			message: t( 'answer-submitted' ),
			level: 'success'
		});
		onSubmit( value );
	}, [ anonymous, logAction, onSubmit, session, t, value ] );
	const onData = useCallback( ( data ) => {
		debug( 'ProportionsSurvey is receiving data: ' + JSON.stringify( data ) );
		const list = new Array( data.length );
		for ( let i = 0; i < data.length; i++ ) {
			list[ i ] = JSON.parse( data[ i ] );
		}
		const nElements = legends.length;
		const sum = new Array( nElements ).fill( 0 );
		const mean = new Array( nElements ).fill( 0 );
		for ( let i = 0; i < list.length; i++ ) {
			// Reflects arrays of arrays = results
			for ( let j = 0; j < list[ i ].length; j++ ) {
				sum[ j ] += list[ i ][ j ];
			}
		}
		debug( 'The sum is '+ sum );
		for ( let j = 0; j < nElements; j++ ) {
			mean[ j ] = sum[ j ] / list.length;
		}
		debug( 'The mean is ' + mean );
		setData({
			values: mean,
			nResults: list.length
		});
	}, [ legends ] );
	const disabled = (
		( submitted && !props.allowMultipleAnswers ) ||
		props.disabled ||
		absdiff( sum( value ), 100 ) > 0.2
	);
	return (
		<Panel>
			<Container>
				<Row>
					<Col md={6}>
						<Card body className="proportions-survey" >
							<h3>
								{props.question}
								{paused ?
									<i className="fas fa-lock" style={{ float: 'right' }} ></i> :
									null
								}
							</h3>
							<ProportionsInput
								legends={legends}
								precision={props.precision}
								step={props.step}
								height={props.personalHeight}
								colors={props.colors}
								margin={props.margin}
								onChange={setValue}
							/>
							<StoppableButton
								id={id.current}
								disabled={disabled}
								onClick={submitQuestion}
								onPaused={setPaused}
							>
								{t( disabled ? 'submitted' : 'submit' )}
							</StoppableButton>
						</Card>
					</Col>
					<Col md={6}>
						<Card body className="proportions-survey" >
							<h3>{ props.group}</h3>
							<RealtimeMetrics for={[ id.current ]} onData={onData} />
							<h4>{t('number-of-votes')}: { data.nResults } </h4>
							<ProportionsInput
								legends={props.legends}
								precision={props.precision}
								step={props.step}
								height={props.groupHeight}
								colors={props.colors}
								disabled={true}
								margin={props.margin}
								values={data.values}
							/>
						</Card>
					</Col>
				</Row>
			</Container>
			<ResponseVisualizer buttonLabel={t('responses')} id={id.current} />
		</Panel>
	);
};


// PROPERTIES //

ProportionsSurvey.defaultProps = {
	onSubmit() {},
	allowMultipleAnswers: false,
	question: '',
	anonymous: false,
	disabled: false,
	legends: [],
	group: 'group results',
	precision: 2,
	step: 0.25,
	colors: null,
	personalHeight: 200,
	groupHeight: 100,
	margin: '40px'
};

ProportionsSurvey.propTypes = {
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	colors: PropTypes.array,
	disabled: PropTypes.bool,
	group: PropTypes.string,
	groupHeight: PropTypes.number,
	legends: PropTypes.array,
	margin: PropTypes.string,
	onSubmit: PropTypes.func,
	personalHeight: PropTypes.number,
	precision: PropTypes.number,
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	step: PropTypes.number
};


// EXPORTS //

export default ProportionsSurvey;
