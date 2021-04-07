// MODULES //

import { useEffect, useRef } from 'react';


// MAIN //

function usePrevious( value ) {
	const ref = useRef();
	useEffect( () => {
		ref.current = value;
	});
	return ref.current;
}


// EXPORTS //

export default usePrevious;
