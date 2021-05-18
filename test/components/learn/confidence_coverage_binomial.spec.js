// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import LearnConfidenceCoverageBinomial from '@isle-project/components/learn/confidence-coverage-binomial/main.js';


// TESTS //

describe( '<LearnConfidenceCoverageBinomial />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnConfidenceCoverageBinomial /> );
		expect( learning ).toMatchSnapshot();
	});
});
