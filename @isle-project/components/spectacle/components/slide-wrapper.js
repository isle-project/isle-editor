/* eslint-disable no-invalid-this, max-statements, react/require-default-props, react/no-unused-prop-types */

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
import Transition from 'react-transition-group/Transition';
import isFunction from '@stdlib/assert/is-function';
import { VictoryAnimation } from 'victory';
import findIndex from 'lodash/findIndex';
import { SpectacleContext } from '../utils/context';


// MAIN //

class SlideWrapper extends React.PureComponent {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			reverse: false,
			transitioning: true,
			z: 1
		};
	}

	componentWillEnter = ( callback ) => {
		this.setState({ transitioning: false, reverse: false, z: 1 });
	};

	componentWillLeave = ( callback ) => {
		this.setState({ transitioning: true, reverse: true, z: '' });
	};

	transitionDirection = () => {
		const { slideIndex, lastSlideIndex } = this.props;
		const routeSlideIndex = this.getRouteSlideIndex();
		return this.state.reverse ?
			slideIndex > routeSlideIndex :
			slideIndex > lastSlideIndex;
	};

	getTransitionKeys = () => {
		const {
			props: {
				transition = [],
				transitionIn = [],
				transitionOut = []
			},
			state: { reverse }
		} = this;
		if ( reverse && transitionOut.length > 0 ) {
			return transitionOut;
		} else if ( transitionIn.length > 0 ) {
			return transitionIn;
		}
		return transition;
	};

	// eslint-disable-next-line
	getTransitionStyles = () => {
		const { transitioning, z } = this.state;
		const transition = this.getTransitionKeys();
		let styles = { zIndex: z };
		let transformValue = '';

		if ( transition.indexOf('fade') !== -1 ) {
			styles = { ...styles, opacity: transitioning ? 0 : 1 };
		}
		if ( transition.indexOf('zoom') !== -1 ) {
			transformValue += ` scale(${transitioning ? 0.1 : 1.0})`; // eslint-disable-line i18next/no-literal-string
		}
		if ( transition.indexOf('slide') !== -1 ) {
			const offset = this.transitionDirection() ? 100 : -100;
			transformValue += ` translate3d(${transitioning ? offset : 0}%, 0, 0)`; // eslint-disable-line i18next/no-literal-string
		} else {
			transformValue += ' translate3d(0px, 0px, 0px)';
		}

		if (transition.indexOf('spin') !== -1) {
			const angle = this.transitionDirection() ? 90 : -90;
			transformValue += ` rotateY(${transitioning ? angle : 0}deg)`; // eslint-disable-line i18next/no-literal-string
		}
		const functionStyles = transition.reduce((memo, current) => {
			if ( isFunction( current ) ) {
				return {
					...memo,
					...current(transitioning, this.transitionDirection())
				};
			}
			return memo;
		}, {});
		const out = { ...styles, transform: transformValue, ...functionStyles };
		return out;
	};

	getRouteSlideIndex = () => {
		const { slideReference } = this.props;
		const { slide } = this.context.route;
		const slideIndex = findIndex(slideReference, reference => {
			return slide === String(reference.id);
		});
		return Math.max(0, slideIndex);
	};

	render() {
		const { children, transitionDuration } = this.props;
		document.documentElement.style.fontSize = `${16 * this.state.zoom}px`; // eslint-disable-line i18next/no-literal-string
		return (
			<Transition
				{...this.props}
				onEnter={this.componentWillEnter}
				onExit={this.componentWillLeave}
				timeout={transitionDuration || 300}
			>
				{ transitionState => {
					return ( <VictoryAnimation
						data={this.getTransitionStyles()}
						duration={transitionDuration}
						easing="quadInOut"
					>
						{( tweenedProps, animationInfo ) => {
							return ( <div
								style={{
									...tweenedProps,
									transformOrigin: 'center center',
									position: this.props.export ? 'relative' : 'absolute',
									top: 0,
									left: 0,
									width: '100%',
									height: '100%',
									display: 'flex',
									overflow: 'hidden'
								}}
							>
								{children}
							</div> );
						}}
					</VictoryAnimation> );
				}}
			</Transition>
		);
	}
}


// PROPERTIES //

SlideWrapper.defaultProps = {
	align: 'center center',
	presenterStyle: {},
	style: {}
};

SlideWrapper.propTypes = {
	align: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	export: PropTypes.bool,
	getAnimStep: PropTypes.func,
	getAppearStep: PropTypes.func,
	hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	lastSlideIndex: PropTypes.number,
	margin: PropTypes.number,
	notes: PropTypes.any,
	onActive: PropTypes.func,
	presenterStyle: PropTypes.object,
	print: PropTypes.bool,
	slideIndex: PropTypes.number,
	slideReference: PropTypes.array,
	style: PropTypes.object,
	transition: PropTypes.array,
	transitionDuration: PropTypes.number,
	transitionIn: PropTypes.array,
	transitionOut: PropTypes.array
};

SlideWrapper.contextType = SpectacleContext;

export default SlideWrapper;
