/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/TextAlignCommand.js
*
* MIT License
*
* Copyright (c) 2018 Chan Zuckerberg Initiative
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

import { AllSelection, TextSelection } from 'prosemirror-state';
import icons from './icons';


// FUNCTIONS //

const isEnabled = ( state ) => {
	const { selection } = state;
	return (
		selection instanceof TextSelection || selection instanceof AllSelection
	);
};

const setTextAlign = (
	tr,
	schema,
	alignment
) => {
	const { selection, doc } = tr;
	if (!selection || !doc) {
		return tr;
	}
	const { from, to } = selection;
	const { nodes } = schema;

	const blockquote = nodes[ 'blockquote' ];
	const listItem = nodes[ 'list_item' ];
	const heading = nodes[ 'heading' ];
	const paragraph = nodes[ 'paragraph' ];
	const tasks = [];
	alignment = alignment || null;
	const allowedNodeTypes = new Set([blockquote, heading, listItem, paragraph]);

	doc.nodesBetween( from, to, (node, pos, parentNode ) => {
		const nodeType = node.type;
		const align = node.attrs.align || null;
		if (align !== alignment && allowedNodeTypes.has(nodeType)) {
			tasks.push({
				node,
				pos,
				nodeType
			});
		}
		return true;
	});

	if ( !tasks.length ) {
		return tr;
	}

	tasks.forEach(job => {
		const { node, pos, nodeType } = job;
		let { attrs } = node;
		if ( alignment ) {
			attrs = {
				...attrs,
				align: alignment
			};
			} else {
			attrs = {
				...attrs,
				align: null
			};
		}
		tr = tr.setNodeMarkup( pos, nodeType, attrs, node.marks );
	});
	return tr;
};

const isActiveFactory = ( alignment ) => {
	return ( state ) => {
		const { selection, doc } = state;
		const { from, to } = selection;
		let keepLooking = true;
		let active = false;
		doc.nodesBetween( from, to, ( node, pos ) => {
			if ( keepLooking && node.attrs.align === alignment ) {
				keepLooking = false;
				active = true;
			}
			return keepLooking;
		});
		return active;
	};
};

export function alignLeft( state, dispatch ) {
	const { schema, selection } = state;
	const tr = setTextAlign(
		state.tr.setSelection( selection ),
		schema,
		'left'
	);
	if ( tr.docChanged ) {
		return dispatch && dispatch(tr);
	}
	return false;
}

export function alignCenter( state, dispatch ) {
	const { schema, selection } = state;
	const tr = setTextAlign(
		state.tr.setSelection( selection ),
		schema,
		'center'
	);
	if ( tr.docChanged ) {
		return dispatch && dispatch(tr);
	}
	return false;
}

export function alignRight( state, dispatch ) {
	const { schema, selection } = state;
	const tr = setTextAlign(
		state.tr.setSelection( selection ),
		schema,
		'right'
	);
	if ( tr.docChanged ) {
		return dispatch && dispatch(tr);
	}
	return false;
}

export function alignJustify( state, dispatch ) {
	const { schema, selection } = state;
	const tr = setTextAlign(
		state.tr.setSelection( selection ),
		schema,
		'justify'
	);
	if ( tr.docChanged ) {
		return dispatch && dispatch(tr);
	}
	return false;
}


// MAIN //

const alignment = [
	{
		title: 'align-left',
		content: icons.alignLeft,
		enable: isEnabled,
		active: isActiveFactory( 'left' ),
		run: alignLeft,
		hotkey: 'Ctrl+Alt+L'
	},
	{
		title: 'align-center',
		content: icons.alignCenter,
		enable: isEnabled,
		active: isActiveFactory( 'center' ),
		run: alignCenter,
		hotkey: 'Ctrl+Alt+C'
	},
	{
		title: 'align-right',
		content: icons.alignRight,
		enable: isEnabled,
		active: isActiveFactory( 'right' ),
		run: alignRight,
		hotkey: 'Ctrl+Alt+R'
	},
	{
		title: 'justified',
		content: icons.alignJustify,
		enable: isEnabled,
		active: isActiveFactory( 'justify' ),
		run: alignJustify,
		hotkey: 'Ctrl+Alt+J'
	}
];


// EXPORTS //

export default alignment;
