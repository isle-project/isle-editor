// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LearnDiscreteCLT from '@isle-project/components/learn/clt-discrete/main.js';


// TESTS //

describe( '<LearnDiscreteCLT />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LearnDiscreteCLT /> );
		expect( learning ).toMatchSnapshot();
	});
});
