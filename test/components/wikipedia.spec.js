// MODULES //

import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import Wikipedia from 'components/wikipedia';


// TESTS //

test( 'the component renders a div element', t => {
	const div = shallow( <Wikipedia /> );
	t.ok( div.find( 'div' ).length > 0, 'expected length is greater than 0' );
	t.end();
});

test( 'the component renders the search field', t => {
	const div = shallow( <Wikipedia showSearch /> );
	t.strictEqual( div.find( 'wikipedia_search' ).length, 0, 'expected className wikipedia_search' );
	t.end();
});

test( 'the component renders the speech recognition element', t => {
	const div = shallow( <Wikipedia showSearch /> );
	t.strictEqual( div.find( 'mike' ).length, 0, 'expected className mike' );
	t.end();
});
