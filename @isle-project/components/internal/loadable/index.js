// MODULES //

import React from 'react';
import loadable from '@loadable/component';
import Loading from './loading.js';
import './loadable.css';


// MAIN //

function MyLoadable( loader, opts = {} ) {
	if ( opts.fallback === void 0 ) {
		opts.fallback = <Loading />;
	}
	const out = loadable( loader, opts );
	return out;
}


// EXPORTS //

export default MyLoadable;
