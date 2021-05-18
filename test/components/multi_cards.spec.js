// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import MultiCards from '@isle-project/components/multi-cards/main.js';


// TESTS //

describe( '<MultiCards />', function test() {
	it( 'renders a multiple cards component', () => {
		const cards = renderer.create(
			<MultiCards
				values={[
					{ front: 'number 1', back: 'back side of #1' },
					{ front: 'number 2', back: 'back side of #2' },
					{ front: 'number 3', back: 'back side of #3' },
					{ front: 'number 4', back: 'back side of #4' }
				]}
			/>
		).toJSON();
		expect( cards ).toMatchSnapshot();
	});
});
