/* eslint-disable react/require-default-props, react/no-unused-prop-types */

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

import React from 'react';
import PropTypes from 'prop-types';
import isUndefined from '@stdlib/assert/is-undefined';
import isFunction from '@stdlib/assert/is-function';
import { getStyles } from './../../utils/base';
import stepCounter from './../../utils/step-counter';
import { SpectacleContext } from './../../utils/context';
import './slide.css';


// MAIN //

export const SlideContext = React.createContext( 'slide-context' );

class Slide extends React.PureComponent {
	constructor() {
		super(...arguments);
		this.stepCounter = stepCounter();
	}

	componentDidMount() {
		const slide = this.slideRef;
		const frags = slide.querySelectorAll('.fragment');
		let currentOrder = 0;
		if (frags && frags.length && !this.context.overview) {
			Array.prototype.slice
				.call(frags, 0)
				.sort(
					(lhs, rhs) =>
						parseInt(lhs.dataset.order, 10) - parseInt(rhs.dataset.order, 10)
				)
				.forEach(frag => {
					frag.dataset.fid = currentOrder;
					if ( this.props.addFragment ) {
						this.props.addFragment({
							className: frag.className || '',
							slide: this.props.hash,
							id: `${this.props.hash}-${currentOrder}`,
							animations: Array.from({ length: frag.dataset.animCount }).fill(
								this.props.lastSlideIndex > this.props.slideIndex
							)
						});
					}
					currentOrder += 1;
				});
		}

		this.context.onStateChange( this.props.state );
		if ( isFunction( this.props.onActive ) ) {
			this.props.onActive( this.props.slideIndex );
		}
	}

	componentDidUpdate() {
		const { steps, slideIndex } = this.stepCounter.getSteps();
		const stepFunc = this.props.getAnimStep;
		if (stepFunc) {
			if (slideIndex === this.props.slideIndex) {
				stepFunc(steps);
			}
		}
	}

	render() {
		const { presenterStyle, children } = this.props;
		const contentClass = isUndefined(this.props.className) ? '' : this.props.className;
		const align = this.props.align;
		const background = this.context.styles.global.body.background;

		const slideContext = {
			slideHash: this.props.hash,
			stepCounter: {
				setFragments: this.stepCounter.setFragments
			},
			...this.context
		};
		return (
			<div
				className="spectacle-slide-container"
				ref={s => {
					this.slideRef = s;
				}}
				style={{
					backgroundColor: background ? background : '',
					...this.props.style,
					...getStyles.call( this ),
					...presenterStyle
				}}
			>
				<div
					className="spectacle-slide-wrapper"
					style={{
						alignItems: align ? align.split(' ')[1] : 'center',
						justifyContent: align ? align.split(' ')[0] : 'center',
						flexDirection: this.context.overview ? 'column' : 'inherit'
					}}
				>
					<div
						ref={c => {
							this.contentRef = c;
						}}
						className={`${contentClass} spectacle-content`}
						margin={this.props.margin}
						style={{
							flex: 1,
							maxHeight: this.context.contentHeight || 700,
							maxWidth: this.context.contentWidth || 1000,
							padding: 10,
							width: this.context.overview ? '100%' : 'initial',
							...(this.props.contentStyles || {})
						}}
						styles={{ context: this.context.styles.components.content }}
					>
						<SlideContext.Provider value={slideContext} >
							{children}
						</SlideContext.Provider>
					</div>
				</div>
			</div>
		);
	}
}


// PROPERTIES //

Slide.defaultProps = {
	align: 'center center',
	presenterStyle: {},
	style: {},
	viewerScaleMode: false
};

Slide.propTypes = {
	align: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	contentStyles: PropTypes.object,
	export: PropTypes.bool,
	getAnimStep: PropTypes.func,
	hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lastSlideIndex: PropTypes.number,
	margin: PropTypes.number,
	notes: PropTypes.any,
	onActive: PropTypes.func,
	presenterStyle: PropTypes.object,
	slideIndex: PropTypes.number,
	slideReference: PropTypes.array,
	state: PropTypes.string,
	style: PropTypes.object,
	transition: PropTypes.array,
	transitionDuration: PropTypes.number,
	transitionIn: PropTypes.array,
	transitionOut: PropTypes.array,
	viewerScaleMode: PropTypes.bool
};

Slide.contextType = SpectacleContext;


// EXPORTS //

export default Slide;
