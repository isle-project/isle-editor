// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import CorrTest from '@isle-project/components/tests/corrtest';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<CorrTest />', function test() {
	it( 'renders test result', () => {
		const output = renderer.create( <CorrTest
			data={heartdisease}
			var1="Cost"
			var2="Age"
		/> );
		expect( output ).toMatchSnapshot();
	});
});
