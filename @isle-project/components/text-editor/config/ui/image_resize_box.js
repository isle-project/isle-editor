/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/ImageResizeBox.js
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

import React from 'react';
import cx from 'classnames';
import clamp from '@stdlib/math/base/special/clamp';
import isNull from '@stdlib/assert/is-null';
import generateUID from '@isle-project/utils/uid/incremental';
import './image_resize_box.css';


// VARIABLES //

const uid = generateUID( 'image-resize-box' );
export const MIN_SIZE = 20;
export const MAX_SIZE = 10000;
const ResizeDirection = {
	top: setHeight,
	top_right: setSize,
	right: setWidth,
	bottom_right: setSize,
	bottom: setHeight,
	bottom_left: setSize,
	left: setWidth,
	top_left: setSize
};


// FUNCTIONS //

/**
 * Sets the width of an element.
 *
 * @private
 * @param {HTMLElement} el - element
 * @param {number} width - element width
 * @param {number} height - element height (unused)
 */
function setWidth( el, width, height ) {
	el.style.width = width + 'px';
}

/**
 * Sets the height of an element.
 *
 * @private
 * @param {HTMLElement} el - element
 * @param {number} width - element width (unused)
 * @param {number} height - element height
 */
function setHeight( el, width, height ) {
	el.style.height = height + 'px';
}

/**
 * Sets the height and width of an element.
 *
 * @private
 * @param {HTMLElement} el - element
 * @param {number} width - element width
 * @param {number} height - element height
 */
function setSize( el, width, height ) {
	el.style.width = Math.round( width ) + 'px';
	el.style.height = Math.round( height ) + 'px';
}

/**
 * Image resize box control component.
 */
class ImageResizeBoxControl extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._active = false;
		this._el = null;
		this._h = '';
		this._rafID = 0;
		this._w = '';
		this._x1 = 0;
		this._x2 = 0;
		this._y1 = 0;
		this._y2 = 0;
		this._ww = 0;
		this._hh = 0;
	}

	componentWillUnmount() {
		this._end();
	}

	_syncSize = () => {
		if (!this._active) {
			return;
		}
		const { direction, width, height } = this.props;

		const dx = (this._x2 - this._x1) * (/left/.test(direction) ? -1 : 1);
		const dy = (this._y2 - this._y1) * (/top/.test(direction) ? -1 : 1);

		const el = this._el;
		if ( isNull( el ) ) {
			throw new Error( 'Encountered an error: `el` should not be null.' );
		}
		const fn = ResizeDirection[direction];
		if ( isNull( fn ) ) {
			throw new Error( 'Encountered an error: `fn` should not be null.' );
		}
		const aspect = width / height;
		let ww = clamp(MIN_SIZE, width + Math.round(dx), MAX_SIZE);
		let hh = clamp(MIN_SIZE, height + Math.round(dy), MAX_SIZE);

		if (fn === setSize) {
			hh = Math.max(ww / aspect, MIN_SIZE);
			ww = hh * aspect;
		}
		fn(el, Math.round(ww), Math.round(hh));
		this._ww = ww;
		this._hh = hh;
	};

	_start( e ) {
		if ( this._active ) {
			this._end();
		}
		this._active = true;

		const { boxID, direction, width, height } = this.props;
		const el = document.getElementById( boxID );
		if ( isNull( el ) ) {
			throw new Error( 'Encountered an error: `el` should not be null.' );
		}
		el.className += ' ' + direction;

		this._el = el;
		this._x1 = e.clientX;
		this._y1 = e.clientY;
		this._x2 = this._x1;
		this._y2 = this._y1;
		this._w = this._el.style.width;
		this._h = this._el.style.height;
		this._ww = width;
		this._hh = height;

		document.addEventListener('mousemove', this._onMouseMove, true);
		document.addEventListener('mouseup', this._onMouseUp, true);
	}

	_end() {
		if (!this._active) {
			return;
		}
		this._active = false;
		document.removeEventListener('mousemove', this._onMouseMove, true);
		document.removeEventListener('mouseup', this._onMouseUp, true);

		const el = this._el;
		if ( isNull( el ) ) {
			throw new Error( 'Encountered an error: `el` should not be null.' );
		}
		el.style.width = this._w;
		el.style.height = this._h;
		el.className = 'editor-image-resize-box';
		this._el = null;

		if ( this._rafID ) {
			cancelAnimationFrame(this._rafID);
		}
		this._rafID = null;
	}

	_onMouseDown = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this._end();
		this._start(e);
	};

	_onMouseMove = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this._x2 = e.clientX;
		this._y2 = e.clientY;
		this._rafID = requestAnimationFrame(this._syncSize);
	};

	_onMouseUp = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this._x2 = e.clientX;
		this._y2 = e.clientY;

		const { direction } = this.props;
		const el = this._el;
		if ( isNull( el ) ) {
			throw new Error( 'Encountered an error: `el` should not be null.' );
		}
		el.classList.remove(direction);

		this._end();
		this.props.onResizeEnd(this._ww, this._hh);
	};

	render() {
		const { direction } = this.props;
		const className = cx({
			'editor-image-resize-box-control': true,
			[direction]: true
		});
		return <span role="button" tabIndex={-1} className={className} onMouseDown={this._onMouseDown} />;
	}
}


// MAIN //

class ImageResizeBox extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._id = uid();
	}

	render() {
		const { onResizeEnd, width, height, src } = this.props;
		const style = {
			height: height + 'px',
			width: width + 'px'
		};
		const boxID = this._id;
		const controls = Object.keys(ResizeDirection).map(key => {
			return (
				<ImageResizeBoxControl
					boxID={boxID}
					config={ResizeDirection[key]}
					direction={key}
					height={height}
					key={key}
					onResizeEnd={onResizeEnd}
					width={width}
				/>
			);
		});
		return (
			<span className="editor-image-resize-box" id={boxID} style={style}>
				{controls}
				<img className="editor-image-resize-box-image" alt="Resize Box" src={src} />
			</span>
		);
	}
}


// EXPORTS //

export default ImageResizeBox;
