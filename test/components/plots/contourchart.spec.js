// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ContourChart from '@isle-project/components/plots/contourchart';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<ContourChart />', function test() {
	it( 'renders a contour chart', () => {
		const chart = renderer.create( <ContourChart
			data={heartdisease}
			x="Age"
			y="Cost"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
