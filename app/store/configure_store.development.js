// MODULES //

import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import DevTools from 'containers/dev_tools.js';


// LOGGER //

const logger = createLogger({
	level: 'info',
	collapsed: true
});

const enhancer = compose(
	applyMiddleware( thunk, logger ),
	DevTools.instrument(),
	persistState(
		window.location.href.match(
			/[?&]debug_session=([^&]+)\b/
		)
	)
);

export default function configureStore( initialState ) {
	const store = createStore( rootReducer, initialState, enhancer );

	if ( module.hot ) {
		// Enable Webpack hot module replacement for reducers:
		module.hot.accept( '../reducers', () =>
			store.replaceReducer( require( '../reducers' ) ) // eslint-disable-line global-require
		);
	}

	return store;
}
