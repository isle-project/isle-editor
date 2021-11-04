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

import { MENU_SHOW, MENU_HIDE } from './actions';
import { uniqueId, hasOwnProp, canUseDOM } from './helpers';


// MAIN //

class GlobalEventListener {
	constructor() {
		this.callbacks = {};

		if (canUseDOM) {
			window.addEventListener(MENU_SHOW, this.handleShowEvent);
			window.addEventListener(MENU_HIDE, this.handleHideEvent);
		}
	}

	handleShowEvent = (event) => {
		for (const id in this.callbacks) {
			if (hasOwnProp(this.callbacks, id)) this.callbacks[id].show(event);
		}
	};

	handleHideEvent = (event) => {
		for (const id in this.callbacks) {
			if (hasOwnProp(this.callbacks, id)) this.callbacks[id].hide(event);
		}
	};

	register = (showCallback, hideCallback) => {
		const id = uniqueId();

		this.callbacks[id] = {
			show: showCallback,
			hide: hideCallback
		};

		return id;
	};

	unregister = (id) => {
		if (id && this.callbacks[id]) {
			delete this.callbacks[id];
		}
	};
}


// EXPORTS //

export default new GlobalEventListener();
