// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Provider from '@isle-project/components/provider';
import Session from '@isle-project/session';
import Playground from 'editor-components/playground/main.js';
import Clock from '@isle-project/components/clock';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

it( 'renders a controlled playground', () => {
	const playground = renderer.create(
		<Provider session={session}>
			<Playground value="<div>Code comes here...</div>" />
		</Provider>
	).toJSON();
	expect( playground ).toMatchSnapshot();
});

it( 'renders an uncontrolled playground', () => {
	const playground = renderer.create(
		<Provider session={session}>
			<Playground defaultValue="<div>Code comes here...</div>" />
		</Provider>
	).toJSON();
	expect( playground ).toMatchSnapshot();
});

it( 'renders a playground with a supplied scope', () => {
	const playground = renderer.create(
		<Provider session={session}>
			<Playground defaultValue="<Clock />" scope={{
				Clock
			}} />
		</Provider>
	).toJSON();
	expect( playground ).toMatchSnapshot();
});
