// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class Runner extends Component {
	constructor( props ) {
		super( props );
		this.state = {};
	}

	componentDidMount() {
		if ( this.props.interval ) {
			var intervalID = window.setInterval( this.props.onEvaluate, this.props.interval );
			this.setState({ intervalID });
		} else {
			this.props.onEvaluate();
		}
	}

	componentWillUnmount() {
		if ( this.state.intervalID ) {
			window.clearInterval( this.state.intervalID );
		}
	}

	render() {
		return (
			<span></span>
		);
	}
}


// DEFAULT PROPERTIES //

Runner.defaultProps = {
	interval: null,
	onEvaluate() {}
};


// PROPERTY TYPES //

Runner.propTypes = {
	interval: PropTypes.number,
	onEvaluate: PropTypes.func
};


// EXPORTS //

export default Runner;
