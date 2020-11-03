// MODULES //

import isPlainObject from '@stdlib/assert/is-plain-object';


// MAIN //

function isLineWrapper( element ) {
	return (
		isPlainObject( element ) &&
		element.props &&
		element.props.tagName &&
		element.props.startColumn &&
		element.props.endColumn &&
		element.props.startLineNumber &&
		element.props.endLineNumber
	);
}

// EXPORTS //

export default isLineWrapper;
