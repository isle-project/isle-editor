// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import SessionContext from 'session/context.js';


// MAIN //

/**
* Component allowing retrieval of member actions corresponding to a specified component ID from the database.
*
* @property {string} for - ID of component whose actions should be retrieved
* @property {number} interval - interval at which to call the database; if falsy, retrievals have to be manually triggered by clicking on the displayed button
* @property {Function} onData - callback function called with an array of all actions
*/
class Metrics extends Component {
	constructor() {
		super();

		this.state = {
			active: false
		};
	}

	componentWillUnmount() {
		if ( this.runner ) {
			clearInterval( this.runner );
		}
	}

	getData = () => {
		const session = this.context;
		session.retrieveData({
			componentID: this.props.for
		}, this.props.onData );
	}

	start = () => {
		if ( this.props.interval ) {
			this.runner = window.setInterval( this.getData, this.props.interval );
		} else {
			this.getData();
		}
	}

	stop = () => {
		if ( this.runner ) {
			clearInterval( this.runner );
		}
	}

	render() {
		return (
			<Button
				variant="primary"
				onClick={() => {
					this.setState({
						active: !this.state.active
					}, () => {
						if ( this.state.active || !this.props.interval ) {
							this.start();
						} else {
							this.stop();
						}
					});
				}}
			>{ ( this.state.active && this.props.interval ) ? 'Stop' : 'Fetch Data' }</Button>
		);
	}
}


// TYPES //

Metrics.defaultProps = {
	interval: null,
	onData() {}
};

Metrics.propTypes = {
	for: PropTypes.string.isRequired,
	interval: PropTypes.number,
	onData: PropTypes.func
};

Metrics.contextType = SessionContext;


// EXPORTS //

export default Metrics;
