// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Provider from '@isle-project/components/internal/provider';
import Session from '@isle-project/session';
import './../mocks/exec_command_mock.js';
import DataExplorer from '@isle-project/components/data-explorer';
import heartdisease from './fixtures/heartdisease.json';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<DataExplorer />', function test() {
	it( 'renders a data explorer', () => {
		const { container } = render(
			<Provider session={session} >
				<DataExplorer
					id="heartdisease"
					data={heartdisease}
					categorical={[ 'Gender', 'Drugs', 'Complications' ]}
					quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
				/>
			</Provider> );
		expect( container ).toBeInTheDocument();
	});
});
