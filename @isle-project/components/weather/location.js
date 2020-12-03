// MODULES //

import React from 'react';


// MAIN //

function Location( props ) {
	return (
		<div className="weather-location">
			<div className="weather-place">
				{props.name}
			</div>
			<div className="weather-location-region">
				{props.region},
			</div>
			<div className="weather-location-country">
				{props.country}
			</div>
		</div>
	);
}


// EXPORTS //

export default Location;
