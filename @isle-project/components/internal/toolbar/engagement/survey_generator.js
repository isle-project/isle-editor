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
import useForceUpdate from '@isle-project/utils/hooks/use-force-update';
import { STOP_SURVEY, START_SURVEY } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';


// VARIABLES //

const debug = logger( 'isle:survey-generator' );
const COMPONENT_ID = 'survey-generator';


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
	const forceUpdate = useForceUpdate();

	useEffect( () => {
		const unsubscribe = session.subscribe( ( type, action ) => {
			debug( 'Received member action...' );
			if ( type === MEMBER_ACTION && COMPONENT_ID === action.id ) {
				if ( action.type === START_SURVEY ) {
					debug( 'Should start the survey...' );
					setQuestion( action.value.question );
					setType( action.value.type );
					setAnswers( action.value.answers );
					setShowSurvey( true );
				}
				else if ( action.type === STOP_SURVEY ) {
					debug( 'Should stop the survey...' );
					setShowSurvey( false );
				}
				else {
					forceUpdate();
				}
			}
		});
		return () => {
			unsubscribe();
		};
	}, [ forceUpdate, session ] );

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
			session.log({
				id: COMPONENT_ID,
				type: STOP_SURVEY,
				value: null
			}, 'members' );
		} else {
			session.log({
				id: COMPONENT_ID,
				type: START_SURVEY,
				value: {
					answers: answers,
					type: type,
					question: question
				}
			}, 'members' );
		}
	}, [ answers, session, question, showSurvey, type ] );
	let body;
	if ( showSurvey ) {
		body = <div>
			{ type === 'multiple-choice' ?
				<MultipleChoiceSurvey
					user
					question={question}
					answers={answers}
					id={COMPONENT_ID+':multiple-choice-survey'}
					anonymous={anonymous}
				/> : null
			}
			{ type === 'number' ?
				<NumberSurvey
					user
					question={question}
					id={COMPONENT_ID+':number-survey'}
					anonymous={anonymous}
				/> : null
			}
			{ type === 'free-text' ?
				<FreeTextSurvey
					user
					question={question}
					answers={answers}
					id={COMPONENT_ID+':free-text-survey'}
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
