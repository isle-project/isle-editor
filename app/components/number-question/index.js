// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, OverlayTrigger, Panel } from 'react-bootstrap';
import ChatButton from 'components/chat-button';
import InstructorBar from 'components/instructor-bar';
import NumberInput from 'components/input/number';


// MAIN //

class NumberQuestion extends Component {
	/**
	* Create a number question with a number input field.
	*
	* @param {Object} props
	*/
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			value: null,
			solutionDisplayed: false,
			submitted: false
		};

		/*
		* Event handler invoked when text area value changes. Updates `value` and invokes
		* `onChange` callback with the new text as its first argument
		*/
		this.handleChange = ( event ) => {
			const newValue = event.target.value;
			this.setState({ value: newValue });
			this.props.onChange( newValue );
		};

		this.submitHandler = ( event ) => {
			const { session } = this.context;
			const correct = this.state.value === this.props.solution;
			session.addNotification({
				title: 'Answer submitted.',
				message: correct ? 'Congratulations, that is correct!' : 'Not quite. Compare your answer with the solution.',
				level: correct ? 'success' : 'error',
				position: 'tr'
			});

			this.setState({
				submitted: true
			});
			if ( this.props.id ) {
				session.log({
					id: this.props.id,
					type: 'NUMBER_QUESTION_SUBMIT_ANSWER',
					value: this.state.value
				});
			}
		};

		this.handleSolutionClick = () => {
			const { session } = this.context;
			if ( this.state.solutionDisplayed ) {
				this.setState({
					solutionDisplayed: false,
					value: this.state.studentAnswer
				});
			} else {
				session.log({
					id: this.props.id,
					type: 'FREE_TEXT_QUESTION_DISPLAY_SOLUTION',
					value: null
				});
				this.setState({
					solutionDisplayed: true,
					studentAnswer: this.state.value,
					value: this.props.solution
				});
			}
		};
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;

		return (
			<Panel className="NumberQuestion">
				{ this.props.question ? <h4>{this.props.question}</h4> : null }
				<label>Your answer:</label>
				<NumberInput
					onChange={this.handleChange}
					value={this.state.value}
					disabled={this.state.submitted}
					inline
				/>
				{ this.state.submitted ?
					<span>
						<span> | </span>
						<label>Solution:</label>
						<NumberInput
							disabled
							value={this.props.solution}
							inline
						/>
					</span>:
					null
				}
				<ButtonToolbar style={{ marginTop: '8px', marginBottom: '4px' }}>
					<Button
						bsStyle="primary"
						bsSize="sm"
						style={{
							marginTop: '8px',
							marginBottom: '8px'
						}}
						disabled={this.state.submitted}
						onClick={this.submitHandler}
					>Submit</Button>
					{ nHints > 0 ?
						<OverlayTrigger
							trigger="click"
							placement="left"
							overlay={ displayHint( this.state.currentHint - 1, this.props.hints ) }
						>
							<Button
								bsStyle="primary"
								bsSize="sm"
								onClick={this.handleHintClick}
								disabled={this.state.disabled}
							>{getHintLabel( this.state.currentHint, this.props.hints.length, this.state.hintOpen )}</Button>
						</OverlayTrigger> :
						null
					}
					{
						this.props.chat && this.props.id ?
							<div style={{ display: 'inline-block', marginLeft: '4px' }}>
								<ChatButton for={this.props.id} />
							</div> : null
					}
				</ButtonToolbar>
				<InstructorBar id={this.props.id} />
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

NumberQuestion.defaultProps = {
	chat: false,
	hints: [],
	onChange() {},
	question: '',
	solution: null
};


// PROPERTY TYPES //

NumberQuestion.propTypes = {
	chat: PropTypes.bool,
	hints: PropTypes.array,
	onChange: PropTypes.func,
	question: PropTypes.string,
	solution: PropTypes.number,
};

NumberQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default NumberQuestion;
