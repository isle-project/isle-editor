// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
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

	it( 'renders the current time with a custom format', () => {
		const { container } = render( <Clock format="HH" /> );
		expect( container ).not.toBeEmptyDOMElement();
	});

	it( 'renders the duration of the lesson with a custom format', () => {
		const { container } = render( <Clock duration format="HH" /> );
		expect( container ).not.toBeEmptyDOMElement();
	});

	it( 'renders the current time in a custom style', () => {
		const { container } = render( <Clock style={{ color: 'red' }} /> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
