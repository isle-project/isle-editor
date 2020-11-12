// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Clock from 'components/clock/main.js';


// TESTS //

it( 'renders the current time', () => {
	const { container } = render( <Clock /> );
	expect( container ).not.toBeEmpty();
});

it( 'renders the duration of the lesson', () => {
	const { container } = render( <Clock duration /> );
	expect( container ).not.toBeEmpty();
});
