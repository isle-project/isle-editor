// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* The appear component will cause all of its children to become visible after a specified amount of time.
*
* @property {boolean} active - controls whether the counter should be active
* @property {number} delay - number of milliseconds before component appears
*/
class Unveil extends Component {
	/**
	* Constructor function
	*/
	constructor( props) {
		super();

		// Set initial component states...
		this.state = {
			visible: false,
			children: props.children
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.children !== prevState.children ) {
			return {
				visible: false,
				children: nextProps.children
			};
		}
		return null;
	}

	/*
	* Invoked once on client after the initial rendering. Sets up component timer.
	*/
	componentDidMount() {
		if ( this.props.active ) {
			this.setTimer();
		}
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.children !== prevProps.children &&
			this.props.active
		) {
			this.setTimer();
		}
		else if (
			this.props.active &&
			this.props.active !== prevProps.active
		) {
			this.setTimer();
		}
	}

	/*
	* Invoked immediately before component is unmounted from DOM. Performs clean-up of
	* component timer.
	*/
	componentWillUnmount() {
		clearTimeout( this._timer );
	}

	setTimer() {
		if ( this._timer !== null ) {
			clearTimeout( this._timer );
		}
		this._timer = setTimeout( () => {
			this.setState({
				visible: true
			});
			this._timer = null;
		}, this.props.delay );
	}

	/**
	* React component render method
	*/
	render() {
		return this.state.visible ?
			<div>{this.props.children}</div> :
			<span />;
	}
}


// PROPERTIES //

Unveil.defaultProps = {
	active: false,
	delay: 1000
};

Unveil.propTypes = {
	active: PropTypes.bool,
	delay: PropTypes.number
};


// EXPORTS //

export default Unveil;
