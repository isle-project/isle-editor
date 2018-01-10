// MODULES //

import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import Wikipedia from 'components/wikipedia';
import VoiceInput from 'components/input/voice';


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


test( 'the component triggers the wikipedia search externally', t => {
	const div = shallow( <Wikipedia
		language="de-DE"
		showSearch /> );
	div.instance().trigger('Was weißt du über Angela Merkel');
	t.end();
});

test( 'the component returns the default language', t => {
	const wrapper = shallow( <Wikipedia
		showSearch /> );
	t.strictEqual( wrapper.instance().props.language, 'en-US', 'expected default language' );
	t.end();
});


test( 'the component renders the VoiceInput', t => {
	const wrapper = shallow( <Wikipedia
		showSearch /> );
	const no = wrapper.find( VoiceInput );
	t.equal( no.length, 1, 'length is equal to one' );
	t.end();
});
