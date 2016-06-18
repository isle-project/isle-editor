// MODULES //

import React from 'react';
import App from './App';
import {Provider} from 'react-redux';


// ROOT //

const Root = ( { store } ) => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};


// EXPORTS //

export default Root;
