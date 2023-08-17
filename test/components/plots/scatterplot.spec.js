// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ScatterPlot from '@isle-project/components/plots/scatterplot';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<ScatterPlot />', function test() {
	it( 'renders a scatter plot', () => {
		const chart = renderer.create( <ScatterPlot
			data={heartdisease}
			xval="Age"
			yval="Cost"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
