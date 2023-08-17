// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Provider from '@isle-project/components/internal/provider';
import Session from '@isle-project/session';
import './../mocks/exec_command_mock.js';
import DataTable from '@isle-project/components/data-explorer';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<DataTable />', function test() {
	it( 'renders a data table', () => {
		const { container } = render(
			<Provider session={session} >
				<DataTable
					showRemove
					data={{
						firstName: [ 'Hans', 'Lotti', 'Fritz' ],
						lastName: [ 'Bauer', 'Müller', 'Schultz' ],
						age: [ 37, 55, 62 ]
					}}
					style={{ width: 600 }}
				/>
			</Provider> );
		expect( container ).toBeInTheDocument();
	});
});
