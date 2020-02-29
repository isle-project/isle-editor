// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Provider from 'components/provider';
import Session from 'session';
import EngagementMeter from 'components/engagement-meter';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

it( 'renders an engagement meter', () => {
	const meter = renderer.create(
		<Provider session={session}>
			<EngagementMeter />
		</Provider>
	).toJSON();
	expect( meter ).toMatchSnapshot();
});
