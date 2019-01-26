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
		>
			<div className="fa fa-times" />
		</Button>
	</Tooltip>
);


// PROPERTIES //

ClearButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	style: PropTypes.object
};

ClearButton.defaultProps = {
	style: {}
};


// EXPORTS //

export default ClearButton;
