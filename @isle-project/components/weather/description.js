// MODULES //

import React from 'react';


// MAIN //

/**
 * Component displaying a description of the weather.
 */
function Description({ weather }) {
	if ( !weather ) {
		return null;
	}
	return (
		<div className="weather-description">
			{weather.main} ({weather.description})
		</div>
	);
}


// EXPORTS //

export default Description;
