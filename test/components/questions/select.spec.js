// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import SelectQuestion from '@isle-project/components/questions/select/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<SelectQuestion />', function test() {
	it( 'renders a select question', () => {
		const question = renderer.create( <Provider session={session}>
			<SelectQuestion options={[ 'A', 'B', 'C' ]} />
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
