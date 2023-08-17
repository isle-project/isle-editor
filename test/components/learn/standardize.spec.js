// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnStandardize from '@isle-project/components/learn/standardize/main.js';


// TESTS //

describe( '<LearnStandardize />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnStandardize /> );
		expect( learning ).toMatchSnapshot();
	});
});
