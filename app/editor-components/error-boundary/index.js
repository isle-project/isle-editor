// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from 'editor-components/error-message';


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
			return <ErrorMessage msg={this.state.msg} code={this.props.code} />;
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
