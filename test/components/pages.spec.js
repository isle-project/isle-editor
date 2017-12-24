// MODULES //

import test from 'tape';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Pages from 'components/pages';


// TESTS //

test( 'the component does not render any elements if no children are present', t => {
	const wrapper = shallow( <Pages></Pages> );
	t.strictEqual( wrapper.html(), null, 'returns null' );
	t.end();
});

test( 'the `jumpTo` method allows one to call up a certain page', t => {
	const wrapper = mount(<Pages>
		<p>ONE</p>
		<p>TWO</p>
		<p>THREE</p>
		<p>FOUR</p>
	</Pages>
	);

	wrapper.instance().jumpTo(2);
	const state = wrapper.instance().state;

	const p = wrapper.find('p');
	const html = p.html();
	t.strictEqual(html, '<p>TWO</p>', 'renders the correct element' );
	t.strictEqual(state.activePage, 2, 'active page is equal to 2' );
	t.end();
});

test( 'the `nextPage` method allows one to call the next page externally', t => {
	const wrapper = mount(<Pages>
		<p>ONE</p>
		<p>TWO</p>
		<p>THREE</p>
		<p>FOUR</p>
	</Pages> );

	wrapper.instance().nextPage();
	const state = wrapper.instance().state;
	const div = wrapper.find( '.page-children-wrapper' );
	const text = div.text();
	t.strictEqual( text, 'TWO', 'renders the correct element' );
	t.equal( state.activePage, 2, 'active page is equal to 2' );
	t.end();
});

test( 'the `prevPage` method allows one to call the previous page externally', t => {
	const wrapper = mount(<Pages>
		<div>ONE</div>
		<div>TWO</div>
		<div>THREE</div>
		<div>FOUR</div>
	</Pages>
	);

	wrapper.instance().jumpTo(4);
	wrapper.instance().prevPage();
	const state = wrapper.instance().state;
	const div = wrapper.find( '.page-children-wrapper' );
	const text = div.text();
	t.strictEqual( text, 'THREE', 'renders the correct element' );
	t.equal(state.activePage, 3, 'active page is equal to 3' );
	t.end();
});
