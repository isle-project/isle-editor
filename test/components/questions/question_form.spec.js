// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import NumberQuestion from '@isle-project/components/questions/number/main.js';
import FreeTextQuestion from '@isle-project/components/questions/free-text/main.js';
import QuestionForm from '@isle-project/components/questions/question-form/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<QuestionForm />', function test() {
	it( 'renders a question form', () => {
		const question = renderer.create( <Provider session={session}>
			<QuestionForm>
				<NumberQuestion
					question="What is 2+2?"
				/>
				<FreeTextQuestion
					question="What is the meaning of life?"
				/>
			</QuestionForm>
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
