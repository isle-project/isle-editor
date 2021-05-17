/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/bindScrollHandler.js
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

// EXPORTS //

export default function bindScrollHandler(
	target,
	callback
) {
	if ( !target ) {
		return;
	}
	const defaultView = target.ownerDocument.defaultView;
	const els = [];

	let rid = 0;

	let onScroll = () => {
		// Debounce the scroll handler.
		if ( rid ) {
			cancelAnimationFrame( rid );
		}
		rid = requestAnimationFrame(callback);
	};

	let el = target;

	// Scroll event does not bubble, so we need to look up all the scrollable
	// elements.
	while ( el ) {
		const overflow = defaultView.getComputedStyle( el ).overflow;
		if ((onScroll && overflow === 'auto') || overflow === 'scroll') {
			el.addEventListener( 'scroll', onScroll, false );
			els.push(el);
		}
		el = el.parentElement;
	}

	return {
		dispose() {
			while ( onScroll && els.length ) {
				el = els.pop();
				if ( el ) {
					el.removeEventListener( 'scroll', onScroll, false );
				}
			}
			onScroll = null;
			if ( rid ) {
				window.cancelAnimationFrame( rid );
			}
			rid = 0;
		}
	};
}
