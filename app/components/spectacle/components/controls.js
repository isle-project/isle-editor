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
import './controls.css';


// MAIN //

class Controls extends Component {
	constructor() {
		super(...arguments);
	}

	resolveFillStyle = ( name ) => {
		let color;
		const { controlColor } = this.props;
		if ( controlColor ) {
			if (!hasOwnProperty(this.context.styles.colors, controlColor)) {
				color = controlColor;
			} else {
				color = this.context.styles.colors[controlColor];
			}
			return {
				fill: color
			};
		}
		return this.context.styles.controls[name];
	}

	render() {
		return (
			<div>
				{this.props.currentSlideIndex !== 0 && (
					<button
						type="button"
						key="prev"
						aria-label="Previous slide"
						onClick={this.props.onPrev}
						className="spectacle-previous-slide"
					>
						<svg
							key="prevIcon"
							style={this.resolveFillStyle('prevIcon')}
							width="32px"
							height="32px"
							viewBox="0 0 512 828.586"
							role="presentation"
							focusable="false"
						>
							<path d="M512,97.707L414.293,0L0,414.293l414.293,414.293L512,730.88L195.414,414.293L512,97.707z" />
						</svg>
					</button>
				)}
				{this.props.currentSlideIndex < this.props.totalSlides - 1 && (
					<button
						type="button"
						key="next"
						aria-label="Next slide"
						onClick={this.props.onNext}
						className="spectacle-next-slide"
					>
						<svg
							key="nextIcon"
							style={this.resolveFillStyle('nextIcon')}
							width="32px"
							height="32px"
							viewBox="0 0 512 828.586"
							role="presentation"
							focusable="false"
						>
							<path d="M97.707,0L0,97.707l316.586,316.586L0,730.88l97.707,97.706L512,414.293L97.707,0z" />
						</svg>
					</button>
				)}
			</div>
		);
	}
}


// PROPERTIES //

Controls.propTypes = {
	controlColor: PropTypes.string,
	currentSlideIndex: PropTypes.number,
	onNext: PropTypes.func,
	onPrev: PropTypes.func,
	totalSlides: PropTypes.number
};

Controls.defaultProps = {
	controlColor: null,
	currentSlideIndex: null,
	onNext: null,
	onPrev: null,
	totalSlides: null
};

Controls.contextType = SpectacleContext;


// EXPORTS //

export default Controls;
