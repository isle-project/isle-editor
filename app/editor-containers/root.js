// MODULES //

import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, HashRouter } from 'react-router-dom';
const Editor = lazy( () => import( 'editor-containers/editor' ) );
const Documentation = lazy( () => import( 'editor-containers/documentation.js' ) );
const Settings = lazy( () => import( 'editor-containers/settings' ) );
const Export = lazy( () => import( 'editor-containers/export.js' ) );


// MAIN //

class Root extends Component {
	render() {
		const { store } = this.props;
		return (
			<HashRouter>
				<Provider store={store} >
					<Suspense fallback={<div className="welcome-screen" />}>
						<div className="App">
							<Routes>
								<Route path="/docs" element={<Documentation />} />
								<Route path="/settings" element={<Settings />} />
								<Route path="/export" element={<Export />} />
								<Route path="/" element={<Editor />} />
							</Routes>
						</div>
					</Suspense>
				</Provider>
			</HashRouter>
		);
	}
}


// EXPORTS //

export default Root;
