// MODULES //

const noop = require( '@stdlib/utils/noop' );


// MAIN //

function Plotly( props ) {
	return <div {...props}></div>;
}

Plotly.setPlotConfig = noop;


// EXPORTS //

module.exports = Plotly;
