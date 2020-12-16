// MODULES //

import React from 'react';
import { createHashHistory } from 'history';
import Root from 'editor-containers/root';
import configureStore from 'store/configure_store.js';
import configureIpcRenderer from './configure_ipc_renderer.js';
import { addResources } from '@isle-project/locales';
import './app.global.css';


// VARIABLES //

const history = createHashHistory();
const store = configureStore();
addResources( 'Editor' );
configureIpcRenderer( store );


// MAIN //

const App = () => <Root store={store} history={history} />;


// EXPORTS //

export default App;
