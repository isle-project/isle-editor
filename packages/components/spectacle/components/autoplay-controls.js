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


// MAIN //

class AutoplayControls extends Component {
	render() {
		const pauseBtn = (
			<div
				role="button" tabIndex={0}
				className="spectacle-autoplay-button"
				key="pause"
				onClick={this.props.onPause}
				onKeyPress={this.props.onPause}
			>
				<i className="fas fa-pause"></i>
			</div>
		);
		const playBtn = (
			<div
				role="button" tabIndex={0}
				className="spectacle-autoplay-button"
				key="play"
				onClick={this.props.onPlay}
				onKeyPress={this.props.onPlay}
			>
				<i className="fas fa-play"></i>
			</div>
		);
		return this.props.autoplaying ? pauseBtn : playBtn;
	}
}


// PROPERTIES //

AutoplayControls.propTypes = {
	autoplaying: PropTypes.bool,
	onPause: PropTypes.func,
	onPlay: PropTypes.func
};

AutoplayControls.defaultProps = {
	autoplaying: null,
	onPause() {},
	onPlay() {}
};

AutoplayControls.contextType = SpectacleContext;


// EXPORTS //

export default AutoplayControls;
