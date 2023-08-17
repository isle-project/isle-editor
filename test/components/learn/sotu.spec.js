// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import LearnSOTU from '@isle-project/components/learn/sotu/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<LearnSOTU />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <Provider session={session} >
			<LearnSOTU />
		</Provider> );
		expect( learning ).toMatchSnapshot();
	});
});
