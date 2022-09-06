/* eslint-disable react/no-unused-prop-types */

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


// VARIABLES //

export const SlideContext = React.createContext( 'slide-context' );


// MAIN //

/**
* Spectacle presentation slide.
*
* @property {string} align - space delimited value for positioning interior content. The first value can be flex-start (left), center (middle), or flex-end (bottom). The second value can be flex-start (top) , center (middle), or flex-end (bottom)
* @property {string} bgImage - sets the specified background image
* @property {string} bgColor - sets the slide background to the specified color
* @property {number} bgDarken - number between 0 and 1 specifying how much to darken the background image
* @property {number} bgLighten - number between 0 and 1 specifying how much to lighten the background image
* @property {string} controlColor - overrides the color of the control arrows for the current slide
* @property {string} progressColor - overrides the color of the progress elements for the current slide
* @property {string} notes - presenter mode notes (alternatively they can be wrapped in a <SlideNotes> tag)
* @property {number} duration - slide duration displayed in presenter mode
* @property {Array<string>} transition - slide transition(s). Can be either `slide`, `zoom`, `fade`, or `spin` (or a combination)
* @property {number} transitionDuration - slide transition duration in milliseconds (defaults to global presentation setting)
* @property {Array<string>} transitionIn - slide transition when the slide comes into view (can take same values as `transition`)
* @property {Array<string>} transitionOut -slide transition when the slide exits the view (can take same values as `transition`)
* @property {number} margin - margin around slide (in px)
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Object} presenterStyle - CSS styles applied in presenter mode
* @property {Object} contentStyles - CSS inline styles passed to the slide contents
* @property {Function} onActive - optional callback called with the slide index when the slide comes into view
*/
class Slide extends React.PureComponent {
	constructor() {
		super(...arguments);
		this.stepCounter = stepCounter();
	}

	componentDidMount() {
		const slide = this.slideRef;
		let frags = slide.querySelectorAll( '.fragment' );
		let currentOrder = 0;
		if (frags && frags.length && !this.context.overview) {
			frags = Array.prototype.slice
				.call(frags, 0)
				.sort(
					(lhs, rhs) =>
						parseInt( lhs.dataset.order, 10 ) - parseInt( rhs.dataset.order, 10 )
				);
			frags.forEach( frag => {
					frag.dataset.fid = currentOrder;
					const id = `${this.props.hash}-${currentOrder}`;
					this.context.addFragment({
						className: frag.className || '',
						slide: this.props.hash,
						id,
						animations: Array.from({ length: frag.dataset.animCount }).fill(
							this.props.lastSlideIndex > this.props.slideIndex
						)
					});
					currentOrder += 1;
				});
		}
		if ( isFunction( this.context.onStateChange ) ) {
			this.context.onStateChange( this.props.state );
		}
		if ( isFunction( this.props.onActive ) ) {
			this.props.onActive( this.props.slideIndex );
		}
	}

	componentDidUpdate() {
		const { steps, slideIndex } = this.stepCounter.getSteps();
		const stepFunc = this.props.getAnimStep;
		if ( stepFunc ) {
			if ( slideIndex === this.props.slideIndex ) {
				stepFunc( steps );
			}
		}
	}

	render() {
		const { presenterStyle, children } = this.props;
		const contentClass = isUndefined(this.props.className) ? '' : this.props.className;
		const align = this.props.align;
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
						style={{
							flex: 1,
							maxHeight: this.context.contentHeight || 700,
							maxWidth: this.context.contentWidth || 1000,
							padding: 10,
							width: this.context.overview ? '100%' : 'initial',
							...this.props.contentStyles
						}}
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
	bgImage: null,
	bgColor: null,
	bgDarken: null,
	bgLighten: null,
	controlColor: '#c95d0a',
	progressColor: '#c95d0a',
	notes: null,
	duration: null,
	transition: [],
	transitionDuration: null,
	transitionIn: [],
	transitionOut: [],
	margin: 0,
	className: '',
	presenterStyle: {},
	contentStyles: {},
	style: {},
	onActive() {}
};

Slide.propTypes = {
	align: PropTypes.string,
	bgImage: PropTypes.string,
	bgColor: PropTypes.string,
	bgDarken: PropTypes.number,
	bgLighten: PropTypes.number,
	controlColor: PropTypes.string,
	progressColor: PropTypes.string,
	notes: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	duration: PropTypes.number,
	transition: PropTypes.array,
	transitionDuration: PropTypes.number,
	transitionIn: PropTypes.array,
	transitionOut: PropTypes.array,
	margin: PropTypes.number,
	className: PropTypes.string,
	presenterStyle: PropTypes.object,
	contentStyles: PropTypes.object,
	style: PropTypes.object,
	onActive: PropTypes.func
};

Slide.contextType = SpectacleContext;


// EXPORTS //

export default Slide;
