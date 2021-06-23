// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// MAIN //

const QuestionButton = ( props ) => {
	const popover = <Popover id="popover-positioned-right">
		<PopoverTitle>{props.title}</PopoverTitle>
		<PopoverContent>{props.content}</PopoverContent>
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
