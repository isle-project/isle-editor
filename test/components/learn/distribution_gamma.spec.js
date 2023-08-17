// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnGammaDistribution from '@isle-project/components/learn/distribution-gamma/main.js';


// TESTS //

describe( '<LearnGammaDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnGammaDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
