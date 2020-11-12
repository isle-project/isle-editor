// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TeX from 'components/tex/main.js';


// TESTS //

describe( '<TeX />', function test() {
	it( 'the component renders an element', () => {
		const { container } = render( <TeX raw="2+2" /> );
		expect( container ).not.toBeEmpty();
	});

	it( 'the component supports a numeric `raw` property value', () => {
		const { container } = render( <TeX raw={11} /> );
		expect( container ).toHaveTextContent( '11' );
	});

	it( 'the component handles an invalid LaTeX equation by not rendering anything', () => {
		const { container } = render( <TeX raw="\intelli x" /> );
		expect( container ).toBeEmpty();
	});

	it( 'the component handles an empty `raw` property value', () => {
		const { container } = render( <TeX raw="" /> );
		expect( container ).toBeEmpty();
	});

	it( 'the component renders a tag when `numbered` property is set', () => {
		const { container } = render( <TeX raw="2+2" displayMode numbered /> );
		expect( container ).toHaveTextContent( '[1]' );
	});

	it( 'the component supports using a custom tag', () => {
		const { container } = render( <TeX raw="2+2" displayMode numbered tag="[A]" /> );
		expect( container ).toHaveTextContent( '[A]' );
	});
});
