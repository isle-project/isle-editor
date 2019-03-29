// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import max from '@stdlib/math/base/special/max';
import './timed_button.css';


// MAIN //

/**
* A button component that becomes deactivated for a specified duration upon clicking.
*
* @property {number} duration - the time (in seconds) it takes until the button gets reactivated
* @property {Function} block - display bottom in full width
* @property {Function} onClick - callback invoked when clicking the button
* @property {boolean} disabled - if disabled the button will be inactive, but the countdown starts
* @property {string} size - font size, passed to the native React button
* @property {string} type - button type, passed to the native React button
* @property {string} title - the button title
* @property {string} variant - passed to the button
*/
class TimedButton extends Component {
	constructor( props ) {
		super( props );

		this.id = 'ButtonIdentifier' + parseInt( Math.random() *1000, 10);
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
		clearInterval( this.countdown );
	}

	refDimensions = (element) => {
		if ( element ) {
			console.log('Anzeige der Dimension');
			let x = element.getBoundingClientRect();
			let width = x.width;
			this.setState({
				width: width
			});
		}
	}

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
		this.props.onClick( this.props.id );
		this.setState({
			waiting: true
		});
		this.start();
	}

	render() {
		const disabled = !this.state.waiting;
		const style = {
			marginLeft: 3,
			width: this.state.width
		};
		const percentage = ( 1.0 - ( this.state.timeLeft / this.props.duration ) ) * this.state.width;
		const barStyle = {
			marginLeft: percentage
		};
		return (
			<div>
				<div id={this.props.id} style={style} className="timed-button-remaining">
					<div className="timed-button-bar">
						<div style={barStyle} className="timed-button-bar-overlay" />
					</div>
				</div>
				<div id={this.id} className="timed-button-container">
					<Button
						href={this.props.href}
						size={this.props.size}
						block={this.props.block}
						type={this.props.type}
						ref={this.refDimensions}
						disabled={disabled}
						onClick={this.trigger}
						variant={this.props.variant}
						className="input-button-full"
					>
						{this.props.title}
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
	disabled: PropTypes.bool,
	href: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.string,
	title: PropTypes.string,
	type: PropTypes.string,
	variant: PropTypes.string
};

TimedButton.defaultProps = {
	block: false,
	disabled: false,
	duration: 3,
	href: null,
	id: null,
	onClick() {},
	size: 'sm',
	title: 'Button',
	type: 'submit',
	variant: 'info'
};


// EXPORTS //

export default TimedButton;
