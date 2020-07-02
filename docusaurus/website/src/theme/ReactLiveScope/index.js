// MODULES //

import React from 'react';
import WrappedComponents from './wrapped_components.js';


// MAIN //

// Add react-live imports you need here
const ReactLiveScope = {
	React,
	...React,
	...WrappedComponents
};


// EXPORTS //

export default ReactLiveScope;
