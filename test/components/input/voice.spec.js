// MODULES //

import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Microphone from 'components/input/voice/microphone.js';
import VoiceInput from 'components/input/voice';
import contains from '@stdlib/assert/contains';


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

test( 'the component renders the legend', t => {
	const wrapper = mount( <VoiceInput
		language='fr-FR'
		legend="Voice Recording"
		defaultValue="Enter this text"
		/> );

	const expected = 'Voice Recording';
	t.ok( contains( wrapper.text(), expected ), 'contains expected legend' );
	t.end();
});

test( 'the component renders in full mode', t => {
	const wrapper = mount( <VoiceInput
		mode="full"
		defaultValue="Enter this text"
		legend="Legend"
		/> );

	const expected = 'Legend';
	t.ok( contains( wrapper.text(), expected ), 'contains expected legend' );

	const div = wrapper.find( '.voice-input-text' );
	t.ok( div, true, 'renders the voice-input-text' );
	t.end();
});

test( 'the component renders in status mode', t => {
	const wrapper = mount( <VoiceInput
		mode="full"
		defaultValue="Enter this text"
		/> );

	const div = wrapper.find( '.voice-input-text' );
	t.ok( div, false, 'does not render the voice-input-text' );

	const status = wrapper.find( '.voice-input-status' );
	t.ok( status, true, 'renders the voice-input-status' );

	t.end();
});

test( 'the component renders the solo-microphone', t => {
	const wrapper = mount( <VoiceInput
		mode="microphone"
		defaultValue="Enter this text"
		/> );

	const status = wrapper.find( '.voice-solo-microphone' );
	t.ok( status, true, 'renders the voice-solo-microphone' );

	t.end();
});

test( 'the component starts and stops recording (in microphone mode)', t => {
	const wrapper = mount( <VoiceInput
		mode="microphone"
		defaultValue="Enter this text"
		/> );

	const mic = wrapper.find( Microphone ).simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, true, 'isRecording is true' );

	mic.simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, false, 'isRecording is false' );
	t.end();
});

test( 'the component starts and stops recording (in full mode)', t => {
	const wrapper = mount( <VoiceInput
		mode="full"
		/> );
	const mic = wrapper.find( Microphone ).simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, true, 'isRecording is true' );

	mic.simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, false, 'isRecording is false' );
	t.end();
});


test( 'the component starts and stops recording (in status mode)', t => {
	const wrapper = mount( <VoiceInput
		mode="status"
		/> );

	const mic = wrapper.find( Microphone ).simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, true, 'isRecording is true' );

	mic.simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, false, 'isRecording is false' );
	t.end();
});

test( 'the component updates the value after the user has changed the input', t => {
	const wrapper = mount( <VoiceInput
		mode="full"
		/> );

	wrapper.find( '.voice-input-text' ).simulate('change', { target: { value: 'Lion' }});
	t.strictEqual( wrapper.instance().state.value, 'Lion', 'gets expected value' );
	t.end();
});


test( 'the component updates the value after the user has press the return button', t => {
	const wrapper = mount( <VoiceInput
		mode="full"
		/> );

	wrapper.find( '.voice-input-text' ).simulate('change', { target: { value: 'Lion' }});
	wrapper.find( '.voice-input-text' ).simulate('keydown', { keyCode: 13 });
	t.strictEqual( wrapper.instance().state.value, 'Lion', 'gets expected value' );
	wrapper.find( '.voice-input-text' ).simulate('keydown', { keyCode: 77 });
	t.end();
});
