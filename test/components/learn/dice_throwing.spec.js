// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnDiceThrowing from '@isle-project/components/learn/dice-throwing/main.js';


// TESTS //

describe( '<LearnDiceThrowing />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnDiceThrowing /> );
		expect( learning ).toMatchSnapshot();
	});
});
