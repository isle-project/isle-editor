/*
* The MIT License (MIT)
*
* Copyright (c) 2013-2018 Formidable Labs, Inc.
*
* Copyright (c) 2016-2018 Zachary Maybury, Kylie Stewart, and potentially other
* DefinitelyTyped contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/* eslint max-statements:0,complexity:0,no-invalid-this:0,consistent-return:0 */

// MODULES //

import hasOwnProperty from '@stdlib/assert/has-own-property';


// MAIN //

// eslint-disable-next-line max-params
export const buildStyles = (transforms, props, context, styles = {}) => {
	return transforms.reduce((av, cv) => {
		return { ...av, ...cv(props, context, av) };
	}, styles);
};

const applyMargin = ({ margin }) => (margin ? { margin } : void 0 );
const applyPadding = ({ padding }) => (padding ? { padding } : void 0 );
const applyOverflow = ({ overflow }) => (overflow ? { overflow } : void 0 );
const applyHeight = ({ height }) => (height ? { height } : void 0 );

export const transformTextColor = ({ textColor }, context) => {
	if (textColor) {
		let color = '';
		if (!hasOwnProperty( context.styles.colors, textColor)) {
			color = textColor;
		} else {
			color = context.styles.colors[textColor];
		}
		return { color };
	}
};

export const transformTextFont = ({ textFont }, context) => {
	if (textFont) {
		let fontFamily = '';
		if ( !hasOwnProperty( context.styles.fonts, textFont ) ) {
			fontFamily = textFont;
		} else {
			fontFamily = context.styles.fonts[textFont];
		}
		return { fontFamily };
	}
};

export const transformTextAlign = ({ textAlign }) => {
	if (textAlign) {
		return { textAlign };
	}
};
export function transformTextSize({ textSize }) {
	if (textSize) {
		return { fontSize: textSize };
	}
}
export const transformItalic = ({ italic }) => {
	if (typeof italic === 'boolean') {
		return { fontStyle: italic ? 'italic' : 'normal' };
	}
};

export const transformBold = ({ bold }) => {
	if (typeof bold === 'boolean') {
		return { fontWeight: bold ? 'bold' : 'normal' };
	}
};

export const transformCaps = ({ caps }) => {
	if (typeof caps === 'boolean') {
		return { textTransform: caps ? 'uppercase' : 'none' };
	}
};

export const transformBgColor = ({ bgColor }, context) => {
	if ( bgColor ) {
		let backgroundColor = '';
		if (!hasOwnProperty(context.styles.colors, bgColor)) {
			backgroundColor = bgColor;
		} else {
			backgroundColor = context.styles.colors[bgColor];
		}
		return { backgroundColor };
	}
};

export const transformBgSize = ({ bgImage, bgSize }) => {
	if (bgImage) {
		return { backgroundSize: bgSize || 'cover' };
	}
};

export const transformBgImageByGradient = ({ bgGradient }) => {
	return { backgroundImage: bgGradient };
};

export const transformBgPosition = ({ bgImage, bgPosition }) => {
	if (bgImage) {
		return { backgroundPosition: bgPosition || 'center center' };
	}
};
export const transformBgRepeat = ({ bgImage, bgRepeat }) => {
	if (bgImage) {
		return { backgroundRepeat: bgRepeat };
	}
};
export const transformBgImageByBgStyle = ({ bgImageStyle }) => {
	return { backgroundImage: bgImageStyle };
};
export const transformBgImage = ({
	bgImage,
	bgDarken,
	bgLighten,
	bgImageStyle,
	bgGradient
}) => {
	if (!bgImage && !bgImageStyle && !bgGradient) {
		return;
	}
	if (bgImageStyle) {
		return transformBgImageByBgStyle({ bgImageStyle });
	}
	if (bgGradient) {
		return transformBgImageByGradient({ bgGradient });
	}
	if (bgDarken) {
		return {
			backgroundImage: `linear-gradient( rgba(0, 0, 0, ${bgDarken}), rgba(0, 0, 0, ${bgDarken}) ), url(${bgImage})`
		};
	} else if (bgLighten) {
		return {
			backgroundImage: `linear-gradient( rgba(255, 255, 255, ${bgLighten}), rgba(255, 255, 255, ${bgLighten}) ), url(${bgImage})`
		};
	}
	return { backgroundImage: `url(${bgImage})` };
};

const textTransforms = [
	transformItalic,
	transformBold,
	transformCaps,
	transformTextColor,
	transformTextFont,
	transformTextAlign,
	transformTextSize
];

export const generalTransforms = [
	applyMargin,
	applyPadding,
	applyOverflow,
	applyHeight
];

export const bgTransforms = [
	transformBgColor,
	transformBgImage,
	transformBgRepeat,
	transformBgSize,
	transformBgPosition
];

const styleTransforms = [
	...textTransforms,
	...generalTransforms,
	...bgTransforms
];

export function getStyles() {
	return buildStyles(styleTransforms, this.props, this.context);
}
