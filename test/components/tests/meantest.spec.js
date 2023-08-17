// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import MeanTest from '@isle-project/components/tests/meantest';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<MeanTest />', function test() {
	it( 'renders test result', () => {
		const output = renderer.create( <MeanTest
			data={heartdisease}
			variable="Drugs"
		/> );
		expect( output ).toMatchSnapshot();
	});
});
