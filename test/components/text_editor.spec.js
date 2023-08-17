// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import './../mocks/exec_command_mock.js';
import TextEditor from '@isle-project/components/text-editor/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<TextEditor />', function test() {
	it( 'renders a text editor', () => {
		const editor = renderer.create( <Provider session={session}>
			<TextEditor />
		</Provider> );
		expect( editor ).toMatchSnapshot();
	});
});
