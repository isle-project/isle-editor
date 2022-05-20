
// MODULES //

import React, { useCallback, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Plotly from '@isle-project/components/plotly';
import Panel from '@isle-project/components/panel';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import tabulate from '@stdlib/utils/tabulate';
import lowercase from '@stdlib/string/lowercase';
import tokenize from '@stdlib/nlp/tokenize';
import generateUID from '@isle-project/utils/uid';
import TextArea from '@isle-project/components/input/text-area';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import StoppableButton from '@isle-project/components/stoppable-button';
import SessionContext from '@isle-project/session/context.js';
import { TEXT_SURVEY_SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './free-text-survey.css';


// VARIABLES //

const debug = logger( 'isle:free-text-survey' );
const uid = generateUID( 'free-text-survey' );


// MAIN //

/**
* An ISLE component for questions where the answers by the students should be supplied in the form of free text. What differentiates this component from the **FreeTextQuestion** is the fact that the aggregated group data is displayed to everyone in real-time.
*
* @property {(string|node)} question - the question to ask the students
* @property {boolean} allowMultipleAnswers - controls whether one wishes to allow students to answer the survey multiple times
* @property {boolean} anonymous - controls whether student answers are anonymously collected
* @property {number} rows - number of text rows in the input field
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback function called when an answer is submitted
*/
const FreeTextSurvey = ( props ) => {
	const id = useRef( props.id || uid( props ) );
	const { t } = useTranslation( 'surveys' );
	const session = useContext( SessionContext );
	const [ submitted, setSubmitted ] = useState( false );
	const [ paused, setPaused ] = useState( false );
	const [ value, setValue ] = useState( null );
	const [ data, setData ] = useState({ counts: [], freqTable: null });
	const { anonymous, onSubmit } = props;

	const onData = useCallback( ( data ) => {
		debug( 'FreeTextQuestion is receiving data: ' + JSON.stringify( data ) );
		const tabulated = tabulate( data );
		const counts = tabulated.map( d => {
			return {
				x: d[ 0 ],
				y: d[ 1 ]
			};
		});
		const freqTable = <table className="table table-bordered" >
			<tr>
				<th>{t('category')}</th>
				<th>{t('count')}</th>
				<th>{t('relative-frequency')}</th>
			</tr>
			{tabulated.map( ( elem, id ) => {
				return ( <tr key={id}>
					{elem.map( ( x, idx ) => {
						if ( idx === 2 ) {
							x = x.toFixed( 3 );
						}
						return <td key={idx}>{x}</td>;
					})}
				</tr> );
			})}
		</table>;
		setData({
			counts,
			freqTable
		});
	}, [ t ] );
	const submitQuestion = useCallback( () => {
		session.log({
			id: id.current,
			type: TEXT_SURVEY_SUBMISSION,
			value: value,
			anonymous: anonymous
		}, 'members' );
		setSubmitted( true );
		session.addNotification({
			title: t('submitted'),
			message: t('answer-submitted'),
			level: 'success'
		});
		onSubmit( value );
	}, [ anonymous, onSubmit, session, t, value ] );

	const disabled = submitted && !props.allowMultipleAnswers;
	return (
		<Panel id={id.current} className={props.className} style={props.style} >
			<Container>
				<Row>
					<Col md={6}>
						<Card className="free-text-survey" body>
							<label>{props.question}</label>
							{paused ?
								<i className="fas fa-lock" style={{ float: 'right' }} ></i> :
								null
							}
							<TextArea
								value={value}
								inline
								disabled={disabled}
								onChange={setValue}
								rows={props.rows}
							/>
							<StoppableButton
								id={id.current}
								disabled={!value || disabled}
								onClick={submitQuestion}
								onPaused={setPaused}
							>
								{disabled ? t('submitted') : t('submit')}
							</StoppableButton>
						</Card>
					</Col>
					<Col md={6}>
						<RealtimeMetrics for={[ id.current ]} onData={onData} />
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
						{data.freqTable}
					</Col>
				</Row>
			</Container>
			<ResponseVisualizer
				buttonLabel={t('responses')} id={id.current}
				info={TEXT_SURVEY_SUBMISSION}
			/>
		</Panel>
	);
};


// PROPERTIES //

FreeTextSurvey.defaultProps = {
	question: '',
	allowMultipleAnswers: false,
	anonymous: false,
	rows: 4,
	className: '',
	style: {},
	onSubmit() {}
};

FreeTextSurvey.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	rows: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};


// EXPORTS //

export default withPropCheck( FreeTextSurvey );
