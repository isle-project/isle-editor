
// MODULES //

import { useCallback, useEffect, useRef } from 'react';


// MAIN //

/**
* React hook to check if component is mounted.
*
* @returns {Function} function that returns a boolean value for whether the component is mounted
*/
const useIsMounted = () => {
	const isMountedRef = useRef( true );
	const isMounted = useCallback( () => isMountedRef.current, [] );
	useEffect( () => {
		return () => {
			isMountedRef.current = false;
		};
	}, [] );
	return isMounted;
};


// EXPORTS //

export default useIsMounted;
