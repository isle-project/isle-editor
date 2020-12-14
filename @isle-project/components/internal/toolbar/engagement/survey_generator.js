// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
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
import { STOP_SURVEY, START_SURVEY } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';


// VARIABLES //

const debug = logger( 'isle:survey-generator' );
const COMPONENT_ID = 'survey-generator';


// MAIN //

/**
* Component allowing instructors to create multiple-choice surveys, free text surveys and number surveys on the fly in real-time through an easy-to-use interface.
*/
class SurveyGenerator extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			answers: [],
			question: '',
			type: 'free-text',
			showSurvey: false,
			anonymous: true,
			disabled: true
		};
	}

	componentDidMount() {
		const session = this.props.session;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			debug( 'Received member action...' );
			if ( type === MEMBER_ACTION ) {
				if ( action.type === START_SURVEY ) {
					debug( 'Should start the survey...' );
					if ( COMPONENT_ID === action.id ) {
						this.setState({
							question: action.value.question,
							type: action.value.type,
							answers: action.value.answers,
							showSurvey: true
						});
					}
				}
				else if ( action.type === STOP_SURVEY ) {
					debug( 'Should stop the survey...' );
					if ( COMPONENT_ID === action.id ) {
						this.setState({
							showSurvey: false
						});
					}
				}
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	setQuestion = ( text ) => {
		debug( 'Set the question text...' );
		let disabled = true;
		if (
			text.length > 3 &&
			(
				this.state.answers.length > 1 ||
				this.state.type !== 'multiple-choice'
			)
		) {
			disabled = false;
		}
		this.setState({
			question: text,
			disabled
		});
	}

	setType = ( type ) => {
		this.setState({
			type
		});
	}

	toggleSurvey = () => {
		const session = this.props.session;
		if ( this.state.showSurvey ) {
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
					answers: this.state.answers,
					type: this.state.type,
					question: this.state.question
				}
			}, 'members' );
		}
	}

	getAnswers = ( text ) => {
		const answers = text.split( '\n' );
		let disabled = true;
		if (
			this.state.question.length > 3 && answers.length > 1
		) {
			disabled = false;
		}
		this.setState({
			answers,
			disabled
		});
	}

	toggleAnonymous = ( value ) => {
		this.setState({
			anonymous: value
		});
	}

	render() {
		let body;
		if ( this.state.showSurvey ) {
			body = <div>
				{ this.state.type === 'multiple-choice' ?
					<MultipleChoiceSurvey
						user
						question={this.state.question}
						answers={this.state.answers}
						id={COMPONENT_ID+':multiple-choice-survey'}
						anonymous={this.state.anonymous}
					/> : null
				}
				{ this.state.type === 'number' ?
					<NumberSurvey
						user
						question={this.state.question}
						id={COMPONENT_ID+':number-survey'}
						anonymous={this.state.anonymous}
					/> : null
				}
				{ this.state.type === 'free-text' ?
					<FreeTextSurvey
						user
						question={this.state.question}
						answers={this.state.answers}
						id={COMPONENT_ID+':free-text-survey'}
						anonymous={this.state.anonymous}
					/> : null
				}
				<label>
					{ !this.state.anonymous ? this.props.t( 'survey-not-anonymous' ) : '' }
				</label>
				<Gate owner>
					<Button
						disabled={this.state.disabled}
						onClick={this.toggleSurvey}
						style={{ float: 'right' }}
					>
						{this.props.t( 'stop-survey' )}
					</Button>
				</Gate>
			</div>;
		} else {
			body = <Gate owner banner={<h3>{this.props.t( 'survey-not-started' )}</h3>}>
				<FormGroup>
					<Row>
						<Col md={3}><FormLabel htmlFor="survey-select-input" >{this.props.t( 'type' )}:</FormLabel></Col>
						<Col md={9}>
							<SelectInput
								id="survey-select-input"
								defaultValue={this.state.type}
								options={[ 'multiple-choice', 'number', 'free-text' ]}
								onChange={this.setType}
							/>
						</Col>
					</Row>
				</FormGroup>
				<FormGroup>
					<TextArea
						legend="Question"
						onChange={this.setQuestion}
						rows={2}
					/>
				</FormGroup>
				{ this.state.type === 'multiple-choice' ?
					<FormGroup>
						<TextArea legend="Answer Options (new-line delimited)" onChange={this.getAnswers} />
					</FormGroup> : null
				}
				<CheckboxInput
					tooltip={this.props.t( 'anonymous-survey-tooltip' )}
					tooltipPlacement="top"
					legend={this.props.t( 'anonymous-survey' )}
					defaultValue={true}
					onChange={this.toggleAnonymous}
				/>
				<Button
					disabled={this.state.disabled}
					onClick={this.toggleSurvey}
				>
					{this.props.t( 'start-survey' )}
				</Button>
			</Gate>;
		}
		const session = this.props.session;
		return ( <Draggable dragHandleClassName="card-header" >
			<Panel
				header={this.props.t( 'survey' )} minimizable
				className="survey-generator"
				onHide={session.isOwner() ? this.props.onHide : null}
				hideTooltip={this.props.t( 'finish-survey' )}
			>
				{body}
			</Panel>
		</Draggable> );
	}
}


// EXPORTS //

export default withTranslation( 'Toolbar' )( SurveyGenerator );
