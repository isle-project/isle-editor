// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import LearnUniformDistribution from '@isle-project/components/learn/distribution-uniform/main.js';


// TESTS //

describe( '<LearnUniformDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnUniformDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
