// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Polaroid from '@isle-project/components/polaroid/main.js';


// VARIABLES //

const IMAGE_URL = 'https://avatars1.githubusercontent.com/u/18444488?s=200&v=4';


// TESTS //

describe( '<Polaroid />', function test() {
	it( 'renders a polaroid image', () => {
		const polaroid = renderer.create(
			<Polaroid image={IMAGE_URL} />
		).toJSON();
		expect( polaroid ).toMatchSnapshot();
	});

	it( 'renders a draggable polaroid image', () => {
		const polaroid = renderer.create(
			<Polaroid image={IMAGE_URL} draggable />
		).toJSON();
		expect( polaroid ).toMatchSnapshot();
	});

	it( 'renders a removable polaroid image', () => {
		const polaroid = renderer.create(
			<Polaroid image={IMAGE_URL} removable />
		).toJSON();
		expect( polaroid ).toMatchSnapshot();
	});

	it( 'renders a polaroid image with a pin', () => {
		const polaroid = renderer.create(
			<Polaroid image={IMAGE_URL} showPin />
		).toJSON();
		expect( polaroid ).toMatchSnapshot();
	});
});
