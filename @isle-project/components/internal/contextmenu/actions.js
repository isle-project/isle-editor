/**
* The MIT License (MIT)
*
* Copyright (c) 2015 Vivek Kumar Bansal
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// MODULES //

import { store } from './helpers';


// VARIABLES //

export const MENU_SHOW = 'REACT_CONTEXTMENU_SHOW';
export const MENU_HIDE = 'REACT_CONTEXTMENU_HIDE';


// EXPORTS //

export function dispatchGlobalEvent(eventName, opts, target = window) {
	// Compatible with IE
	// @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
	let event;

	if (typeof window.CustomEvent === 'function') {
		event = new window.CustomEvent(eventName, { detail: opts });
	} else {
		event = document.createEvent('CustomEvent');
		event.initCustomEvent(eventName, false, true, opts);
	}

	if (target) {
		target.dispatchEvent(event);
		Object.assign(store, opts);
	}
}

export function showMenu(opts = {}, target) {
	dispatchGlobalEvent(MENU_SHOW, Object.assign({}, opts, { type: MENU_SHOW }), target);
}

export function hideMenu(opts = {}, target) {
	dispatchGlobalEvent(MENU_HIDE, Object.assign({}, opts, { type: MENU_HIDE }), target);
}
