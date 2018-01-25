// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Panel from 'react-bootstrap/lib/Panel';
import logger from 'debug';
import PINF from '@stdlib/math/constants/float64-pinf';
import NINF from '@stdlib/math/constants/float64-ninf';
import ChatButton from 'components/chat-button';
import InstructorBar from 'components/instructor-bar';
import NumberInput from 'components/input/number';
import HintButton from 'components/hint-button';
import './number-question.css';

// VARIABLES //

const debug = logger( 'isle:number-question' );


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
			submitted: false
		};
	}

	componentWillReceiveProps( nextProps ) {
		if (
			nextProps.question !== this.props.question ||
			nextProps.solution !== this.props.solution
		) {
			this.setState({
				value: null,
				submitted: false
			});
		}
	}

	/*
	* Event handler invoked when text area value changes. Updates `value` and invokes `onChange` callback with the new value as its first argument
	*/
	handleChange = ( newValue ) => {
		this.setState({ value: newValue });
		this.props.onChange( newValue );
	}

	submitHandler = ( event ) => {
		const { session } = this.context;
		if ( this.props.solution ) {
			const correct = parseFloat( this.state.value ) === this.props.solution;
			session.addNotification({
				title: 'Answer submitted.',
				message: correct ? 'Congratulations, that is correct!' : 'Not quite. Compare your answer with the solution.',
				level: correct ? 'success' : 'error',
				position: 'tr'
			});
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
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const { session } = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'NUMBER_QUESTION_OPEN_HINT',
				value: idx
			});
		}
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		return (
			<Panel className="number-question">
				<Panel.Body>
					{ this.props.question ? <p><label>{this.props.question}</label></p> : null }
					<label>Your answer:</label>
					<NumberInput
						step="any"
						onChange={this.handleChange}
						defaultValue={this.state.value}
						disabled={this.state.submitted && this.props.solution}
						inline
						width={90}
						min={this.props.min}
						max={this.props.max}
						numbersOnly={false}
					/>
					{ this.state.submitted && this.props.solution ?
						<span>
							<span> | </span>
							<label>Solution:</label>
							<NumberInput
								disabled
								defaultValue={this.props.solution}
								inline
								width={90}
							/>
						</span>:
						null
					}
					<ButtonToolbar style={{ marginTop: '8px', marginBottom: '4px' }}>
						<Button
							bsStyle="primary"
							bsSize="sm"
							disabled={this.state.submitted && this.props.solution}
							onClick={this.submitHandler}
						>
							{ ( this.state.submitted && !this.props.solution ) ? 'Resubmit' : 'Submit' }
						</Button>
						{ nHints > 0 ?
							<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
							null
						}
						{
							this.props.chat && this.props.id ?
								<div style={{ display: 'inline-block', marginLeft: '4px' }}>
									<ChatButton for={this.props.id} />
								</div> : null
						}
					</ButtonToolbar>
					<InstructorBar id={this.props.id} dataType="number" />
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

NumberQuestion.defaultProps = {
	chat: false,
	hints: [],
	hintPlacement: 'bottom',
	max: PINF,
	min: NINF,
	onChange() {},
	question: '',
	solution: null
};


// PROPERTY TYPES //

NumberQuestion.propTypes = {
	chat: PropTypes.bool,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	max: PropTypes.number,
	min: PropTypes.number,
	onChange: PropTypes.func,
	question: PropTypes.string,
	solution: PropTypes.number
};

NumberQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default NumberQuestion;
