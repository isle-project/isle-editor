// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ContingencyTable from '@isle-project/components/tables/contingency-table';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<ContingencyTable />', function test() {
	it( 'renders a contingency table', () => {
		const table = renderer.create( <ContingencyTable
			data={heartdisease}
			rowVar="Gender"
			colVar="Drugs"
		/> );
		expect( table ).toMatchSnapshot();
	});
});
