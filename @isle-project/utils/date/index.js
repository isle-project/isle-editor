// MAIN //

/**
* A wrapper around UTC Date objects.
*/
function date({ year, month, day, hour, minute, second, utcOffset }) {
	hour += utcOffset;
	if ( hour < 0 ) {
		day -= 1;
		hour += 24;
	} else if ( hour > 23 ) {
		day += 1;
		hour -= 24;
	}
	month -= 1;
	const out = new Date( Date.UTC( year, month, day, hour, minute, second ) );
	return out;
}


// EXPORTS //

export default date;
