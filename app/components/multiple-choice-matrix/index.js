// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import uppercase from '@stdlib/string/uppercase';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import SolutionButton from 'components/solution-button';
import ResponseVisualizer from 'components/response-visualizer';
import './multiple_choice_matrix.css';


// VARIABLES //

const debug = logger( 'isle:multiple-choice-matrix' );


// MAIN //

/**
* An ISLE component that renders a matrix of multiple choice questions with the same answers.
*
* @property {Array} questions - an array of questions
* @property {Array} answers - an array of answers
* @property {(Node|string)} title - title to be displayed on top of the question matrix
* @property {string} type - question type (`radio` corresponds to "Select one", `checkbox` to "Select all that apply")
* @property {Function} onChange - callback invoked when the value of a checkbox / radio button changes; invoked with the two-dimensional boolean array of the active status for each answer option
* @property {Function} onSubmit- callback invoked when user clicks the "Submit" button; invoked with the two-dimensional boolean array of the active status for each answer option
*/
class MultipleChoiceMatrix extends Component {
	constructor( props ) {
		super( props );

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
		return (
			<Form.Row>
				<Col sm={6}></Col>
				{this.props.answers.map( ( elem, idx ) => {
					return ( <Col key={idx}>
						<Form.Label>{elem}</Form.Label>
					</Col> );
				})}
			</Form.Row>
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
	}

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
	}

	sendSubmitNotification = () => {
		const session = this.context.session;
		if ( this.state.submitted ) {
			session.addNotification({
				title: 'Answer re-submitted.',
				message: 'You have successfully re-submitted your answer.',
				level: 'success',
				position: 'tr'
			});
		} else {
			let msg = 'You have successfully submitted your answer. You can change your answer and re-submit if you want to.';
			session.addNotification({
				title: 'Answer submitted.',
				message: msg,
				level: 'success',
				position: 'tr'
			});
		}
	}

	handleSubmit = () => {
		const session = this.context.session;
		debug( 'Submit answer...' );
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'MULTIPLE_CHOICE_MATRIX_SUBMISSION',
				value: JSON.stringify( this.state.active )
			});
		}
		this.setState({
			submitted: true
		});
		this.props.onSubmit( this.state.active );
	}

	toggleSolution = () => {

	}

	renderAnswerButtons( row ) {
		const len = this.props.answers.length;
		const buttons = new Array( len );
		for ( let i = 0; i < len; i++ ) {
			buttons[ i ] = <Col key={i} >
				<Form.Check name={`radios-${row}`} data-pos={`${row}-${i}`} type={this.props.type} id={`${row}-${i}`} />
			</Col>;
		}
		return ( <Fragment>
			{buttons}
		</Fragment> );
	}

	renderQuestionRows() {
		return this.props.questions.map( ( question, idx ) => {
			return (
				<Form.Row key={idx} >
					<Col sm={6}>
						<Form.Label column >
							{question}
						</Form.Label>
					</Col>
					{this.renderAnswerButtons( idx )}
				</Form.Row>
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
					<Form onClick={this.props.type === 'checkbox' ? this.handleCheckboxClick : this.handleRadioClick}>
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
						>{ this.state.submitted ? 'Resubmit' : 'Submit'}</Button>
						<ResponseVisualizer
							id={this.props.id}
							dataType="text"
							info="MULTIPLE_CHOICE_MATRIX_SUBMISSION"
						/>
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

MultipleChoiceMatrix.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MultipleChoiceMatrix;
