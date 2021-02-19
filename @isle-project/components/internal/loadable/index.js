// MODULES //

import React from 'react';
import loadable from '@loadable/component';
import Loading from './loading.js';
import './loadable.css';


// MAIN //

function MyLoadable( loader ) {
	const out = loadable( loader, {
		fallback: <Loading />
	});
	return out;
}


// EXPORTS //

export default MyLoadable;
