// MODULES //

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Microphone from 'components/input/voice/microphone.js';
import VoiceInput from 'components/input/voice';
import contains from '@stdlib/assert/contains';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<VoiceInput />', function test() {
	it( 'renders the input field', () => {
		const wrapper = shallow( <VoiceInput
			language='fr-FR'
			defaultValue="Enter text"
			/> );

		const props = wrapper.instance().props;
		expect( props.language ).toBe( 'fr-FR' );
		const no = wrapper.find( 'input' );
		expect( no ).toHaveLength( 1 );

		const value = wrapper.instance().state.value;
		expect( value ).toBe( 'Enter text' );
	});

	it( 'renders the legend', () => {
		const wrapper = mount( <VoiceInput
			language='fr-FR'
			legend="Voice Recording"
			defaultValue="Enter this text"
			/> );

		const expected = 'Voice Recording';
		expect( contains( wrapper.text(), expected ) ).toBeTruthy();
	});

	it( 'renders in full mode', () => {
		const wrapper = mount( <VoiceInput
			mode="full"
			defaultValue="Enter this text"
			legend="Legend"
			/> );

		const expected = 'Legend';
		expect( contains( wrapper.text(), expected ) ).toBeTruthy();

		const div = wrapper.find( '.voice-input-text' );
		expect( div ).toBeTruthy();
	});

	it( 'renders in status mode', () => {
		const wrapper = mount( <VoiceInput
			mode="full"
			defaultValue="Enter this text"
			/> );

		const div = wrapper.find( '.voice-input-text' );
		expect( div ).toBeTruthy();

		const status = wrapper.find( '.voice-input-status' );
		expect( status ).toBeTruthy();

	});

	it( 'renders the solo-microphone', () => {
		const wrapper = mount( <VoiceInput
			mode="microphone"
			defaultValue="Enter this text"
			/> );

		const status = wrapper.find( '.voice-solo-microphone' );
		expect( status ).toBeTruthy();
	});

	it( 'starts and stops recording (in microphone mode)', () => {
		const wrapper = mount( <VoiceInput
			mode="microphone"
			defaultValue="Enter this text"
			/> );

		const mic = wrapper.find( Microphone ).simulate('click');
		expect( wrapper.instance().state.isRecording ).toBeTruthy();

		mic.simulate('click');
		expect( wrapper.instance().state.isRecording ).toBeFalsy();
	});

	it( 'starts and stops recording (in full mode)', () => {
		const wrapper = mount( <VoiceInput
			mode="full"
			/> );
		const mic = wrapper.find( Microphone ).simulate('click');
		expect( wrapper.instance().state.isRecording ).toBeTruthy();

		mic.simulate('click');
		expect( wrapper.instance().state.isRecording ).toBeFalsy();
	});


	it( 'starts and stops recording (in status mode)', () => {
		const wrapper = mount( <VoiceInput
			mode="status"
			/> );

		const mic = wrapper.find( Microphone ).simulate('click');
		expect( wrapper.instance().state.isRecording ).toBeTruthy();

		mic.simulate('click');
		expect( wrapper.instance().state.isRecording ).toBeFalsy();
	});

	it( 'updates the value after the user has changed the input', () => {
		const wrapper = mount( <VoiceInput
			mode="full"
			/> );

		wrapper.find( '.voice-input-text' ).simulate( 'change', { target: { value: 'Lion' }});
		expect( wrapper.instance().state.value ).toBe( 'Lion' );
	});

	it( 'updates the value after the user has press the return button', () => {
		const wrapper = mount( <VoiceInput
			mode="full"
			/> );

		wrapper.find( '.voice-input-text' ).simulate( 'change', { target: { value: 'Lion' }});
		wrapper.find( '.voice-input-text' ).simulate( 'keydown', { keyCode: 13 });
		expect( wrapper.instance().state.value ).toBe( 'Lion' );
		wrapper.find( '.voice-input-text' ).simulate( 'keydown', { keyCode: 77 });
	});
});
