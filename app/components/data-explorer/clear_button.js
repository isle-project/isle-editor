// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';


// VARIABLES //

const tooltip = <Tooltip
	id="clear_tooltip"
>
	Delete
</Tooltip>;


// MAIN //

const ClearButton = ( props ) => (
	<OverlayTrigger
		placement="bottom"
		overlay={tooltip}
		rootClose={true}
	>
		<Button
			bsSize="xs"
			style={{ float: 'right' }}
			onClick={props.onClick}
		>
			<span>&times;</span>
		</Button>
	</OverlayTrigger>
);

ClearButton.propTypes = {
	'onClick': PropTypes.func.isRequired
};


// EXPORTS //

export default ClearButton;
