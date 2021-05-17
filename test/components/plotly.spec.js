// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Plotly from '@isle-project/components/plotly/main.js';


// TESTS //

describe( '<Plotly />', function test() {
	it( 'renders a Plotly visualization', () => {
		const plot = renderer.create(
			<Plotly
				data={[{
					values: [ 24, 7, 0.5 ],
					labels: [ 'English', 'Spanish', 'Other' ],
					type: 'pie'
						}]}
				layout={{ width: 300 }}
			/>
		).toJSON();
		expect( plot ).toMatchSnapshot();
	});
});
