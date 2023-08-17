// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnSampleCLT from '@isle-project/components/learn/clt-sample/main.js';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<LearnSampleCLT />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnSampleCLT
			data={heartdisease}
			variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
		/> );
		expect( learning ).toMatchSnapshot();
	});
});
