// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnPoissonDistribution from '@isle-project/components/learn/distribution-poisson/main.js';


// TESTS //

describe( '<LearnPoissonDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnPoissonDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
