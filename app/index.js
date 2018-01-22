// MODULES //

import 'react-dates/initialize';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import Editor from 'containers/Editor';
import Documentation from 'containers/Documentation';
import Settings from 'containers/Settings';
import Export from 'containers/Export';
import configureStore from 'store/configureStore';
import 'highlight.js/styles/github.css';
import 'normalize.css/normalize.css';
import './app.global.css';

import configureIpcRenderer from './configure_ipc_renderer.js';

// VARIABLES //

const history = createHashHistory();
const PATH_REGEX = /\/[0-9]*$/;


// MAIN //

if ( localStorage && process.env.NODE_ENV === 'development' ) { // eslint-disable-line no-process-env
	localStorage.debug = process.env.DEBUG; // eslint-disable-line no-process-env
}

const store = configureStore();

configureIpcRenderer( store );

render(
	<Provider store={store}>
		<Router history={history}>
			<div className="App">
				<Route exact path="/" children={( match ) => {
					// Account for routes of spectacle slides...
					if ( PATH_REGEX.test( match.location.pathname ) ) {
						return <Editor />;
					}
					return null;
				}} />
				<Route path="/docs" component={Documentation} />
				<Route path="/settings" component={Settings} />
				<Route path="/export" component={Export} />
			</div>
		</Router>
	</Provider>,
	document.getElementById( 'root' )
);
