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
			variant="outline-danger"
			size="sm"
			style={{ float: 'right', padding: '0rem .4rem' }}
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
