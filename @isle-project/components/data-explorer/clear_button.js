// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';


// MAIN //

const ClearButton = ( props ) => (
	<Tooltip
		id="clear_tooltip"
		placement={props.tooltipPlacement}
		tooltip={props.t('data-explorer:delete')}
	>
		<Button
			aria-label={props.t('data-explorer:delete')}
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
	tooltipPlacement: PropTypes.string,
	style: PropTypes.object,
	disabled: PropTypes.bool,
	t: PropTypes.func
};

ClearButton.defaultProps = {
	tooltipPlacement: 'bottom',
	style: {},
	disabled: false,
	t() {}
};


// EXPORTS //

export default ClearButton;
