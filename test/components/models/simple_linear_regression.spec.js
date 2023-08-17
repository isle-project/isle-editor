// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import SimpleLinearRegression from '@isle-project/components/models/simple-linear-regression';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<SimpleLinearRegression />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <SimpleLinearRegression
			data={heartdisease}
			y="Cost"
			x="Interventions"
			group="Complications"
		/> );
		expect( model ).toMatchSnapshot();
	});
});
