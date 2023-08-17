// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import MultipleChoiceQuestion from '@isle-project/components/questions/multiple-choice/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<MultipleChoiceQuestion />', function test() {
	it( 'renders a multiple choice question', () => {
		const question = renderer.create( <Provider session={session}>
			<MultipleChoiceQuestion
				solution={0}
				answers={[
					{ content: 'Hierarchical Clustering', explanation: '' },
					{ content: 'LASSO', explanation: '' },
					{ content: 'Multiple regression', explanation: '' }
				]}
				question="Which of the following methods are used for clustering?"
			/>
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
