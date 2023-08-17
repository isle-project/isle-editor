// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LogisticRegression from '@isle-project/components/models/logistic-regression';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<LogisticRegression />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <LogisticRegression
			data={heartdisease}
			y="Complications"
			success={1}
			x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}
			quantitative={[ 'Age', 'Cost', 'Interventions' ]}
		/> );
		expect( model ).toMatchSnapshot();
	});
});
