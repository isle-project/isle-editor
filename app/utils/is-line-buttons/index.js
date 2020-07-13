// MODULES //

import isPlainObject from '@stdlib/assert/is-plain-object';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
import { isPrimitive as isInteger } from '@stdlib/assert/is-integer';


// MAIN //

function isLineButtons( elem ) {
	return (
		isPlainObject( elem ) &&
		elem.props &&
		isInteger( elem.props.lineNumber ) &&
		isBoolean( elem.props.show )
	);
}


// EXPORTS //

export default isLineButtons;
