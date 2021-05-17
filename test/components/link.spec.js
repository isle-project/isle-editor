// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import Link from '@isle-project/components/link/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<Link />', function test() {
	it( 'renders a link', () => {
		const output = render( <Provider session={session} >
			<Link href="https://wikipedia.org" />
		</Provider> );
		expect( output.container ).toBeInTheDocument();
	});
});
