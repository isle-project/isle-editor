// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import StickyNote from '@isle-project/components/sticky-note/main.js';


// TESTS //

it( 'renders a sticky note', () => {
	const calculator = renderer.create(
		<StickyNote title="My note" body="Text body of note" />
	).toJSON();
	expect( calculator ).toMatchSnapshot();
});

it( 'renders an editable sticky note', () => {
	const calculator = renderer.create(
		<StickyNote title="My note" body="Text body of note" editable />
	).toJSON();
	expect( calculator ).toMatchSnapshot();
});

it( 'renders a minimizable sticky note', () => {
	const calculator = renderer.create(
		<StickyNote title="My note" body="Text body of note" minimizable />
	).toJSON();
	expect( calculator ).toMatchSnapshot();
});

it( 'renders a colored sticky note', () => {
	const calculator = renderer.create(
		<StickyNote title="My note" body="Text body of note" color="orange" />
	).toJSON();
	expect( calculator ).toMatchSnapshot();
});

it( 'renders a sticky note with a date', () => {
	const calculator = renderer.create(
		<StickyNote title="My note" body="Text body of note" date="01/20/2020" />
	).toJSON();
	expect( calculator ).toMatchSnapshot();
});

it( 'renders a sticky note with a stain', () => {
	const calculator = renderer.create(
		<StickyNote title="My note" body="Text body of note" stain />
	).toJSON();
	expect( calculator ).toMatchSnapshot();
});
