// MODULES //

import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Proportions from 'components/input/proportions';
import NumberInput from 'components/input/number';
import { VictoryPie } from 'victory';
import contains from '@stdlib/assert/contains';


// TESTS //

test( 'the component renders as much <NumberInput /> as elements', t => {
	const wrapper = shallow( <Proportions nElements={3} /> );
	const no = wrapper.find( NumberInput );
	t.equal( no.length, 3, 'length is equal to three' );
	t.end();
});


test( 'the component renders the victory pie', t => {
	const wrapper = shallow( <Proportions nElements={3} /> );
	const no = wrapper.find( VictoryPie );
	t.equal( no.length, 1, 'length is equal to one' );
	t.end();
});

test( 'the component takes the given props', t => {
	const wrapper = mount( <Proportions
		legends={[ 'bitcoin', 'gold', 'diamonds' ]}
		nElements={3} /> );
	const props = wrapper.instance().props;
	t.equal( props.nElements, 3, 'nElements equal to `3`' );
	t.equal( props.legends.length, 3, 'legend array equal to `3`' );
	t.end();
});

test( 'the component renders the given legends', t => {
	const wrapper = mount( <Proportions
		legends={[ 'bitcoin', 'gold', 'diamonds' ]}
		nElements={3} /> );
	let expected = 'bitcoin';
	t.ok( contains( wrapper.text(), expected ), 'contains legend' );

	expected = 'gold';
	t.ok( contains( wrapper.text(), expected ), 'contains legend' );

	expected = 'diamonds';
	t.ok( contains( wrapper.text(), expected ), 'contains legend' );

	t.end();
});

