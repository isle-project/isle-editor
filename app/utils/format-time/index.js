// MODULES //

import floor from '@stdlib/math/base/special/floor';


// MAIN //

const formatTime = ( time ) => {
	time = time / 1000;
	const hours = floor( time / ( 60*60 ) );
	time = time % ( 60*60 );
	let minutes = floor( time / 60 );
	if ( minutes < 10 ) {
		minutes = '0'+minutes;
	}
	return hours + ':' + minutes;
};


// EXPORTS //

export default formatTime;
