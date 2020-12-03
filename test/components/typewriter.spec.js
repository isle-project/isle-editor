// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Typewriter from '@isle-project/components/typewriter/main.js';


// TESTS //

it( 'renders correctly when just supplied text', () => {
	const json = renderer.create( <Typewriter text="Lorem ipsum" /> ).toJSON();
	expect( json ).toMatchSnapshot();
});
