// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnChiSquareDistribution from '@isle-project/components/learn/distribution-chisquare/main.js';


// TESTS //

describe( '<LearnChiSquareDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnChiSquareDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
