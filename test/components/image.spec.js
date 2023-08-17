// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from '@isle-project/components/image/main.js';


// TESTS //

describe( '<Image />', function test() {
	it( 'renders an image', () => {
		const { container } = render( <Image src="https://bit.ly/37cof7K" /> );
		expect( container ).not.toBeEmptyDOMElement();
	});

	it( 'renders an image with a custom class', () => {
		const { container } = render( <Image src="https://bit.ly/37cof7K" className="custom-class" /> );
		expect( container.querySelector( '.custom-class' ) ).not.toBeNull();
	});

	it( 'renders an image with a custom style', () => {
		const { container } = render( <Image src="https://bit.ly/37cof7K" style={{ color: 'red' }} /> );
		expect( container.querySelector( 'img' ).style.color ).toBe( 'red' );
	});

	it( 'renders an image with an alt text', () => {
		const { container } = render( <Image src="https://bit.ly/37cof7K" alt="alt text" /> );
		expect( container.querySelector( 'img' ).alt ).toBe( 'alt text' );
	});
});
