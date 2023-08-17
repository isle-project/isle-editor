// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnBetaDistribution from '@isle-project/components/learn/distribution-beta/main.js';


// TESTS //

describe( '<LearnBetaDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnBetaDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
