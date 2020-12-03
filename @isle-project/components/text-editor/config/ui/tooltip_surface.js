/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/TooltipSurface.js
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
import generateUID from '@isle-project/utils/uid/incremental';
import createPopUp from './create_popup.js';
import { atAnchorBottomCenter } from './popup_position.js';
import './tooltip_surface.css';
import './animations.css';


// VARIABLES //

const uuid = generateUID( 'tooltip-surface' );


// MAIN //

class TooltipView extends React.PureComponent {
	render() {
		const { tooltip } = this.props;
		return (
			<div className="editor-tooltip-view editor-animation-fade-in">{tooltip}</div>
		);
	}
}

class TooltipSurface extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._id = uuid();
		this._popUp = null;
	}

	componentWillUnmount() {
		if ( this._popUp ) {
			this._popUp.close();
		}
	}

	_onMouseEnter = () => {
		if (!this._popUp) {
			const { tooltip } = this.props;
			this._popUp = createPopUp(
				TooltipView,
				{ tooltip },
				{
					anchor: document.getElementById(this._id),
					onClose: this._onClose,
					position: atAnchorBottomCenter
				}
			);
		}
	};

	_onMouseLeave = () => {
		if ( this._popUp ) {
			this._popUp.close();
		}
		this._popUp = null;
	};

	_onClose = () => {
		this._popUp = null;
	};

	render() {
		const { tooltip, children } = this.props;
		/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
		return (
			<span
				aria-label={tooltip}
				className="editor-tooltip-surface"
				data-tooltip={tooltip}
				id={this._id}
				onMouseDown={tooltip && this._onMouseLeave}
				onMouseEnter={tooltip && this._onMouseEnter}
				onMouseLeave={tooltip && this._onMouseLeave}
				role="tooltip"
			>
				{children}
			</span>
		);
		/* eslint-enable */
	}
}


// EXPORTS //

export default TooltipSurface;
