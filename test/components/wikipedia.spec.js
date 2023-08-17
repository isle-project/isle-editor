// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wikipedia from '@isle-project/components/wikipedia/main.js';


// TESTS //

describe( '<Wikipedia />', function test(){
	it( 'the component renders an element', () => {
		const { container } = render( <Wikipedia /> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
