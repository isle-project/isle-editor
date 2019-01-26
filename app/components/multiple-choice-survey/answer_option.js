// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


// MAIN //

const AnswerOption = ( props ) => {
	if ( props.disabled ) {
		return (
			<ListGroupItem>
				{props.answerContent}
			</ListGroupItem>
		);
	}
	return (
		<ListGroupItem
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
	disabled: PropTypes.bool.isRequired,
	onAnswerSelected: PropTypes.func.isRequired
};


// EXPORTS //

export default AnswerOption;
