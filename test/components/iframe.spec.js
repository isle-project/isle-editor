// MODULES //

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IFrame from '@isle-project/components/iframe/main.js';


// TESTS //

describe( '<IFrame />', function test() {
	it( 'renders an IFrame', () => {
		const { container } = render( <IFrame src="https://wikipedia.org" /> );
		expect( container ).not.toBeEmptyDOMElement();
	});

	it( 'renders an IFrame with a custom class', () => {
		const { container } = render( <IFrame src="https://wikipedia.org" className="custom" /> );
		expect( container ).not.toBeEmptyDOMElement();
		expect( container.querySelector( '.custom' ) ).not.toBeNull();
	});

	it( 'renders an IFrame with a custom style', () => {
		render( <IFrame title="Wikipedia" src="https://wikipedia.org" style={{ width: '100px' }} /> );
		const iframe = screen.getByTitle( 'Wikipedia' );
		expect( iframe.parentElement.style.width ).toBe( '100px' );
	});
});
