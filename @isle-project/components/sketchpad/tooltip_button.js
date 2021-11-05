// MODULES //

import React from 'react';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';


// MAIN //

/**
* A tooltip button.
*
* @property {string} props.tooltip - tooltip text
* @property {Function} [props.onClick] - click handler
* @property {string} [props.glyph] - glyph name
* @property {string} [props.label] - button label
* @property {boolean} [props.disabled] - whether or not the button is disabled
* @property {string} [props.size] - button size
* @property {string} [props.variant='light'] - button variant
* @returns {React.Element} a tooltip button
*/
const TooltipButton = ({ tooltip, onClick, glyph, label, disabled, size, variant = 'light' }) => {
	return ( <Tooltip placement="bottom" tooltip={tooltip} >
		<Button
			variant={variant}
			size={size} onClick={onClick} disabled={disabled}
			aria-label={tooltip}
		>
			{ glyph ? <div className={`fa fa-${glyph}`} /> : null }
			{label}
		</Button>
	</Tooltip> );
};


// EXPORTS //

export default TooltipButton;
