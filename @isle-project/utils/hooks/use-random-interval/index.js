// MODULES //

import { useEffect, useRef } from 'react';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import runif from '@stdlib/random/base/discrete-uniform';


// MAIN //

/**
 * Hook to invoke a function after a random interval.
 *
 * @param {Function} callback - function to invoke
 * @param {number} minDelay - minimum delay in milliseconds
 * @param {number} maxDelay - maximum delay in milliseconds
 * @param {number} [initialDelay=0] - initial delay in milliseconds
 * @returns {void}
 */
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
