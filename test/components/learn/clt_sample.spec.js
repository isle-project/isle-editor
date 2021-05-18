// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import LearnSampleCLT from '@isle-project/components/learn/clt-sample/main.js';


// TESTS //

describe( '<LearnSampleCLT />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnSampleCLT /> );
		expect( learning ).toMatchSnapshot();
	});
});
