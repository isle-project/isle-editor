// MODULES //

import { createElement } from 'react';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import isPlainObject from '@stdlib/assert/is-plain-object';


// VARIABLES //

const debug = logger( 'isle-editor:convert-json' );


// MAIN //

function convertJSONtoJSX( config ) {
	debug( `Convert JSON ${config.component} object to React element...` );
	let children = config.children;
	if ( isArray( children ) ) {
		for ( let i = 0; i < children.length; i++ ) {
			const child = children[ i ];
			if ( isPlainObject( child ) ) {
				children[ i ] = convertJSONtoJSX( child );
			}
		}
	} else if ( isPlainObject( children ) ) {
		children = convertJSONtoJSX( children );
	}
	const props = config.props || {};
	return createElement( config.component, props, children );
}


// EXPORTS //

export default convertJSONtoJSX;
