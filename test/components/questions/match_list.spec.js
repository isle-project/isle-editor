// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import MatchListQuestion from '@isle-project/components/questions/match-list/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<MatchListQuestion />', function test() {
	it( 'renders a match list question', () => {
		const question = renderer.create( <Provider session={session}>
			<MatchListQuestion />
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
