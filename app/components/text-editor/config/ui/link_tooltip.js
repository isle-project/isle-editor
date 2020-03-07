/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/LinkTooltip.js
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
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import sanitizeURL from './../sanitize_url.js';
import CustomButton from './custom_button.js';
import './link_tooltip.css';


// MAIN //

class LinkTooltip extends React.PureComponent {
	_openLink = ( href ) => {
		if ( href && href.indexOf('#') === 0 ) {
			const id = href.substr(1);
			const el = document.getElementById(id);
			if (el) {
				const { onCancel, editorView } = this.props;
				onCancel(editorView);
				(async () => {
					// https://www.npmjs.com/package/smooth-scroll-into-view-if-needed
					await scrollIntoView(el, {
						scrollMode: 'if-needed',
						// block: 'nearest',
						// inline: 'nearest',
						behavior: 'smooth'
					});
				})();
			}
			return;
		}
		if ( href ) {
			window.open( sanitizeURL( href ) );
		}
	};

	render() {
		const { href, editorView, onEdit, onRemove } = this.props;
		return (
			<div className="editor-link-tooltip">
				<div className="editor-link-tooltip-body">
					<div className="editor-link-tooltip-row">
						<CustomButton
							className="editor-link-tooltip-href"
							label={href}
							onClick={this._openLink}
							target="new"
							title={href}
							value={href}
						/>
						<CustomButton label="Change" onClick={onEdit} value={editorView} />
						<CustomButton
							label="Remove"
							onClick={onRemove}
							value={editorView}
						/>
					</div>
				</div>
			</div>
		);
	}
}


// EXPORTS //

export default LinkTooltip;
