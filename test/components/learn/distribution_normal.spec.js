// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnNormalDistribution from '@isle-project/components/learn/distribution-normal/main.js';


// TESTS //

describe( '<LearnNormalDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnNormalDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
