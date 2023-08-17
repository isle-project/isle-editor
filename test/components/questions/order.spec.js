// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import OrderQuestion from '@isle-project/components/questions/order/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<OrderQuestion />', function test() {
	it( 'renders an order question', () => {
		const question = renderer.create( <Provider session={session}>
			<OrderQuestion options={[ 'A', 'B', 'C' ]} />
		</Provider> );
		expect( question ).toMatchSnapshot();
	});
});
