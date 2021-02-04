// MODULES //

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import contains from '@stdlib/assert/contains';
import './shaped-form.css';


// VARIABLES //

const AVAILABLE_FORMS = [
	'octagon', 'triangle', 'trapezoid', 'parallelogram', 'rhombus', 'pentagon', 'hexagon',
	'heptagon', 'nonagon', 'decagon', 'bevel', 'rabbet', 'left-arrow', 'right-arrow',
	'left-point', 'right-point', 'left-chevron', 'right-chevron', 'star', 'cross',
	'message', 'close', 'frame'
];


// FUNCTIONS //

const polygonStyle = ( type ) => {
	const polygon = 'var(--cp-' + type + ')';
	const style = {
		webkitClipPath: polygon,
		clipPath: polygon,
		shapeOutside: polygon
	};
	return style;
};


// MAIN //

/* eslint-disable spellcheck/spell-checker */

/**
* A component that allows the display of shapes, triggered by images with alpha channel
*
* @property {string} type - form type (either `octagon`, `triangle`, `trapezoid`, `parallelogram`, `rhombus`, `pentagon`, `hexagon`, `heptagon`, `nonagon`, `decagon`, `bevel`, `rabbet`, `left-arrow`, `right-arrow`, `left-point`, `right-point`, `left-chevron`, `right-chevron`, `star`, `cross`, `message`, `close`, or `frame`)
* @property {string} src - the background image URL
* @property {Object} style - the style of the object, it can hold any CSS including animations
* @property {Function} onClick - event handler invoked when image is clicked
*/
const ShapedForm = ({ children, type, src, style, onClick }) => {
	const [ loaded, setLoaded ] = useState( false );
	const { t } = useTranslation( 'General' );

	useEffect( () => {
		if ( !src ) {
			setLoaded( true );
		} else if ( type ) {
			const image = new Image();
			if ( image ) {
				image.src = image;
			}
			image.onload = () => {
				setLoaded( true );
			};
		}
	}, [ src, type ]);

	if ( type && !contains( AVAILABLE_FORMS, type ) ) {
		return <Alert variant="danger">{t('expected-value-from-list', { field: 'type', list: '`'+AVAILABLE_FORMS.join( '`, `')+'`' })}</Alert>;
	}
	if ( !loaded ) {
		return null;
	}
	const computedStyle = {
		...polygonStyle( type ),
		...style
	};
	if ( src ) {
		if ( contains( src, '.svg' ) ) {
			computedStyle.shapeOutside = 'url(' + src + ')';
			computedStyle.webkitClipPath = 'url(' + src + ')';
			computedStyle.clipPath = 'url(' + src + ')';
			computedStyle.backgroundImage = 'url(' + src + ')';
		}
		else {
			computedStyle.backgroundImage = 'url(' + src + ')';
		}
		if ( !computedStyle.backgroundSize ) {
			computedStyle.backgroundSize = '100% 100%';
		}
	}
	return (
		<div
			role="button"
			tabIndex={0} onKeyPress={onClick}
			onClick={onClick} style={computedStyle}
			className="shaped-form"
		>
			{children}
		</div>
	);
};


// PROPERTIES //

ShapedForm.propTypes = {
	type: PropTypes.string,
	src: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func
};

ShapedForm.defaultProps = {
	type: 'star',
	src: null,
	style: {},
	onClick: null
};


// EXPORTS //

export default ShapedForm;
