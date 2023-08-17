// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '@isle-project/components/switch/main.js';


// TESTS //

describe( '<Switch />', function test() {
	it( 'the component renders an empty element if not supplied children', () => {
		const { container } = render( <Switch /> );
		expect( container.firstChild ).toBeEmptyDOMElement();
	});

	it( 'the component renders a non-empty element if supplied children', () => {
		const { container } = render( <Switch>
			<div className="first">1</div>
			<div className="second">2</div>
			<div className="third">3</div>
		</Switch> );
		expect( container.firstChild ).not.toBeEmptyDOMElement();
	});

	it( 'by default, the component displays only the first child element', () => {
		const { getByText } = render( <Switch>
			<div className="first">1</div>
			<div className="second">2</div>
			<div className="third">3</div>
		</Switch> );
		expect( getByText( '1' ) ).toBeVisible();
		expect( getByText( '2' ) ).not.toBeVisible();
		expect( getByText( '3' ) ).not.toBeVisible();
	});

	it( 'the component allows one to set a style that overrules the default options', () => {
		const style = { fontSize: '88px' };
		const { container } = render( <Switch style={style}></Switch> );
		expect( container.firstChild ).toHaveStyle( style );
	});

	it( 'the component allows one to add additional class names', () => {
		const { container } = render( <Switch className="Anton"></Switch> );
		expect( container.firstChild ).toHaveClass( 'Anton' );
		expect( container.firstChild ).toHaveClass( 'switch' );
	});
});
