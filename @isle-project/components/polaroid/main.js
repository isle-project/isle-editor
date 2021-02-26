// MODULES //

import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDraggable from 'react-draggable';
import { withPropCheck } from 'utils/prop-check';
import './polaroid.css';


// MAIN //

/**
* A component displaying an image in the style of a polaroid.
*
* @property {string} image - the URL of the image to be displayed in the polaroid frame
* @property {boolean} draggable - controls whether one can drag the polaroid around the screen
* @property {Function} onClick - event handler invoked when image is clicked (receives the id of the Polaroid as parameter)
* @property {boolean} showPin - controls whether to show a pin
* @property {boolean} stain - controls whether to show a coffee stain
* @property {number} width - polaroid width (in px)
* @property {Object} style - CSS inline styles
*/
const Polaroid = ({ image, draggable, id, onClick, showPin, stain, width, style }) => {
	const [ touched, setTouched ] = useState( false );
	const [ dimensions, setDimensions ] = useState({
		height: '100%',
		width: 'auto'
	});
	const touch = useCallback( () => {
		setTouched( true );
	}, [] );
	const untouch = useCallback( () => {
		setTouched( false );
	}, [] );
	const trigger = useCallback( () => {
		if ( onClick ) {
			onClick( id );
		}
	}, [ id, onClick ] );
	const setFormat = useCallback( ( type ) => {
		let width = '100%';
		let height = 'auto';
		if ( type === 'wide' ) {
			width = 'auto';
			height = '100%';
		}
		setDimensions({
			width: width,
			height: height
		});
	}, [] );

	useEffect( () => {
		if ( image ) {
			const imageElem = new Image();
			imageElem.src = image;
			imageElem.onload = function loadImage() {
				if ( this.height > this.width ) {
					setFormat( 'high' );
				} else {
					setFormat( 'wide' );
				}
			};
		}
	}, [ image, setFormat ] );
	const background = {
		backgroundImage: 'url(' + image + ')',
		backgroundSize: dimensions.width + ' ' + dimensions.height,
		backgroundPosition: 'center'
	};
	let imageClass = 'polaroid';
	if ( onClick ) {
		imageClass += ' clickable-polaroid';
	}
	let innerImage = 'polaroid-image';
	if ( touched === true ) {
		innerImage = 'polaroid-image polaroid-touched';
	}
	const divStyle = {
		...style
	};
	divStyle.width = width;
	divStyle.height = divStyle.width * 1.10;
	const out = <div
		id={id} role="button" tabIndex={0}
		onMouseOver={touch} onFocus={touch}
		onMouseOut={untouch} onBlur={untouch}
		onClick={trigger} onKeyPress={trigger}
		style={divStyle} className={imageClass}
	>
		<div className="polaroid-wrapper" >
			{stain ? <div className="polaroid-stain" /> : null}
			<div style={background} className={innerImage} />
			{showPin ? <div className="polaroid-pin" /> : null}
		</div>
	</div>;
	if ( draggable ) {
		return <ReactDraggable>{out}</ReactDraggable>;
	}
	return out;
};


// PROPERTIES //

Polaroid.propTypes = {
	image: PropTypes.string,
	draggable: PropTypes.bool,
	showPin: PropTypes.bool,
	stain: PropTypes.bool,
	width: PropTypes.number,
	style: PropTypes.object,
	onClick: PropTypes.func
};

Polaroid.defaultProps = {
	image: null,
	draggable: false,
	showPin: false,
	stain: false,
	width: 350,
	style: {},
	onClick: null
};


// EXPORTS //

export default withPropCheck( Polaroid );
