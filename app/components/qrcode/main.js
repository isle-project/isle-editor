// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import QRCode from 'qrcode';
import isElectron from 'utils/is-electron';


// VARIABLES //

const debug = logger( 'isle:qrcode' );


// MAIN //

/**
* QR Code.
*
* @property {string} text - text to encode in QR code (defaults to lesson URL if not set)
* @property {number} scale - number of pixels per modules (black dots)
* @property {boolean} center - boolean controlling whether to center the QR code
* @property {boolean} showText - boolean determining whether to show the text encoded in the QR code
* @property {Object} style - CSS inline styles
*/
class Qrcode extends Component {
	constructor( props, context ) {
		super( props );
	}

	componentDidMount() {
		this.renderCode();
		if ( !isElectron ) {
			window.addEventListener( 'hashchange', this.handleHashChange );
		}
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.text !== prevProps.text ||
			this.props.scale !== prevProps.scale
		) {
			this.renderCode();
		}
	}

	componentWillUnmount() {
		if ( !isElectron ) {
			window.removeEventListener( 'hashchange', this.handleHashChange );
		}
	}

	handleHashChange = () => {
		if ( !this.props.text ) {
			this.renderCode();
		}
	}

	renderCode() {
		const text = this.props.text || window.location.href;
		debug( `Display '${text}' as QR code...` );
		QRCode.toCanvas( this.canvas, text, {
			scale: this.props.scale
		}, debug );
	}

	render() {
		const canvas = <canvas
			className={`qrcode-canvas ${this.props.center ? 'center' : ''}`}
			width={this.props.width}
			ref={( canvas ) => {
				if ( canvas ) {
					this.canvas = canvas;
				}
			}}
			style={this.props.style}
		/>;
		if ( this.props.showText ) {
			const text = this.props.text || window.location.href;
			return ( <Fragment>
				{canvas}
				<span className="title">{text}</span>
			</Fragment> );
		}
		return canvas;
	}
}


// PROPERTIES //

Qrcode.defaultProps = {
	text: null,
	scale: 8,
	showText: false,
	center: false,
	style: {}
};

Qrcode.propTypes = {
	text: PropTypes.string,
	scale: PropTypes.number,
	showText: PropTypes.bool,
	center: PropTypes.bool,
	style: PropTypes.object
};


// EXPORTS //

export default Qrcode;
