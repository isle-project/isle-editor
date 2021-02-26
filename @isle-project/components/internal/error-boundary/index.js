// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
			msg: error.message
		});
	}

	render() {
		if ( this.state.hasError ) {
			return ( <ErrorMessage
				msg={this.state.msg}
				componentName={this.props.component}
				resetError={() => {
					PropTypes.resetWarningCache();
					this.setState({
						hasError: false
					});
				}}
			/> );
		}
		return this.props.children;
	}
}


// EXPORTS //

export default ErrorBoundary;
