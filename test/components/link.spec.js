// MODULES //

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from '@isle-project/components/link/main.js';


// TESTS //

describe( '<Link />', function test() {
	it( 'renders a link', () => {
		render(
			<Link href="https://wikipedia.org" >
				Wikipedia
			</Link>
		);
		const link = screen.getByText( 'Wikipedia' );
		expect( link ).toBeInTheDocument();
	});

	it( 'renders a link with a custom class name', () => {
		render(
			<Link href="https://wikipedia.org" className="custom" >
				Wikipedia
			</Link>
		);
		const link = screen.getByText( 'Wikipedia' );
		expect( link ).toHaveClass( 'custom' );
	});

	it( 'renders a link with a custom style', () => {
		render(
			<Link href="https://wikipedia.org" style={{ color: 'red' }} >
				Wikipedia
			</Link>
		);
		const link = screen.getByText( 'Wikipedia' );
		expect( link ).toHaveStyle( 'color: red' );
	});
});
