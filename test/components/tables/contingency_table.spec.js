// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import ContingencyTable from '@isle-project/components/tables/contingency-table';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<ContingencyTable />', function test() {
	it( 'renders a contingency table', () => {
		const chart = renderer.create( <ContingencyTable
			data={heartdisease}
			rowVar="Gender"
			colVar="Drugs"
		/> );
		expect( chart ).toMatchSnapshot();
	});
});
