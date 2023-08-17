// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnGeometricDistribution from '@isle-project/components/learn/distribution-geometric/main.js';


// TESTS //

describe( '<LearnGeometricDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnGeometricDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
