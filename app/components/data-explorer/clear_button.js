// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';


// MAIN //

const ClearButton = ( props ) => ( <Button
	bsSize="xs"
	style={{ float: 'right' }}
	onClick={props.onClick}
>
	<span>&times;</span>
</Button> );

ClearButton.propTypes = {
	'onClick': PropTypes.func.isRequired
};


// EXPORTS //

export default ClearButton;
