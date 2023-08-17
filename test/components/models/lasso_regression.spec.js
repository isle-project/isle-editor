// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LassoRegression from '@isle-project/components/models/lasso-regression';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<LassoRegression />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <LassoRegression
			data={heartdisease}
			y="Cost"
			x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}
			quantitative={['Age', 'Cost', 'Interventions']}
		/> );
		expect( model ).toMatchSnapshot();
	});
});
