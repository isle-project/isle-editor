// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import './../mocks/intersection_observer.js';
import VideoPlayer from '@isle-project/components/video-player/main.js';


// TESTS //

describe( '<VideoPlayer />', function test() {
	it( 'renders a video player', () => {
		const { container } = render( <VideoPlayer url="https://youtu.be/Lkj8b25ppZo" /> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
