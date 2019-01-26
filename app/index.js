// MODULES //

import 'react-dates/initialize';
import React from 'react';
import { render } from 'react-dom';
import 'highlight.js/styles/github.css';
import App from './app.js';


// MAIN //

if ( localStorage && process.env.NODE_ENV === 'development' ) { // eslint-disable-line no-process-env
	localStorage.debug = process.env.DEBUG; // eslint-disable-line no-process-env
}

render(
	<App />,
	document.getElementById( 'root' )
);

