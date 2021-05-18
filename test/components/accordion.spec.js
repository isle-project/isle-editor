// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Accordion from '@isle-project/components/accordion/main.js';


// TESTS //

describe( '<Accordion />', function test() {
	it( 'renders an accordion', () => {
		const accordion = renderer.create(
			<Accordion headers={[ 'First', 'Second' ]} active={0} >
				<div>First content</div>
				<div>Second content</div>
			</Accordion>
		).toJSON();
		expect( accordion ).toMatchSnapshot();
	});
});
