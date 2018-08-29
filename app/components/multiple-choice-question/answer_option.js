// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Popover from 'react-bootstrap/lib/Popover';
import isObject from '@stdlib/assert/is-plain-object';
import OverlayTrigger from 'components/overlay-trigger';
import convertJSONtoJSX from 'utils/json-to-jsx';
import './multiple-choice-styles.css';


// FUNCTIONS //

function isHTMLConfig( elem ) {
	return (
		isObject( elem ) &&
		elem.component
	);
}


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
	const answerContent = isHTMLConfig( props.answerContent ) ?
		convertJSONtoJSX( props.answerContent ) :
		props.answerContent;
	const popover =
		<Popover id={props.no}>
			<strong>{ props.solution ? 'Correct answer' : 'Incorrect answer' }{props.answerExplanation ? ': ' : ''}</strong>
			{props.answerExplanation}
		</Popover>;

	if ( props.disabled ) {
		return (
			<ListGroupItem className="multiple-choice-answer"
				bsStyle={bsStyle}
				disabled
			>
				{answerContent}
			</ListGroupItem>
		);
	}
	else if ( props.submitted ) {
		return (
			<OverlayTrigger
				trigger={[ 'click', 'hover' ]}
				placement="right"
				overlay={popover}
			>
				<ListGroupItem className="multiple-choice-answer"
					onClick={props.onAnswerSelected}
					bsStyle={bsStyle}
					disabled={!props.provideFeedback}
				>
					{answerContent}
				</ListGroupItem>
			</OverlayTrigger>
		);
	}
	return (
		<ListGroupItem className="multiple-choice-answer"
			onClick={props.onAnswerSelected}
			active={props.active}
		>
			{answerContent}
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
		PropTypes.object,
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
