// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Clock from '@isle-project/components/clock/main.js';


// TESTS //

describe( '<Clock />', function test() {
	it( 'renders the current time', () => {
		const { container } = render( <Clock /> );
		expect( container ).not.toBeEmptyDOMElement();
	});

	it( 'renders the duration of the lesson', () => {
		const { container } = render( <Clock duration /> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
