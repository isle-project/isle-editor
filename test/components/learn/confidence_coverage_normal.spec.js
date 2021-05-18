// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import LearnConfidenceCoverageNormal from '@isle-project/components/learn/confidence-coverage-normal/main.js';


// TESTS //

describe( '<LearnConfidenceCoverageNormal />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnConfidenceCoverageNormal /> );
		expect( learning ).toMatchSnapshot();
	});
});
