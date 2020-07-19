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
import Anim from './../anim';


// MAIN /

class Appear extends Component {
	render() {
		const {
			transitionDuration,
			startValue,
			endValue,
			easing,
			style
		} = this.props;
		return (
			<Anim
				{...this.props}
				transitionDuration={transitionDuration}
				fromStyle={startValue}
				toStyle={[endValue]}
				easing={easing}
				style={style}
			>
				{this.props.children}
			</Anim>
		);
	}
}


// PROPERTIES //

Appear.defaultProps = {
	transitionDuration: 300,
	startValue: { opacity: 0, pointerEvents: 'none' },
	endValue: { opacity: 1, pointerEvents: 'auto' },
	easing: 'quadInOut'
};

Appear.propTypes = {
	children: PropTypes.node,
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
	]),
	endValue: PropTypes.object,
	fragment: PropTypes.object,
	order: PropTypes.number,
	startValue: PropTypes.object,
	style: PropTypes.object,
	transitionDuration: PropTypes.number
};


// EXPORTS //

export default Appear;
