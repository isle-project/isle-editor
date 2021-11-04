// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* Clock component displaying the current time.
*
* @property {boolean} duration - if set, the duration of the session is displayed (not the actual time)
* @property {string} format - time format (either `HH:MM`, `HH:MM:SS`, or `HH`)
* @property {Object} style - CSS inline styles
* @property {string} className - class name
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
		if ( this.props.duration ) {
			this.updateDuration();
		}
		else {
			this.updateDate();
		}
	};

	updateDuration = () => {
		const date = new Date().getTime() - this.state.startTime;
		const currentTime = new Date( date ).toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'

		});
		this.setState({
			time: currentTime
		});
	};

	updateDate = () => {
		let currentTime;
		if ( this.props.format ) {
			switch ( this.props.format ) {
				case 'HH':
					currentTime = new Date().toLocaleTimeString([], {
						hour: '2-digit'
					});
				break;
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
			}
		} else {
			currentTime = new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit'
			});
		}
		if ( this.state.time !== currentTime ) {
			this.setState({
				time: currentTime
			});
		}
	};

	render() {
		const styles = {
			fontSize: 12,
			fontFamily: 'monospace',
			...this.props.style
		};
		return (
			<span style={styles} className={this.props.className} >
				{this.state.time}
			</span>
		);
	}
}


// PROPERTIES //

Clock.propTypes = {
	duration: PropTypes.bool,
	format: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};

Clock.defaultProps = {
	duration: false,
	format: '',
	className: '',
	style: {}
};


// EXPORTS //

export default Clock;
