// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import KMeans from '@isle-project/components/models/kmeans';
import heartdisease from './../fixtures/heartdisease.json';


// TESTS //

describe( '<KMeans />', function test() {
	it( 'renders model output', () => {
		const model = renderer.create( <KMeans
			data={heartdisease}
			variables={[ 'Age', 'Cost' ]}
		/> );
		expect( model ).toMatchSnapshot();
	});
});
