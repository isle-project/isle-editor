// MODULES //

import objectKeys from '@stdlib/utils/keys';
import createCSSProperty from './create_css_property.js';


// MAIN //

function createCSSRuleSet( selector, style, indent = '\t' ) {
	const keys = objectKeys( style );
	let out = '';
	out += selector;
	out += ' {\n';
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		const value = style[ key ];
		if ( value ) {
			out += indent;
			out += createCSSProperty( key, value );
			out += '\n';
		}
	}
	out += '}';
	return out;
}


// EXPORTS

export default createCSSRuleSet;
