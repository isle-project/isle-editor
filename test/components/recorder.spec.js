// MODULES //

import React from 'react';
import renderer from 'react-test-renderer';
import Recorder from '@isle-project/components/recorder/main.js';


// TESTS //

describe( '<Recorder />', function test() {
	it( 'renders a recorder', () => {
		const recorder = renderer.create(
			<Recorder />
		).toJSON();
		expect( recorder ).toMatchSnapshot();
	});
});
