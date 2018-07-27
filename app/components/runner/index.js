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
		if ( this.props.active ) {
			if ( this.props.interval ) {
				this.intervalID = window.setInterval( this.props.onEvaluate, this.props.interval );
			} else {
				this.props.onEvaluate();
			}
		}
	}

	componentDidUpdate( prevProps ) {
		if ( prevProps.active && !this.props.active ) {
			if ( this.intervalID ) {
				window.clearInterval( this.intervalID );
				this.intervalID = null;
			}
		}
		else if ( !prevProps.active && this.props.active ) {
			if ( this.props.interval ) {
				this.intervalID = window.setInterval( this.props.onEvaluate, this.props.interval );
			} else {
				this.props.onEvaluate();
			}
		}
	}

	componentWillUnmount() {
		if ( this.intervalID ) {
			window.clearInterval( this.intervalID );
		}
	}

	render() {
		return null;
	}
}


// DEFAULT PROPERTIES //

Runner.defaultProps = {
	active: true,
	interval: null,
	onEvaluate() {}
};


// PROPERTY TYPES //

Runner.propDescriptions = {
	active: 'controls whether the runner should be active. Upon activation, the `onEvaluate` function is called in the given interval (or once)',
	interval: 'number of milliseconds between invocations of `onEvaluate`. If no interval is set, the function is only invoked once',
	onEvaluate: 'function to be invoked'
};

Runner.propTypes = {
	active: PropTypes.bool,
	interval: PropTypes.number,
	onEvaluate: PropTypes.func
};


// EXPORTS //

export default Runner;
