// MODULES //

import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Unveil from '@isle-project/components/unveil/main.js';


// TESTS //

describe( '<Unveil />', function test() {
	it( 'the component renders an element', () => {
		const { container } = render( <Unveil /> );
		expect( container ).not.toBeEmptyDOMElement();
	});

	it( 'the component unveils child elements if it is active', async () => {
		render( <Unveil active={true} ><h1>I am visible...</h1></Unveil> );
		await new Promise( res => setTimeout(() => {
			expect( screen.getByRole( 'heading' ) ).toHaveTextContent( 'I am visible...' );
			res();
		}, 2000 ));
	});

	it( 'the component unveils child elements after a specified delay if it is active', async () => {
		render( <Unveil active={true} delay={2000} ><h1>I am visible...</h1></Unveil> );
		await new Promise( res => setTimeout(() => {
			expect( screen.getByRole( 'heading' ) ).toHaveTextContent( 'I am visible...' );
			res();
		}, 3000 ));
	});
});
