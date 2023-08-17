// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnConditionalProbability from '@isle-project/components/learn/conditional-probability/main.js';


// TESTS //

describe( '<LearnConditionalProbability />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnConditionalProbability /> );
		expect( learning ).toMatchSnapshot();
	});
});
