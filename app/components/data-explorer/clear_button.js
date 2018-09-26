// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'components/tooltip';


// MAIN //

const ClearButton = ( props ) => (
	<Tooltip
		id="clear_tooltip"
		placement="bottom"
		tooltip="Delete"
	>
		<Button
			size="sm"
			style={{ float: 'right' }}
			onClick={props.onClick}
		>
			<span>&times;</span>
		</Button>
	</Tooltip>
);

ClearButton.propTypes = {
	'onClick': PropTypes.func.isRequired
};


// EXPORTS //

export default ClearButton;
