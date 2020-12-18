// MAIN //

function normalizeLanguageCode( lng ) {
	if ( lng === 'en-gb' || lng === 'en-us' ) {
		lng = 'en';
	} else if ( lng === 'pt-br' ) {
		lng = 'pt';
	}
	return lng;
}


// EXPORTS //

export default normalizeLanguageCode;
