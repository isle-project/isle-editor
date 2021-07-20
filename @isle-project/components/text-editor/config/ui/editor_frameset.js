/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/EditorFrameset.js
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
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isUndefined from '@stdlib/assert/is-undefined';
import './editor_frameset.css';


// VARIABLES //

export const FRAMESET_BODY_CLASSNAME = 'text-editor-frame-body';


// FUNCTIONS //

/**
 * Returns the a CSS pixel value for the given input value.
 *
 * @private
 * @param {*} val - input value
 * @returns {string} CSS value
 */
function toCSS( val ) {
	if ( typeof val === 'number' ) {
		return val + 'px';
	}
	if ( isUndefinedOrNull( val ) ) {
		return 'auto';
	}
	return String( val );
}


// MAIN //

/**
 * Renders a frame set for the text editor.
 */
class EditorFrameset extends React.PureComponent {
	render() {
		const {
			body,
			className,
			embedded,
			header,
			height,
			toolbarPlacement,
			toolbar,
			width
		} = this.props;

		const useFixedLayout = !isUndefined( width ) || !isUndefined( height);

		const mainClassName = cx(className, {
			'text-editor-frameset': true,
			'with-fixed-layout': useFixedLayout,
			embedded: embedded
		});

		const mainStyle = {
			width: toCSS( isUndefined( width ) && useFixedLayout ? 'auto' : width ),
			height: toCSS( isUndefined( height ) && useFixedLayout ? 'auto' : height )
		};

		const toolbarHeader =
			toolbarPlacement === 'header' || !toolbarPlacement ? toolbar : null;
		const toolbarBody = toolbarPlacement === 'body' && toolbar;

		return (
			<div className={mainClassName} style={mainStyle}>
				<div className="text-editor-frame-main">
					<div className="text-editor-frame-head">
						{header}
						{toolbarHeader}
					</div>
					<div className={FRAMESET_BODY_CLASSNAME}>
						{toolbarBody}
						<div className="text-editor-frame-body-scroll">{body}</div>
					</div>
					<div className="text-editor-frame-footer" />
				</div>
			</div>
		);
	}
}


// EXPORTS //

export default EditorFrameset;
