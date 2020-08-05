// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import rdunif from '@stdlib/random/base/discrete-uniform';
import './ticker.css';


// MAIN //

/**
* A dynamic background component that cycles through a list of texts  at a specified interval.
*
* @property {Array} list - list of texts to be displayed
* @property {boolean} loop - indicates whether the process shall be displayed infinitely
* @property {string} direction - the direction of the text flow (either `left`, `right`, `up`, `down`, `tracking`, `focus`, or `swirl`)
* @property {number} still - the time the text remains still (in seconds)
* @property {number} interval - the interval between the calls (in seconds)
* @property {number} inTime - time of the entrance effect (in seconds)
* @property {number} outTime - time of the exit effect (in seconds)
* @property {string} className - class name
* @property {Object} style - CSS styles of the text
*/
class ScrollingText extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			ct: 0
		};
	}

	componentDidMount() {
		const int = this.props.interval * 1000;
		this.interval = setInterval( this.next, int );
	}

	componentWillUnmount() {
		if ( this.interval ) {
			clearInterval( this.interval );
		}
	}

	next = () => {
		if ( this.state.ct < this.props.list.length -1 ) {
			const ct = this.state.ct + 1;
			this.setState({
				ct: ct
			});
		}
		else {
			this.reset();
		}
	}

	reset() {
		if ( this.props.loop ) {
			this.setState({
				ct: 0
			});
		}
		else {
			clearInterval( this.interval );
		}
	}

	getAnimation() {
		let ani = '';
		switch ( this.props.direction ) {
			case 'left':
				ani = 'ticker-slide-in-right ';
				ani += this.props.inTime + 's forwards';
				ani += ', ticker-slide-out-left ';
				ani += this.props.outTime + 's ' + this.props.still + 's forwards';
			break;
			case 'right':
				ani = 'ticker-slide-in-left ';
				ani += this.props.inTime + 's forwards';
				ani += ', ticker-slide-out-right ';
				ani += this.props.outTime + 's ' + this.props.still + 's forwards';
			break;
			case 'down':
				ani = 'ticker-slide-in-top ';
				ani += this.props.inTime + 's forwards';
				ani += ', ticker-slide-out-bottom ';
				ani += this.props.outTime + 's ' + this.props.still + 's forwards';
			break;
			case 'up':
				ani = 'ticker-slide-in-bottom ';
				ani += this.props.inTime + 's forwards';
				ani += ', ticker-slide-out-top ';
				ani += this.props.outTime + 's ' + this.props.still + 's forwards';
			break;
			case 'focus':
				ani = 'ticker-text-focus-in ';
				ani += this.props.inTime + 's forwards';
				ani += ', ticker-text-blur-out ';
				ani += this.props.outTime + 's ' + this.props.still + 's forwards';
			break;
			case 'tracking':
				ani = 'ticker-tracking-in-contract-bck ';
				ani += this.props.inTime + 's forwards';
				ani += ', ticker-tracking-out-expand-fwd ';
				ani += this.props.outTime + 's ' + this.props.still + 's forwards';
			break;
			case 'swirl':
				ani = 'ticker-swirl-in-fwd ';
				ani += this.props.inTime + 's forwards';
				ani += ', ticker-swirl-out-bck ';
				ani += this.props.outTime + 's ' + this.props.still + 's forwards';
			break;
		}
		return ani;
	}

	render() {
		const ani = this.getAnimation();
		const animationStyle = {
			animation: ani
		};
		const style = Object.assign( animationStyle, this.props.style );
		const key = rdunif( 0, 100 );
		return (
			<div
				key={key}
				className={this.props.className}
				style={style}
			>{ this.props.list[this.state.ct] }</div>
		);
	}
}


// PROPERTIES //

ScrollingText.propTypes = {
	list: PropTypes.arrayOf( PropTypes.string ),
	loop: PropTypes.bool,
	direction: PropTypes.string,
	still: PropTypes.number,
	interval: PropTypes.number,
	inTime: PropTypes.number,
	outTime: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object
};

ScrollingText.defaultProps = {
	list: [],
	loop: false,
	direction: 'right',
	still: 3,
	interval: 15,
	inTime: 0.6,
	outTime: 1,
	className: '',
	style: {}
};


// EXPORTS //

export default ScrollingText;
