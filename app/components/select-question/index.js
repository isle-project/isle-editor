// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import HintButton from 'components/hint-button';
import InstructorBar from 'components/instructor-bar';
import ChatButton from 'components/chat-button';
import './select-question.css';


// MAIN //

class SelectQuestion extends Component {
	/**
	* Create a select question.
	*
	* @param {Object} props - component properties (`onChange` callback and `defaultValue`)
	*/
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			value: props.defaultValue,
			answerState: null
		};
	}

	handleChange = ( event ) => {
		const value = event.target.value;
		this.setState({
			value,
			answerState: null
		}, () => {
			this.props.onChange( value );
		});
	}

	handleSubmit = () => {
		const { session } = this.context;
		let correct;
		if ( this.props.solution === this.state.value ) {
			session.addNotification({
				title: 'Correct',
				message: this.props.successMsg,
				level: 'success',
				position: 'tr'
			});
			correct = true;
		} else {
			session.addNotification({
				title: 'Incorrect',
				message: this.props.failureMsg,
				level: 'error',
				position: 'tr'
			});
			correct = false;
		}
		this.props.onSubmit( correct, this.state.value );
		this.setState({
			answerState: correct ? 'success' : 'error',
			submitted: true
		});
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		if ( this.props.inline ) {
			return (
				<FormGroup
					controlId="select-question-form-group"
					validationState={this.state.answerState}
					style={{
						width: 'min-content',
						display: 'inline'
					}}
				>
					<InputGroup>
						<FormControl
							value={this.state.value}
							defaultValue={this.props.defaultValue}
							componentClass="select"
							placeholder="select"
							onChange={this.handleChange}
						>
							{this.props.options.map( ( e, idx ) => {
								return <option key={idx} value={e}>{e}</option>;
							})}
						</FormControl>
						<InputGroup.Button>
							<Button>Submit</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
			);
		}
		return (
			<Panel className="select-question">
				<Panel.Body>
					<Form>
						<FormGroup controlId="formControlsSelect" validationState={this.state.answerState}>
							{ this.props.question ?
								<ControlLabel>{this.props.question}</ControlLabel> :
								null
							}
							<FormControl
								value={this.state.value}
								defaultValue={this.props.defaultValue}
								componentClass="select"
								placeholder="select"
								onChange={this.handleChange}

							>
								{this.props.options.map( ( e, idx ) => {
									return <option className="select-question-option" key={idx} value={e}>{e}</option>;
								})}
							</FormControl>
						</FormGroup>
					</Form>
					<div className="select-question-toolbar">
						<Button bsStyle="primary" bsSize="sm" onClick={this.handleSubmit}>
							{ this.state.submitted ? 'Resubmit' : 'Submit' }
						</Button>
						{ nHints > 0 ?
							<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
							null
						}
						{
							this.props.chat && this.props.id ?
								<ChatButton for={this.props.id} /> : null
						}
					</div>
					<InstructorBar id={this.props.id} dataType="text" />
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

SelectQuestion.defaultProps = {
	question: '',
	defaultValue: '',
	inline: false,
	hints: [],
	hintPlacement: 'bottom',
	chat: false,
	failureMsg: 'Not quite, try again!',
	successMsg: 'That\'s the correct answer!',
	onChange() {},
	onSubmit() {}
};


// PROPERTY TYPES //

SelectQuestion.propDescriptions = {
	question: 'question for which the student has to select one of the available answer options',
	options: 'available answer options from which the student can select',
	solution: 'question solution (must be equal to one of the answer options)',
	defaultValue: 'preselected answer option',
	inline: 'controls whether the component is rendered inline or not',
	hints: 'hints providing guidance on how to answer the question',
	hintPlacement: 'placement of the hints (either `top`, `left`, `right`, or `bottom`)',
	chat: 'controls whether the element should have an integrated chat',
	failureMsg: 'message to be displayed when student selects a wrong answer',
	successMsg: 'message to be displayed when student selects the correct answer',
	onChange: 'callback  which is triggered after the submit action',
	onSubmit: 'callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly anwered (if applicable, `null` otherwise) and the supplied answer as the second parameter'
};

SelectQuestion.propTypes = {
	question: PropTypes.string,
	options: PropTypes.array.isRequired,
	solution: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	inline: PropTypes.bool,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	chat: PropTypes.bool,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

SelectQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default SelectQuestion;
