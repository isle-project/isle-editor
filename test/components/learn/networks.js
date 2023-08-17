// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import LearnNetworks from '@isle-project/components/learn/networks/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<LearnNetworks />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <Provider session={session} >
			<LearnNetworks />
		</Provider> );
		expect( learning ).toMatchSnapshot();
	});
});
