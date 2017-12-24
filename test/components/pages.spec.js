// MODULES //

import test from 'tape';
import React from 'react';
import { mount } from 'enzyme';
import Pages from 'components/pages';

// TESTS //

test( 'the component renders the externally triggered id', t => {
	const wrapper = mount(<Pages>
		<div>ONE</div>
		<div>TWO</div>
		<div>THREE</div>
		<div>FOUR</div>
	</Pages>
	);

	wrapper.instance().jumpTo(2);
	const state = wrapper.instance().state;
	t.equal(state.activePage, 2, 'active page is equal to 2' );
	t.end();
});


test( 'the component renders the externally triggered next page', t => {
	const wrapper = mount(<Pages>
		<div>ONE</div>
		<div>TWO</div>
		<div>THREE</div>
		<div>FOUR</div>
	</Pages>
	);

	wrapper.instance().nextPage();
	const state = wrapper.instance().state;
	t.equal(state.activePage, 2, 'active page is equal to 2' );
	t.end();
});


test( 'the component renders the externally triggered previous page', t => {
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
	t.equal(state.activePage, 3, 'active page is equal to 3' );
	t.end();
});
