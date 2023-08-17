// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import MultipleLinearRegression from '@isle-project/components/models/multiple-linear-regression';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<MultipleLinearRegression />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <MultipleLinearRegression
			data={heartdisease}
			y="Cost"
			x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}
			quantitative={[ 'Age', 'Cost', 'Interventions' ]}
		/> );
		expect( model ).toMatchSnapshot();
	});
});
