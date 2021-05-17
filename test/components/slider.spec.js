// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Slider from '@isle-project/components/slider/main.js';


// TESTS //

describe( '<Slider />', function test() {
	it( 'renders a slider for child elements', () => {
		const slider = renderer.create(
			<Slider>
				<div>First Page</div>
				<div>Second Page</div>
				<div>Third Page</div>
			</Slider>
		).toJSON();
		expect( slider ).toMatchSnapshot();
	});

	it( 'renders a slider for child elements (dragging disabled)', () => {
		const slider = renderer.create(
			<Slider draggable={false} >
				<div>First Page</div>
				<div>Second Page</div>
				<div>Third Page</div>
			</Slider>
		).toJSON();
		expect( slider ).toMatchSnapshot();
	});

	it( 'renders a slider for child elements (with title)', () => {
		const slider = renderer.create(
			<Slider title="Questions" >
				<div>First Page</div>
				<div>Second Page</div>
				<div>Third Page</div>
			</Slider>
		).toJSON();
		expect( slider ).toMatchSnapshot();
	});

	it( 'renders a slider for child elements (without dots for navigation)', () => {
		const slider = renderer.create(
			<Slider dots={false} >
				<div>First Page</div>
				<div>Second Page</div>
				<div>Third Page</div>
			</Slider>
		).toJSON();
		expect( slider ).toMatchSnapshot();
	});
});
