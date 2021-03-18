// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '@isle-project/components/internal/error-message';


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

	handleErrorReset = () => {
		PropTypes.resetWarningCache();
		this.setState({
			error: null
		});
	}

	render() {
		if ( this.state.error ) {
			return ( <ErrorMessage
				error={this.state.error}
				componentName={this.props.component}
				resetError={this.handleErrorReset}
			/> );
		}
		return this.props.children;
	}
}


// EXPORTS //

export default ErrorBoundary;
