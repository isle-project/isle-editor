// MODULES //

import React from 'react';
import Loadable from 'react-loadable';


// FUNCTIONS //

const loading = () => {
	return <div>Loading...</div>;
};


// MAIN //

function MyLoadable( loader ) {
	return Loadable({
		loader: loader,
		loading,
		render( loaded, props ) {
			let Component = loaded.default;
			return <Component {...props} />;
		}
	});
}


// EXPORTS //

export default MyLoadable;
