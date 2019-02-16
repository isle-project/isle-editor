import columnTagConvert from 'components/markdown-editor/column_tag_convert.js';
import isFunction from '@stdlib/assert/is-function';
import isString from '@stdlib/assert/is-string';
import { string } from 'prop-types';

describe( 'columnTagConverter', function test() {
	it('the object is a function', () => {
		expect( isFunction(columnTagConvert) ).toBe(true);
	});

	it('Behaves correctly with 2 columns', () => {
		const expected = '<div style="display: table"><div style="width: 50%; float: left;">\n</div>\n<div style="width: 50%; float: left;">\n</div></div>';
		const input = '<!--ColGroupStart-->\n<!--Column2-->\n<!--ColGroupEnd-->';
		const actualOut = columnTagConvert(input);
		expect( isString( actualOut ) ).toBe(true);
		expect( actualOut ).toBe(expected);
		// sconsole.log(columnTagConvert('<!--ColGroupStart-->\n<!--Column2-->\n<!--ColGroupEnd-->'));
	});

	it('Behaves correctly with 3 columns', () => {
		const expected = '<div style="display: table"><div style="width: 33.333333333333336%; float: left;">\n</div>\n<div style="width: 33.333333333333336%; float: left;">\n</div>\n<div style="width: 33.333333333333336%; float: left;">\n</div></div>';
		const input = '<!--ColGroupStart-->\n<!--Column2-->\n<!--Column3-->\n<!--ColGroupEnd-->';
		const actualOut = columnTagConvert(input);
		expect( isString( actualOut ) ).toBe(true);
		expect( actualOut ).toBe(expected);
		// sconsole.log(columnTagConvert('<!--ColGroupStart-->\n<!--Column2-->\n<!--ColGroupEnd-->'));
	});

	it('Behaves correctly with 2 column groups', () => {
		var expected =[
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
		].join('\n');
		const input = '<!--ColGroupStart-->\n<!--Column2-->\n<!--Column3-->\n<!--ColGroupEnd-->\n<!--ColGroupStart-->\n<!--Column2-->\n<!--ColGroupEnd-->';
		const actualOut = columnTagConvert(input);
		expect( isString( actualOut ) ).toBe(true);
		expect( actualOut ).toBe(expected);
		// sconsole.log(columnTagConvert('<!--ColGroupStart-->\n<!--Column2-->\n<!--ColGroupEnd-->'));
	});

});

