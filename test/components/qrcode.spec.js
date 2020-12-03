// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import QRCode from '@isle-project/components/qrcode/main.js';


// TESTS //

it( 'renders a QRCode', () => {
	const qrcode = renderer.create(
		<QRCode expandable={false} />
	).toJSON();
	expect( qrcode ).toMatchSnapshot();
});

it( 'renders a QRCode with custom text', () => {
	const qrcode = renderer.create(
		<QRCode text="Lorem ipsum" />
	).toJSON();
	expect( qrcode ).toMatchSnapshot();
});

it( 'renders a centered QRCode', () => {
	const qrcode = renderer.create(
		<QRCode center />
	).toJSON();
	expect( qrcode ).toMatchSnapshot();
});

it( 'renders a QRCode with a custom scale', () => {
	const qrcode = renderer.create(
		<QRCode scale={3} />
	).toJSON();
	expect( qrcode ).toMatchSnapshot();
});
