// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import DecisionTree from '@isle-project/components/models/decision-tree';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<DecisionTree />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <DecisionTree
			data={heartdisease}
			type="Classification"
			y="Complications"
			x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}
			quantitative={[ 'Age', 'Cost', 'Interventions' ]}
		/> );
		expect( model ).toMatchSnapshot();
	});
});
