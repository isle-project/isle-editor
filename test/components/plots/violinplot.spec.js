// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ViolinPlot from '@isle-project/components/plots/violinplot';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<ViolinPlot />', function test() {
	it( 'renders a violin plot', () => {
		const chart = renderer.create( <ViolinPlot
			data={heartdisease}
			variable="Age"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
