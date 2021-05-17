// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '@isle-project/components/timer/main.js';


// TESTS //

describe( '<Timer />', function test() {
	it( 'renders a timer', () => {
		const timer = renderer.create(
			<Timer
				active={true}
				duration={50}
			/>
		).toJSON();
		expect( timer ).toMatchSnapshot();
	});
});
