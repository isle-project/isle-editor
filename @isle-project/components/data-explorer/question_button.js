// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import PopoverHeader from 'react-bootstrap/PopoverHeader';
import PopoverBody from 'react-bootstrap/PopoverBody';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// MAIN //

const QuestionButton = ( props ) => {
	const popover = <Popover id="popover-positioned-right">
		<PopoverHeader>{props.title}</PopoverHeader>
		<PopoverBody>{props.content}</PopoverBody>
	</Popover>;
	return (
		<OverlayTrigger trigger={[ 'click', 'hover', 'focus' ]} placement="left" rootClose overlay={popover}>
			<Button
				aria-label={props.title}
				size="sm"
				variant="outline-secondary"
				className="question-button"
			>
				<div className="fa fa-question" />
			</Button>
		</OverlayTrigger>
	);
};


// PROPERTIES //

QuestionButton.propTypes = {
	'content': PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
	'title': PropTypes.string.isRequired
};


// EXPORTS //

export default QuestionButton;
