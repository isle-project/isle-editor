// MODULES //

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Clock from 'components/clock/main.js';


// VARIABLES //

Enzyme.configure({ adapter: new Adapter() });


// TESTS //

it( 'renders the current time', () => {
	const clock = shallow( <Clock /> );
	const span = clock.find( 'span' );
	expect( span ).toHaveLength( 1 );
});

it( 'renders the duration of the lesson', () => {
	const clock = shallow( <Clock duration /> );
	const span = clock.find( 'span' );
	expect( span ).toHaveLength( 1 );
});
