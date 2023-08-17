// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import FreeTextQuestion from '@isle-project/components/questions/free-text/main.js';
import Quiz from '@isle-project/components/questions/quiz/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<Quiz />', function test() {
	it( 'renders a quiz sampling from a list of questions', () => {
		const question = renderer.create( <Provider session={session}>
			<Quiz
				questions={[
					<FreeTextQuestion
						key={0}
						question="What is the capital of France?"
						rows={1}
						solution="Paris"
					/>,
					<FreeTextQuestion
						key={1}
						question="What is the capital of Poland?"
						rows={1}
						solution="Warsaw"
					/>
				]}
			/>
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
