// MODULES //

import test from 'tape';
import React from 'react';
import { Toolbar } from 'rebass';
import { shallow } from 'enzyme';
import Header from 'components/Header.js';


// TESTS //

test( 'the component renders two <Toolbar /> components', t => {
	const wrapper = shallow( <Header /> );
	const toolbars = wrapper.find( Toolbar );
	t.equal( toolbars.length, 2, 'length is equal to two' );
	t.end();
});

