// MODULES //

import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import Switch from 'components/switch';


// TESTS //

test( 'the component renders a container <div></div>', t => {
	const div = shallow( <Switch>
		<span>First choice</span>
		<span>Second choice</span>
	</Switch> );
	t.ok( div.is( '.switch' ), 'is of class switch' );
	t.end();
});

test( 'by default, the component renders the first child element', t => {
	const div = shallow( <Switch>
		<span>First choice</span>
		<span>Second choice</span>
	</Switch> );
	const children = div.children();

	children.forEach( ( e, i ) => {
		const { style } = e.props();
		if ( i === 0 ) {
			t.equal( style.display, 'inline', 'renders first child' );
		} else {
			t.equal( style.display, 'none', 'does not render other children' );
		}
	});

	t.end();
});

test( 'clicking on the container div cycles through the children', t => {
	const div = shallow( <Switch>
		<span>First choice</span>
		<span>Second choice</span>
	</Switch> );

	div.simulate( 'click' );
	let children = div.children();
	children.forEach( ( e, i ) => {
		const { style } = e.props();
		if ( i === 1 ) {
			t.equal( style.display, 'inline', 'renders second child' );
		} else {
			t.equal( style.display, 'none', 'does not render first child' );
		}
	});

	div.simulate( 'click' );
	children = div.children();
	children.forEach( ( e, i ) => {
		const { style } = e.props();
		if ( i === 0 ) {
			t.equal( style.display, 'inline', 'renders first child' );
		} else {
			t.equal( style.display, 'none', 'does not render second child' );
		}
	});

	t.end();
});
