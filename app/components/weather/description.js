// MODULES //

import React from 'react';


// MAIN //

function Description( props ) {
	let icon = 'http:' + props.condition.icon;
	return (
		<div className="weather-description">{ props.condition.text }
			<img className="weather-icon" src={icon} />
		</div>
	);
}


// EXPORTS //

export default Description;
