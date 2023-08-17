// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import PropTest from '@isle-project/components/tests/proptest';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<PropTest />', function test() {
	it( 'renders test result', () => {
		const output = renderer.create( <PropTest
			data={heartdisease}
			variable="Complications"
			success={1}
		/> );
		expect( output ).toMatchSnapshot();
	});
});
