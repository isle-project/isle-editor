// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import DraggableList from '@isle-project/components/draggable-list/main.js';


// TESTS //

describe( '<DraggableList />', function test() {
	it( 'renders a draggable list', () => {
		const list = renderer.create(
			<DraggableList
				data={[
					{ id: 0, text: 'Compact' },
					{ id: 1, text: 'Large' },
					{ id: 2, text: 'Midsize' },
					{ id: 3, text: 'Small' }
				]}
			/>
		).toJSON();
		expect( list ).toMatchSnapshot();
	});
});
