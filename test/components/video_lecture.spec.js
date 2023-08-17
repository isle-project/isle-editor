// MODULES //

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '../mocks/intersection_observer.js';
import VideoLecture from '@isle-project/components/video-lecture/main.js';


// TESTS //

describe( '<VideoLecture />', function test() {
	it( 'renders a video lecture', () => {
		const { container } = render( <VideoLecture
			steps={[
				'https://www.youtube.com/watch?v=Lkj8b25ppZo',
				'https://www.youtube.com/watch?v=Lkj8b25ppZo',
				'https://www.youtube.com/watch?v=Lkj8b25ppZo'
			]}
		/> );
		expect( container ).not.toBeEmptyDOMElement();
	});
});
