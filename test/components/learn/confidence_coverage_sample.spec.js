// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import LearnConfidenceCoverageSample from '@isle-project/components/learn/confidence-coverage-sample/main.js';


// TESTS //

describe( '<LearnConfidenceCoverageSample />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnConfidenceCoverageSample /> );
		expect( learning ).toMatchSnapshot();
	});
});
