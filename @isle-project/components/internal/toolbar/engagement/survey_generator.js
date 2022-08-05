// MODULES //

import React, { useCallback, useEffect, useState } from 'react';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Draggable from '@isle-project/components/draggable';
import Panel from '@isle-project/components/panel';
import Gate from '@isle-project/components/gate';
import { CheckboxInput, SelectInput } from '@isle-project/components/input';
import TextArea from '@isle-project/components/input/text-area';
import MultipleChoiceSurvey from '@isle-project/components/multiple-choice-survey';
import NumberSurvey from '@isle-project/components/number-survey';
import FreeTextSurvey from '@isle-project/components/free-text-survey';
import { STOP, START } from '@isle-project/constants/actions.js';
import { useActionLogger } from '@isle-project/session/action_logger.js';


// VARIABLES //

const debug = logger( 'isle:survey-generator' );
const SURVEY_GENERATOR = 'SURVEY_GENERATOR';
const SURVEY_GENERATOR_ID = 'survey-generator';


// MAIN //

/**
* Component allowing instructors to create multiple-choice surveys, free text surveys and number surveys on the fly in real-time through an easy-to-use interface.
*/
const SurveyGenerator = ({ session, onHide }) => {
	const [ answers, setAnswers ] = useState( [] );
	const [ question, setQuestion ] = useState( '' );
	const [ type, setType ] = useState( 'free-text' );
	const [ showSurvey, setShowSurvey ] = useState( false );
	const [ anonymous, setAnonymous ] = useState( true );
	const [ disabled, setDisabled ] = useState( true );
	const { t } = useTranslation( 'internal/toolbar' );
	const { logAction, onAction } = useActionLogger( SURVEY_GENERATOR, { id: SURVEY_GENERATOR_ID });
	useEffect( () => {
		const unsubscribe = onAction({
			[START]: ( action ) => {
				debug( 'Should start the survey...' );
				setQuestion( action.value.question );
				setType( action.value.type );
				setAnswers( action.value.answers );
				setShowSurvey( true );
			},
			[STOP]: ( action ) => {
				debug( 'Should stop the survey...' );
				setShowSurvey( false );
			}
		});
		return () => {
			unsubscribe();
		};
	}, [ session, onAction ] );

	useEffect( () => {
		let newDisabled;
		if (
			question.length > 3 &&
			(
				answers.length > 1 ||
				type !== 'multiple-choice'
			)
		) {
			newDisabled = false;
		} else {
			newDisabled = true;
		}
		setDisabled( newDisabled );
	}, [ answers, question, type ] );

	const getAnswers = useCallback( ( text ) => {
		const newAnswers = text.split( '\n' );
		let newDisabled = true;
		if (
			question.length > 3 && newAnswers.length > 1
		) {
			newDisabled = false;
		}
		setAnswers( newAnswers );
		setDisabled( newDisabled );
	}, [ question ] );

	const toggleSurvey = useCallback( () => {
		if ( showSurvey ) {
			logAction( STOP, null, {}, 'members' );
		} else {
			logAction( START, {
				answers: answers,
				type: type,
				question: question
			}, {}, 'members' );
		}
	}, [ answers, question, logAction, showSurvey, type ] );
	let body;
	if ( showSurvey ) {
		body = <div>
			{ type === 'multiple-choice' ?
				<MultipleChoiceSurvey
					question={question}
					answers={answers}
					id={question}
					anonymous={anonymous}
				/> : null
			}
			{ type === 'number' ?
				<NumberSurvey
					question={question}
					id={question}
					anonymous={anonymous}
				/> : null
			}
			{ type === 'free-text' ?
				<FreeTextSurvey
					question={question}
					answers={answers}
					id={question}
					anonymous={anonymous}
				/> : null
			}
			<label>
				{ !anonymous ? t( 'survey-not-anonymous' ) : '' }
			</label>
			<Gate owner banner={null} >
				<Button
					disabled={disabled}
					onClick={toggleSurvey}
					style={{ float: 'right' }}
				>
					{t( 'stop-survey' )}
				</Button>
			</Gate>
		</div>;
	} else {
		body = <Gate owner banner={<h3>{t( 'survey-not-started' )}</h3>} >
			<FormGroup>
				<Row>
					<Col md={3}><FormLabel htmlFor="survey-select-input" >{t( 'type' )}:</FormLabel></Col>
					<Col md={9}>
						<SelectInput
							id="survey-select-input"
							defaultValue={type}
							options={[ 'multiple-choice', 'number', 'free-text' ]}
							onChange={setType}
						/>
					</Col>
				</Row>
			</FormGroup>
			<FormGroup>
				<TextArea
					legend={t('question')}
					onChange={setQuestion}
					rows={2}
				/>
			</FormGroup>
			{ type === 'multiple-choice' ?
				<FormGroup>
					<TextArea legend={t('answer-options-new-line-delimited')} onChange={getAnswers} />
				</FormGroup> : null
			}
			<CheckboxInput
				tooltip={t( 'anonymous-survey-tooltip' )}
				tooltipPlacement="top"
				legend={t( 'anonymous-survey' )}
				defaultValue={true}
				onChange={setAnonymous}
			/>
			<Button
				disabled={disabled}
				onClick={toggleSurvey}
			>
				{t( 'start-survey' )}
			</Button>
		</Gate>;
	}
	return ( <Draggable dragHandleClassName="card-header" >
		<Panel
			header={t( 'survey' )} minimizable
			className="survey-generator"
			onHide={session.isOwner() ? onHide : null}
			hideTooltip={t( 'finish-survey' )}
			trapFocus
		>
			{body}
		</Panel>
	</Draggable> );
};


// EXPORTS //

export default SurveyGenerator;
