// MODULES //

import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import { OverlayTrigger } from 'react-bootstrap';
import Switch from 'components/switch';


// TESTS //

test( 'the component renders a span element', t => {
	const div = shallow( <Switch /> );
	t.strictEqual( div.find( 'span' ).length, 1, 'expected length' );
	t.end();
});

test( 'the component renders a tooltip if the tooltip property is non-empty', t => {
	const div = shallow( <Switch tooltip="non-empty"></Switch> );
	t.strictEqual( div.find( OverlayTrigger ).length, 1, 'expected length' );
	t.end();
});

test( 'the component does not render a tooltip if the tooltip property is empty', t => {
	const div = shallow( <Switch tooltip=""></Switch> );
	t.strictEqual( div.find( OverlayTrigger ).length, 0, 'expected length' );
	t.end();
});

test( 'by default, the component displays only the first child element', t => {
	const div = shallow( <Switch>
		<div className="first"></div>
		<div className="second"></div>
		<div className="third"></div>
	</Switch> );
	const children = div.find( 'span' ).children();
	children.forEach( ( child, idx ) => {
		const { style } = child.props();
		if ( idx !== 0 ) {
			t.strictEqual( style.display, 'none', 'does not show child' );
		} else {
			t.strictEqual( style.display, 'inline', 'shows child' );
		}
	});
	t.end();
});

test( 'the component cycles through child elements when clicked', t => {
	const div = shallow( <Switch>
		<div className="first"></div>
		<div className="second"></div>
		<div className="third"></div>
	</Switch> );
	const span = div.find( 'span' );
	checkVisibility( 0 );
	span.simulate( 'click' );
	checkVisibility( 1 );
	span.simulate( 'click' );
	checkVisibility( 2 );
	span.simulate( 'click' );
	checkVisibility( 0 );

	t.end();
	
	function checkVisibility( visiblePos ) {
		const children = div.find( 'span' ).children();
		children.forEach( ( child, idx ) => {
			const { style } = child.props();
			if ( idx !== visiblePos ) {
				t.strictEqual( style.display, 'none', 'does not show child' );
			} else {
				t.strictEqual( style.display, 'inline', 'shows child' );
			}
		});
	}
});

test( 'the component triggers the `onChange` event with an updated position', t => {
	const div = shallow( <Switch onChange={onChange}>
		<div className="first"></div>
		<div className="second"></div>
		<div className="third"></div>
	</Switch> );
	let it = 0;
	const span = div.find( 'span' );
	it += 1;
	span.simulate( 'click' );
	it += 1;
	span.simulate( 'click' );
	it = 0;
	span.simulate( 'click' );
	t.end();

	function onChange( pos ) {
		t.strictEqual( pos, it, 'returns expected position' );
	}
});

test( 'the component allows one to set a style that overrules the default options', t => {
	const div = shallow( <Switch style={{ fontSize: '88px' }}></Switch> );
	const span = div.find( 'span' );
	const { style } = span.props();
	t.strictEqual( style.fontSize, '88px', 'returns user-set font-size' );
	t.end();
});

test( 'the component allows one to supply a custom tooltip', t => {
	const tooltip = 'Explore the different functions';
	const div = shallow( <Switch tooltip={tooltip}></Switch> );
	const props = div.instance().props;
	t.strictEqual( props.tooltip, tooltip, 'returns user-set tooltip' );
	t.end();
});

test( 'the component allows one to set the tooltip position to either `top`, `bottom`, `left`, or `right`', t => {
	const div = shallow( <Switch tooltipPos="bottom"></Switch> );
	const props = div.instance().props;
	t.strictEqual( props.tooltipPos, 'bottom', 'returns user-set tooltip position' );
	t.end();
});

test( 'the component allows one to add additional class names', t => {
	const div = shallow( <Switch className="Anton"></Switch> );
	const span = div.find( 'span' );
	t.ok( span.hasClass( 'Anton' ), 'has class' );
	t.ok( span.hasClass( 'switch' ), 'has default class' );
	t.end();
});
