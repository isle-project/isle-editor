// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import BoxPlot from '@isle-project/components/plots/boxplot';
import heartdisease from './heartdisease.json';


// TESTS //

describe( '<BoxPlot />', function test() {
	it( 'renders a box plot', () => {
		const chart = renderer.create( <BoxPlot
			data={heartdisease}
			variable="Age"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
