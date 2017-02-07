// MODULES //

import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from 'components/color-picker';
import { SketchPicker } from 'react-color';


// TESTS //

test( 'the component renders a <SketchPicker /> from react-color', t => {
	const wrapper = shallow( <ColorPicker /> );
	const picker = wrapper.find( SketchPicker );
	t.equal( picker.length, 1, 'length is equal to one' );
	t.end();
});

test( 'the component passes down props to <SketchPicker />', t => {
	const wrapper = shallow( <ColorPicker color="#fff" /> );
	const picker = wrapper.find( SketchPicker );
	const props = picker.props();
	t.equal( props.color, '#fff', 'color is equal to #fff' );
	t.end();
});
