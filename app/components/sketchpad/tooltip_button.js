// MODULES //

import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'components/tooltip';


// MAIN //

const TooltipButton = ({ tooltip, onClick, glyph, label, disabled, bsSize }) => {
	return ( <Tooltip placement="bottom" tooltip={tooltip} >
		<Button bsSize={bsSize} onClick={onClick} disabled={disabled} >
			{ glyph ? <Glyphicon glyph={glyph} /> : null }
			{label}
		</Button>
	</Tooltip> );
};


// EXPORTSS //

export default TooltipButton;
