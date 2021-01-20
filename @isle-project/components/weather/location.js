// MODULES //

import React from 'react';


// MAIN //

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
