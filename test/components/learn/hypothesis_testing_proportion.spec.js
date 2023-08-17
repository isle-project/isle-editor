// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnPropTest from '@isle-project/components/learn/hypothesis-testing-proportion/main.js';


// TESTS //

describe( '<LearnPropTest />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnPropTest /> );
		expect( learning ).toMatchSnapshot();
	});
});
