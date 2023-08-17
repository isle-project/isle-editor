// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '@isle-project/components/timer/main.js';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


// TESTS //

describe( '<Timer />', function test() {
	it( 'renders a timer', () => {
		const timer = renderer.create(
			<Timer
				active={true}
				duration={50}
			/>
		).toJSON();
		expect( timer ).toMatchSnapshot();
	});

	it( 'renders a timer (inactive)', () => {
		const timer = renderer.create(
			<Timer
				active={false}
				duration={50}
			/>
		).toJSON();
		expect( timer ).toMatchSnapshot();
	});

	it( 'renders a timer with a custom legend', () => {
		render(
			<Timer
				legend="My timer"
				active={true}
				duration={50}
			/>
		);
		expect( screen.getByText( 'My timer', { exact: false } ) ).toBeInTheDocument();
	});

	it( 'renders a timer with a custom style', () => {
		render(
			<Timer
				legend="My timer"
				active={true}
				duration={50}
				style={{
					width: '100px',
					height: '100px',
					background: '#f00'
				}}
			/>
		);
		const timer = screen.getByText( 'My timer', {
			exact: false
		});
		expect( timer ).toHaveStyle( 'background: #f00' );
	});
});
