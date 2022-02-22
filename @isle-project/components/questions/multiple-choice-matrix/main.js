// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import uppercase from '@stdlib/string/uppercase';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeedbackButtons from '@isle-project/components/feedback';
import SolutionButton from '@isle-project/components/solution-button';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import Text from '@isle-project/components/text';
import SessionContext from '@isle-project/session/context.js';
import generateUID from '@isle-project/utils/uid';
import { MULTIPLE_CHOICE_MATRIX_SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './multiple_choice_matrix.css';


// VARIABLES //

const debug = logger( 'isle:multiple-choice-matrix' );
const uid = generateUID( 'multiple-choice-matrix' );


// MAIN //

/**
* An ISLE component that renders a matrix of multiple choice questions with the same answers.
*
* @property {Array} questions - an array of questions
* @property {Array} answers - an array of answers
* @property {(Node|string)} title - title to be displayed on top of the question matrix
* @property {string} type - question type (`radio` corresponds to "Select one", `checkbox` to "Select all that apply")
* @property {Array<Array>} solution - boolean matrix the element of which indicate whether the respective radio button or checkbox should be ticked
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {Function} onChange - callback invoked when the value of a checkbox / radio button changes; invoked with the two-dimensional boolean array of the active status for each answer option
* @property {Function} onSubmit - callback invoked when user clicks the "Submit" button; invoked with the two-dimensional boolean array of the active status for each answer option
*/
class MultipleChoiceMatrix extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );
		const active = new Array( props.questions.length );
		for ( let i = 0; i < active.length; i++ ) {
			active[ i ] = new Array( props.answers.length );
		}
		this.state = {
			submitted: false,
			active
		};
	}

	renderAnswerHeader() {
		const len = this.props.answers.length;
		let offset;
		if ( len > 7 ) {
			offset = 3;
		} else if ( len > 4 ) {
			offset = 4;
		} else {
			offset = 6;
		}
		return (
			<Row className="multiple-choice-matrix-question-header" >
				<Col sm={offset}></Col>
				{this.props.answers.map( ( elem, idx ) => {
					return ( <Col key={idx}>
						<Form.Label>
							{ isString( elem ) ? <Text raw={elem} /> : elem }
						</Form.Label>
					</Col> );
				})}
			</Row>
		);
	}

	handleCheckboxClick = ( evt ) => {
		if ( uppercase( evt.target.tagName ) === 'INPUT' ) {
			const checked = evt.target.checked;
			const pos = evt.target.dataset.pos.split( '-' );
			const active = this.state.active;
			active[ pos[ 0 ] ][ pos[ 1 ] ] = checked;
			this.setState({
				active
			});
			this.props.onChange( active );
		}
	};

	handleRadioClick = ( evt ) => {
		if ( uppercase( evt.target.tagName ) === 'INPUT' ) {
			const checked = evt.target.checked;
			const pos = evt.target.dataset.pos.split( '-' );
			const active = this.state.active;
			active[ pos[ 0 ] ] = new Array( this.props.answers.length );
			active[ pos[ 0 ] ][ pos[ 1 ] ] = checked;
			this.setState({
				active
			});
			this.props.onChange( active );
		}
	};

	sendSubmitNotification = () => {
		const session = this.context;
		if ( this.state.submitted ) {
			session.addNotification({
				title: this.props.t('answer-re-submitted'),
				message: this.props.t('successfully-re-submitted-your-answer'),
				level: 'success'
			});
		} else {
			session.addNotification({
				title: this.props.t('answer-submitted'),
				message: this.props.t('successfully-submitted-your-answer'),
				level: 'success'
			});
		}
	};

	handleSubmit = () => {
		const session = this.context;
		debug( 'Submit answer...' );
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		if ( this.id ) {
			session.log({
				id: this.id,
				type: MULTIPLE_CHOICE_MATRIX_SUBMISSION,
				value: JSON.stringify( this.state.active )
			});
		}
		this.setState({
			submitted: true
		});
		this.props.onSubmit( this.state.active );
	};

	toggleSolution = () => {
		console.log( 'TODO: Toggle solution:' );
		console.log( this.props.solution );
	};

	renderAnswerButtons( row ) {
		const len = this.props.answers.length;
		const buttons = new Array( len );
		for ( let i = 0; i < len; i++ ) {
			const elem = this.props.answers[ i ];
			buttons[ i ] = <Col key={i} >
				<Form.Check
					name={`radios-${row}`}
					data-pos={`${row}-${i}`}
					type={this.props.type}
					id={`${row}-${i}`}
					label={
						<span className="multiple-choice-matrix-answer-text">
							{ isString( elem ) ? <Text raw={elem} /> : elem }
						</span>
					}
				/>
			</Col>;
		}
		return ( <Fragment>
			{buttons}
		</Fragment> );
	}

	renderQuestionRows() {
		const len = this.props.answers.length;
		let offset;
		if ( len > 7 ) {
			offset = 3;
		} else if ( len > 4 ) {
			offset = 4;
		} else {
			offset = 6;
		}
		return this.props.questions.map( ( question, idx ) => {
			return (
				<Row key={idx} >
					<Col sm={offset}>
						<Form.Label column >
							{ isString( question ) ? <Text raw={question} /> : question }
						</Form.Label>
					</Col>
					{this.renderAnswerButtons( idx )}
				</Row>
			);
		});
	}

	render() {
		const solutionButton = this.props.solution ? <SolutionButton onClick={this.toggleSolution} disabled={!this.state.submitted} /> : null;
		return (
			<Card className="multiple-choice-matrix" >
				{ this.props.title ?
					<Card.Header>
						<Card.Title as="h5" >
							{this.props.title}
						</Card.Title>
					</Card.Header> : null
				}
				<Card.Body>
					<i style={{ fontSize: '0.8rem' }}>
						{this.props.type === 'checkbox' ?
							this.props.t('each-row-click-check-boxes-which-apply') :
							this.props.t('each-row-pick-answer-by-clicking')
						}.
					</i>
					<Form style={{ marginTop: '12px' }} onClick={this.props.type === 'checkbox' ? this.handleCheckboxClick : this.handleRadioClick}>
						{this.renderAnswerHeader()}
						{this.renderQuestionRows()}
					</Form>
					<div className="multiple-choice-matrix-controls">
						{solutionButton}
						<Button
							className="submit-button"
							variant="primary"
							size="sm"
							onClick={this.handleSubmit}
							style={{
								marginTop: '10px'
							}}
						>
							{ this.state.submitted ? this.props.t('resubmit') : this.props.t('submit')}
						</Button>
						<ResponseVisualizer
							id={this.id}
							data={{
								type: 'matrix',
								rows: this.props.questions,
								cols: this.props.answers,
								solution: this.props.solution
							}}
							info="MULTIPLE_CHOICE_MATRIX_SUBMISSION"
						/>
						{ this.id && this.props.feedback ? <FeedbackButtons
							id={this.id+'_feedback'}
						/> : null }
					</div>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

MultipleChoiceMatrix.propTypes = {
	questions: PropTypes.array.isRequired,
	answers: PropTypes.array.isRequired,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	solution: PropTypes.arrayOf([ PropTypes.array ]),
	type: PropTypes.oneOf([ 'radio', 'checkbox' ]),
	disableSubmitNotification: PropTypes.bool,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

MultipleChoiceMatrix.defaultProps = {
	title: null,
	solution: null,
	type: 'radio',
	disableSubmitNotification: false,
	onChange() {},
	onSubmit() {}
};

MultipleChoiceMatrix.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'questions/multiple-choice' )( withPropCheck( MultipleChoiceMatrix ) );
