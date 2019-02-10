// MODULES //

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Unveil from 'components/unveil';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<Unveil />', function test() {
	it( 'the component renders a span element', () => {
		const span = shallow( <Unveil /> );
		expect( span.find( 'span' ) ).toHaveLength( 1 );
	});

	it( 'the component unveils child elements if it is active', () => {
		const div = mount( <Unveil active={true} ><h1>I am visible...</h1></Unveil> );
		setTimeout( () => {
			expect( div.find( 'h1' ) ).toHaveLength( 1 );
		}, 2000 );
	});

	it( 'the component unveils child elements after a specified delay if it is active', () => {
		const div = mount( <Unveil active={true} delay={100}><h1>I am visible...</h1></Unveil> );
		setTimeout( () => {
			expect( div.find( 'h1' ) ).toHaveLength( 1 );
		}, 800 );
	});
});
