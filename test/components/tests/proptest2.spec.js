// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import PropTest2 from '@isle-project/components/tests/proptest2';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<PropTest2 />', function test() {
	it( 'renders test result', () => {
		const output = renderer.create( <PropTest2
			data={heartdisease}
			var1="Drugs"
			success={2}
			group="Complications"
		/> );
		expect( output ).toMatchSnapshot();
	});
});
