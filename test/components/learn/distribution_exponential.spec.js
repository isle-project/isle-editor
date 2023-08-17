// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnExponentialDistribution from '@isle-project/components/learn/distribution-exponential/main.js';


// TESTS //

describe( '<LearnExponentialDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnExponentialDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
