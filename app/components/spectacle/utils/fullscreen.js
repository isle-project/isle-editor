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

// EXPORTS //

export const requestFullscreen = (element = document.documentElement) => {
	const request =
		element.requestFullscreen ||
		element.webkitRequestFullscreen ||
		element.mozRequestFullScreen ||
		element.mozRequestFullScreen;

	if (typeof request === 'function') {
		request.call(element);
	}
};

export const exitFullscreen = () => {
	const exit =
		document.exitFullscreen ||
		document.msExitFullscreen ||
		document.mozCancelFullScreen ||
		document.webkitExitFullscreen;

	if (typeof exit === 'function') {
		exit.call(document);
	}
};

export const getFullscreenElement = () =>
	document.fullscreenElement ||
	document.mozFullScreenElement ||
	document.webkitFullscreenElement ||
	document.msFullscreenElement;

export const isFullscreen = () => !!getFullscreenElement();

export const toggleFullscreen = () => {
	if (isFullscreen()) {
		exitFullscreen();
	} else {
		requestFullscreen(document.documentElement);
	}
};
