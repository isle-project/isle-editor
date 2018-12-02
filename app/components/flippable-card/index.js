// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';


// MAIN //

/**
* An ISLE component that allows two render two-sides.
*
* @property {(string|node)} button - button label
* @property {Array<Object>} cardStyles - allows to override the given styles
* @property {number} flipSpeedBackToFront - the speed by which the card turns from background to foreground, in seconds
* @property {number} flipSpeedFrontToBack {number} the speed by which the card turns from foreground to background, in seconds
* @property {boolean} isFlipped - initial flip state of the card
* @property {number} perspective - CSS property value to give 3d-positioned element a perspective
* @property {Function} onChange - callback invoked once the card is flipped; receives the current flipped status as its sole argument
* @property {boolean} oneTime - indicates whether the flip process may be executed just once
*/
class FlippableCard extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isFlipped: props.value || props.defaultValue,
			fired: false
		};
	}

	componentDidUpdate( nextProps ) {
		if ( nextProps.isFlipped !== this.props.isFlipped ) {
			this.setState({
				isFlipped: nextProps.isFlipped
			});
		}
	}

	oneShot = () => {
		if (this.state.fired === false) {
			this.setState({
				fired: true,
				isFlipped: !this.state.isFlipped
			}, () => {
				this.props.onChange( this.props.ndx, this.state.isFlipped );
			});
		}
	}

	handleToggle = () => {
		if (this.props.value !== void 0) {
			return this.props.onChange( this.props.ndx, !this.props.value );
		}
		if ( this.props.oneTime === false)
			{
			this.setState({
				isFlipped: !this.state.isFlipped
			}, () => {
				this.props.onChange( this.props.ndx, this.state.isFlipped );
			});
		} else {
			this.oneShot();
		}
	}

	renderButton() {
		if ( this.props.button !== null ) {
			return (
				<Button onClick={this.handleToggle} >
					{this.props.button}
				</Button>
			);
		}
		return null;
	}

	interaction = () => {
		if ( this.props.button === null ) {
			this.handleToggle();
		}
	}

	render() {
		const isFlipped = this.props.value !== void 0? this.props.value : this.state.isFlipped;
		const styles = {
			container: {
				perspective: this.props.perspective,
				transformStyle: 'preserve-3d',
				width: 400,
				height: 400,
				cursor: 'pointer',
				...this.props.cardStyles.container
			},
			flipper: {
				position: 'relative',
				transformStyle: 'preserve-3d',
				width: '100%',
				height: '100%'
			},
			front: {
				WebkitBackfaceVisibility: 'hidden',
				backfaceVisibility: 'hidden',
				left: '0',
				position: 'absolute',
				top: '0',
				transform: `rotateY(${isFlipped ? 180 : 0 }deg)`,
				transformStyle: 'preserve-3d',
				width: '100%',
				height: '100%',
				zIndex: '2',
				transition: `${this.props.flipSpeedBackToFront}s`,
				...this.props.cardStyles.front
			},
			back: {
				WebkitBackfaceVisibility: 'hidden',
				backfaceVisibility: 'hidden',
				left: '0',
				position: 'absolute',
				transform: `rotateY(${isFlipped ? 0 : -180 }deg)`,
				transformStyle: 'preserve-3d',
				top: '0',
				width: '100%',
				height: '100%',
				zIndex: 2,
				transition: `${this.props.flipSpeedFrontToBack}s`,
				...this.props.cardStyles.back
			}
		};

		return (
			<div id={this.props.id} onClick={this.interaction} className="react-card-flip" style={styles.container}>
				<div className="react-card-flipper" style={styles.flipper}>
					<div className="react-card-front" style={styles.front}>
						{this.props.children[ 0 ]}
						{this.renderButton()}
					</div>
					<div className="react-card-back" style={styles.back}>
						{this.props.children[ 1 ]}
						{this.renderButton()}
					</div>
				</div>
			</div>
		);
	}
}

// PROPERTIES //

FlippableCard.propTypes = {
	button: PropTypes.string,
	cardStyles: PropTypes.shape({
		container: PropTypes.object,
		front: PropTypes.object,
		back: PropTypes.object
	}),
	children: ( props, propName, componentName ) => {
		if ( React.Children.count( props[ propName ] ) !== 2 ) {
			return new Error( `${componentName} requires two children.` );
		}
		return null;
	},
	flipSpeedBackToFront: PropTypes.number,
	flipSpeedFrontToBack: PropTypes.number,
	isFlipped: PropTypes.bool,
	ndx: PropTypes.number,
	onChange: PropTypes.func,
	oneTime: PropTypes.bool,
	perspective: PropTypes.number,
	value: PropTypes.bool,
	defaultValue: PropTypes.bool,
};

FlippableCard.defaultProps = {
	button: null,
	cardStyles: {
		container: {},
		front: {},
		back: {}
	},
	children: null,
	flipSpeedBackToFront: 1,
	flipSpeedFrontToBack: 1,
	isFlipped: false,
	ndx: 0,
	onChange() {},
	oneTime: false,
	perspective: 1000,
	value: void 0,
	defaultValue: false
};


// EXPORTS //

export default FlippableCard;
