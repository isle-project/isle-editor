// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import copy from '@stdlib/utils/copy';
import keys from '@stdlib/utils/keys';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import HintButton from 'components/hint-button';
import ResponseVisualizer from 'components/response-visualizer';
import ChatButton from 'components/chat-button';
import Text from 'components/text';
import FeedbackButtons from 'components/feedback';
import SessionContext from 'session/context.js';
import { SELECT_QUESTION_MATRIX_SUBMISSION } from 'constants/actions.js';
import './select-question-matrix.css';


// MAIN //

/**
* A question with an answer consisting of multiple select boxes.
*/
class SelectQuestionMatrix extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			answers: {},
			submitted: false,
			answerState: null
		};
	}

	renderColumnNames() {
		const len = this.props.cols.length;
		let offset;
		if ( len > 7 ) {
			offset = 1;
		} else if ( len > 4 ) {
			offset = 2;
		} else {
			offset = 3;
		}
		return (
			<Form.Row className="multiple-choice-matrix-question-header" >
				<Col sm={offset}></Col>
				{this.props.cols.map( ( elem, idx ) => {
					return ( <Col key={idx}>
						<Form.Label>
							{ isString( elem ) ? <Text raw={elem} /> : elem }
						</Form.Label>
					</Col> );
				})}
			</Form.Row>
		);
	}

	handleChangeFactory = ( label ) => {
		return ( selected ) => {
			console.log( `Received a new value for ${label}...` );
			const answers = copy( this.state.answers, 1 );
			answers[ label ] = selected.value;
			this.setState({
				answers
			});
		};
	}

	handleSubmit = () => {
		const session = this.context;
		let correct = true;
		const labels = keys( this.props.solution );
		for ( let i = 0; i < labels.length; i++ ) {
			const key = labels[ i ];
			const sol = this.props.solution[ key ];
			const answer = this.state.answers[ key ];
			if ( isArray( sol ) ) {
				if ( !contains( sol, answer ) ) {
					correct = false;
				}
			}
			else if ( sol !== answer ) {
				correct = false;
			}
		}
		if ( this.props.provideFeedback ) {
			if ( correct ) {
				session.addNotification({
					title: 'Correct',
					message: this.props.successMsg,
					level: 'success',
					position: 'tr'
				});
			} else {
				session.addNotification({
					title: 'Incorrect',
					message: this.props.failureMsg,
					level: 'error',
					position: 'tr'
				});
			}
		} else {
			session.addNotification({
				title: this.state.submitted ? 'Answer re-submitted.' : 'Answer submitted.',
				message: this.state.submitted ?
					'You have successfully re-submitted your answer.' :
					'Your answer has been submitted.',
				level: 'info',
				position: 'tr'
			});
		}
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: SELECT_QUESTION_MATRIX_SUBMISSION,
				value: this.state.answers
			});
		}
		this.props.onSubmit( this.state.answers, correct );
		let answerState = null;
		if ( this.props.provideFeedback ) {
			answerState = correct ? 'success' : 'danger';
		}
		this.setState({
			submitted: true,
			answerState
		});
	}

	renderSelectInput( row, i ) {
		const label = row + ':' + i;
		let options = this.props.options[ label ];
		options = options.map( ( e, i ) => {
			return { 'label': e, 'value': i };
		});
		return (
			<Select
				name="form-field-name"
				className="select-field"
				value={this.state.value}
				isDisabled={this.state.submitted && this.state.answerState === 'success'}
				isSearchable={false}
				options={options}
				onChange={this.handleChangeFactory( label )}
				menuPlacement="top"
			/>
		);
	}

	renderRowSelects( row ) {
		const len = this.props.cols.length;
		const buttons = new Array( len );
		for ( let i = 0; i < len; i++ ) {
			buttons[ i ] = <Col key={i}>
				{this.renderSelectInput( row, i )}
			</Col>;
		}
		return ( <Fragment>
			{buttons}
		</Fragment> );
	}

	renderRows() {
		const len = this.props.rows.length;
		let offset;
		if ( len > 7 ) {
			offset = 1;
		} else if ( len > 4 ) {
			offset = 2;
		} else {
			offset = 3;
		}
		return this.props.rows.map( ( rowLabel, idx ) => {
			return (
				<Form.Row key={idx} style={{ marginBottom: 15, marginTop: 15 }} >
					<Col sm={offset}>
						<Form.Label column style={{ textAlign: 'right' }}>
							{ isString( rowLabel ) ? <Text raw={rowLabel} /> : rowLabel }
						</Form.Label>
					</Col>
					{this.renderRowSelects( idx )}
				</Form.Row>
			);
		});
	}

	render() {
		const nHints = this.props.hints.length;
		const nAnswers = keys( this.state.answers ).length;
		const nInputs = keys( this.props.options ).length;
		return (
			<Card id={this.props.id} border={this.state.answerState} className="select-question-matrix" style={this.props.style} body >
				{ this.props.question ? <label>{this.props.question}</label> : null }
				{this.renderColumnNames()}
				{this.renderRows()}
				<div className="select-question-toolbar">
					<Button className="submit-button"
						variant="primary" size="sm" onClick={this.handleSubmit}
						disabled={nAnswers < nInputs || this.state.submitted && this.state.answerState === 'success'}
					>
						{ this.state.submitted ? 'Resubmit' : 'Submit' }
					</Button>
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat && this.props.id ? <ChatButton for={this.props.id} /> : null
					}
					<ResponseVisualizer
						id={this.props.id}
						data={{
							type: 'matrix'
						}}
						info={SELECT_QUESTION_MATRIX_SUBMISSION}
					/>
					{ this.props.id && this.props.feedback ? <FeedbackButtons
						id={this.props.id+'_feedback'}
					/> : null }
				</div>
			</Card>
		);
	}
}


// PROPERTIES //

SelectQuestionMatrix.defaultProps = {
	question: '',
	rows: [],
	cols: [],
	solution: {},
	options: {},
	hints: [],
	hintPlacement: 'bottom',
	feedback: false,
	provideFeedback: true,
	failureMsg: 'Not quite, try again!',
	successMsg: 'That\'s the correct answer!',
	chat: false,
	style: {},
	onSubmit() {}
};

SelectQuestionMatrix.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	rows: PropTypes.array,
	cols: PropTypes.array,
	options: PropTypes.object,
	solution: PropTypes.object,
	hints: PropTypes.array,
	hintPlacement: PropTypes.string,
	feedback: PropTypes.bool,
	provideFeedback: PropTypes.bool,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	chat: PropTypes.bool,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

SelectQuestionMatrix.contextType = SessionContext;


// EXPORTS //

export default SelectQuestionMatrix;
