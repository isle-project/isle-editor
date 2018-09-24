// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Popover from 'react-bootstrap/lib/Popover';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';


// MAIN //

const QuestionButton = ( props ) => {
	const popover = <Popover id="popover-positioned-right" title={props.title}>
		{props.content}
	</Popover>;

	return (
		<OverlayTrigger trigger="click" placement="right" rootClose overlay={popover}>
			<Button
				bsSize="xs"
				style={{ float: 'right' }}
			>
				<Glyphicon glyph="question-sign" />
			</Button>
		</OverlayTrigger>
	);
};

QuestionButton.propTypes = {
	'content': PropTypes.string.isRequired
};


// EXPORTS //

export default QuestionButton;
