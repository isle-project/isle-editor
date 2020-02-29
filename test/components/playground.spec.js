// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Playground from 'components/beacon-tooltip';
import TeX from 'components/tex';


// TESTS //

it( 'renders a controlled playground', () => {
	const playground = renderer.create(
		<Playground value="<div>Code comes here...</div>" />
	).toJSON();
	expect( playground ).toMatchSnapshot();
});

it( 'renders an uncontrolled playground', () => {
	const playground = renderer.create(
		<Playground defaultValue="<div>Code comes here...</div>" />
	).toJSON();
	expect( playground ).toMatchSnapshot();
});

it( 'renders a playground with a supplied scope', () => {
	const playground = renderer.create(
		<Playground defaultValue="<TeX raw={`2+2`} />" scope={[
			TeX
		]} />
	).toJSON();
	expect( playground ).toMatchSnapshot();
});
