// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Loadable from './loadable.js';


// FUNCTIONS //

const Loading = ( props ) => {
	if ( props.error ) {
		return ( <div>
			Encountered an error...
			<button onClick={props.retry}>Retry</button>
		</div> );
	}
	return <div>Loading...</div>;
};

Loading.propTypes = {
	error: PropTypes.object,
	retry: PropTypes.func
};

Loading.defaultProps = {
	error: null,
	retry() {}
};


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
