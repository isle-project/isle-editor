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
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

SelectQuestion.defaultProps = {
	onChange() {},
	defaultValue: '',
	inline: false,
	question: '',
	successMsg: 'That\'s the correct answer!',
	failureMsg: 'Not quite, try again!'
};


// PROPERTY TYPES //

SelectQuestion.propTypes = {
	defaultValue: PropTypes.string,
	failureMsg: PropTypes.string,
	inline: PropTypes.bool,
	onChange: PropTypes.func,
	options: PropTypes.array.isRequired,
	question: PropTypes.string,
	solution: PropTypes.string.isRequired,
	successMsg: PropTypes.string
};

SelectQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default SelectQuestion;
