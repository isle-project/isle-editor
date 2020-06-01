// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contains from '@stdlib/assert/contains';
import './shaped-form.css';


// VARIABLES //

const forms = [
	'octagon', 'triangle', 'trapezoid', 'parallelogram', 'rhombus', 'pentagon', 'hexagon',
	'heptagon', 'nonagon', 'decagon', 'bevel', 'rabbet', 'left-arrow', 'right-arrow',
	'left-point', 'right-point', 'left-chevron', 'right-chevron', 'star', 'cross',
	'message', 'close', 'frame'
];


// MAIN //

/**
* A component that allows the display of shapes, triggered by images with alpha channel
*
* @property {string} image - the background image url
* @property {string} svg - the svg background image url
* @property {number} margin - the margin in regards to the floating text, in pixels. Default: 10
* @property {Object} style - the style of the object, it can hold any css including animations
* @property {Function} onClick - event handler invoked when image is clicked
*/
class ShapedForm extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			loaded: false
		};
		if ( contains( forms, props.type ) ) {
			this.type = props.type;
			if ( !props.image && !props.svg ) {
				this.state.loaded = true;
			}
		}
	}

	componentDidMount() {
		if ( this.type && this.props.image || this.props.svg ) {
			this.getImage();
		}
	}

	getImage = () => {
		const image = new Image();
		if ( this.props.image ) {
			image.src = this.props.image;
		}
		else {
			image.src = this.props.svg;
		}
		image.onload = () => {
			this.setState({
				loaded: true
			});
		};
	}

	getStyle() {
		const polygon = 'var(--cp-' + this.type + ')';
		const style = {
			webkitClipPath: polygon,
			clipPath: polygon,
			shapeOutside: polygon,
			margin: this.props.margin
		};
		return style;
	}

	render() {
		if ( !this.state.loaded ) {
			return null;
		}
		const style = this.getStyle();
		Object.assign( style, this.props.style );

		if ( this.props.image ) {
			style.backgroundImage = 'url(' + this.props.image + ')';
			if ( !this.props.style.backgroundSize ) {
				style.backgroundSize = '100% 100%';
			}
		}
		if ( this.props.svg ) {
			style.shapeOutside = 'url(' + this.props.svg + ')';
			style.webkitClipPath = 'url(' + this.props.svg + ')';
			style.clipPath = 'url(' + this.props.svg + ')';

			style.backgroundImage = 'url(' + this.props.svg + ')';
			if ( !this.props.style.backgroundSize ) {
				style.backgroundSize = '100% 100%';
			}
		}
		return (
			<div
				role="button" tabIndex={0} onKeyPress={this.props.onClick}
				onClick={this.props.onClick} style={style}
				className="shaped-form"
			>
				{ this.props.children }
			</div>
		);
	}
}


// PROPERTIES //

ShapedForm.propTypes = {
	margin: PropTypes.number,
	onClick: PropTypes.func,
	image: PropTypes.string,
	svg: PropTypes.string,
	style: PropTypes.object
};

ShapedForm.defaultProps = {
	svg: null,
	image: null,
	margin: 10,
	style: {},
	onClick: null
};


// EXPORTS //

export default ShapedForm;
