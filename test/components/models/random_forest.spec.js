// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import RandomForest from '@isle-project/components/models/random-forest';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<RandomForest />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <RandomForest
			data={heartdisease}
			type="Classification"
			y="Complications"
			x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}
			quantitative={[ 'Age', 'Cost', 'Interventions' ]}
		/> );
		expect( model ).toMatchSnapshot();
	});
});
