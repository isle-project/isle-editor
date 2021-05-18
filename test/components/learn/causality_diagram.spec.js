// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import LearnCausalityDiagram from '@isle-project/components/learn/causality-diagram/main.js';


// TESTS //

describe( '<LearnCausalityDiagram />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnCausalityDiagram x="X" y="Y" z="Z" /> );
		expect( learning ).toMatchSnapshot();
	});
});
