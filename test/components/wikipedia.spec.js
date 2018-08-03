// MODULES //

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wikipedia from 'components/wikipedia';
import VoiceInput from 'components/input/voice';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<Wikipedia />', function test(){
	it( 'the component renders a div element', () => {
		const div = shallow( <Wikipedia /> );
		expect( div.find( 'div' ).length ).toBeGreaterThan( 0 );
	});

	it( 'the component renders the search field', () => {
		const div = shallow( <Wikipedia showSearch /> );
		expect( div.find( 'wikipedia_search' ) ).toHaveLength( 0 );
	});

	it( 'the component renders the speech recognition element', () => {
		const div = shallow( <Wikipedia showSearch /> );
		expect( div.find( 'mike' ) ).toHaveLength( 0 );
	});

	it( 'the component triggers the wikipedia search externally', () => {
		const div = shallow( <Wikipedia
			language="de-DE"
			showSearch /> );
		div.instance().trigger( 'Was weißt du über Angela Merkel' );
	});

	it( 'the component returns the default language', () => {
		const wrapper = shallow( <Wikipedia
			showSearch /> );
		expect( wrapper.instance().props.language ).toBe( 'en-US' );
	});

	it( 'the component renders the VoiceInput', () => {
		const wrapper = shallow( <Wikipedia
			showSearch /> );
		const no = wrapper.find( VoiceInput );
		expect( no ).toHaveLength( 1 );
	});

	it( 'the component transforms the input into a valid wikipedia address and opens an IFrame', () => {
		const wrapper = mount( <Wikipedia
			/> );

		const voice = wrapper.find( VoiceInput );
		voice.find( '.voice-input-text' ).simulate( 'change', {
			target: {
				value: 'Angela Merkel'
			}
		});
		wrapper.find( '.wikipedia-logo' ).simulate( 'click' );
		expect( wrapper.instance().state.response ).toBe( 'https://en.wikipedia.org/wiki/Angela_Merkel' );
		expect( wrapper.find( 'iframe' ).length ).toBeGreaterThan( 0 );
	});

	it( 'the component gets a French request, transforms the input into a valid wikipedia address and opens an IFrame', () => {
		const wrapper = mount( <Wikipedia
			language='fr-FR'
			/> );

		const voice = wrapper.find( VoiceInput );
		voice.find( '.voice-input-text' ).simulate( 'change', {
			target: {
				value: 'Qu\'est-ce-que tu sais sur Angela Merkel'
			}
		});
		wrapper.find( '.wikipedia-logo' ).simulate( 'click' );
		expect( wrapper.instance().state.response ).toBe( 'https://fr.wikipedia.org/wiki/Angela_Merkel' );
		expect( wrapper.find( 'iframe' ).length ).toBeGreaterThan( 0 );
	});
});
