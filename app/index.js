// MODULES //

import React from 'react';
import { render } from 'react-dom';
import 'v8-compile-cache';
import App from './app.js';
import 'css/lesson.css';


// MAIN //

if ( localStorage && process.env.NODE_ENV === 'development' ) { // eslint-disable-line no-process-env
	localStorage.debug = process.env.DEBUG; // eslint-disable-line no-process-env
}

render(
	<App />,
	document.getElementById( 'root' )
);

