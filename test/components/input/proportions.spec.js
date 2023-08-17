// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Proportions from '@isle-project/components/input/proportions/main.js';


// TESTS //

describe( '<Proportions />', function test() {
	it( 'renders as much input elements as legend items are provided', async () => {
		const { container } = render( <Proportions nElements={3} legends={[ 'bitcoin', 'gold', 'diamonds' ]} /> );
		await new Promise( res => setTimeout(() => {
			expect( container.querySelectorAll( 'input[type="number"]' ) ).toHaveLength( 3 );
			res();
		}, 2000 ));
	});

	it( 'renders a pie chart', () => {
		const { container } = render( <Proportions
			nElements={3} legends={[ 'bitcoin', 'gold', 'diamonds' ]} /> );
		expect( container.querySelector( 'svg' ) ).toBeTruthy();
	});

	it( 'renders the given legends', () => {
		const { getByText } = render( <Proportions
			legends={[ 'bitcoin', 'gold', 'diamonds' ]}
			nElements={3} /> );
		let expected = 'bitcoin';
		expect( getByText( expected ) ).toBeTruthy();

		expected = 'gold';
		expect( getByText( expected ) ).toBeTruthy();

		expected = 'diamonds';
		expect( getByText( expected ) ).toBeTruthy();
	});
});

