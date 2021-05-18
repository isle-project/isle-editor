// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import FlippableCard from '@isle-project/components/flippable-card/main.js';


// TESTS //

describe( '<FlippableCard />', function test() {
	it( 'renders a flippable card', () => {
		const card = renderer.create(
			<FlippableCard
				containerStyle={{ float: 'none' }}
				frontStyle={{ fontSize: 50, textAlign: 'center' }}
				backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }}
			>
				<div>
					FRONT
				</div>
				<div>
					BACK
				</div>
			</FlippableCard>
		).toJSON();
		expect( card ).toMatchSnapshot();
	});
});
