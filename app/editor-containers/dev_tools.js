// MODULES //

import React from 'react';


// MAIN //

// DevTools disabled - use Redux DevTools browser extension instead
// The old redux-devtools-log-monitor has compatibility issues with RSpack
const DevTools = () => null;

// Add a no-op instrument function for compatibility with configure_store
DevTools.instrument = () => f => f;


// EXPORTS //

export default DevTools;
