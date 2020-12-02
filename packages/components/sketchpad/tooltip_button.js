// MODULES //

import React from 'react';
import Button from 'react-bootstrap/Button';
import Tooltip from 'components/tooltip';


// MAIN //

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
