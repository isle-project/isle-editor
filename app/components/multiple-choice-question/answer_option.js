// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import './multiple-choice-styles.css';


// MAIN //

const AnswerOption = ( props ) => {
	let bsStyle;
	if ( props.provideFeedback ) {
		if ( props.correct === true ) {
			bsStyle = 'success';
		}
		else if ( props.correct === false ) {
			bsStyle = 'danger';
		}
		else if ( props.solution === true ) {
			// Case: User did not pick correct answer...
			bsStyle = 'warning';
		}
	}
	const popover =
		<Popover id={props.no}>
			<strong>{ props.solution ? 'Correct answer: ' : 'Incorrect answer: ' }</strong>
			{props.answerExplanation}
		</Popover>;

	if ( props.disabled ) {
		return (
			<ListGroupItem className="multiple-choice-answer"
				bsStyle={bsStyle}
				disabled
			>
				{props.answerContent}
			</ListGroupItem>
		);
	}
	else if ( props.submitted ) {
		return (
			<OverlayTrigger
				trigger={[ 'click', 'hover' ]}
				placement="right"
				overlay={props.answerExplanation ? popover : <span />}
			>
				<ListGroupItem className="multiple-choice-answer"
					onClick={props.onAnswerSelected}
					bsStyle={bsStyle}
					disabled={!props.provideFeedback}
				>
					{props.answerContent}
				</ListGroupItem>
			</OverlayTrigger>
		);
	}
	return (
		<ListGroupItem className="multiple-choice-answer"
			onClick={props.onAnswerSelected}
			active={props.active}
		>
			{props.answerContent}
		</ListGroupItem>
	);
};


// TYPES //

AnswerOption.propTypes = {
	active: PropTypes.bool.isRequired,
	answerContent: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]).isRequired,
	answerExplanation: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]).isRequired,
	correct: PropTypes.bool,
	disabled: PropTypes.bool.isRequired,
	no: PropTypes.number.isRequired,
	onAnswerSelected: PropTypes.func.isRequired,
	provideFeedback: PropTypes.bool.isRequired,
	solution: PropTypes.bool.isRequired,
	submitted: PropTypes.bool.isRequired
};

AnswerOption.defaultProps = {
	correct: null
};


// EXPORTS //

export default AnswerOption;
