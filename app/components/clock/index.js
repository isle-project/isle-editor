// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class Clock extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			time: new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit'
			})
		};

		this.updateTime = () => {
			const currentTime = new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit'
			});
			if ( this.state.time !== currentTime ) {
				this.setState({
					time: currentTime
				});
			}
		};
	}

	componentDidMount() {
		this.interval = setInterval( this.updateTime, 1000 );
	}

	componentWillUnmount() {
		clearInterval( this.interval );
	}

	render() {
		let styles = {
			fontSize: 12,
			fontFamily: 'monospace',
			...this.props.style
		};
		return (
			<span style={styles}>
				{this.state.time}
			</span>
		);
	}
}

// PROPERTY TYPES //

Clock.propTypes = {
	'style': PropTypes.object
};

Clock.defaultProps = {
	'style': {}
};


// EXPORTS //

export default Clock;
