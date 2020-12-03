// MODULES //

import React, { Fragment, useEffect } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import QRCode from 'qrcode';
import isElectron from '@isle-project/utils/is-electron';


// VARIABLES //

const debug = logger( 'isle:qrcode' );


// MAIN //

/**
* QR Code.
*
* @property {string} text - text to encode in QR code (defaults to lesson URL if not set)
* @property {number} scale - number of pixels per modules (black dots)
* @property {number} width - width in pixels; takes precedence over `scale` property
* @property {number} height - height in pixels; takes precedence over `scale` property
* @property {boolean} center - boolean controlling whether to center the QR code
* @property {boolean} showText - boolean determining whether to show the text encoded in the QR code
* @property {Object} style - CSS inline styles
*/
const Qrcode = ({ text, scale, width, height, center, showText, style }) => {
	let canvasRef;
	useEffect( () => {
		const txt = text || window.location.href;
		debug( `Display '${txt}' as QR code...` );
		QRCode.toCanvas( canvasRef, txt, { scale, width, height }, debug );

		const handleHashChange = () => {
			if ( !text ) {
				const txt = text || window.location.href;
				debug( `Display '${txt}' as QR code...` );
				QRCode.toCanvas( canvasRef, txt, { scale, width, height }, debug );
			}
		};
		if ( !isElectron ) {
			window.addEventListener( 'hashchange', handleHashChange );
		}
		return () => {
			if ( !isElectron ) {
				window.removeEventListener( 'hashchange', handleHashChange );
			}
		};
	}, [ text, scale, width, height, canvasRef ] );
	const canvas = <canvas
		className={`qrcode-canvas ${center ? 'center' : ''}`}
		ref={( canvas ) => {
			if ( canvas ) {
				canvasRef = canvas;
			}
		}}
		style={style}
	/>;
	if ( showText ) {
		const divStyle = {};
		if ( center ) {
			divStyle.textAlign = 'center';
		}
		return ( <Fragment>
			{canvas}
			<div className="title" style={divStyle} >
				{text || window.location.href}
			</div>
		</Fragment> );
	}
	return canvas;
};


// PROPERTIES //

Qrcode.defaultProps = {
	text: null,
	scale: 8,
	width: null,
	height: null,
	showText: false,
	center: false,
	style: {}
};

Qrcode.propTypes = {
	text: PropTypes.string,
	scale: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	showText: PropTypes.bool,
	center: PropTypes.bool,
	style: PropTypes.object
};


// EXPORTS //

export default Qrcode;
