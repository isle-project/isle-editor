// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import MeanTest2 from '@isle-project/components/tests/meantest2';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<MeanTest2 />', function test() {
	it( 'renders test result', () => {
		const output = renderer.create( <MeanTest2
			data={heartdisease}
			x="Cost"
			group="Gender"
		/> );
		expect( output ).toMatchSnapshot();
	});
});
