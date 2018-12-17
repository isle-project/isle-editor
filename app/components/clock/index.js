// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* Clock component displaying the current time.
*
* @property {Object} style - CSS inline styles
* @property {boolean} duration - if set the duration of the session is display (not the actual time)
* @property {string} format - time format (either `HH:MM`, `HH:MM:SS`, or `HH:MM:SSS`)
*/
class Clock extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			time: new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit'
			}),
			startTime: new Date().getTime()

		};
	}

	componentDidMount() {
		this.interval = setInterval( this.updateTime, 1000 );
	}

	componentWillUnmount() {
		clearInterval( this.interval );
	}


	updateTime = () => {
		if (this.props.duration) this.updateDuration();
		else this.updateDate();
	}

	updateDuration = () => {
		var date = new Date().getTime() - this.state.startTime;
		var currentTime = new Date(date).toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'

		});

		this.setState({
			time: currentTime
		});
	}

	updateDate = () => {
		var currentTime = new Date().toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});

		if ( this.props.format ) {
			switch ( this.props.format ) {
				case 'HH:MM':
					currentTime = new Date().toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit'
				});
				break;
				case 'HH:MM:SS':
					currentTime = new Date().toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit',
						second: '2-digit'
					});
				break;
				case 'HH:MM:SSS':
				currentTime = new Date().toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
					second: '3-digit'
				});
			break;
			}
		}


		if ( this.state.time !== currentTime ) {
			this.setState({
				time: currentTime
			});
		}
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


// PROPERTIES //

Clock.propTypes = {
	style: PropTypes.object,
	duration: PropTypes.bool,
	format: PropTypes.string
};

Clock.defaultProps = {
	style: {},
	duration: false,
	format: ''
};


// EXPORTS //

export default Clock;
