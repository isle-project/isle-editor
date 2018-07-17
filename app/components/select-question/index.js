// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Panel from 'react-bootstrap/lib/Panel';
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
		const { session } = this.context;
		const value = event.target.value;
		this.setState({
			value,
			answerState: value === this.props.solution ? 'success' : 'error'
		}, () => {
			this.props.onChange( value );
			if ( this.props.solution === value ) {
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
		});
	}

	/*
	* React component render method.
	*/
	render() {
		if ( this.props.inline ) {
			return (
				<FormGroup
					controlId="formControlsSelect"
					validationState={this.state.answerState}
					style={{
						width: 'auto',
						display: 'inline'
					}}
				>
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
	failureMsg: 'Not quite, try again!',
	successMsg: 'That\'s the correct answer!',
	onChange() {}
};


// PROPERTY TYPES //

SelectQuestion.propDescriptions = {
	question: 'question for which the student has to select one of the available answer options',
	options: 'available answer options from which the student can select',
	solution: 'question solution (must be equal to one of the answer options)',
	defaultValue: 'preselected answer option',
	failureMsg: 'message to be displayed when student selects a wrong answer',
	successMsg: 'message to be displayed when student selects the correct answer',
	inline: 'controls whether the component should be inlined',
	onChange: 'callback  which is triggered after the submit action'
};

SelectQuestion.propTypes = {
	question: PropTypes.string,
	options: PropTypes.array.isRequired,
	solution: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	inline: PropTypes.bool,
	onChange: PropTypes.func
};

SelectQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default SelectQuestion;
