// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import LearnConfidenceCoverageSample from '@isle-project/components/learn/confidence-coverage-sample/main.js';
import heartdisease from './../fixtures/heartdisease.json';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<LearnConfidenceCoverageSample />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <Provider session={session} >
			<LearnConfidenceCoverageSample
				data={heartdisease}
				variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
			/>
		</Provider> );
		expect( learning ).toMatchSnapshot();
	});
});
