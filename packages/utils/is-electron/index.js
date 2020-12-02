// MODULES //

import isObject from '@stdlib/assert/is-object';
import { isPrimitive as isString } from '@stdlib/assert/is-string';


// MAIN //

const isElectron =
	typeof process === 'object' &&
	isObject( process.versions ) &&
	isString( process.versions.electron ) &&
	isString( process.versions.chrome ) &&
	(
		process.type === 'browser' ||
		process.type === 'renderer'
	);


// EXPORTS //

export default isElectron;
