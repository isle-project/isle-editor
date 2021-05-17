// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import FreeTextSurvey from '@isle-project/components/free-text-survey/main.js';


// TESTS //

describe( '<FreeTextSurvey />', function test() {
	it( 'renders a survey', () => {
		const survey = renderer.create(
			<FreeTextSurvey />
		).toJSON();
		expect( survey ).toMatchSnapshot();
	});
});
