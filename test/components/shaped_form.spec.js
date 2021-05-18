// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import ShapedForm from '@isle-project/components/shaped-form/main.js';


// TESTS //

describe( '<ShapedForm />', function test() {
	it( 'renders a shaped form', () => {
		const form = renderer.create(
			<ShapedForm
				type="star"
				style={{
					background: 'red',
					boxShadow: 'inset 100px 88px 5px yellow'
				}}
			/>
		).toJSON();
		expect( form ).toMatchSnapshot();
	});
});
