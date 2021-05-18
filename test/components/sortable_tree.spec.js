// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import SortableTree from '@isle-project/components/sortable-tree/main.js';


// TESTS //

describe( '<SortableTree />', function test() {
	it( 'renders a sortable tree', () => {
		const tree = renderer.create(
			<SortableTree
				onlyExpandSearchedNodes
				canDrag={false}
				treeData={[{
					title: 'Type of Data',
					children: [
						{
							title: 'Categorical',
							children: [{
								title: 'Chi-Square Test',
								subtitle: 'Test for independence for two variables or goodness-of-fit test'
							}]
						}
					]
				}]}
			/>
		).toJSON();
		expect( tree ).toMatchSnapshot();
	});
});
