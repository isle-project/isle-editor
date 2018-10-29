// MODULES //

import React from 'react';


// MAIN //

/**
* Returns the filled output panel.
*/
const OutputPanel = ( output ) => {
	return (
		<div id="outputPanel" style={{
			height: (window.innerHeight*0.9) - 80,
			overflowY: 'scroll',
			padding: '5px'
		}}>
			{output}
		</div>
	);
};


// EXPORTS //

export default OutputPanel;
