// MODULES //

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Proportions from 'components/input/proportions';
import NumberInput from 'components/input/number';
import { VictoryPie } from 'victory';
import contains from '@stdlib/assert/contains';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

describe( '<Proportions />', function test() {
	it( 'renders as much <NumberInput /> as elements', () => {
		const wrapper = shallow( <Proportions nElements={3} legends={[ 'bitcoin', 'gold', 'diamonds' ]} /> );
		const no = wrapper.find( NumberInput );
		expect( no ).toHaveLength( 3 );
	});

	it( 'renders the victory pie', () => {
		const wrapper = shallow( <Proportions
			nElements={3} legends={[ 'bitcoin', 'gold', 'diamonds' ]} /> );
		const no = wrapper.find( VictoryPie );
		expect( no ).toHaveLength( 1 );
	});

	it( 'takes the given props', () => {
		const wrapper = mount( <Proportions
			legends={[ 'bitcoin', 'gold', 'diamonds' ]}
			nElements={3} /> );
		const props = wrapper.instance().props;
		expect( props.nElements ).toBe( 3 );
		expect( props.legends ).toHaveLength( 3 );
	});

	it( 'renders the given legends', () => {
		const wrapper = mount( <Proportions
			legends={[ 'bitcoin', 'gold', 'diamonds' ]}
			nElements={3} /> );
		let expected = 'bitcoin';
		expect( contains( wrapper.text(), expected ) ).toBeTruthy();

		expected = 'gold';
		expect( contains( wrapper.text(), expected ) ).toBeTruthy();

		expected = 'diamonds';
		expect( contains( wrapper.text(), expected ) ).toBeTruthy();
	});
});

