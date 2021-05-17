// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Seal from '@isle-project/components/seal/main.js';


// TESTS //

describe( '<Seal />', function test() {
	it( 'renders a seal', () => {
		const seal = renderer.create(
			<Seal />
		).toJSON();
		expect( seal ).toMatchSnapshot();
	});
});
