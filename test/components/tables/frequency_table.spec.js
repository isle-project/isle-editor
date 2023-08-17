// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import FrequencyTable from '@isle-project/components/tables/frequency-table';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<FrequencyTable />', function test() {
	it( 'renders a frequency table', () => {
		const table = renderer.create( <FrequencyTable
			data={heartdisease}
			variable="Drugs"
		/> );
		expect( table ).toMatchSnapshot();
	});
});
