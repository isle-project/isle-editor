// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import isObject from '@stdlib/assert/is-plain-object';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
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
	if ( isBoolean( props.correct ) ) {
		variant = 'info';
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
	return (
		<ListGroupItem className="multiple-choice-answer"
			variant={variant}
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
	correct: PropTypes.bool.isRequired,
	disabled: PropTypes.bool.isRequired,
	onAnswerSelected: PropTypes.func.isRequired
};


// EXPORTS //

export default AnswerOption;
