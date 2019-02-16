// MODULES //

import columnTagConvert from 'components/markdown-editor/column_tag_convert.js';
import isFunction from '@stdlib/assert/is-function';
import isString from '@stdlib/assert/is-string';


// TESTS //

describe( 'columnTagConvert', function test() {
	it( 'the main export is a function', () => {
		expect( isFunction(columnTagConvert) ).toBe( true );
	});

	it( 'returns the expected HTML markup for a column group with two columns', () => {
		const expected = [
			'<div style="display: table"><div style="width: 50%; float: left;">\n</div>',
			'<div style="width: 50%; float: left;">',
			'</div></div>'
		].join( '\n' );
		const input = '<!--ColGroupStart-->\n<!--Column2-->\n<!--ColGroupEnd-->';
		const actualOut = columnTagConvert( input );
		expect( isString( actualOut ) ).toBe( true );
		expect( actualOut ).toBe( expected );
	});

	it( 'returns the expected HTML markup for a column group with three columns', () => {
		const expected = [
			'<div style="display: table"><div style="width: 33.333333333333336%; float: left;">',
			'</div>',
			'<div style="width: 33.333333333333336%; float: left;">',
			'</div>',
			'<div style="width: 33.333333333333336%; float: left;">',
			'</div></div>'
		].join( '\n' );
		const input = '<!--ColGroupStart-->\n<!--Column2-->\n<!--Column3-->\n<!--ColGroupEnd-->';
		const actualOut = columnTagConvert(input);
		expect( isString( actualOut ) ).toBe( true );
		expect( actualOut ).toBe( expected );
	});

	it( 'returns the expected HTML markup when there are multiple column groups', () => {
		const expected =[
			'<div style="display: table"><div style="width: 33.333333333333336%; float: left;">',
			'</div>',
			'<div style="width: 33.333333333333336%; float: left;">',
			'</div>',
			'<div style="width: 33.333333333333336%; float: left;">',
			'</div></div>',
			'<div style="display: table"><div style="width: 50%; float: left;">',
			'</div>',
			'<div style="width: 50%; float: left;">',
			'</div></div>'
		].join( '\n' );
		const input = '<!--ColGroupStart-->\n<!--Column2-->\n<!--Column3-->\n<!--ColGroupEnd-->\n<!--ColGroupStart-->\n<!--Column2-->\n<!--ColGroupEnd-->';
		const actualOut = columnTagConvert( input );
		expect( isString( actualOut ) ).toBe( true );
		expect( actualOut ).toBe( expected );
	});
});
