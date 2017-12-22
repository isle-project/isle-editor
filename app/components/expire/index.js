// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class Expire extends Component {
	/**
	* Constructor function
	*/
	constructor() {
		super();

		// Set initial component states...
		this.state = {
			visible: true
		};
	}
	/*
	* Invoked once on client after the initial rendering. Sets up component timer.
	*/
	componentDidMount() {
		this.setTimer();
	}
	/**
	* Invoked when component is receiving new children, this method sets
	*  up the time and sets the component visible before rendering.
	*
	* @param {Object} newProps - new properties
	*/
	componentWillReceiveProps( newProps ) {
		if ( newProps.children !== this.props.children ) {
			this.setTimer();
			this.setState({ visible: true });
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
			this.setState({ visible: false });
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


// DEFAULT PROPERTIES //

Expire.defaultProps = {
	delay: 1000
};


// PROPERTY TYPES //

Expire.propTypes = {
	delay: PropTypes.number
};


// EXPORTS //

export default Expire;
