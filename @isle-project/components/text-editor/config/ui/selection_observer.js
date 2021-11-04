/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/SelectionObserver.js
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

// VARIABLES //

const EMPTY_SELECTION_VALUE = Object.freeze({
	from: 0,
	to: 0
});


// FUNCTIONS //

function resolveSelectionValue(el) {
	if ( !window.getSelection ) {
		console.warn( 'window.getSelection() is not supported' ); // eslint-disable-line no-console
		return EMPTY_SELECTION_VALUE;
	}
	const selection = window.getSelection();
	if ( !selection.containsNode ) {
		console.warn( 'selection.containsNode() is not supported' ); // eslint-disable-line no-console
		return EMPTY_SELECTION_VALUE;
	}
	if (!selection.rangeCount) {
		return EMPTY_SELECTION_VALUE;
	}
	const range = selection.getRangeAt(0);
	if (!range) {
		return EMPTY_SELECTION_VALUE;
	}

	const { startContainer, endContainer, startOffset, endOffset } = range;
	if (
		startContainer === el ||
		endContainer === el ||
		(startContainer && el.contains(startContainer)) ||
		(endContainer && el.contains(endContainer))
	) {
		return {
			from: startOffset,
			to: endOffset
		};
	}
	return EMPTY_SELECTION_VALUE;
}


// EXPORTS //

export default class SelectionObserver {
	_observables = [];
	_callback = null;

	constructor(callback) {
		this._callback = callback;
	}

	disconnect() {
		this._observables.forEach(obj => {
			const el = obj.target;
			el.removeEventListener('click', this._check, false);
			el.removeEventListener('selectionchange', this._check, false);
		});
		this._observables = [];
	}

	observe(el) {
		if ( !window.getSelection ) {
			console.warn( 'window.getSelection() is not supported' ); // eslint-disable-line no-console
			return;
		}

		if (this._observables.some(obj => obj.target === el)) {
			// Already observed.
			return;
		}
		const obj = {
			target: el,
			selection: resolveSelectionValue(el)
		};
		el.addEventListener('click', this._check, false);
		el.addEventListener('selectionchange', this._check, false);
		this._observables.push(obj);
	}

	takeRecords() {
		return this._observables.slice(0);
	}

	_onClick = () => {
		const callback = this._callback;
		this._observables = this._observables.map(obj => {
			const { target } = obj;
			return {
				target,
				selection: resolveSelectionValue(target)
			};
		});
		if ( callback ) {
			return callback( this.takeRecords(), this );
		}
	};

	_check = () => {
		let changed = false;
		const callback = this._callback;
		this._observables = this._observables.map(obj => {
			const { target, selection } = obj;
			const $selection = resolveSelectionValue(target);
			if (selection === $selection) {
				return obj;
			}
			if (
				selection.from === $selection.from &&
				selection.to === $selection.to
			) {
				return obj;
			}
			changed = true;
			return {
				target,
				selection: $selection
			};
		});
		if ( changed && callback ) {
			return callback( this.takeRecords(), this );
		}
	};
}
