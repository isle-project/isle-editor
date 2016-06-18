// MODULES //

import React from 'react';


// EXPIRE //

class Expire extends React.Component {
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
		this._timer != null ? clearTimeout( this._timer ) : null;

		this._timer = setTimeout( () => {
			this.setState({ visible: false });
			this._timer = null;
		}, this.props.delay );
	}

	/**
	* React component render method
	*/
	render() {
		return this.state.visible
			? <div>{this.props.children}</div>
			: <span />;
	}
}


// DEFAULT PROPERTIES //

Expire.defaultProps = {
	delay: 1000
};


// PROPERTY TYPES //

Expire.propTypes = {
	delay: React.PropTypes.number
};


// EXPORTS //

export default Expire;
