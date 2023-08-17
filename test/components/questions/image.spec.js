// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import ImageQuestion from '@isle-project/components/questions/image/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<ImageQuestion />', function test() {
	it( 'renders an image question', () => {
		const question = renderer.create( <Provider session={session}>
			<ImageQuestion />
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
