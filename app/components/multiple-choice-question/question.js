// MODULES //

import PropTypes from 'prop-types';


// MAIN //

const Question = ( props ) => {
	return ( <span className="question">
		<h3>{props.content}</h3>
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
