// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import NumberSurvey from '@isle-project/components/number-survey/main.js';


// TESTS //

describe( '<NumberSurvey />', function test() {
	it( 'renders a survey', () => {
		const survey = renderer.create(
			<NumberSurvey />
		).toJSON();
		expect( survey ).toMatchSnapshot();
	});
});
