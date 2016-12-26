// MODULES //

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from 'store/configureStore';
import 'highlight.js/styles/github.css';
import 'normalize.css/normalize.css';
import './app.global.css';

import configureIpcRenderer from './configureIpcRenderer';


// STORE //

const store = configureStore();
const history = syncHistoryWithStore( hashHistory, store );

configureIpcRenderer( store );

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById( 'root' )
);
