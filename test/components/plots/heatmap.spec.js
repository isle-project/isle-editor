// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import HeatMap from '@isle-project/components/plots/heatmap';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<HeatMap />', function test() {
	it( 'renders a heat map', () => {
		const chart = renderer.create( <HeatMap
			data={heartdisease}
			x="Age"
			y="Cost"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
