/*
* The MIT License (MIT)
*
* Copyright (c) 2015 Martin Andert
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import lowercase from '@stdlib/string/lowercase';
import UNITLESS from './unitless.json';


// VARIABLES //

const UPPERCASE_RE = /([A-Z])/g;
const UNQUOTED_CONTENT_RE = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;


// FUNCTIONS

/**
 * Hyphenates a string by replacing all uppercase characters with their lowercase equivalent and prepends a hyphen (-).
 *
 * @param {string} str - string to hyphenate
 * @returns {string} hyphenated string
 */
function hyphenate( string ) {
	return lowercase( string.replace( UPPERCASE_RE, '-$1' ) );
}


// MAIN //

/**
 * Creates a CSS property name from a JSX attribute name.
 *
 * @param {string} key - CSS property name
 * @param {*} value - CSS property value
 * @returns {string} CSS property
 */
function createCSSProperty( key, value ) {
	if ( !UNITLESS[ key ] && isNumber( value ) ) {
		value = '' + value + 'px';
	} else if ( key === 'content' && !UNQUOTED_CONTENT_RE.test( value ) ) {
		value = "'" + value.replace( /'/g, "\\'" ) + "'";
	}
	return hyphenate( key ) + ': ' + value + ';';
}


// EXPORTS //

export default createCSSProperty;
