// MODULES //

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Tooltip from 'components/tooltip';
import Adapter from 'enzyme-adapter-react-16';
import Switch from 'components/switch';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<Switch />', function test() {
	it( 'the component renders a span element', () => {
		const div = shallow( <Switch /> );
		expect( div.find( 'span' ) ).toHaveLength( 1 );
	});

	it( 'the component renders a tooltip if the tooltip property is non-empty', () => {
		const div = shallow( <Switch tooltip="non-empty"></Switch> );
		expect( div.find( Tooltip ) ).toHaveLength( 1 );
	});

	it( 'the component does not render a tooltip if the tooltip property is empty', () => {
		const div = shallow( <Switch tooltip=""></Switch> );
		expect( div.find( Tooltip ) ).toHaveLength( 0 );
	});

	it( 'by default, the component displays only the first child element', () => {
		const div = shallow( <Switch>
			<div className="first"></div>
			<div className="second"></div>
			<div className="third"></div>
		</Switch> );
		const children = div.find( 'span' ).children();
		children.forEach( ( child, idx ) => {
			const { style } = child.props();
			if ( idx !== 0 ) {
				expect( style.display ).toBe( 'none' );
			} else {
				expect( style.display ).toBe( 'inline' );
			}
		});
	});

	it( 'the component cycles through child elements when clicked', () => {
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

		function checkVisibility( visiblePos ) {
			const children = div.find( 'span' ).children();
			children.forEach( ( child, idx ) => {
				const { style } = child.props();
				if ( idx !== visiblePos ) {
					expect( style.display ).toBe( 'none' );
				} else {
					expect( style.display ).toBe( 'inline' );
				}
			});
		}
	});

	it( 'the component triggers the `onChange` event with an updated position', () => {
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

		function onChange( pos ) {
			expect( pos ).toBe( it );
		}
	});

	it( 'the component allows one to set a style that overrules the default options', () => {
		const div = shallow( <Switch style={{ fontSize: '88px' }}></Switch> );
		const span = div.find( 'span' );
		const { style } = span.props();
		expect( style.fontSize ).toBe( '88px' );
	});

	it( 'the component allows one to supply a custom tooltip', () => {
		const tooltip = 'Explore the different functions';
		const div = shallow( <Switch tooltip={tooltip}></Switch> );
		const props = div.instance().props;
		expect( props.tooltip ).toBe( tooltip );
	});

	it( 'the component allows one to set the tooltip position to either `top`, `bottom`, `left`, or `right`', () => {
		const div = shallow( <Switch tooltipPos="bottom"></Switch> );
		const props = div.instance().props;
		expect( props.tooltipPos ).toBe( 'bottom' );
	});

	it( 'the component allows one to add additional class names', () => {
		const div = shallow( <Switch className="Anton"></Switch> );
		const span = div.find( 'span' );
		expect( span.hasClass( 'Anton' ) ).toBeTruthy();
		expect( span.hasClass( 'switch' ) ).toBeTruthy();
	});
});
