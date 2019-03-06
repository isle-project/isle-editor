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
	const spinner = <div className="sk-cube-grid">
		<div className="sk-cube sk-cube1"></div>
		<div className="sk-cube sk-cube2"></div>
		<div className="sk-cube sk-cube3"></div>
		<div className="sk-cube sk-cube4"></div>
		<div className="sk-cube sk-cube5"></div>
		<div className="sk-cube sk-cube6"></div>
		<div className="sk-cube sk-cube7"></div>
		<div className="sk-cube sk-cube8"></div>
		<div className="sk-cube sk-cube9"></div>
	</div>;
	return spinner;
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
