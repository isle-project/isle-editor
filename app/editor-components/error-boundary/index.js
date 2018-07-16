// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class ErrorBoundary extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			hasError: false,
			msg: null,
			code: props.code
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.code !== prevState.code ) {
			return {
				hasError: false,
				code: nextProps.code
			};
		}
		return null;
	}

	componentDidCatch( error ) {
		this.setState({
			hasError: true,
			msg: error.message
		});
	}

	render() {
		if ( this.state.hasError ) {
			return (
				<div className="error-message">
					<h3>Encountered an error:</h3>
					<span>{this.state.msg}</span>
				</div>
			);
		}
		return this.props.children;
	}
}


// TYPES //

ErrorBoundary.propTypes = {
	code: PropTypes.string.isRequired
};


// EXPORTS //

export default ErrorBoundary;
