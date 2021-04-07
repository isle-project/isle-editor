// MODULES //

import { useEffect, useRef } from 'react';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import runif from '@stdlib/random/base/discrete-uniform';


// MAIN //

const useRandomInterval = ( callback, minDelay, maxDelay, initialDelay = 0 ) => {
	const timeout = useRef( null );
	const savedCallback = useRef( callback );

	useEffect( () => {
		savedCallback.current = callback;
	}, [ callback ] );
	useEffect( () => {
		if ( isNumber( minDelay ) && isNumber( maxDelay ) ) {
			const handleTick = () => {
				let min = minDelay;
				let max = maxDelay;
				if ( !timeout.current ) {
					min += initialDelay;
					max += initialDelay;
				}
				timeout.current = setTimeout(() => {
					savedCallback.current();
					handleTick();
				}, runif( min, max ) );
			};
			handleTick();
		}
		return () => clearTimeout( timeout.current );
	}, [ initialDelay, minDelay, maxDelay ] );
	return () => {
		clearTimeout( timeout.current );
	};
};


// EXPORTS //

export default useRandomInterval;
