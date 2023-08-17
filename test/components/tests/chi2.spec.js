// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Chi2Test from '@isle-project/components/tests/chi2';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<Anova />', function test() {
	it( 'renders test result', () => {
		const output = renderer.create( <Chi2Test
			data={heartdisease}
			var1="Drugs"
			var2="Complications"
		/> );
		expect( output ).toMatchSnapshot();
	});
});
