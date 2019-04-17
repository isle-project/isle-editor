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
* @property {bool} activationMode - it set, the seal is visible but greyed out
* @property {bool} activate - it set, the seal gets actvated
* @property {string} title - seal title
* @property {string} lower - the lower text
* @property {number} lowerArc - the arc for the lower text
* @property {string} upper - the upper text
* @property {number} upperArc - the arc for the upper text
* @property {object} style - the style for the element
* @property {object} innerStyle - the style for the inner circle
* @property {bool} noOrnaments - prevents rendering of the ornaments
*/

class Seal extends Component {
	constructor( props ) {
		super( props );
		this.ref = React.createRef();
		this.lowerRef = React.createRef();
		this.upperRef = React.createRef();

		let active = true;
		if (props.activationMode) {
			active = false;
		}

		this.state = {
			height: 180,
			diff: 4,
			active: active
		};
	}

	componentDidMount() {
		if (this.props.activate && this.state.active === false) {
			this.activate();
			this.setState({
				active: true
			});
		}
	}

	activate() {
		this.props.onActivate();
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


	getUpperLine = () => {
		let curvedText = this.curvedNewText(this.props.upper, 195, this.props.upperArc, 65);
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


	getStyle() {
		let style = null;
		if (this.props.style) {
			style = Object.assign({}, this.props.style);
			style = this.props.style;
		}

		if (this.props.activationMode && this.props.style) {
			if (this.state.active === false) {
				style.webkitFilter = 'grayscale(100%)';
				style.filter = 'grayscale(100%)';
				style.opacity = 0.3;
			}
			else {
				style = Object.assign({}, style);
				style.opacity = 1;
				style.filter = 'grayscale(0%)';
				style.webkitFilter = 'grayscale(0%)';
			}
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
				{ !this.props.noOrnaments ? <div className="seal-logo" /> : null }
				{ !this.props.noOrnaments ? <div className="seal-lower-logo" /> : null }
				<div className="seal-wrapper">
					<div className="seal-title">{ this.props.title}</div>
				</div>
				<div ref={this.lowerRef} className="seal-lower-line">{ this.getLowerLine() }</div>
				<div ref={this.upperRef} className="seal-upper">{ this.getUpperLine() }</div>
			</div>
		);
	}
}


// PROPERTIES //

Seal.propTypes = {
	activationMode: PropTypes.bool,
	activate: PropTypes.bool,
	onActivate: PropTypes.func,
	innerStyle: PropTypes.object,
	lower: PropTypes.string,
	lowerArc: PropTypes.number,
	noOrnaments: PropTypes.bool,
	style: PropTypes.object,
	title: PropTypes.string,
	upper: PropTypes.string,
	upperArc: PropTypes.number
};

Seal.defaultProps = {
	activationMode: false,
	activate: false,
	onActivate() {},
	lower: 'The lower text',
	lowerArc: 150,
	style: null,
	innerStyle: null,
	upper: 'The upper text',
	upperArc: 150,
	title: 'Enter a title',
	noOrnaments: false
};


// EXPORTS //

export default Seal;
