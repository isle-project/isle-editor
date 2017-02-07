// MODULES //

import React, { Component, PropTypes } from 'react';
import { ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';


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

		this.handleChange = ( event ) => {
			const value = event.target.value;
			this.setState({
				value,
				answerState: value === this.props.solution ? 'success' : 'error'
			}, () => {
				this.props.onChange( value );

				if ( this.props.solution === value ) {
					global.lesson.addNotification({
						title: 'Correct',
						message: this.props.successMsg,
						level: 'success',
						position: 'tr'
					});
				} else {
					global.lesson.addNotification({
						title: 'Incorrect',
						message: this.props.failureMsg,
						level: 'error',
						position: 'tr'
					});
				}
			});
		};
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
						{this.props.options.map( e => {
							return <option value={e}>{e}</option>;
						})}
					</FormControl>
				</FormGroup>
			);
		} else {
			return (
				<Form>
					<FormGroup controlId="formControlsSelect" validationState={this.state.answerState}>
						{ this.props.legend ?
							<ControlLabel>{this.props.legend}</ControlLabel> :
							null
						}
						<FormControl
							value={this.state.value}
							defaultValue={this.props.defaultValue}
							componentClass="select"
							placeholder="select"
							onChange={this.handleChange}

						>
							{this.props.options.map( e => {
								return <option value={e}>{e}</option>;
							})}
						</FormControl>
					</FormGroup>
				</Form>
			);
		}
	}
};


// DEFAULT PROPERTIES //

SelectQuestion.defaultProps = {
	onChange() {},
	defaultValue: '',
	inline: false,
	legend: '',
	successMsg: 'That\'s the correct answer!',
	failureMsg: 'Not quite, try again!'
};


// PROPERTY TYPES //

SelectQuestion.propTypes = {
	onChange: PropTypes.func,
	defaultValue: PropTypes.string,
	inline: PropTypes.bool,
	legend: PropTypes.string,
	options: PropTypes.array.isRequired,
	solution: PropTypes.string.isRequired,
	successMsg: PropTypes.string,
	failureMsg: PropTypes.string
};


// EXPORTS //

export default SelectQuestion;
