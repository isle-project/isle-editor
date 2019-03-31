// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* A component that allows the display of shapes, triggered by images with alpha channel
*
* @property {bool} background - if set the component can hold and display child elements
* @property {string} src - the image url
* @property {number} margin - the margin in regards to the floating text, in pixels. Default: 10
* @property {Object} style - the style of the object, it can hold any css including animations
* @property {number} threshold - alpha threshold, number between 0 and 1
* @property {Function} onClick - event handler invoked when image is clicked
*/
class ShapedImage extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		const self = this;
		if ( this.props.src ) {
			const image = new Image();
			image.src = this.props.src;
			image.onload = function loadImage() {
				self.setState({
					loaded: true,
					width: image.width,
					height: image.height
				});
			};
		}
	}

	getDimensions(style) {
		if (!style.width && !style.height) {
			style.width = this.state.width;
			style.height = this.state.height;
		}

		let ratio = this.state.width / this.state.height;

		if (style.width) {
			style.height = style.width / ratio;
		}

		if (style.height && !style.width) {
			style.width = style.height * ratio;
		}
	}

	render() {
		let url = 'url(' + this.props.src + ')';
		let cursor = null;
		if (this.props.onClick) {
			cursor = 'pointer';
		}

		let style= {
			float: 'left',
			shapeImageThreshold: this.props.threshold,
			shapeMargin: this.props.margin,
			shapeOutside: url,
			cursor: cursor,
			overflow: 'hidden'
		};

		Object.assign(style, this.props.style);

		if (this.props.background) {
			style.backgroundImage = url;
			style.backgroundSize = '100% auto';
		}

		if (this.state.loaded === false) {
			return null;
		}

		this.getDimensions(style);

		if (this.props.background) {
			return (
				<div style={style}>
					{ this.props.children };
				</div>
			);
		}

		return (
			<img onClick={this.props.onClick} style={style} src={this.props.src} />
		);
	}
}


// PROPERTIES //

ShapedImage.propTypes = {
	background: PropTypes.bool,
	margin: PropTypes.number,
	onClick: PropTypes.func,
	src: PropTypes.string,
	style: PropTypes.object,
	threshold: PropTypes.number
};

ShapedImage.defaultProps = {
	background: false,
	src: '',
	margin: 10,
	threshold: 1,
	style: {},
	onClick: null
};


// EXPORTS //

export default ShapedImage;
