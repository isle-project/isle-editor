// MODULES //

import React from 'react';
import { createHashHistory } from 'history';
import Root from 'editor-containers/root';
import { I18nextProvider } from 'react-i18next';
import configureStore from 'store/configure_store.js';
import configureIpcRenderer from './configure_ipc_renderer.js';
import { i18n, addResources } from '@isle-project/locales/editor';
import './app.global.css';


// VARIABLES //

const history = createHashHistory();
const store = configureStore();
addResources( 'Editor' );
configureIpcRenderer( store );


// MAIN //

const App = () => ( <I18nextProvider i18n={i18n} >
	<Root store={store} history={history} />
</I18nextProvider> );


// EXPORTS //

export default App;
