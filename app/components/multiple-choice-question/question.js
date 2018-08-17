// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import isString from '@stdlib/assert/is-string';


// MAIN //

const Question = ( props ) => {
	let content = props.content;
	if ( isString( content ) ) {
		content = <label>{content}</label>;
	}
	return ( <span className="question">
		{content}
		<br />
		<span style={{ fontSize: '18px' }}>{props.task}:</span>
	</span> );
};


// TYPES //

Question.propTypes = {
	content: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired
};


// EXPORTS //

export default Question;
