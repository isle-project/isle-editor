
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from 'react-bootstrap';
import NumberInput from 'components/input/number';
import Gate from 'components/gate';
import InstructorBar from 'components/instructor-bar';


// MAIN //

class NumberSurvey extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			submitted: false,
			value: null
		};

		this.submitQuestion = () => {
			const { session } = this.context;
			if ( this.props.id ) {
				session.log({
					id: this.props.id,
					type: 'NUMBER_SURVEY_SUBMISSION',
					value: this.state.value
				}, 'members' );
			}
			this.setState({
				submitted: true
			});
			session.addNotification({
				title: 'Submitted',
				message: 'Your answer has been submitted.',
				level: 'success',
				position: 'tr'
			});
			this.props.onSubmit( this.state.value );
		};
	}

	componentDidMount() {
	}

	render() {
		const props = this.props;
		const disabled = this.state.submitted && !props.allowMultipleAnswers;
		return (
			<Gate {...props} >
				<Panel className="NumberSurvey" style={{
					margin: '0 auto 10px',
					maxWidth: 600,
					marginTop: '8px'
				}}>
					<h3>{props.question}</h3>
					<NumberInput
						{...props}
						inline
						disabled={disabled}
						onChange={( value ) => {
							this.setState({
								value
							});
						}}
					/>
					<Button
						bsSize="small"
						bsStyle="success"
						block fill
						onClick={this.submitQuestion}
						disabled={disabled}
					>{ disabled ? "Submitted" : "Submit"}</Button>
				</Panel>
				<InstructorBar id={props.id} />
			</Gate>
		);
	}
}


// DEFAULT PROPERTIES //

NumberSurvey.defaultProps = {
	onSubmit() {},
	allowMultipleAnswers: false,
	question: ''
};


// PROPERTY TYPES //

NumberSurvey.propTypes = {
	onSubmit: PropTypes.func,
	allowMultipleAnswers: PropTypes.bool,
	question: PropTypes.string
};

NumberSurvey.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default NumberSurvey;
