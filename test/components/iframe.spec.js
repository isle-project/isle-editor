// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IFrame from '@isle-project/components/iframe/main.js';


// TESTS //

describe( '<IFrame />', function test() {
	it( 'renders an IFrame', () => {
		const { container } = render( <IFrame src="https://wikipedia.org" /> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
