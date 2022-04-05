// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import max from '@stdlib/math/base/special/max';
import './timed_button.css';


// VARIABLES //

const debug = logger( 'isle:timed-button' );


// MAIN //

/**
* A button component that becomes deactivated for a specified duration upon clicking.
*
* @property {number} duration - the time (in seconds) it takes until the button gets reactivated
* @property {Function} block - display bottom in full width
* @property {boolean} disabled - if disabled the button will be inactive, but the countdown starts
* @property {string} size - button size (passed to the react-bootstrap button component)
* @property {string} type - button type (passed to the react-bootstrap button component)
* @property {string} variant - button variant (passed to the react-bootstrap button component)
* @property {boolean} autoActivate - controls whether to always timeout the button when clicked; if `false`, the timeout is only applied when the callback passed to the `onClick` event handler is invoked with `true`
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onClick - callback invoked when clicking the button
*/
class TimedButton extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			timeLeft: props.duration,
			waiting: !props.disabled,
			width: 100
		};
	}

	componentDidMount() {
		if ( this.state.waiting === false ) {
			this.start();
		}
	}

	componentWillUnmount() {
		if ( this.countdown ) {
			clearInterval( this.countdown );
		}
	}

	refDimensions = (element) => {
		if ( element ) {
			debug( 'Show dimensions...' );
			let x = element.getBoundingClientRect();
			let width = x.width;
			this.setState({
				width: width
			});
		}
	};

	start() {
		this.setState({
			waiting: false
		});
		this.countdown = setInterval( () => {
			// Decrement the time by 1:
			this.setState({
				timeLeft: max( 0, this.state.timeLeft - 1 )
			});
			if ( this.state.timeLeft === 0 ) {
				clearInterval(this.countdown);
				this.setState({
					waiting: true,
					timeLeft: this.props.duration
				});
			}
		}, 1000 );
	}

	trigger = () => {
		if ( !this.props.autoActivate ) {
			this.props.onClick(( bool ) => {
				if ( bool !== false ) {
					this.setState({
						waiting: true
					});
					this.start();
				}
			});
		} else {
			this.props.onClick();
			this.setState({
				waiting: true
			});
			this.start();
		}
	};

	render() {
		const disabled = this.props.disabled || !this.state.waiting;
		const style = {
			marginLeft: 3,
			width: this.state.width
		};
		const percentage = ( 1.0 - ( this.state.timeLeft / this.props.duration ) ) * this.state.width;
		const barStyle = {
			marginLeft: percentage
		};
		return (
			<div className="timed-button-container" >
				{ !this.props.disabled ? <div style={style} className="timed-button-remaining">
					<div className="timed-button-bar">
						<div style={barStyle} className="timed-button-bar-overlay" />
					</div>
				</div> : null }
				<div className={this.props.block ? 'd-grid' : ''} >
					<Button
						className={this.props.className}
						size={this.props.size}
						type={this.props.type}
						ref={this.refDimensions}
						disabled={disabled}
						onClick={this.trigger}
						variant={this.props.variant}
						style={this.props.style}
					>
						{this.props.children}
					</Button>
				</div>
			</div>
		);
	}
}


// PROPERTIES //

TimedButton.propTypes = {
	block: PropTypes.bool,
	duration: PropTypes.number,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	size: PropTypes.string,
	type: PropTypes.string,
	variant: PropTypes.string,
	autoActivate: PropTypes.bool,
	style: PropTypes.object
};

TimedButton.defaultProps = {
	block: false,
	className: '',
	disabled: false,
	duration: 3,
	onClick() {},
	size: null,
	type: null,
	variant: null,
	autoActivate: true,
	style: {}
};


// EXPORTS //

export default TimedButton;
