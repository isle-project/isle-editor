// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorPicker from '@isle-project/components/color-picker/main.js';
import 'jest-canvas-mock';


// TESTS //

describe( '<ColorPicker />', function test() {
	it( 'renders a container div wrapping a color picker from react-color', () => {
		const { container } = render( <ColorPicker /> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
