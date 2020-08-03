/*
* The MIT License (MIT)
*
* Copyright (c) 2013-2018 Formidable Labs, Inc.
*
* Copyright (c) 2016-2018 Zachary Maybury, Kylie Stewart, and potentially other
* DefinitelyTyped contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// MODULES //

import { cloneElement, Children } from 'react';
import isUndefined from '@stdlib/assert/is-undefined';
import reduce from 'lodash/reduce';
import Notes from '../components/notes';


// EXPORTS //

export const getNotesForSlide = slide => {
	let notes = '';
	Children.map( slide.props.children, child => {
		const isChildNode = child.type === Notes;
		if ( isChildNode ) {
			notes = child.props.children;
		}
	});
	return notes;
};

export const getSlideByIndex = ( children, slideReference, index ) => {
	children = Children.toArray(children);
	let slide;
	const reference = slideReference[index];
	if ( reference ) {
		if (!isUndefined(reference.magicIndex)) {
			slide = cloneElement(children[reference.rootIndex], {
				magicIndex: reference.magicIndex
			});
		} else if (isUndefined(reference.setIndex)) {
			slide = children[reference.rootIndex];
		} else {
			const setChildren = Children.toArray(
				children[reference.rootIndex].props.children
			);
			const style = children[reference.rootIndex].props.style;
			slide = cloneElement(setChildren[reference.setIndex], {
				style
			});
		}
	}
	return slide;
};

export const countSlides = children => {
	return reduce(
		Children.toArray(children),
		(count, child) => {
			count += child.props.hasSlideChildren ?
				Children.toArray(child.props.children).length :
				1;
			return count;
		},
		0
	);
};
