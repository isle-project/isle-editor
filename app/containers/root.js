// MODULES //

import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
const Editor = lazy( () => import( 'containers/editor.js' ) );
const Documentation = lazy( () => import( 'containers/documentation.js' ) );
const Settings = lazy( () => import( 'containers/settings.js' ) );
const Export = lazy( () => import( 'containers/export.js' ) );


// VARIABLES //

const PATH_REGEX = /\/[0-9]*$/;


// MAIN //

class Root extends Component {
	render() {
		const { store, history } = this.props;
		return (
			<Provider store={store}>
				<Suspense fallback={<div className="welcome-screen" />}>
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
				</Suspense>
			</Provider>
		);
	}
}


// EXPORTS //

export default hot( module )( Root );
