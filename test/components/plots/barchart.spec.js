// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import BarChart from '@isle-project/components/plots/barchart';
import heartdisease from './heartdisease.json';


// TESTS //

describe( '<BarChart />', function test() {
	it( 'renders a bar chart', () => {
		const chart = renderer.create( <BarChart
			data={heartdisease}
			variable="Drugs"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
