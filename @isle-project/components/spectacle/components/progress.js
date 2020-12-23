/* eslint-disable react/require-default-props */

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

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SpectacleContext } from '../utils/context';


// MAIN //

class Progress extends Component {
	getWidth() {
		return {
			width: `${(100 * this.props.currentSlideIndex) /
				(this.props.items.length - 1)}%`
		};
	}

	getPointPosition(i) {
		return {
			top: '-20px',
			left: `${5 + 20 * (i - this.props.items.length / 2)}px` // eslint-disable-line i18next/no-literal-string
		};
	}

	getPointStyle(i) {
		const style = this.getPointPosition(i);
		if (this.props.currentSlideIndex >= i) {
			style.opacity = 0;
		}

		return style;
	}

	render() {
		const { type, currentSlideIndex, items } = this.props;
		let style = this.context.styles.progress;
		let markup;
		switch (type) {
			case 'none':
				return false;
			case 'number':
				style = style.number;
				markup = (
					<div
						style={{
							color: this.props.progressColor
						}}
					>
						{currentSlideIndex + 1} / {items.length}
					</div>
				);
				break;
			case 'bar':
				style = style.bar;
				markup = (
					<div
						style={{
							...style.bar,
							color: this.props.progressColor,
							width: this.getWidth()
						}}
					/>
				);
				break;
			default:
				return false;
		}
		return (
			<div
				style={{
					...style.container,
					color: this.props.progressColor
				}}
			>
				{markup}
			</div>
		);
	}
}


// PROPERTIES //

Progress.propTypes = {
	currentSlideIndex: PropTypes.number,
	items: PropTypes.array,
	progressColor: PropTypes.string,
	type: PropTypes.oneOf(['bar', 'number', 'none'])
};

Progress.contextType = SpectacleContext;


// EXPORTS //

export default Progress;
