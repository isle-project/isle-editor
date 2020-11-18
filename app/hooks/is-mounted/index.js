
// MODULES //

import { useCallback, useEffect, useRef } from 'react';


// MAIN //

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
