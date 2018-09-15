// MODULES //

import React from 'react';


// MAIN //

/**
* Component displaying the current date in the format `<month>/<day>/<year>`.
*/
const DateDisplay = () => {
	const date = new Date();
	return <span>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</span>;
};


// EXPORTS //

export default DateDisplay;
