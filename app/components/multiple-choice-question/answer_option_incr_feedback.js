// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Popover from 'react-bootstrap/Popover';
import isObject from '@stdlib/assert/is-plain-object';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
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
	let variant;
	if ( props.correct === true ) {
		variant = 'success';
	}
	else if ( props.correct === false ) {
		variant = 'danger';
	}
	const answerContent = isHTMLConfig( props.answerContent ) ?
		convertJSONtoJSX( props.answerContent ) :
		props.answerContent;

	if ( props.disabled ) {
		return (
			<ListGroupItem className="multiple-choice-answer"
				variant={variant}
				disabled
			>
				{answerContent}
			</ListGroupItem>
		);
	}
	else if ( isBoolean( props.correct ) ) {
		const popover =
		<Popover id={props.no}>
			<strong>{props.solution ? 'Correct answer' : 'Incorrect answer'}{props.answerExplanation ? ': ' : ''}</strong>
			{props.answerExplanation}
		</Popover>;
		return (
			<OverlayTrigger
				trigger={[ 'click', 'hover' ]}
				placement="right"
				overlay={popover}
			>
				<ListGroupItem className="multiple-choice-answer"
					onClick={props.onAnswerSelected}
					variant={variant}
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
	solution: PropTypes.bool.isRequired,
	disabled: PropTypes.bool.isRequired,
	no: PropTypes.number.isRequired,
	onAnswerSelected: PropTypes.func.isRequired
};

AnswerOption.defaultProps = {
	correct: null
};


// EXPORTS //

export default AnswerOption;
