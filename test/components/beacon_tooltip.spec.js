// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import BeaconTooltip from '@isle-project/components/beacon-tooltip/main.js';


// TESTS //

it( 'renders a beacon tooltip', () => {
	const tooltip = renderer.create(
		<BeaconTooltip title="Tooltip title" content="Tooltip content" />
	).toJSON();
	expect( tooltip ).toMatchSnapshot();
});
