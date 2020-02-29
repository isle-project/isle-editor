// MODULES //

import React from 'react';
import noop from '@stdlib/utils/noop';


// MAIN //

function Plotly( props ) {
	return <div {...props}></div>;
}

Plotly.setPlotConfig = noop;


// EXPORTS //

export default Plotly;
