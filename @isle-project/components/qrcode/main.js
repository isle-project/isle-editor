// MODULES //

import React, { useEffect } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import QRCode from 'qrcode';
import replace from '@stdlib/string/replace';
import isElectron from '@isle-project/utils/is-electron';
import { withPropCheck } from 'utils/prop-check';
import './qrcode.css';


// VARIABLES //

const debug = logger( 'isle:qrcode' );
const RE_URL = /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*))/g;


// MAIN //

/**
* QR Code.
*
* @property {string} text - text to encode in QR code (defaults to lesson URL if not set)
* @property {number} scale - number of pixels per modules (black dots)
* @property {number} width - width in pixels; takes precedence over `scale` property
* @property {boolean} center - boolean controlling whether to center the QR code
* @property {boolean} showText - boolean determining whether to show the text encoded in the QR code
* @property {Object} style - CSS inline styles
*/
const Qrcode = ({ text, scale, width, center, showText, style }) => {
	let canvasRef;
	useEffect( () => {
		const txt = text || window.location.href;
		debug( `Display '${txt}' as QR code...` );
		QRCode.toCanvas( canvasRef, txt, { scale, width }, debug );

		const handleHashChange = () => {
			if ( !text ) {
				const txt = text || window.location.href;
				debug( `Display '${txt}' as QR code...` );
				QRCode.toCanvas( canvasRef, txt, { scale, width }, debug );
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
	}, [ text, scale, width, canvasRef ] );
	const canvas = <canvas
		className="qrcode-canvas"
		ref={( canvas ) => {
			if ( canvas ) {
				canvasRef = canvas;
			}
		}}
	/>;
	if ( showText ) {
		const divStyle = { ...style };
		if ( center ) {
			divStyle.textAlign = 'center';
		}
		/* eslint-disable react/no-danger */
		return ( <div className={`qrcode-wrapper ${center ? 'center' : ''}`} style={divStyle} >
			{canvas}
			<div dangerouslySetInnerHTML={{
				__html: replace( text || window.location.href, RE_URL, '<a href="$1">$1</a>' )
			}} />
		</div> );
	}
	return ( <div style={style} className={`qrcode-wrapper ${center ? 'center' : ''}`} >
		{canvas}
	</div> );
};


// PROPERTIES //

Qrcode.defaultProps = {
	text: null,
	scale: 8,
	width: null,
	showText: false,
	center: false,
	style: {}
};

Qrcode.propTypes = {
	text: PropTypes.string,
	scale: PropTypes.number,
	width: PropTypes.number,
	showText: PropTypes.bool,
	center: PropTypes.bool,
	style: PropTypes.object
};


// EXPORTS //

export default withPropCheck( Qrcode );
