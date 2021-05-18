// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import LeanrDiscreteCLT from '@isle-project/components/learn/clt-discrete/main.js';


// TESTS //

describe( '<LeanrDiscreteCLT />', function test() {
	it( 'renders a learning component', () => {
		const learning = renderer.create( <LeanrDiscreteCLT /> );
		expect( learning ).toMatchSnapshot();
	});
});
