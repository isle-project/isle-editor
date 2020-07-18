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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './autoplay_button.css';
import { SpectacleContext } from '../utils/context';


export default class AutoplayControls extends Component {
	render() {
		const pauseBtn = (
			<button
				className="spectacle-autoplay-button"
				key="pause"
				onClick={this.props.onPause}
			>
				<svg
					style={this.context.styles.autoplay.pauseIcon}
					xmlns="http://www.w3.org/2000/svg"
					width="30px"
					height="30px"
					viewBox="0 0 30 30"
				>
					<path d="M23.5,4V26h-6V4ZM6.5,26h6V4h-6Z" />
				</svg>
			</button>
		);

		const playBtn = (
			<button
				className="spectacle-autoplay-button"
				key="play"
				onClick={this.props.onPlay}
			>
				<svg
					style={this.context.styles.autoplay.playIcon}
					xmlns="http://www.w3.org/2000/svg"
					width="30px"
					height="30px"
					viewBox="0 0 30 30"
				>
					<path d="M26,15,6,25V5Z" />
				</svg>
			</button>
		);

		return this.props.autoplaying ? pauseBtn : playBtn;
	}
}

AutoplayControls.propTypes = {
	autoplaying: PropTypes.bool,
	onPause: PropTypes.func,
	onPlay: PropTypes.func
};

AutoplayControls.contextType = SpectacleContext;
