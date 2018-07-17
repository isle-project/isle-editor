// MODULES //

import React from 'react';


// MAIN //

const DateDisplay = () => {
	const date = new Date();
	return <span>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</span>;
};


// EXPORTS //

export default DateDisplay;
