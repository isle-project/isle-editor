// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Kruskal from '@isle-project/components/tests/kruskal';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<Kruskal />', function test() {
	it( 'renders test result', () => {
		const output = renderer.create( <Kruskal
			data={heartdisease}
			variable="Cost"
			group="Gender"
		/> );
		expect( output ).toMatchSnapshot();
	});
});
