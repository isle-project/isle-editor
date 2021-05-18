// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import ProportionsSurvey from '@isle-project/components/number-survey/main.js';


// TESTS //

describe( '<ProportionsSurvey />', function test() {
	it( 'renders a survey', () => {
		const survey = renderer.create(
			<ProportionsSurvey
				id="Survey"
				question="Decide what is important"
				group="Group decision"
				nElements={3}
				colors={[ 'red', 'blue', 'gold' ]}
				personalHeight={300}
				groupHeight={200}
				margin="80px"
				legends={[ 'bitcoin', 'old', 'diamonds' ]}
			/>
		).toJSON();
		expect( survey ).toMatchSnapshot();
	});
});
