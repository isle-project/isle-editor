// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withPropCheck } from '@isle-project/utils/prop-check';
import sinDegrees from './sin_degrees.js';
import cosDegrees from './cos_degrees.js';
import './seal.css';


// VARIABLES //

const DIFF = 4;


// MAIN //

/**
* An approval seal.
*
* @property {boolean} active - controls whether seal is active or grayed out
* @property {number} scale - object size (if not explicitly set, the seal is not rescaled)
* @property {(string|node)} title - seal title
* @property {string} lower - the lower text
* @property {number} lowerArc - the arc for the lower text
* @property {string} upper - the upper text
* @property {number} upperArc - the arc for the upper text
* @property {Object} style - the style for the element
* @property {Object} innerStyle - the style for the inner circle
* @property {boolean} noOrnaments - prevents rendering of the ornaments
* @property {boolean} removable - controls whether the note is removed when clicked
* @property {Function} onClick - callback function invoked when the note is clicked
*/
class Seal extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			exit: false
		};
	}

	curvedText = ( txt, size, arc, offset ) => {
		txt = txt.split( '' );
		const deg = arc / (txt.length-1);
		let origin = 184 - (arc/2)*-1;
		origin -= offset;
		const lines = [];

		const radius = size/2;
		txt.forEach( ( ea, idx ) => {
			const sin = sinDegrees( origin );
			const cos = cosDegrees( origin );
			const left = ( radius * sin ) + radius + DIFF;
			const top = ( radius * cos ) + radius;

			let rotation = origin*-1 - 180;
			rotation = 'rotate(' + rotation + 'deg)';
			const style = {
				position: 'absolute',
				left: left,
				top: top,
				transformOrigin: '0% 0%',
				transform: rotation
			};
			lines.push( <p key={idx} style={style}>{ea}</p> );
			origin -= deg;
		});
		return lines;
	}

	curvedInvertedText = ( txt, size, arc, offset ) => {
		txt = txt.split('');
		const deg = arc / (txt.length-1);
		let origin = 0 - (arc/2);
		const lines = [];
		const radius = size/2;

		txt.forEach( ( ea, idx ) => {
			const sin = sinDegrees( origin );
			const cos = cosDegrees( origin );
			const left = ( radius * sin ) + radius + DIFF;
			const top = ( radius * cos ) + radius;

			let rotation = origin*-1;
			rotation = 'rotate(' + rotation + 'deg)';
			const style = {
				position: 'absolute',
				left: left,
				top: top,
				transformOrigin: '50% 50%',
				transform: rotation
			};
			lines.push( <p key={idx} style={style}>{ea}</p> );
			origin += deg;
		});
		return lines;
	}

	getUpperLine = () => {
		const curvedText = this.curvedText( this.props.upper, 195, this.props.upperArc, 0 );
		return (
			<div>{curvedText}</div>
		);
	}

	getLowerLine = () => {
		const curvedText = this.curvedInvertedText( this.props.lower, 180, this.props.lowerArc, 0 );
		return (
			<div>{curvedText}</div>
		);
	}

	getStyle() {
		const style = this.props.style || {};
		if ( this.props.removable ) {
			if ( this.state.exit ) {
				style.pointerEvents = 'none';
			} else {
				style.cursor = 'pointer';
			}
		}
		if ( !this.props.active ) {
			style.WebkitFilter = 'grayscale(100%)';
			style.filter = 'grayscale(100%)';
			style.opacity = 0.3;
			if ( this.props.scale ) {
				if ( style.transform ) {
					style.transform += 'scale(' + this.props.scale + ')';
				}
				else {
					style.transform = 'scale(' + this.props.scale + ')';
				}
			}
		}
		else {
			style.opacity = 1;
			style.filter = 'grayscale(0%)';
			style.WebkitFilter = 'grayscale(0%)';
			if ( this.props.scale ) {
				if ( style.transform ) {
					style.transform += 'scale(' + this.props.scale + ')';
				}
				else {
					style.transform = 'scale(' + this.props.scale + ')';
				}
			}
		}
		return style;
	}

	triggerClick = () => {
		this.props.onClick();
		if ( this.props.removable ) {
			this.setState({
				exit: true
			});
		}
	}

	render() {
		const style = this.getStyle();
		const innerStyle = this.props.innerStyle;
		let className = 'seal-container';
		if ( this.state.exit ) {
			className += ' seal-exit';
		}
		return (
			<div
				role="button" tabIndex={0}
				onClick={this.triggerClick}
				onKeyPress={this.triggerClick}
				style={style}
				className={className}
			>
				<div className="seal-outer-border" />
				<div className="seal-fine-border" />
				<div style={innerStyle} className="seal-inner-circle" />
				{ !this.props.noOrnaments ? <div className="seal-logo" /> : null }
				{ !this.props.noOrnaments ? <div className="seal-lower-logo" /> : null }
				<div className="seal-wrapper">
					<div className="seal-title">{this.props.title}</div>
				</div>
				<div className="seal-lower-line">{this.getLowerLine()}</div>
				<div className="seal-upper">{this.getUpperLine()}</div>
			</div>
		);
	}
}


// PROPERTIES //

Seal.propTypes = {
	active: PropTypes.bool,
	onClick: PropTypes.func,
	scale: PropTypes.number,
	innerStyle: PropTypes.object,
	lower: PropTypes.string,
	lowerArc: PropTypes.number,
	noOrnaments: PropTypes.bool,
	removable: PropTypes.bool,
	style: PropTypes.object,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	upper: PropTypes.string,
	upperArc: PropTypes.number
};

Seal.defaultProps = {
	active: true,
	onClick() {},
	scale: null,
	lower: 'The lower text',
	lowerArc: 150,
	removable: false,
	style: null,
	innerStyle: {},
	upper: 'The upper text',
	upperArc: 150,
	title: 'Enter a title',
	noOrnaments: false
};


// EXPORTS //

export default withPropCheck( Seal );
