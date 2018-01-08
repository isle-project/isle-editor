// MODULES //

import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import VoiceInput from 'components/input/voice';


// TESTS //

test( 'the component renders the input field', t => {
	const wrapper = shallow( <VoiceInput
		language='fr-FR'
		defaultValue="Enter text"
		/> );

	const props = wrapper.instance().props;
	t.equal( props.language, 'fr-FR', 'finds expected language' );
	const no = wrapper.find( 'input' );
	t.equal( no.length, 1, 'length is equal to one' );

	const value = wrapper.instance().state.value;
	t.equal( value, 'Enter text', 'returns expected text' );
	t.end();
});

