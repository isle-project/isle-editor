// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnFDistribution from '@isle-project/components/learn/distribution-f/main.js';


// TESTS //

describe( '<LearnFDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnFDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
