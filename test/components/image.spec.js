// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from '@isle-project/components/image/main.js';


// TESTS //

describe( '<Image />', function test() {
	it( 'renders an image', () => {
		const { container } = render( <Image src="https://bit.ly/37cof7K" /> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
