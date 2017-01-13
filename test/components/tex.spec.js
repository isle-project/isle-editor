// MODULES //

import test from 'tape';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TeX from 'components/tex';


// TESTS //

test( 'the component renders an element of class `tex`', t => {
	const wrapper = shallow( <TeX raw="2+2" /> );
	const divs = wrapper.find( '.tex' );
	t.equal( divs.length, 1, 'length is equal to one' );
	t.end();
});

test( 'the component supports a numeric `raw` property value', t => {
	const wrapper = shallow( <TeX raw={11} /> );
	const { raw } = wrapper.instance().props;
	t.equal( raw, 11, 'raw prop is equal to `11`' );
	t.end();
});

test( 'the component handles an invalid LaTeX equation by not rendering anything', t => {
	const wrapper = mount( <TeX raw="\intelli x" /> );
	const { raw } = wrapper.instance().props;
	t.equal( raw, '\\intelli x', 'raw prop is equal to `\\intelli x`' );

	const elem = wrapper.ref( 'katex' );
	const html = elem.html();
	const expected = '<span aria-hidden="true" data-radium="true" style="white-space: nowrap;"></span>';
	t.equal( html, expected, 'contains empty <span></span> element' );
	t.end();
});

test( 'the component handles an empty `raw` property value', t => {
	const wrapper = shallow( <TeX raw="" /> );
	const { raw } = wrapper.instance().props;
	t.equal( raw, '', 'raw prop is equal to the empty string' );
	t.end();
});

test( 'the component instance has props `raw`, `onClick`, `displayMode`, `tag` and `style`', t => {
	const wrapper = shallow( <TeX raw="2+2" /> );
	const props = wrapper.instance().props;
	t.equal( props.raw, '2+2', 'raw prop is equal to `2+2`' );
	t.equal( props.displayMode, false, 'displayMode prop is set to false' );
	t.equal( props.onClick, null, 'onClick prop is null' );
	t.equal( props.tag, null, 'tag prop is null' );
	t.deepEqual( props.style, {}, 'style prop is equal to empty object' );
	t.end();
});

test( 'the component has an incremented `id` if `displayMode` is set to true', t => {
	let wrapper = shallow( <TeX raw="2+2" displayMode /> );
	t.equal( wrapper.state( 'id' ), 1, 'first equation has `id` one' );

	wrapper = shallow( <TeX raw="2+2" displayMode /> );
	t.equal( wrapper.state( 'id' ), 2, 'second equation has `id` two' );
	t.end();
});

test( 'the component resets the internal counter when unmounted', t => {

	let wrapper = shallow( <TeX raw="2+2" displayMode /> );
	t.equal( wrapper.state( 'id' ), 3, 'first equation has `id` one' );

	wrapper.unmount();

	wrapper = shallow( <TeX raw="2+2" displayMode /> );
	t.equal( wrapper.state( 'id' ), 1, 'second equation has `id` one' );

	t.end();
});

test( 'the component supports using a custom tag', t => {
	const wrapper = shallow( <TeX raw="2+2" tag="[A]" displayMode/> );
	const tag = wrapper.find( '.tag' );
	t.equal( tag.text(), '[A]', 'uses custom tag' );
	t.end();
});
