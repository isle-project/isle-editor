// MAIN //

function isHidden( el ) {
	if ( !el ) {
		return true;
	}
	return el.offsetParent === null;
}


// EXPORTS //

export default isHidden;
