// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Expire from '@isle-project/components/expire/main.js';


// TESTS //

describe( '<Expire />', function test() {
	it( 'the component renders an element', () => {
		const { container } = render( <Expire active={false} >TEST</Expire> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
