// MODULES //

import mean from 'utils/statistic/mean';


// MAIN //

function calculateCoefficients( x, y ) {
	const xmu = mean( x );
	const ymu = mean( y );
	let C1 = 0;
	let C2 = 0;
	const len = x.length;
	for ( let i = 0; i < len; i++ ) {
		let xdelta = x[ i ] - xmu;
		let ydelta = y[ i ] - ymu;
		C1 += xdelta * xdelta;
		C2 += xdelta * ydelta;
	}
	const slope = C2 / C1;
	const yint = ymu - slope*xmu;
	return [ yint, slope ];
}


// EXPORTS //

export default calculateCoefficients;
