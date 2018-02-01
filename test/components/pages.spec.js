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

test( 'the component renders a user-supplied `title`', t => {
	const wrapper = shallow( <Pages title="A Title" >
		<div>ONE</div>
		<div>TWO</div>
	</Pages> );
	const { title } = wrapper.instance().props;
	t.strictEqual( title, 'A Title', 'returns expected title' );
	const h3 = wrapper.find( '.panel-title' );
	t.strictEqual( h3.text(), 'A Title', 'returns expected title' );
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

	wrapper.instance().jumpTo( 2 );
	wrapper.update();
	const state = wrapper.instance().state;

	const span = wrapper.find( '.page-children-wrapper span' );
	span.forEach( ( elem, idx ) => {
		if ( idx !== 1 ) {
			t.strictEqual( elem.hasClass( 'visible-page' ), false, 'does not show page' );
		} else {
			t.strictEqual( elem.hasClass( 'visible-page' ), true, 'shows page' );
		}
	});
	t.strictEqual(state.activePage, 2, 'active page is equal to 2' );
	t.end();
});

test( 'the `jumpTo` method stays at the current age if supplied a page outside the allowed range', t => {
	const wrapper = mount(<Pages>
		<p>ONE</p>
		<p>TWO</p>
		<p>THREE</p>
		<p>FOUR</p>
	</Pages>
	);

	wrapper.instance().jumpTo( 3 );
	wrapper.instance().jumpTo( 5 );
	wrapper.update();
	let state = wrapper.instance().state;
	let span = wrapper.find( '.page-children-wrapper span' );
	span.forEach( ( elem, idx ) => {
		if ( idx !== 2 ) {
			t.strictEqual( elem.hasClass( 'visible-page' ), false, 'does not show page' );
		} else {
			t.strictEqual( elem.hasClass( 'visible-page' ), true, 'shows page' );
		}
	});
	t.strictEqual(state.activePage, 3, 'active page is equal to 3' );

	wrapper.instance().jumpTo( 1 );
	wrapper.instance().jumpTo( 0 );
	wrapper.update();
	state = wrapper.instance().state;

	span = wrapper.find( '.page-children-wrapper span' );
	span.forEach( ( elem, idx ) => {
		if ( idx !== 0 ) {
			t.strictEqual( elem.hasClass( 'visible-page' ), false, 'does not show page' );
		} else {
			t.strictEqual( elem.hasClass( 'visible-page' ), true, 'shows page' );
		}
	});
	t.strictEqual(state.activePage, 1, 'active page is equal to 1' );
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
	wrapper.update();
	let state = wrapper.instance().state;
	let div = wrapper.find( '.visible-page' );
	let text = div.text();
	t.strictEqual( text, 'TWO', 'renders the correct element' );
	t.equal( state.activePage, 2, 'active page is equal to 2' );

	wrapper.instance().nextPage();
	wrapper.instance().nextPage();
	wrapper.instance().nextPage();
	wrapper.update();
	state = wrapper.instance().state;
	div = wrapper.find( '.visible-page' );
	text = div.text();
	t.strictEqual( text, 'FOUR', 'renders the correct element' );
	t.equal( state.activePage, 4, 'active page is equal to 4' );
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

	wrapper.instance().prevPage();
	wrapper.update();
	let state = wrapper.instance().state;
	let div = wrapper.find( '.visible-page' );
	let text = div.text();
	t.strictEqual( text, 'ONE', 'renders the correct element' );
	t.equal(state.activePage, 1, 'active page is equal to 1' );

	wrapper.instance().jumpTo( 4 );
	wrapper.instance().prevPage();
	wrapper.update();
	state = wrapper.instance().state;
	div = wrapper.find( '.visible-page' );
	text = div.text();
	t.strictEqual( text, 'THREE', 'renders the correct element' );
	t.equal(state.activePage, 3, 'active page is equal to 3' );
	t.end();
});

test( 'when clicked, the component jumps to the chosen page', t => {
	const wrapper = mount(<Pages>
		<div>ONE</div>
		<div>TWO</div>
		<div>THREE</div>
	</Pages>
	);
	const pagination = wrapper.find( '.my-pagination' ).first();
	const listItems = pagination.find( 'li' );

	const lastPageButton = listItems.last();
	const nextPageButton = listItems.at( listItems.length - 1 );
	const firstPageButton = listItems.first();
	const previousPageButton = listItems.at( 1 );

	lastPageButton.simulate( 'click' );
	t.equal( wrapper.instance().state.activePage, 3, 'active page is equal to 3' );

	previousPageButton.simulate( 'click' );
	t.equal( wrapper.instance().state.activePage, 2, 'active page is equal to 2' );

	nextPageButton.simulate( 'click' );
	t.equal( wrapper.instance().state.activePage, 3, 'active page is equal to 3' );

	firstPageButton.simulate( 'click' );
	t.equal( wrapper.instance().state.activePage, 1, 'active page is equal to 1' );

	t.end();
});

test( 'the component allows one to set the `height` of the container', t => {
	const wrapper = mount(<Pages height="300px" >
		<div>ONE</div>
		<div>TWO</div>
		<div>THREE</div>
	</Pages>
	);
	const container = wrapper.find( '.page-children-wrapper' );
	t.strictEqual( container.instance().style.height, '300px', 'returns expected height' );
	t.end();
});

test( 'the component triggers the `onSelect` event when the active page is changed', t => {
	const wrapper = shallow( <Pages onSelect={onSelect}>
		<p>ONE</p>
		<p>TWO</p>
		<p>THREE</p>
	</Pages> );
	let it = 1;
	const instance = wrapper.instance();

	it += 1;
	instance.nextPage();
	it += 1;
	instance.nextPage();
	it = 1;
	instance.jumpTo( 1 );
	t.end();

	function onSelect( page ) {
		t.strictEqual( page, it, 'returns expected page' );
	}
});
