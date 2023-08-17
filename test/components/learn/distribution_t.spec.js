// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnTDistribution from '@isle-project/components/learn/distribution-t/main.js';


// TESTS //

describe( '<LearnTDistribution />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnTDistribution /> );
		expect( learning ).toMatchSnapshot();
	});
});
