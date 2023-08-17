// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnBinomialDistribution from '@isle-project/components/learn/distribution-binomial/main.js';


// TESTS //

describe( '<LearnBinomialDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnBinomialDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
