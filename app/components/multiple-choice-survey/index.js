// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import Gate from 'components/gate';


// FUNCTIONS //

const AnswerOption = ( props ) => {

	if ( props.disabled ) {
		return (
			<ListGroupItem>
				{props.answerContent}
			</ListGroupItem>
		);
	}
	else {
		return (
			<ListGroupItem
				onClick={props.onAnswerSelected}
				active={props.active}
			>
				{props.answerContent}
			</ListGroupItem>
		);
	}
};

AnswerOption.propTypes = {
	answerContent: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]).isRequired,
	active: PropTypes.bool.isRequired,
	onAnswerSelected: PropTypes.func.isRequired
};


// MULTIPLE CHOICE QUESTION //

class MultipleChoiceSurvey extends Component {

	constructor( props ) {
		super( props );

		let active = props.multipleAnswers ?
			new Array( props.answers.length ) :
			null;

		this.state = {
			submitted: false,
			active,
			answerSelected: false
		};

		this.submitQuestion = () => {
			const { session } = this.context;
			if ( this.props.id ) {
				session.log({
					id: this.props.id,
					type: 'MULTIPLE_CHOICE_SURVEY_SUBMISSION',
					value: this.state.active
				}, 'members' );
			}
			if ( !this.props.allowMultipleAnswers ) {
				this.setState({
					submitted: true
				});
			}
			global.lesson.addNotification({
				title: 'Submitted',
				message: 'Your answer has been submitted.',
				level: 'success',
				position: 'tr'
			});
			this.props.onSubmit( this.state.active );
		};
	}

	componentDidMount() {
	}

	render() {
		const props = this.props;
		const { multipleAnswers } = props;

		const renderAnswerOptionsMultiple = ( key, id ) => {
			return (
				<AnswerOption
					key={key}
					no={id}
					answerContent={key}
					active={this.state.active[ id ]}
					submitted={this.state.submitted}
					onAnswerSelected={ () => {
						if ( !this.state.submitted ) {
							let newActive = this.state.active.slice();
							newActive[ id ] = !newActive[ id ];
							this.setState({
								active: newActive,
							});
						}
					}}
				/>
			);
		};

		const renderAnswerOptionsSingle = ( key, id ) => {
			return (
				<AnswerOption
					key={id}
					no={id}
					answerContent={key}
					active={this.state.active === id}
					submitted={this.state.submitted}
					onAnswerSelected={ () => {
						if ( !this.state.submitted ) {
							this.setState({
								active: id,
								answerSelected: true
							});
						}
					}}
				/>
			);
		};

		let disabled;
		if ( multipleAnswers ) {
			disabled = this.state.submitted;
		} else {
			disabled =  this.state.submitted || !this.state.answerSelected;
		}

		return (
			<Gate user>
				<Panel className="multipleChoiceSurvey" style={{
					margin: '0 auto 10px',
					maxWidth: 600,
					marginTop: '8px'
				}}>
					<h3>{props.question}</h3>
					{ multipleAnswers ? <span>You may select multiple answers</span> : null }
					<ListGroup fill >
						{ multipleAnswers ?
							props.answers.map( renderAnswerOptionsMultiple ) :
							props.answers.map( renderAnswerOptionsSingle )
						}
					</ListGroup>
					<Button
						bsSize="small"
						bsStyle="success"
						block fill
						onClick={this.submitQuestion}
						disabled={disabled}
					>{ this.state.submitted ? "Submitted" : "Submit"}</Button>
				</Panel>
			</Gate>
		);
	}
}


// DEFAULT PROPERTIES //

MultipleChoiceSurvey.defaultProps = {
	onSubmit() {},
	answers: [],
	allowMultipleAnswers: false
};


// PROPERTY TYPES //

MultipleChoiceSurvey.propTypes = {
	onSubmit: PropTypes.func,
	answers: PropTypes.array,
	allowMultipleAnswers: PropTypes.bool
};

MultipleChoiceSurvey.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MultipleChoiceSurvey;
