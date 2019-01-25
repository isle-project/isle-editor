// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// MAIN //

const QuestionButton = ( props ) => {
	const popover = <Popover id="popover-positioned-right" title={props.title}>
		{props.content}
	</Popover>;

	return (
		<OverlayTrigger trigger="click" placement="right" rootClose overlay={popover}>
			<Button
				size="sm"
				variant="outline-secondary"
				style={{ float: 'right', padding: '0rem .4rem' }}
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
