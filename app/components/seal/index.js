// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './seal.css';


function sinDegrees(angleDegrees) {
	return Math.sin(angleDegrees*Math.PI/180);
}

function cosDegrees(angleDegrees) {
	return Math.cos(angleDegrees*Math.PI/180);
}

// MAIN //

/**
* An appoval seal
*
* @property {string} title - seal title
* @property {string} lower - the lower text
* @property {number} lowerArc - the arc for the lower text
* @property {string} upper - the upper text
* @property {number} upperArc - the arc for the upper text
* @property {object} style - the style for the element
* @property {object} innerStyle - the style for the inner circle
*/

class Seal extends Component {
	constructor( props ) {
		super( props );
		this.ref = React.createRef();
		this.lowerRef = React.createRef();
		this.upperRef = React.createRef();

		this.state = {
			height: 180,
			diff: 4
		};
	}

	componentDidMount() {
	}

	curvedNewText = (txt, size, arc, offset) => {
		txt = txt.split('');
		var deg = arc / txt.length;
		let origin = (arc/2)*-1;
		origin -= offset;
		let lines = [];

		let radius = size/2;

		txt.forEach((ea) => {
			let sin = sinDegrees(origin);
			let cos = cosDegrees(origin);

			let left = (radius*sin) + radius + this.state.diff;
			let top = (radius*cos) + radius;

			let rotation = origin*-1 - 180;
			rotation = 'rotate(' + rotation + 'deg)';

			let style = {
				position: 'absolute',
				left: left,
				top: top,
				transformOrigin: '0% 0%',
				transform: rotation
			};

			let l = <p style={style}>{ea}</p>;
			lines.push(l);
			origin -= deg;
		});

		return lines;
	}


	curvedInvertedText = (txt, size, arc, offset) => {
		txt = txt.split('');
		var deg = arc / txt.length;
		let origin = 0 - (arc/2);
		let lines = [];

		let radius = size/2;

		txt.forEach((ea) => {
			let sin = sinDegrees(origin);
			let cos = cosDegrees(origin);

			let left = (radius*sin) + radius + this.state.diff;
			let top = (radius*cos) + radius;

			let rotation = origin*-1;
			rotation = 'rotate(' + rotation + 'deg)';

			let style = {
				position: 'absolute',
				left: left,
				top: top,
				transformOrigin: '50% 50%',
				transform: rotation
			};

			let l = <p style={style}>{ea}</p>;
			lines.push(l);
			origin += deg;
		});

		return lines;
	}

	curvedText = (txt, radius, arc, offset) => {
		txt = txt.split('');
		var deg = arc / txt.length; // war zuvor Radius
		let origin = (arc/2)*-1;
		origin += offset;
		let lines = [];

		txt.forEach((ea) => {
			// let line = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
			let rotation = 'rotate(' + origin + 'deg)';
			let style = {
				position: 'absolute',
				height: radius,
				transformOrigin: '0 100%',
				transform: rotation
			};

			let l = <p style={style}>{ea}</p>;
			lines.push(l);
			origin += deg;
		});

		return lines;
	}

	getUpper = () => {
		let curvedText = this.curvedNewText(this.props.upper, 210, this.props.upperArc, 65);
		return (
			<div>{curvedText}</div>
		);
	}

	getLowerLine = () => {
		let curvedText = this.curvedInvertedText(this.props.lower, this.state.height, this.props.lowerArc, 0);
		return (
			<div>{curvedText}</div>
		);
	}

	getUpperLine() {
		let curvedText = this.curvedText(this.props.upper, 100, this.props.upperArc, 0);
		return (
			<div className='seal-line-wrapper'>
				<div className="seal-upper-line">{curvedText}</div>
			</div>
		);
	}


	getStyle() {
		let style = null;
		if (this.props.style) {
			style = Object.assign({}, this.props.style);
			style = this.props.style;
		}

		return style;
	}

	getInnerStyle() {
		let style = null;
		if (this.props.innerStyle) {
			style = Object.assign({}, this.props.innerStyle);
		}
		return style;
	}

	render() {
		let style = this.getStyle();
		let innerStyle = this.getInnerStyle();

		return (
			<div ref={this.ref} style={style} className="seal-container">
				<div className="seal-outer-border" />
				<div className="seal-fine-border" />
				<div style={innerStyle} className="seal-inner-circle" />
				<div className="seal-logo" />
				<div className="seal-lower-logo" />
				<div className="seal-wrapper">
					<div className="seal-title">{ this.props.title}</div>
				</div>
				<div ref={this.lowerRef} className="seal-lower-line">{ this.getLowerLine() }</div>
				<div ref={this.upperRef} className="seal-upper">{ this.getUpper() }</div>
			</div>
		);
	}
}


// { this.getUpperLine() }

// PROPERTIES //

Seal.propTypes = {
	innerStyle: PropTypes.object,
	lower: PropTypes.string,
	lowerArc: PropTypes.number,
	style: PropTypes.object,
	title: PropTypes.string,
	upper: PropTypes.string,
	upperArc: PropTypes.number
};

Seal.defaultProps = {
	lower: 'The lower text',
	lowerArc: 150,
	style: null,
	innerStyle: null,
	upper: 'The upper text',
	upperArc: 150,
	title: 'Enter a title'
};


// EXPORTS //

export default Seal;
