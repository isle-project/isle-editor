// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pages from '@isle-project/components/pages/main.js';


// TESTS //

describe( '<Pages />', function test() {
	it( 'renders an alert if no children are present', () => {
		const { container } = render( <Pages ></Pages> );
		expect( container ).toHaveTextContent( 'missing-children' );
	});

	it( 'renders a user-supplied `title`', () => {
		const { getByRole } = render( <Pages title="A Title" >
			<div>ONE</div>
			<div>TWO</div>
		</Pages> );
		expect( getByRole( 'heading') ).toHaveTextContent( 'A Title' );
	});

	it( 'allows one to set the `height` of the container', () => {
		const { container } = render(<Pages height="300px" >
			<div>ONE</div>
			<div>TWO</div>
			<div>THREE</div>
		</Pages> );
		const pages = container.querySelector( '.page-children-wrapper' );
		expect( pages.style.height ).toBe( '300px' );
	});
});
