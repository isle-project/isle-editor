// MODULES //

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ColorPicker from 'components/color-picker';
import { SketchPicker } from 'react-color';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<ColorPicker />', function test() {
	it( 'renders a <SketchPicker /> from react-color', () => {
		const wrapper = shallow( <ColorPicker /> );
		const picker = wrapper.find( SketchPicker );
		expect( picker.length ).toBe( 1 );
	});

	it( 'passes down props to <SketchPicker />', () => {
		const wrapper = shallow( <ColorPicker color="#fff" /> );
		const picker = wrapper.find( SketchPicker );
		const props = picker.props();
		expect( props.color ).toBe( '#fff' );
	});
});

