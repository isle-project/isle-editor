// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import FreeTextQuestion from '@isle-project/components/questions/free-text/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<FreeTextQuestion />', function test() {
	it( 'renders a free text question', () => {
		const question = renderer.create( <Provider session={session}>
			<FreeTextQuestion />
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
