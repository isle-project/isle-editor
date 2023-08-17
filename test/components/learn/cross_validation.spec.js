// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnCrossValidation from '@isle-project/components/learn/cross-validation/main.js';


// TESTS //

describe( '<LearnCrossValidation />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnCrossValidation /> );
		expect( learning ).toMatchSnapshot();
	});
});
