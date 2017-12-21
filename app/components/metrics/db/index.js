// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


// MAIN //

class Metrics extends Component {
	constructor() {
		super();

		this.state = {
			active: false
		};

		this.getData = () => {
			const { session } = this.context;
			session.retrieveData({
				componentID: this.props.for
			}, this.props.onData );
		};

		this.start = () => {
			if ( this.props.interval ) {
				this.runner = window.setInterval( this.getData, this.props.interval );
			} else {
				this.getData();
			}
		};

		this.stop = () => {
			if ( this.runner ) {
				clearInterval( this.runner );
			}
		};
	}

	componentWillUnmount() {
		if ( this.runner ) {
			clearInterval( this.runner );
		}
	}

	render() {
		return (
			<Button
				bsStyle="primary"
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

Metrics.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Metrics;
