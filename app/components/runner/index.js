// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class Runner extends Component {

	constructor( props ) {

		super( props );

	}

	componentDidMount() {
		if ( this.props.interval ) {
			var intervalID = window.setInterval( this.props.onEvaluate, this.props.interval );	this.setState({ intervalID });
		} else {
			this.props.onEvaluate();
		}
	}

	componentWillUnmount() {
		window.clearInterval( this.state.intervalID );
	}

	render() {
		return (
			<span></span>
		);
	}
}


// DEFAULT PROPERTIES //

Runner.defaultProps = {
	onEvaluate() {},
	interval: null
};


// PROPERTY TYPES //

Runner.propTypes = {
	onEvaluate: PropTypes.func,
	interval: PropTypes.number
};


// EXPORTS //

export default Runner;
