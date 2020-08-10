// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Provider from 'components/provider';
import FeedbackButtons from 'components/feedback/main.js';
import Session from 'session';


// VARIABLES //

jest.mock('./load_translations.js', () => ({ cacheFile: jest.fn() }));

const session = new Session( {}, true );
global.window.URL = {
	createObjectURL() {}
};


// TESTS //

it( 'renders feedback buttons (horizontal format)', () => {
	const buttons = renderer.create(
		<Provider session={session}>
			<FeedbackButtons />
		</Provider>
	).toJSON();
	expect( buttons ).toMatchSnapshot();
});

it( 'renders feedback buttons (vertical format)', () => {
	const buttons = renderer.create(
		<Provider session={session}>
			<FeedbackButtons vertical />
		</Provider>
	).toJSON();
	expect( buttons ).toMatchSnapshot();
});

it( 'renders feedback buttons without option to supply custom feedback', () => {
	const buttons = renderer.create(
		<Provider session={session}>
			<FeedbackButtons customFeedback={false} />
		</Provider>
	).toJSON();
	expect( buttons ).toMatchSnapshot();
});

it( 'renders feedback buttons with custom messages', () => {
	const buttons = renderer.create(
		<Provider session={session}>
			<FeedbackButtons
				confusedMsg="Unclear question"
				feedbackMsg="Critique question wording"
				understoodMsg="Clear question"
			/>
		</Provider>
	).toJSON();
	expect( buttons ).toMatchSnapshot();
});
