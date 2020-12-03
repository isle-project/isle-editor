/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/PointerSurface.js
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

import cx from 'classnames';
import React from 'react';
import preventEventDefault from './prevent_event_default.js';


// MAIN //

class PointerSurface extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._clicked = false;
		this._mul = false;
		this._pressedTarget = null;
		this._unmounted = false;
		this.state = {
			pressed: false
		};
	}

	componentWillUnmount() {
		this._unmounted = true;
		if ( this._mul ) {
			this._mul = false;
			document.removeEventListener( 'mouseup', this._onMouseUpCapture, true );
		}
	}

	_onMouseEnter = (e) => {
		this._pressedTarget = null;
		e.preventDefault();
		const { onMouseEnter, value } = this.props;
		if ( onMouseEnter ) {
			onMouseEnter( value, e );
		}
	};

	_onMouseLeave = (e) => {
		this._pressedTarget = null;
		const mouseUpEvent = e;
		this._onMouseUpCapture(mouseUpEvent);
	};

	_onMouseDown = (e) => {
		e.preventDefault();

		this._pressedTarget = null;
		this._clicked = false;

		if ( e.which === 3 || e.button === 2 ) {
			// right click.
			return;
		}

		this.setState({ pressed: true });
		this._pressedTarget = e.currentTarget;
		this._clicked = false;

		if (!this._mul) {
			document.addEventListener('mouseup', this._onMouseUpCapture, true);
			this._mul = true;
		}
	};

	_onMouseUp = (e) => {
		e.preventDefault();

		if ( this._clicked || e.type === 'keypress' ) {
			const { onClick, value, disabled } = this.props;
			if ( !disabled && onClick ) {
				onClick( value, e );
			}
		}

		this._pressedTarget = null;
		this._clicked = false;
	};

	_onMouseUpCapture = (e) => {
		if ( this._mul ) {
			this._mul = false;
			document.removeEventListener( 'mouseup', this._onMouseUpCapture, true );
		}
		const target = e.target;
		this._clicked =
			this._pressedTarget instanceof HTMLElement &&
			target instanceof HTMLElement &&
			(target === this._pressedTarget ||
				target.contains(this._pressedTarget) ||
				this._pressedTarget.contains(target));
		this.setState({ pressed: false });
	};

	render() {
		const {
			className,
			disabled,
			active,
			id,
			style,
			title,
			children
		} = this.props;
		const { pressed } = this.state;

		const buttonClassName = cx(className, {
			active: active,
			disabled: disabled,
			pressed: pressed
		});
		return (
			<span
				aria-disabled={disabled}
				aria-pressed={pressed}
				className={buttonClassName}
				disabled={disabled}
				id={id}
				onKeyPress={disabled ? preventEventDefault : this._onMouseUp}
				onMouseDown={disabled ? preventEventDefault : this._onMouseDown}
				onMouseEnter={disabled ? preventEventDefault : this._onMouseEnter}
				onMouseLeave={disabled ? null : this._onMouseLeave}
				onMouseUp={disabled ? preventEventDefault : this._onMouseUp}
				role="button"
				style={style}
				tabIndex={disabled ? null : 0}
				title={title}
			>
				{children}
			</span>
		);
	}
}


// EXPORTS //

export default PointerSurface;
