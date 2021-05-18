// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import LikertScale from '@isle-project/components/likert-scale/main.js';


// TESTS //

describe( '<LikertScale />', function test() {
	it( 'renders a likert scale', () => {
		const likert = renderer.create(
			<LikertScale
				id="discrimination"
				question="Do you agree with the arguments made by the speaker?"
			/>
		).toJSON();
		expect( likert ).toMatchSnapshot();
	});
});
