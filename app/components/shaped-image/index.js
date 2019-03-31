// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* A component that allows the display of shapes, triggered by images with alpha channel
*
* @property {string} src - the image url
* @property {number} margin - the margin in regards to the floating text, in pixels. Default: 10
* @property {Object} style - the style of the object, it can hold any css including animations
* @property {number} threshold - alpha threshold, number between 0 and 1
* @property {Function} onClick - event handler invoked when image is clicked
*/
class ShapedImage extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}


	render() {
		let url = 'url(' + this.props.src + ')';
		let cursor = null;
		if (this.props.onClick) {
			cursor = 'pointer';
		}

		let style= {
			float: 'left',
			width: 'auto',
			height: 'auto',
			shapeImageThreshold: this.props.threshold,
			shapeMargin: this.props.margin,
			shapeOutside: url,
			cursor: cursor
		};

		Object.assign(style, this.props.style);
		console.log(style);

		return (
			<img onClick={this.props.onClick} style={style} src={this.props.src} />
		);
	}
}


// PROPERTIES //

ShapedImage.propTypes = {
	margin: PropTypes.number,
	onClick: PropTypes.func,
	src: PropTypes.string,
	style: PropTypes.object,
	threshold: PropTypes.number
};

ShapedImage.defaultProps = {
	src: '',
	margin: 10,
	threshold: 1,
	style: {},
	onClick: null
};


// EXPORTS //

export default ShapedImage;
