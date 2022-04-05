// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* The expire component will cause all of its children to become invisible after a specified amount of time.
*
* @property {boolean} active - controls whether the counter should be active
* @property {number} delay - number of milliseconds before component disappears
*/
class Expire extends Component {
	/**
	* Constructor function
	*/
	constructor( props) {
		super();

		// Set initial component states...
		this.state = {
			visible: true,
			children: props.children
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.children !== prevState.children ) {
			return {
				visible: true,
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
		if ( this._timer ) {
			clearTimeout( this._timer );
		}
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
			<Fragment>{this.props.children}</Fragment> :
			<span />;
	}
}


// PROPERTIES //

Expire.defaultProps = {
	active: false,
	delay: 1000
};

Expire.propTypes = {
	active: PropTypes.bool,
	delay: PropTypes.number
};


// EXPORTS //

export default Expire;
