// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import BeaconTooltip from 'components/beacon-tooltip';


// TESTS //

it( 'renders a beacon tooltip', () => {
	const tooltip = renderer.create(
		<BeaconTooltip title="Tooltip title" content="Tooltip content" />
	).toJSON();
	expect( tooltip ).toMatchSnapshot();
});
