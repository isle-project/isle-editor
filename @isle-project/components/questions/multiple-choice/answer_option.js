// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
import convertJSONtoJSX from '@isle-project/utils/json-to-jsx';
import isHTMLConfig from './is_html_config.js';
import './multiple-choice-styles.css';


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
	correct: PropTypes.bool,
	disabled: PropTypes.bool.isRequired,
	onAnswerSelected: PropTypes.func.isRequired
};

AnswerOption.defaultProps = {
	correct: null
};


// EXPORTS //

export default AnswerOption;
