/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/ResizeObserver.js
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

import ResizeObserver from 'resize-observer-polyfill';
import isNull from '@stdlib/assert/is-null';


// VARIABLES //

let instance = null;

const nodesObserving = new Map();


// FUNCTIONS //

function onResizeObserve(entries) {
	entries.forEach(handleResizeObserverEntry);
}

function handleResizeObserverEntry(entry) {
	const node = entry.target;
	const callbacks = nodesObserving.get(node);
	const executeCallback = cb => cb(entry);
	if ( callbacks ) {
		callbacks.forEach(executeCallback);
	}
}


// EXPORTS //

export function observe(
	node,
	callback
) {
	const el = node;
	const observer = instance || (instance = new ResizeObserver(onResizeObserve));
	if (nodesObserving.has(el)) {
		// Already observing node.
		let callbacks = nodesObserving.get( el );
		if ( isNull( callbacks ) ) {
			throw new Error( 'Encountered an error: callbacks are missing.' );
		}
		callbacks.push(callback);
	} else {
		const callbacks = [callback];
		nodesObserving.set(el, callbacks);
		observer.observe(el);
	}
}

export function unobserve(node, callback) {
	const observer = instance;
	if (!observer) {
		return;
	}
	const el = node;
	observer.unobserve(el);

	if (callback) {
		// Remove the passed in callback from the callbacks of the observed node
		// And, if no more callbacks then stop observing the node
		let callbacks = null;
		if ( nodesObserving.has( el ) ) {
			callbacks = nodesObserving.get( el );
			if ( isNull( callbacks ) ) {
				throw new Error( 'Encountered an error: callbacks are missing.' );
			}
			callbacks = callbacks.filter( cb => cb !== callback );
		}
		if (callbacks && callbacks.length) {
			nodesObserving.set(el, callbacks);
		} else {
			nodesObserving.delete(el);
		}
	} else {
		// Delete all callbacks for the node.
		nodesObserving.delete(el);
	}

	if (!nodesObserving.size) {
		// We have nothing to observe. Stop observing, which stops the
		// ResizeObserver instance from receiving notifications of
		// DOM resizing. Until the observe() method is used again.
		// According to specification a ResizeObserver is deleted by the garbage
		// collector if the target element is deleted.
		observer.disconnect();
		instance = null;
	}
}

export default {
	observe,
	unobserve
};
