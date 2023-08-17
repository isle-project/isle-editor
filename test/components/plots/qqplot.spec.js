// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import QQPlot from '@isle-project/components/plots/boxplot';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<QQPlot />', function test() {
	it( 'renders a quantile-quantile plot', () => {
		const chart = renderer.create( <QQPlot
			data={heartdisease}
			variable="Age"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
