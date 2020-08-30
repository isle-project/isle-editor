// MODULES //

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ColorPicker from 'components/color-picker/main.js';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<ColorPicker />', function test() {
	it( 'renders a container div wrapping a color picker from react-color', () => {
		const wrapper = shallow( <ColorPicker /> );
		const outer = wrapper.find( 'div' );
		expect( outer.length ).toBe( 1 );
	});

	it( 'passes down props to color picker', () => {
		const wrapper = shallow( <ColorPicker color="#fff" /> );
		const outer = wrapper.find( 'div' );
		const props = outer.childAt( 0 ).props();
		expect( props.color ).toBe( '#fff' );
	});
});

