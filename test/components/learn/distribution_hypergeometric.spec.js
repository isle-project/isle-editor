// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnHypergeometricDistribution from '@isle-project/components/learn/distribution-hypergeometric/main.js';


// TESTS //

describe( '<LearnHypergeometricDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnHypergeometricDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
