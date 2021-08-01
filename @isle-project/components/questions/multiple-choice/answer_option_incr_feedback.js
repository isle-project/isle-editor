// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Popover from 'react-bootstrap/Popover';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import convertJSONtoJSX from '@isle-project/utils/json-to-jsx';
import isHTMLConfig from './is_html_config.js';
import './multiple-choice-styles.css';


// MAIN //

const AnswerOption = ( props ) => {
	let className;
	let variant;
	if ( props.correct === true ) {
		variant = 'success';
		className = 'multiple-choice-answer-correct-popover';
	}
	else if ( props.correct === false ) {
		variant = 'danger';
		className = 'multiple-choice-answer-incorrect-popover';
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
	else if ( isBoolean( props.correct ) || props.isSolved ) {
		const popover =
		<Popover
			id={props.no}
			className={className}
		>
			<strong>{props.solution ? 'Correct answer' : 'Incorrect answer'}{props.answerExplanation ? ': ' : ''}</strong>
			{props.answerExplanation}
		</Popover>;
		return (
			<OverlayTrigger
				trigger={[ 'click', 'hover' ]}
				placement="bottom"
				overlay={popover}
			>
				<ListGroupItem className="multiple-choice-answer"
					onClick={props.onAnswerSelected}
					onKeyPress={props.onAnswerSelected}
					variant={variant}
					tabIndex={0} role="button"
				>
					{answerContent}
				</ListGroupItem>
			</OverlayTrigger>
		);
	}
	return (
		<ListGroupItem className="multiple-choice-answer"
			onClick={props.onAnswerSelected}
			onKeyPress={props.onAnswerSelected}
			active={props.active}
			tabIndex={0} role="button"
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
