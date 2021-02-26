// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './error_message.js';


// MAIN //

class ErrorBoundary extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			error: null
		};
	}

	componentDidCatch( error ) {
		this.setState({
			error: error
		});
	}

	render() {
		if ( this.state.hasError ) {
			return ( <ErrorMessage
				error={this.state.error}
				componentName={this.props.component}
				resetError={() => {
					PropTypes.resetWarningCache();
					this.setState({
						error: null
					});
				}}
			/> );
		}
		return this.props.children;
	}
}


// EXPORTS //

export default ErrorBoundary;
