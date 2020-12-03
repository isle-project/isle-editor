// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Provider from '@isle-project/components/provider';
import Session from '@isle-project/session';
import LessonSubmit from '@isle-project/components/lesson-submit/main.js';


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
