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
			code: props.code,
			preamble: props.preamble
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.code !== prevState.code ||
			nextProps.preamble.server !== prevState.preamble.server ||
			nextProps.preamble.state !== prevState.preamble.state ||
			nextProps.preamble.require !== prevState.preamble.require
		) {
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
	code: PropTypes.string.isRequired,
	preamble: PropTypes.object.isRequired
};


// EXPORTS //

export default ErrorBoundary;
