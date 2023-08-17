// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import HierarchicalClustering from '@isle-project/components/models/hierarchical-clustering';
import heartdisease from '../fixtures/heartdisease.json';


// TESTS //

describe( '<HierarchicalClustering />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <HierarchicalClustering
			data={heartdisease}
			variables={[ 'Age', 'Cost', 'Interventions' ]}
		/> );
		expect( model ).toMatchSnapshot();
	});
});
