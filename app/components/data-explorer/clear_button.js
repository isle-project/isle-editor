// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Tooltip from 'components/tooltip';


// MAIN //

const ClearButton = ( props ) => (
	<Tooltip
		id="clear_tooltip"
		placement="bottom"
		tooltip="Delete"
	>
		<Button
			variant="outline-danger"
			size="sm"
			onClick={props.onClick}
			style={props.style}
			disabled={props.disabled}
		>
			<div className="fa fa-times" />
		</Button>
	</Tooltip>
);


// PROPERTIES //

ClearButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	style: PropTypes.object,
	disabled: PropTypes.bool
};

ClearButton.defaultProps = {
	style: {},
	disabled: false
};


// EXPORTS //

export default ClearButton;
