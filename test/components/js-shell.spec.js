// MODULES //

import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import JSShell from 'components/js-shell';

// TESTS //

test( 'the component does not render any elements if no children are present', t => {
    const wrapper = shallow( <JSShell id="jseditor"></JSShell> );
    const state = wrapper.instance().state;
	t.strictEqual( state.code, '', 'returns expected value' );
	t.end();
});

/*
test( 'the component does not render any elements if no children are present', t => {
	const wrapper = shallow( <JSShell id="jseditor" code="var a = 22;" ></JSShell> );
	t.strictEqual( wrapper.html(), null, 'returns null' );
	t.end();
});
*/
