// MODULES //

import React, { Component, PropTypes } from 'react';


// EXPORTS //

export default class App extends Component {
	static propTypes = {
		children: PropTypes.element.isRequired
	};

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
