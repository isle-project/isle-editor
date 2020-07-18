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

const timeCounter = time => {
	let hours = Math.floor(time / 3600);
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;

	const areHours = hours > 0;
	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	const noHrTime = `${minutes} : ${seconds}`;
	const hrTime = `${hours} : ${noHrTime}`;
	return areHours ? hrTime : noHrTime;
};

export default class Timer extends Component {
	constructor() {
		super(...arguments);
		this.handleStartTimer = this.handleStartTimer.bind(this);
		this.handleStopTimer = this.handleStopTimer.bind(this);
		this.handleResetTimer = this.handleResetTimer.bind(this);
		this.state = {
			elapsedTime: 0,
			paused: true
		};
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	handleStartTimer() {
		this.setState({
			paused: false
		});
		this.interval = setInterval(() => {
			this.setState({
				elapsedTime: this.state.elapsedTime + 1
			});
		}, 1000);
	}

	handleStopTimer() {
		this.setState({
			paused: true
		});
		clearInterval(this.interval);
	}

	handleResetTimer() {
		this.handleStopTimer();
		this.setState({
			elapsedTime: 0
		});
	}

	_renderResetButton() {
		return <button className="spectacle-tsingle-button" onClick={this.handleResetTimer}>Reset</button>;
	}

	_renderStartButton() {
		return (
			<button className="spectacle-tsingle-button" onClick={this.handleStartTimer} start>
				Start
			</button>
		);
	}

	_renderStopButton() {
		return (
			<button className="spectacle-tsingle-button" onClick={this.handleStopTimer} stop>
				Stop
			</button>
		);
	}

	render() {
		return (
			<div>
				<div className="spectacle-timer-header" >
					{timeCounter(this.state.elapsedTime)}
				</div>
				<div className="spectacle-tbutton-container" >
					{this.state.elapsedTime !== 0 && this.state.paused ?
						this._renderResetButton() :
						null
					}
					{this.state.paused ?
						this._renderStartButton() :
						this._renderStopButton()
					}
				</div>
			</div>
		);
	}
}
