/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/PopUpPosition.js
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

import { isCollapsed } from './rects.js';


// EXPORTS //

export function atAnchorBottomLeft( anchorRect, bodyRect ) {
	const rect = { x: 0, y: 0, w: 0, h: 0 };
	if ( anchorRect && bodyRect ) {
		rect.x = anchorRect.x;
		rect.y = anchorRect.y + anchorRect.h;

		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		if (rect.x + bodyRect.w > viewportWidth) {
			rect.x = anchorRect.x - bodyRect.w + anchorRect.w;
		}
		if (rect.y + bodyRect.h > viewportHeight) {
			rect.y = Math.max(anchorRect.y - bodyRect.h, 2);
		}
	}
	if (!anchorRect || isCollapsed(anchorRect)) {
		rect.x = -10000;
	}
	return rect;
}

export function atAnchorBottomCenter( anchorRect, bodyRect ) {
	const rect = { x: 0, y: 0, w: 0, h: 0 };
	if ( anchorRect && bodyRect ) {
		rect.x = Math.max( anchorRect.x - (bodyRect.w - anchorRect.w) / 2, 10 );
		rect.y = anchorRect.y + anchorRect.h;
	}
	if ( !anchorRect || isCollapsed(anchorRect) ) {
		rect.x = -10000;
	}
	return rect;
}

export function atAnchorRight( anchorRect, bodyRect ) {
	const rect = { x: 0, y: 0, w: 0, h: 0 };
	if ( anchorRect && bodyRect ) {
		rect.x = anchorRect.x + anchorRect.w + 1;
		rect.y = anchorRect.y;
		const viewportWidth = window.innerWidth;
		if (rect.x + bodyRect.w > viewportWidth) {
			rect.x = Math.max(2, anchorRect.x - bodyRect.w);
		}
	}
	if ( !anchorRect || isCollapsed(anchorRect) ) {
		rect.x = -10000;
	}
	return rect;
}

export function atViewportCenter( anchorRect, bodyRect ) {
	const rect = { x: 0, y: 0, w: 0, h: 0 };
	if ( bodyRect ) {
		rect.x = ( window.innerWidth - bodyRect.w ) / 2;
		rect.y = ( window.innerHeight - bodyRect.h ) / 2;
	}
	if ( !bodyRect || isCollapsed(bodyRect) ) {
		rect.x = -10000;
	}
	return rect;
}

export function atAnchorTopRight( anchorRect, bodyRect ) {
	const rect = { x: 0, y: 0, w: 0, h: 0 };
	if ( anchorRect && bodyRect ) {
		rect.x = anchorRect.x + anchorRect.w + 1 - bodyRect.w;
		rect.y = anchorRect.y;
	}
	if ( !anchorRect || isCollapsed(anchorRect) ) {
		rect.x = -10000;
	}
	return rect;
}

export function atAnchorTopCenter( anchorRect, bodyRect ) {
	const rect = { x: 0, y: 0, w: 0, h: 0 };
	if ( anchorRect && bodyRect ) {
		rect.x = anchorRect.x + (anchorRect.w - bodyRect.w) / 2;
		rect.y = anchorRect.y;
	}
	if ( !anchorRect || isCollapsed(anchorRect) ) {
		rect.x = -10000;
	}
	return rect;
}
