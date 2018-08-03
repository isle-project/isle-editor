// MODULES //

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import contains from '@stdlib/assert/contains';
import isFunction from '@stdlib/assert/is-function';
import Adapter from 'enzyme-adapter-react-16';
import TeX from 'components/tex';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<TeX />', function test() {
	it( 'the component renders an element of class `tex`', () => {
		const wrapper = mount( <TeX raw="2+2" /> );
		const divs = wrapper.find( '.tex' );
		expect( divs ).toHaveLength( 1 );
	});

	it( 'the component supports a numeric `raw` property value', () => {
		const wrapper = mount( <TeX raw={11} /> );
		const { raw } = wrapper.instance().props;
		expect( raw ).toBe( 11 );
	});

	it( 'the component handles an invalid LaTeX equation by not rendering anything', () => {
		const wrapper = mount( <TeX raw="\intelli x" /> );
		const { raw } = wrapper.instance().props;
		expect( raw ).toBe( '\\intelli x' );

		const elem = wrapper.find( '.tex' );
		const html = elem.html();
		const expected = '<span></span>';
		expect( contains( html, expected ) ).toBeTruthy();
	});

	it( 'the component handles an empty `raw` property value', () => {
		const wrapper = mount( <TeX raw="" /> );
		const { raw } = wrapper.instance().props;
		expect( raw ).toBe( '' );
	});

	it( 'the component instance has props `raw`, `onClick`, `displayMode`, `tag` and `style`', () => {
		const wrapper = mount( <TeX raw="2+2" /> );
		const props = wrapper.instance().props;
		expect( props.raw ).toBe( '2+2' );
		expect( props.displayMode ).toBeFalsy();
		expect( isFunction( props.onClick ) ).toBeTruthy();
		expect( props.tag ).toBeNull();
		expect( props.style ).toStrictEqual({});
	});

	it( 'the component has an incremented `id` if `displayMode` is set to true', () => {
		let wrapper = mount( <TeX raw="2+2" displayMode /> );
		expect( wrapper.state( 'id' ) ).toBe( 1 );
		wrapper = mount( <TeX raw="2+2" displayMode /> );
		expect( wrapper.state( 'id' ) ).toBe( 2 );
	});

	it( 'the component resets the internal counter when unmounted', () => {
		let wrapper = mount( <TeX raw="2+2" displayMode /> );
		expect( wrapper.state( 'id' ) ).toBe( 3 );

		wrapper.unmount();

		wrapper = mount( <TeX raw="2+2" displayMode /> );
		expect( wrapper.state( 'id' ) ).toBe( 1 );
	});

	it( 'the component renders a tag when `numbered` property is set', () => {
		let wrapper = mount( <TeX raw="2+2" displayMode numbered /> );
		let tag = wrapper.find( '.tag' );
		expect( tag ).toHaveLength( 1 );
		wrapper = mount( <TeX raw="2+2" displayMode /> );
		tag = wrapper.find( '.tag' );
		expect( tag ).toHaveLength( 0 );
	});

	it( 'the component supports using a custom tag', () => {
		const wrapper = mount( <TeX raw="2+2" tag="[A]" displayMode numbered /> );
		const tag = wrapper.find( '.tag' );
		expect( tag.text() ).toBe( '[A]' );
	});
});
