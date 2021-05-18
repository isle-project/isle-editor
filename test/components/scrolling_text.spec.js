// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import ScrollingText from '@isle-project/components/scrolling-text/main.js';


// TESTS //

describe( '<ScrollingText />', function test() {
	it( 'renders a scrolling text', () => {
		const text = renderer.create(
			<ScrollingText
				text="This is a text re-appearing every five seconds"
				style={{ fontSize: 44, color: 'blue' }}
				wait={5}
				hold={2}
				loop
			/>
		).toJSON();
		expect( text ).toMatchSnapshot();
	});
});
