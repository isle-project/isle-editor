// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '@isle-project/components/internal/spinner';


// TESTS //

it( 'renders an active spinner', () => {
	const spinner = renderer.create( <Spinner running /> ).toJSON();
	expect( spinner ).toMatchSnapshot();
});

it( 'renders an inactive spinner', () => {
	const spinner = renderer.create( <Spinner running={false} /> ).toJSON();
	expect( spinner ).toMatchSnapshot();
});
