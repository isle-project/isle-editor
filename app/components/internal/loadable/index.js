// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Loadable from './loadable.js';
import './loadable.css';


// FUNCTIONS //

const Loading = ( props ) => {
	if ( props.error ) {
		return ( <span>
			Encountered an error...
			<button onClick={props.retry}>Retry</button>
		</span> );
	} else if ( props.pastDelay ) {
		const spinner = <span className="isle-loadable sk-cube-grid" >
			<span className="sk-cube sk-cube1"></span>
			<span className="sk-cube sk-cube2"></span>
			<span className="sk-cube sk-cube3"></span>
			<span className="sk-cube sk-cube4"></span>
			<span className="sk-cube sk-cube5"></span>
			<span className="sk-cube sk-cube6"></span>
			<span className="sk-cube sk-cube7"></span>
			<span className="sk-cube sk-cube8"></span>
			<span className="sk-cube sk-cube9"></span>
		</span>;
		return spinner;
	}
	return null;
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
