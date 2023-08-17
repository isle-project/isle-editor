// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import MultipleChoiceMatrix from '@isle-project/components/questions/multiple-choice-matrix/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<MultipleChoiceMatrix />', function test() {
	it( 'renders a multiple choice question matrix', () => {
		const question = renderer.create( <Provider session={session}>
			<MultipleChoiceMatrix
				title="Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?" id="topics"
				questions={[
					'Data Visualizations',
					'Hand calculations (e.g. standard deviation, z-scores)',
					'Combinatorics',
					'Basic probability theory (conditional probability, independence...)',
					'Calculus-based probability',
					'Sampling distributions',
					'Confidence intervals (traditional, formula-based)',
					'Boostrapping',
					'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',
					'Simple linear regression',
					'Bayesian statistics',
					'Randomization- or simulation-based inference'
				]}
				type="checkbox"
				answers={[ 'I cover it', 'I think it\'s important' ]}
			/>
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
