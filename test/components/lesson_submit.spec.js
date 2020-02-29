// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Provider from 'components/provider';
import LessonSubmit from 'components/lesson-submit';
import Session from 'session';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

it( 'renders a lesson submit button', () => {
	const button = renderer.create(
		<Provider session={session}>
			<LessonSubmit />
		</Provider>
	).toJSON();
	expect( button ).toMatchSnapshot();
});
