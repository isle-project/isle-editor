// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import PieChart from '@isle-project/components/plots/piechart';
import heartdisease from './heartdisease.json';


// TESTS //

describe( '<PieChart />', function test() {
	it( 'renders a pie chart', () => {
		const chart = renderer.create( <PieChart
			data={heartdisease}
			variable="Drugs"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
