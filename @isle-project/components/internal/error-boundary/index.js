// MODULES //

import React, { Component } from 'react';
import ErrorMessage from './error_message.js';


// MAIN //

class ErrorBoundary extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			hasError: false,
			msg: null
		};
	}

	componentDidCatch( error ) {
		this.setState({
			hasError: true,
			msg: error.stack
		});
	}

	render() {
		if ( this.state.hasError ) {
			return ( <ErrorMessage
				msg={this.state.msg}
			/> );
		}
		return this.props.children;
	}
}


// EXPORTS //

export default ErrorBoundary;
