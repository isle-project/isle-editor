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

/* eslint-disable react/no-did-mount-set-state */

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import findKey from 'lodash/findKey';
import hasOwnProperty from '@stdlib/assert/has-own-property';
import { VictoryAnimation } from 'victory';
import { SlideContext } from './slide/main';


// MAIN //

class Anim extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			activeAnimation: -1
		};
	}

	componentDidMount() {
		const route = this.context.route;
		const shouldDisableAnimation =
			route.params.indexOf('export') !== -1 ||
			route.params.indexOf('overview') !== -1 ||
			route.params.indexOf('notes') !== -1;

		if ( shouldDisableAnimation ) {
			this.setState({ activeAnimation: this.props.toStyle.length - 1 });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const route = this.context.route;
		const shouldDisableAnimation =
			route.params.indexOf('export') !== -1 ||
			route.params.indexOf('overview') !== -1 ||
			route.params.indexOf('notes') !== -1;

		if ( shouldDisableAnimation ) {
			this.disableAnimation();
		}
		const animationStatus = this.getAnimationStatus();
		if ( animationStatus ) {
			const nextAnimation = animationStatus.every(a => a === true) ?
				animationStatus.length - 1 : animationStatus.indexOf(false) - 1;
			if (prevState.activeAnimation !== nextAnimation) {
				const { slide } = route;
				this.context.stepCounter.setFragments( this.context.fragments[ slide ], slide );
				if (prevProps.onAnim) {
					const forward = prevState.activeAnimation < nextAnimation;
					prevProps.onAnim(forward, nextAnimation);
				}
				this.updateAnimation(nextAnimation);
			}
		}
	}

	disableAnimation = () => {
		if (this.state.activeAnimation !== this.props.toStyle.length - 1) {
			this.setState({ activeAnimation: this.props.toStyle.length - 1 });
		}
	};

	updateAnimation = nextAnimation => {
		if (this.state.activeAnimation !== nextAnimation) {
			this.setState({
				activeAnimation: nextAnimation
			});
		}
	};

	getAnimationStatus = () => {
		const fragments = this.context.fragments;
		const { slide } = this.context.route;
		const fragment = findDOMNode( this.fragmentRef );
		if ( !fragment ) {
			return null;
		}
		const key = findKey(fragments[slide], {
			id: `${this.context.slideHash}-${parseInt(fragment.dataset.fid, 10)}`
		});
		if (
			slide in fragments &&
			hasOwnProperty( fragments[slide], key )
		) {
			return fragments[slide][key].animations;
		}
		return null;
	};

	render() {
		const {
			children,
			fromStyle,
			toStyle,
			transitionDuration,
			easing,
			style
		} = this.props;
		const child = React.Children.only( children );
		const tweenData = this.state.activeAnimation === -1 ?
			fromStyle : toStyle[this.state.activeAnimation];
		return (
			<VictoryAnimation
				data={tweenData}
				duration={transitionDuration}
				easing={easing}
			>
				{tweenStyle =>
					React.cloneElement( child, {
						className: `fragment ${child.props.className || ''}`.trim(),
						style: { ...child.props.style, ...style, ...tweenStyle },
						ref: f => {
							if ( !this.fragmentRef ) {
								this.fragmentRef = f;
								const order = this.props.order;
								const node = findDOMNode( this.fragmentRef );
								if ( node ) {
									if ( !node.dataset ) {
										node.dataset = {};
									}
									node.dataset.order = Number( order );
									node.dataset.animCount = this.props.toStyle.length;
								}
							}
						}
					})
				}
			</VictoryAnimation>
		);
	}
}


// PROPERTIES //

Anim.defaultProps = {
	order: 0
};

Anim.propTypes = {
	easing: PropTypes.oneOf([
		'back',
		'backIn',
		'backOut',
		'backInOut',
		'bounce',
		'bounceIn',
		'bounceOut',
		'bounceInOut',
		'circle',
		'circleIn',
		'circleOut',
		'circleInOut',
		'linear',
		'linearIn',
		'linearOut',
		'linearInOut',
		'cubic',
		'cubicIn',
		'cubicOut',
		'cubicInOut',
		'elastic',
		'elasticIn',
		'elasticOut',
		'elasticInOut',
		'exp',
		'expIn',
		'expOut',
		'expInOut',
		'poly',
		'polyIn',
		'polyOut',
		'polyInOut',
		'quad',
		'quadIn',
		'quadOut',
		'quadInOut',
		'sin',
		'sinIn',
		'sinOut',
		'sinInOut'
	]).isRequired,
	fromStyle: PropTypes.object.isRequired,
	onAnim: PropTypes.func,
	order: PropTypes.number,
	style: PropTypes.object,
	toStyle: PropTypes.arrayOf(PropTypes.object).isRequired,
	transitionDuration: PropTypes.number.isRequired
};

Anim.contextType = SlideContext;


// EXPORTS //

export default Anim;
