// MODULES //

import { useEffect, useRef } from 'react';


// MAIN //

/**
 * Hook to use a previous value.
 *
 * @param {*} value - value for which to return the previous value
 * @returns {*} previous value
 */
function usePrevious( value ) {
	const ref = useRef();
	useEffect( () => {
		ref.current = value;
	}, [ value ] );
	return ref.current;
}


// EXPORTS //

export default usePrevious;
