// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Anova from '@isle-project/components/tests/anova';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<Anova />', function test() {
	it( 'renders test result', () => {
		const output = renderer.create( <Anova
			data={heartdisease}
			variable="Cost"
			group="Drugs"
		/> );
		expect( output ).toMatchSnapshot();
	});
});
