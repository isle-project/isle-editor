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
		<i style={{ fontSize: '0.8rem' }} >
			{props.task}:
		</i>
	</span> );
};


// TYPES //

Question.propTypes = {
	content: PropTypes.string.isRequired,
	task: PropTypes.string.isRequired
};


// EXPORTS //

export default Question;
