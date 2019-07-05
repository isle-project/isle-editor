// MODULES //

import { isPrimitive as isString } from '@stdlib/assert/is-string';


// MAIN //

function generateUID( prefix ) {
	let counter = 1;
	const map = new WeakMap();

	const uid = ( item ) => {
		if ( isString( item ) ) {
			return `${prefix}-${item}`;
		}
		if ( !map.has( item ) ) {
			map.set( item, `${prefix}-${counter++}` );
			return uid( item );
		}
		return map.get( item );
	};
	return uid;
}


// EXPORTS //

export default generateUID;
