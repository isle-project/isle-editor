// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '@isle-project/components/internal/toolbar/calculator/main.js';


// TESTS //

describe( '<Calculator />', function test() {
	it( 'renders a basic calculator', () => {
		const calculator = renderer.create(
			<Calculator expandable={false} />
		).toJSON();
		expect( calculator ).toMatchSnapshot();
	});

	it( 'renders an expandable calculator', () => {
		const calculator = renderer.create(
			<Calculator expandable={true} />
		).toJSON();
		expect( calculator ).toMatchSnapshot();
	});

	it( 'renders an inactive calculator', () => {
		const calculator = renderer.create(
			<Calculator show={false} />
		).toJSON();
		expect( calculator ).toMatchSnapshot();
	});
});
