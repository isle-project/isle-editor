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

	let expected = 'Voice Recording';
	t.ok( contains( wrapper.text(), expected ), 'contains expected legend' );
	t.end();
});

test( 'the component renders in full mode', t => {
	const wrapper = mount( <VoiceInput
		mode="full"
		defaultValue="Enter this text"
		legend="Legend"
		/> );

	let expected = 'Legend';
	t.ok( contains( wrapper.text(), expected ), 'contains expected legend' );

	let div = wrapper.find( '.voice-input-text' );
	t.ok( div, true, 'renders the voice-input-text' );
	t.end();
});

test( 'the component renders in status mode', t => {
	const wrapper = mount( <VoiceInput
		mode="full"
		defaultValue="Enter this text"
		/> );

	let div = wrapper.find( '.voice-input-text' );
	t.ok( div, false, 'does not render the voice-input-text' );

	let status = wrapper.find( '.voice-input-status' );
	t.ok( status, true, 'renders the voice-input-status' );

	t.end();
});

test( 'the component renders the solo-microphone', t => {
	const wrapper = mount( <VoiceInput
		mode="microphone"
		defaultValue="Enter this text"
		/> );

	let status = wrapper.find( '.voice-solo-microphone' );
	t.ok( status, true, 'renders the voice-solo-microphone' );

	t.end();
});

test( 'the component starts and stops recording (in microphone mode)', t => {
	const wrapper = mount( <VoiceInput
		mode="microphone"
		defaultValue="Enter this text"
		/> );

	let mike = wrapper.find( Microphone ).simulate('click');
	console.log( mike );
	t.strictEqual( wrapper.instance().state.isRecording, true, 'isRecording is true' );

	mike.simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, false, 'isRecording is false' );
	t.end();
});

test( 'the component starts and stops recording (in full mode)', t => {
	const wrapper = mount( <VoiceInput
		mode="full"
		/> );

	let mike = wrapper.find( Microphone ).simulate('click');
	console.log( mike );
	t.strictEqual( wrapper.instance().state.isRecording, true, 'isRecording is true' );

	mike.simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, false, 'isRecording is false' );
	t.end();
});


test( 'the component starts and stops recording (in status mode)', t => {
	const wrapper = mount( <VoiceInput
		mode="status"
		/> );

	let mike = wrapper.find( Microphone ).simulate('click');
	console.log( mike );
	t.strictEqual( wrapper.instance().state.isRecording, true, 'isRecording is true' );

	mike.simulate('click');
	t.strictEqual( wrapper.instance().state.isRecording, false, 'isRecording is false' );
	t.end();
});
