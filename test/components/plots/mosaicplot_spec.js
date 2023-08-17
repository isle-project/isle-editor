// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import MosaicPlot from '@isle-project/components/plots/mosaicplot';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<MosaicPlot />', function test() {
	it( 'renders a mosaic plot', () => {
		const chart = renderer.create( <MosaicPlot
			data={heartdisease}
			variables={[ 'Gender', 'Drugs' ]}
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
