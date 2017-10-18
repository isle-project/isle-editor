// MODULES //

import React, { Component } from 'react';


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

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.code !== this.props.code ) {
			this.setState({
				hasError: false
			});
		}
	}

	render() {
		if ( this.state.hasError ) {
			return (
				<div className="errorMessage">
					<h3>Encountered an error:</h3>
					<span>{this.state.msg}</span>
				</div>
			);
		}
		return this.props.children;
	}
}


// EXPORTS //

export default ErrorBoundary;
