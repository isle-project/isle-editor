// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Wikipedia from 'components/wikipedia/main.js';


// TESTS //

describe( '<Wikipedia />', function test(){
	it( 'the component renders an element', () => {
		const { container } = render( <Wikipedia /> );
		expect( container ).not.toBeEmpty();
	});
});
