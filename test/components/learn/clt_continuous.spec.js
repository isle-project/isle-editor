// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnContinuousCLT from '@isle-project/components/learn/clt-continuous/main.js';


// TESTS //

describe( '<LearnContinuousCLT />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnContinuousCLT /> );
		expect( learning ).toMatchSnapshot();
	});
});
