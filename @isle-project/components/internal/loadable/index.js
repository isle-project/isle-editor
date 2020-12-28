// MODULES //

import React from 'react';
import Loadable from './loadable.js';
import Loading from './loading.js';
import './loadable.css';


// MAIN //

function MyLoadable( loader ) {
	const out = Loadable({
		loader: loader,
		loading: Loading,
		render( loaded, props ) {
			let Component = loaded.default;
			return <Component {...props} />;
		}
	});
	out.loader = loader;
	return out;
}


// EXPORTS //

export default MyLoadable;
