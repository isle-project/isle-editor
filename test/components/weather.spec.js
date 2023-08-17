// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from '@isle-project/components/weather/main.js';


// TESTS //

describe( '<Weather />', function test(){
	it( 'the component renders an element', () => {
		const { container } = render( <Weather /> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
