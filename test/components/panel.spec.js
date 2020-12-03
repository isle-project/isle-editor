// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Panel from '@isle-project/components/panel/main.js';


// TESTS //

it( 'renders a panel', () => {
	const panel = renderer.create(
		<Panel>
			<p>Lorem ipsum...</p>
		</Panel>
	).toJSON();
	expect( panel ).toMatchSnapshot();
});

it( 'renders a panel with a heading', () => {
	const panel = renderer.create(
		<Panel header="Title" >
			<p>Lorem ipsum...</p>
		</Panel>
	).toJSON();
	expect( panel ).toMatchSnapshot();
});

