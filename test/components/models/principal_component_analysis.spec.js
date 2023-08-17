// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import PrincipalComponentAnalysis from '@isle-project/components/models/principal-component-analysis';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<PrincipalComponentAnalysis />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <PrincipalComponentAnalysis
			data={heartdisease}
			variables={[ 'Age', 'Cost', 'Interventions' ]}
			scale
		/> );
		expect( model ).toMatchSnapshot();
	});
});
