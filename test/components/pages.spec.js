// MODULES //

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pages from 'components/pages';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<Pages />', function test() {
	it( 'does not render any elements if no children are present', () => {
		const wrapper = shallow( <Pages></Pages> );
		expect( wrapper.html() ).toBeNull();
	});

	it( 'renders a user-supplied `title`', () => {
		const wrapper = shallow( <Pages title="A Title" >
			<div>ONE</div>
			<div>TWO</div>
		</Pages> );
		const { title } = wrapper.instance().props;
		expect( title ).toBe( 'A Title' );
		const h3 = wrapper.find( '.panel-title' );
		expect( h3.text() ).toBe( 'A Title' );
	});

	it( 'the `jumpTo` method allows one to call up a certain page', () => {
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
				expect( elem.hasClass( 'visible-page' ) ).toBeFalsy();
			} else {
				expect( elem.hasClass( 'visible-page' ) ).toBeTruthy();
			}
		});
		expect( state.activePage ).toBe( 2 );
	});

	it( 'the `jumpTo` method stays at the current age if supplied a page outside the allowed range', () => {
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
				expect( elem.hasClass( 'visible-page' ) ).toBeFalsy();
			} else {
				expect( elem.hasClass( 'visible-page' ) ).toBeTruthy();
			}
		});
		expect( state.activePage ).toBe( 3 );

		wrapper.instance().jumpTo( 1 );
		wrapper.instance().jumpTo( 0 );
		wrapper.update();
		state = wrapper.instance().state;

		span = wrapper.find( '.page-children-wrapper span' );
		span.forEach( ( elem, idx ) => {
			if ( idx !== 0 ) {
				expect( elem.hasClass( 'visible-page' ) ).toBeFalsy();
			} else {
				expect( elem.hasClass( 'visible-page' ) ).toBeTruthy();
			}
		});
		expect( state.activePage ).toBe( 1 );
	});

	it( 'the `nextPage` method allows one to call the next page externally', () => {
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
		expect( text ).toBe( 'TWO' );
		expect( state.activePage ).toBe( 2 );

		wrapper.instance().nextPage();
		wrapper.instance().nextPage();
		wrapper.instance().nextPage();
		wrapper.update();
		state = wrapper.instance().state;
		div = wrapper.find( '.visible-page' );
		text = div.text();
		expect( text ).toBe( 'FOUR' );
		expect( state.activePage ).toBe( 4 );
	});

	it( 'the `prevPage` method allows one to call the previous page externally', () => {
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
		expect( text ).toBe( 'ONE' );
		expect( state.activePage ).toBe( 1 );

		wrapper.instance().jumpTo( 4 );
		wrapper.instance().prevPage();
		wrapper.update();
		state = wrapper.instance().state;
		div = wrapper.find( '.visible-page' );
		text = div.text();
		expect( text ).toBe( 'THREE' );
		expect( state.activePage ).toBe( 3 );
	});

	it( 'when clicked, the component jumps to the chosen page', done => {
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
		expect( wrapper.instance().state.activePage ).toBe( 3 );

		previousPageButton.simulate( 'click' );
		expect( wrapper.instance().state.activePage ).toBe( 2 );

		nextPageButton.simulate( 'click' );
		expect( wrapper.instance().state.activePage ).toBe( 3 );

		firstPageButton.simulate( 'click' );
		expect( wrapper.instance().state.activePage ).toBe( 1 );

		done();
	});

	it( 'allows one to set the `height` of the container', () => {
		const wrapper = mount(<Pages height="300px" >
			<div>ONE</div>
			<div>TWO</div>
			<div>THREE</div>
		</Pages>
		);
		const container = wrapper.find( '.page-children-wrapper' );
		expect( container.instance().style.height ).toBe( '300px' );
	});

	it( 'triggers the `onSelect` event when the active page is changed', () => {
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

		function onSelect( page ) {
			expect( page ).toBe( it );
		}
	});
});
