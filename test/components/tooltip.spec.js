// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Tooltip from '@isle-project/components/tooltip/main.js';


// TESTS //

it( 'renders a tooltip', () => {
	const tooltip = renderer.create(
		<Tooltip tooltip="I am a tooltip!" >
			<div></div>
		</Tooltip>
	).toJSON();
	expect( tooltip ).toMatchSnapshot();
});

it( 'renders a tooltip with custom placement', () => {
	const tooltip = renderer.create(
		<Tooltip tooltip="I am a tooltip!" placement="right" >
			<div></div>
		</Tooltip>
	).toJSON();
	expect( tooltip ).toMatchSnapshot();
});

it( 'renders an inactive tooltip', () => {
	const tooltip = renderer.create(
		<Tooltip tooltip="I am a tooltip!" show={false} >
			<div></div>
		</Tooltip>
	).toJSON();
	expect( tooltip ).toMatchSnapshot();
});
