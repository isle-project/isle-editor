// MODULES //

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import 'highlight.js/styles/github.css';
import 'normalize.css/normalize.css';
import './app.global.css';
import Root from './containers/Root';

import configureIpcRenderer from './configureIpcRenderer';


// STORE //

const store = configureStore();

configureIpcRenderer( store );

render(
	<Root store={store} />,
	document.getElementById( 'root' )
);
