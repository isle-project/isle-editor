// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import MultipleChoiceSurvey from '@isle-project/components/multiple-choice-survey/main.js';


// TESTS //

describe( '<MultipleChoiceSurvey />', function test() {
	it( 'renders a survey', () => {
		const survey = renderer.create(
			<MultipleChoiceSurvey />
		).toJSON();
		expect( survey ).toMatchSnapshot();
	});
});
