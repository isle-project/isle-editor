// MODULES //

import React from 'react';


// MAIN //

/**
 * A component which displays a location's weather.
 */
function Location({ name, sys }) {
	return (
		<div className="weather-location">
			<div className="weather-place">
				{name},
			</div>
			<div className="weather-location-country">
				{sys.country}
			</div>
		</div>
	);
}


// EXPORTS //

export default Location;
