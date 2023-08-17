// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import LearnConfidenceCoverageNormal from '@isle-project/components/learn/confidence-coverage-normal/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<LearnConfidenceCoverageNormal />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <Provider session={session} >
			<LearnConfidenceCoverageNormal />
		</Provider>);
		expect( learning ).toMatchSnapshot();
	});
});
