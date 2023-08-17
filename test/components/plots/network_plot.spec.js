// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NetworkPlot from '@isle-project/components/plots/network-plot';


// TESTS //

describe( '<NetworkPlot />', function test() {
	it( 'renders a network plot', () => {
		const { container } = render( <NetworkPlot
			width={400}
			height={400}
			data={{
				nodes: [
					{ 'id': 0 },
					{ 'id': 1 },
					{ 'id': 2 },
					{ 'id': 3 }
				],
				links: [
					{ 'source': 0, 'target': 1 },
					{ 'source': 0, 'target': 2 },
					{ 'source': 2, 'target': 3 }
				]
			}}
		/> );
		expect( container ).toBeInTheDocument();
	});
});
