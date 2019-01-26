// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import indexOf from '@stdlib/utils/index-of';
import SessionContext from 'session/context.js';
import ResponseVisualizer from 'components/response-visualizer';


// MAIN //

/**
* A component showing a question and a five-point scale for students to answer.
*
* @property {string} question - question to be printed
* @property {Array} options - an array of five elements holding the labels for the different scale levels
* @property {bool} disableSubmitNotification - controls whether to disable submission notifications
*/
class LikertScale extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: null,
			submitted: false
		};
	}

	submitHandler = ( event ) => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			session.addNotification({
				title: 'Answer submitted.',
				message: 'Your answer was successfully stored',
				level: 'success',
				position: 'tr'
			});
		}
		this.setState({
			submitted: true
		});
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'LIKERT_SCALE_SUBMISSION',
				value: indexOf( this.props.options, this.state.value )
			});
		}
	}

	handleChange = ( event ) => {
		const value = event.target.value;
		this.setState({
			value
		});
	}

	render() {
		return (
			<Card className="center" style={{ width: '75%' }} >
				<Card.Body>
					<FormGroup className="center" >
						<label>{this.props.question}</label>
						<br />
						{this.props.options.map( ( elem, idx ) => {
							return (
								<Form.Check
									type="radio"
									label={elem}
									checked={this.state.value === elem}
									value={elem}
									key={idx}
									inline
									onClick={this.handleChange}
								/>
							);
						})}
					</FormGroup>
					<br />
					<Button
						className="submit-button"
						variant="primary"
						size="sm"
						disabled={!this.state.value}
						onClick={this.submitHandler}
						style={{
							marginRight: '5px'
						}}
					>
						{ ( this.state.submitted ) ? 'Resubmit' : 'Submit' }
					</Button>
					<ResponseVisualizer
						buttonLabel="Responses"
						id={this.props.id}
						data={{
							type: 'factor',
							levels: this.props.options
						}}
						info="LIKERT_SCALE_SUBMISSION"
					/>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LikertScale.propTypes = {
	question: PropTypes.string,
	options: PropTypes.array,
	disableSubmitNotification: PropTypes.bool
};

LikertScale.defaultProps = {
	question: '',
	options: [
		'Strongly disagree',
		'Disagree',
		'Neither agree nor disagree',
		'Agree',
		'Strongly agree'
	],
	disableSubmitNotification: false
};

LikertScale.contextType = SessionContext;


// EXPORTS //

export default LikertScale;
