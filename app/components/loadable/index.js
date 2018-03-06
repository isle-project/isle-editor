// MODULES //

import React from 'react';
import Loadable from 'react-loadable';
import Provider from 'components/provider';


// FUNCTIONS //

const loading = () => {
	return <div>Loading...</div>;
};


// MAIN //

function MyLoadable( loader, session ) {
	return Loadable({
		loader: loader,
		loading,
		render( loaded, props ) {
			let Component = loaded.default;
			return ( <Provider session={session}>
				<Component {...props} />
			</Provider> );
		}
	});
}


// EXPORTS //

export default MyLoadable;
