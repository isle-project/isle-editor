// MODULES //

import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import 'v8-compile-cache';
import App from './app.js';
import { i18n } from '@isle-project/locales/editor';


// MAIN //

if ( localStorage && process.env.NODE_ENV === 'development' ) { // eslint-disable-line no-process-env
	localStorage.debug = process.env.DEBUG; // eslint-disable-line no-process-env
}

const container = document.getElementById( 'root' );
const root = createRoot( container );

root.render(
	<I18nextProvider i18n={i18n} >
		<App />
	</I18nextProvider>
);

