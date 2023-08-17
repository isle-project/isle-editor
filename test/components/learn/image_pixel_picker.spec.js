// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnImagePixelPicker from '@isle-project/components/learn/image-pixel-picker/main.js';


// TESTS //

describe( '<LearnImagePixelPicker />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnImagePixelPicker /> );
		expect( learning ).toMatchSnapshot();
	});
});
