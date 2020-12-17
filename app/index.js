// MODULES //

import React from 'react';
import { render } from 'react-dom';
import { i18n, addResources } from '@isle-project/locales/editor';
import { I18nextProvider } from 'react-i18next';
import 'v8-compile-cache';
import App from './app.js';
import 'css/lesson.css';


// VARIABLES //

addResources( 'Editor' );


// MAIN //

if ( localStorage && process.env.NODE_ENV === 'development' ) { // eslint-disable-line no-process-env
	localStorage.debug = process.env.DEBUG; // eslint-disable-line no-process-env
}

render(
	<I18nextProvider i18n={i18n} >
		<App />
	</I18nextProvider>,
	document.getElementById( 'root' )
);

