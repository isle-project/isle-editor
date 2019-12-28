/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/resolveImage.js
*
* MIT License
*
* Copyright (c) 2019 Chan Zuckerberg Initiative
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

// MODULES //

import url from 'url';
import isOffline from './is_offline.js';


// VARIABLES //

const cache = {};
const queue = [];


// FUNCTIONS //

function processQueue() {
	const bag = queue.shift();
	if ( bag ) {
		processPromise(bag.src, bag.resolve, bag.reject);
	}
}

function processPromise(
	src,
	resolve,
	reject
) {
	const result = {
		complete: false,
		height: 0,
		naturalHeight: 0,
		naturalWidth: 0,
		src: src || '',
		width: 0
	};

	if (isOffline()) {
		resolve(result);
		return;
	}

	const srcStr = src || '';
	if (!srcStr) {
		resolve(result);
		return;
	} else if (cache[srcStr]) {
		const cachedResult = Object.assign({}, cache[srcStr]);
		resolve(cachedResult);
		return;
	}
	const parsedURL = url.parse( srcStr );
	const { protocol, port } = parsedURL;
	if (
		!/(http:|https:|data:)/.test(protocol || window.location.protocol) ||
		port
	) {
		resolve(result);
		return;
	}

	let img;
	const onLoad = () => {
		if ( img ) {
			result.width = img.width;
			result.height = img.height;
			result.naturalWidth = img.width;
			result.naturalHeight = img.height;
			result.complete = true;
		}
		resolve( result );
		dispose();
		cache[srcStr] = { ...result };
	};

	const onError = () => {
		resolve( result );
		dispose();
	};

	function dispose() {
		if (img) {
			if (img instanceof HTMLElement) {
				const pe = img.parentNode;
				if ( pe ) {
					pe.removeChild(img);
				}
			}
			img.onload = null;
			img.onerror = null;
			img = null;
		}
		processQueue();
	}
	const { body } = document;
	if ( body ) {
		img = document.createElement('img');
		img.style.cssText =
			'position:fixed;left:-10000000000px;width:auto;height:auto;';
		img.onload = onLoad;
		img.onerror = onError;
		img.src = srcStr;
		body.appendChild(img);
	} else {
		img = new Image();
		img.onload = onLoad;
		img.onerror = onError;
		img.src = srcStr;
	}
}


// MAIN //

function resolveImage( src ) {
	return new Promise((resolve, reject) => {
		const bag = { src, resolve, reject };
		queue.push( bag );
		processQueue();
	});
}


// EXPORTS //

export default resolveImage;
