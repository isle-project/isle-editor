// MODULES //

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Editor from 'containers/editor.js';
import Documentation from 'containers/documentation.js';
import Dashboard from 'containers/dashboard.js';
import Settings from 'containers/settings.js';
import Export from 'containers/export.js';


// VARIABLES //

const PATH_REGEX = /\/[0-9]*$/;


// MAIN //

class Root extends Component {
	render() {
		const { store, history } = this.props;
		return (
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
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/docs" component={Documentation} />
						<Route path="/settings" component={Settings} />
						<Route path="/export" component={Export} />
					</div>
				</Router>
			</Provider>
		);
	}
}


// EXPORTS //

export default hot( module )( Root );
