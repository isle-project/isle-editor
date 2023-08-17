// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnMeanTest from '@isle-project/components/learn/hypothesis-testing-mean/main.js';


// TESTS //

describe( '<LearnMeanTest />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnMeanTest /> );
		expect( learning ).toMatchSnapshot();
	});
});
