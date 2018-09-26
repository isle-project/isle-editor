// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';


// MAIN //

const QuestionButton = ( props ) => {
	const popover = <Popover id="popover-positioned-right" title={props.title}>
		{props.content}
	</Popover>;

	return (
		<OverlayTrigger trigger="click" placement="right" rootClose overlay={popover}>
			<Button
				size="sm"
				style={{ float: 'right' }}
			>
				<div className="fa fa-question" />
			</Button>
		</OverlayTrigger>
	);
};

QuestionButton.propTypes = {
	'content': PropTypes.string.isRequired,
	'title': PropTypes.string.isRequired
};


// EXPORTS //

export default QuestionButton;
