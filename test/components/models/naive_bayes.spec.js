// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import NaiveBayes from '@isle-project/components/models/naive-bayes';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<NaiveBayes />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <NaiveBayes
			data={heartdisease}
			y="Drugs"
			x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
			quantitative={[ 'Age', 'Cost', 'Interventions' ]}
		/> );
		expect( model ).toMatchSnapshot();
	});
});
