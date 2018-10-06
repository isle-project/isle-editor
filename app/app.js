// MODULES //

import React from 'react';
import { hot } from 'react-hot-loader';
import createHashHistory from 'history/createHashHistory';
import configureStore from 'store/configureStore';
import Root from 'containers/root';
import configureIpcRenderer from './configure_ipc_renderer.js';
import './app.global.css';


// VARIABLES //

const history = createHashHistory();
const store = configureStore();
configureIpcRenderer( store );


// MAIN //

const App = () => <Root store={store} history={history} />;

export default hot( module )( App );
