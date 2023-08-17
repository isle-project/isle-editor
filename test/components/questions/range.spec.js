// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import RangeQuestion from '@isle-project/components/questions/range/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<RangeQuestion />', function test() {
	it( 'renders a range question', () => {
		const question = renderer.create( <Provider session={session}>
			<RangeQuestion />
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
