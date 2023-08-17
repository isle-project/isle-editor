// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ScatterPlotMatrix from '@isle-project/components/plots/scatterplot-matrix';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<ScatterPlotMatrix />', function test() {
	it( 'renders a scatter plot matrix', () => {
		const chart = renderer.create( <ScatterPlotMatrix
			data={heartdisease}
			variables={[ 'Age', 'Cost', 'Interventions' ]}
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
