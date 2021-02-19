// MODULES //

import React, { useEffect, useState } from 'react';


// VARIABLES //

const DELAY = 200;


// MAIN //

const Loading = () => {
	const [ showSpinner, setShowSpinner ] = useState(false);

	useEffect( () => {
		const timer = setTimeout(() => setShowSpinner( true ), DELAY );
		return () => {
			clearTimeout( timer );
		};
	});
	if ( !showSpinner ) {
		return null;
	}
	return (
		<span className="isle-loadable sk-cube-grid" >
			<span className="sk-cube sk-cube1"></span>
			<span className="sk-cube sk-cube2"></span>
			<span className="sk-cube sk-cube3"></span>
			<span className="sk-cube sk-cube4"></span>
			<span className="sk-cube sk-cube5"></span>
			<span className="sk-cube sk-cube6"></span>
			<span className="sk-cube sk-cube7"></span>
			<span className="sk-cube sk-cube8"></span>
			<span className="sk-cube sk-cube9"></span>
		</span>
	);
};


// EXPORTS //

export default Loading;
