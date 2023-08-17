// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Session from '@isle-project/session';
import Provider from '@isle-project/components/internal/provider';
import Sketchpad from '@isle-project/components/sketchpad/main.js';


// VARIABLES //

const session = new Session( {}, true );


// TESTS //

describe( '<Sketchpad />', function test() {
	it( 'renders a sketchpad', () => {
		const sketchpad = renderer.create( <Provider session={session}>
			<Sketchpad />
		</Provider> );
		expect( sketchpad ).toMatchSnapshot();
	});
});
