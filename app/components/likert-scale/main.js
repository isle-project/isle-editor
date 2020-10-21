// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import indexOf from '@stdlib/utils/index-of';
import generateUID from 'utils/uid';
import SessionContext from 'session/context.js';
import ResponseVisualizer from 'components/response-visualizer';
import { LIKERT_SCALE_SUBMISSION } from 'constants/actions.js';


// VARIABLES //

const uid = generateUID( 'likert-scale' );


// MAIN //

/**
* A component showing a question and a five-point scale for students to answer.
*
* @property {string} question - question to be printed
* @property {Array} options - an array of five elements holding the labels for the different scale levels
* @property {boolean} noMultipleResponses - disallow multiple submissions from a single student
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class LikertScale extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );
		this.state = {
			value: null,
			submitted: false
		};
	}

	submitHandler = () => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			session.addNotification({
				title: 'Answer submitted.',
				message: 'Your answer was successfully stored',
				level: 'success'
			});
		}
		this.setState({
			submitted: true
		});
		session.log({
			id: this.id,
			type: LIKERT_SCALE_SUBMISSION,
			value: indexOf( this.props.options, this.state.value )
		});
	}

	handleChange = ( event ) => {
		const value = event.target.value;
		this.setState({
			value
		});
	}

	render() {
		const disabled = this.props.noMultipleResponses && this.state.submitted;
		return (
			<Card className={`${this.props.className} center`} style={{ width: '75%', ...this.props.style }} >
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
									disabled={disabled}
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
						disabled={!this.state.value || disabled}
						onClick={this.submitHandler}
						style={{
							marginRight: '5px'
						}}
					>
						{ ( this.state.submitted && !this.props.noMultipleResponses ) ? 'Resubmit' : 'Submit' }
					</Button>
					<ResponseVisualizer
						buttonLabel="Responses"
						id={this.id}
						data={{
							type: 'factor',
							levels: this.props.options
						}}
						info={LIKERT_SCALE_SUBMISSION}
					/>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LikertScale.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	options: PropTypes.array,
	noMultipleResponses: PropTypes.bool,
	disableSubmitNotification: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
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
	noMultipleResponses: false,
	disableSubmitNotification: false,
	className: '',
	style: {}
};

LikertScale.contextType = SessionContext;


// EXPORTS //

export default LikertScale;
