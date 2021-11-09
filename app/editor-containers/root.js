// MODULES //

import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
const Editor = lazy( () => import( 'editor-containers/editor' ) );
const Documentation = lazy( () => import( 'editor-containers/documentation.js' ) );
const Settings = lazy( () => import( 'editor-containers/settings' ) );
const Export = lazy( () => import( 'editor-containers/export.js' ) );


// MAIN //

class Root extends Component {
	render() {
		const { store, history } = this.props;
		return (
			<Provider store={store} >
				<Suspense fallback={<div className="welcome-screen" />}>
					<Router history={history} >
						<div className="App">
							<Route exact path="/" component={Editor} />
							<Route path="/docs" component={Documentation} />
							<Route path="/settings" component={Settings} />
							<Route path="/export" component={Export} />
						</div>
					</Router>
				</Suspense>
			</Provider>
		);
	}
}


// EXPORTS //

export default Root;
