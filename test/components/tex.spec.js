// MODULES //

import test from 'tape';
import React from 'react';
import { mount } from 'enzyme';
import contains from '@stdlib/assert/contains';
import TeX from 'components/tex';


// TESTS //

test( 'the component renders an element of class `tex`', t => {
	const wrapper = mount( <TeX raw="2+2" /> );
	const divs = wrapper.find( '.tex' );
	t.equal( divs.length, 1, 'length is equal to one' );
	t.end();
});

test( 'the component supports a numeric `raw` property value', t => {
	const wrapper = mount( <TeX raw={11} /> );
	const { raw } = wrapper.instance().props;
	t.equal( raw, 11, 'raw prop is equal to `11`' );
	t.end();
});

test( 'the component handles an invalid LaTeX equation by not rendering anything', t => {
	const wrapper = mount( <TeX raw="\intelli x" /> );
	const { raw } = wrapper.instance().props;
	t.equal( raw, '\\intelli x', 'raw prop is equal to `\\intelli x`' );

	const elem = wrapper.find( '.tex' );
	const html = elem.html();
	const expected = '<span></span>';
	t.ok( contains( html, expected ), 'contains empty <span></span> element' );
	t.end();
});

test( 'the component handles an empty `raw` property value', t => {
	const wrapper = mount( <TeX raw="" /> );
	const { raw } = wrapper.instance().props;
	t.equal( raw, '', 'raw prop is equal to the empty string' );
	t.end();
});

test( 'the component instance has props `raw`, `onClick`, `displayMode`, `tag` and `style`', t => {
	const wrapper = mount( <TeX raw="2+2" /> );
	const props = wrapper.instance().props;
	t.equal( props.raw, '2+2', 'raw prop is equal to `2+2`' );
	t.equal( props.displayMode, false, 'displayMode prop is set to false' );
	t.equal( props.onClick, null, 'onClick prop is null' );
	t.equal( props.tag, null, 'tag prop is null' );
	t.deepEqual( props.style, {}, 'style prop is equal to empty object' );
	t.end();
});

test( 'the component has an incremented `id` if `displayMode` is set to true', t => {
	let wrapper = mount( <TeX raw="2+2" displayMode /> );
	t.equal( wrapper.state( 'id' ), 1, 'first equation has `id` one' );
	wrapper = mount( <TeX raw="2+2" displayMode /> );
	t.equal( wrapper.state( 'id' ), 2, 'second equation has `id` two' );
	t.end();
});

test( 'the component resets the internal counter when unmounted', t => {
	let wrapper = mount( <TeX raw="2+2" displayMode /> );
	t.equal( wrapper.state( 'id' ), 3, 'first equation has `id` one' );

	wrapper.unmount();

	wrapper = mount( <TeX raw="2+2" displayMode /> );
	t.equal( wrapper.state( 'id' ), 1, 'second equation has `id` one' );

	t.end();
});

test( 'the component renders a tag when `numbered` property is set', t => {
	let wrapper = mount( <TeX raw="2+2" displayMode numbered /> );
	let tag = wrapper.find( '.tag' );
	t.strictEqual( tag.length, 1, 'returns one' );
	wrapper = mount( <TeX raw="2+2" displayMode /> );
	tag = wrapper.find( '.tag' );
	t.strictEqual( tag.length, 0, 'returns zero' );
	t.end();
});

test( 'the component supports using a custom tag', t => {
	const wrapper = mount( <TeX raw="2+2" tag="[A]" displayMode numbered/> );
	const tag = wrapper.find( '.tag' );
	t.equal( tag.text(), '[A]', 'uses custom tag' );
	t.end();
});
