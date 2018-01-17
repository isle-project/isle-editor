import Plotly from 'plotly.js/lib/core';


// MAIN //

Plotly.register([
	require( 'plotly.js/lib/bar' ),
	require( 'plotly.js/lib/box' ),
	require( 'plotly.js/lib/histogram' ),
	require( 'plotly.js/lib/pie' )
]);


// EXPORTS //

export default Plotly;
