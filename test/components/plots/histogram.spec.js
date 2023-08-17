// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Histogram from '@isle-project/components/plots/boxplot';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<Histogram />', function test() {
	it( 'renders a histogram', () => {
		const chart = renderer.create( <Histogram
			data={heartdisease}
			variable="Age"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
