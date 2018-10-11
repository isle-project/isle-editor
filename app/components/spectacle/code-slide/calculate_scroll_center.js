/**
* Adapted from spectacle-code-slide@0.5.2 (MIT Licensed) https://github.com/jamiebuilds/spectacle-code-slide
*/

// MAIN //

function calculateScrollCenter( start, end, container ) {
	if ( !start ) return;

	end = end || start;

	const top = start.offsetTop;
	const bottom = end.offsetTop + end.offsetHeight;

	const middle = Math.floor((top + bottom) / 2);
	const height = container.offsetHeight;
	const half = height / 2;

	return middle - half;
}


// EXPORTS //

export default calculateScrollCenter;
