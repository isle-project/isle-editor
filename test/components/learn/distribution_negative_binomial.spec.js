// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnNegativeBinomialDistribution from '@isle-project/components/learn/distribution-negative-binomial/main.js';


// TESTS //

describe( '<LearnNegativeBinomialDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnNegativeBinomialDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
