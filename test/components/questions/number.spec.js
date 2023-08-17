// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import NumberQuestion from '@isle-project/components/questions/number/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<NumberQuestion />', function test() {
	it( 'renders a number question', () => {
		const question = renderer.create( <Provider session={session}>
			<NumberQuestion />
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
