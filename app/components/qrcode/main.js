// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import QRCode from 'qrcode';


// VARIABLES //

const debug = logger( 'isle:qrcode' );


// MAIN //

/**
* QR Code.
*
* @property {string} text - text to encode in QR code (defaults to lesson URL if not set)
* @property {number} scale - number of pixels per modules (black dots)
* @property {boolean} center - boolean controlling whether to center the QR code
* @property {Object} style - CSS inline styles
*/
class Qrcode extends Component {
	constructor( props, context ) {
		super( props );
	}

	componentDidMount() {
		this.renderCode();
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.text !== prevProps.text ||
			this.props.scale !== prevProps.scale
		) {
			this.renderCode();
		}
	}

	renderCode() {
		const text = this.props.text || window.location.href;
		QRCode.toCanvas( this.canvas, text, {
			scale: this.props.scale
		}, debug );
	}

	render() {
		return ( <canvas
			className={`qrcode-canvas ${this.props.center ? 'center' : ''}`}
			width={this.props.width}
			ref={( canvas ) => {
				if ( canvas ) {
					this.canvas = canvas;
				}
			}}
			style={this.props.style}
		/> );
	}
}


// PROPERTIES //

Qrcode.defaultProps = {
	text: null,
	scale: 8,
	center: false,
	style: {}
};

Qrcode.propTypes = {
	text: PropTypes.string,
	scale: PropTypes.number,
	center: PropTypes.bool,
	style: PropTypes.object
};


// EXPORTS //

export default Qrcode;
