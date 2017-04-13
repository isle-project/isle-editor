// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// APP //

class App extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}


// PROPERTY TYPES //

App.propTypes = {
	children: PropTypes.element.isRequired
};


// EXPORTS //

export default App;
