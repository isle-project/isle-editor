// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnVennDiagramBuilder from '@isle-project/components/learn/venn-diagram-builder/main.js';


// TESTS //

describe( '<LearnVennDiagramBuilder />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnVennDiagramBuilder /> );
		expect( learning ).toMatchSnapshot();
	});
});
