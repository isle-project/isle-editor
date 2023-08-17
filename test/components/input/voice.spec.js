// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VoiceInput from '@isle-project/components/input/voice/main.js';


// TESTS //

describe( '<VoiceInput />', function test() {
	it( 'renders a text input field', () => {
		const { getByRole } = render( <VoiceInput
			language='fr-FR'
			defaultValue="Enter text"
		/> );
		const textInput = getByRole( 'textbox' );
		expect( textInput.value ).toBe( 'Enter text' );
	});

	it( 'renders the legend', () => {
		const { container } = render( <VoiceInput
			language='fr-FR'
			legend="Voice Recording"
			defaultValue="Enter this text"
		/> );
		const expected = 'Voice Recording';
		expect( container ).toHaveTextContent( expected );
	});

	it( 'renders in full mode', () => {
		const expected = 'Legend';
		const { container } = render( <VoiceInput
			mode="full"
			defaultValue="Enter this text"
			legend={expected}
		/> );
		expect( container ).toHaveTextContent( expected );
		expect( container.querySelector( '.voice-input-text' ) ).toBeInTheDocument();
	});

	it( 'renders in status mode', () => {
		const { container } = render( <VoiceInput
			mode="status"
			defaultValue="Enter this text"
		/> );
		expect( container.querySelector( '.voice-input-status-text' ) ).toBeInTheDocument();
		expect( container.querySelector( '.voice-input-status' ) ).toBeInTheDocument();
	});

	it( 'renders the solo-microphone', () => {
		const { container } = render( <VoiceInput
			mode="microphone"
			defaultValue="Enter this text"
		/> );
		expect( container.querySelector( '.voice-solo-microphone' ) ).toBeInTheDocument();
	});
});
