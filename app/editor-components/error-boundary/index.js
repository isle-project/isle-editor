// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from 'editor-components/error-message';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:error-boundary' );


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
		debug( 'Caught error...' );
		this.setState({
			hasError: true,
			msg: error.message
		});
	}

	render() {
		debug( 'Check whether error has been encountered...' );
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
