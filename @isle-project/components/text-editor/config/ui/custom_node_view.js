/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/CustomNodeView.js
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

/* eslint-disable class-methods-use-this */

// MODULES //

import React from 'react';
import { createRoot } from 'react-dom/client';
import SelectionObserver from './selection_observer.js';


// VARIABLES //

// Standard className for selected node.
const SELECTED_NODE_CLASS_NAME = 'ProseMirror-selectednode';

const mountedViews = new Set();
const pendingViews = new Set();

function onMutation(mutations, observer) {
	const root = document.body;
	if (!root) {
		return;
	}

	const mountingViews = [];
	for (const view of pendingViews) {
		const el = view.dom;
		if (root.contains(el)) {
			pendingViews.delete(view);
			mountingViews.push(view);
			view.__renderReactComponent();
		}
	}

	for (const view of mountedViews) {
		const el = view.dom;
		if (!root.contains(el)) {
			mountedViews.delete(el);
			view.root.unmount();
		}
	}

	mountingViews.forEach(view => mountedViews.add(view));

	if (mountedViews.size === 0) {
		observer.disconnect();
	}
}

// Workaround to get in-selection views selected.
// See https://discuss.prosemirror.net/t/copy-selection-issue-with-the-image-node/1673/2;
function onSelection(entries, observer) {
	if ( !window.getSelection ) {
		console.warn('window.getSelection() is not supported'); // eslint-disable-line no-console
		observer.disconnect();
		return;
	}

	const selection = window.getSelection();
	if ( !selection.containsNode ) {
		console.warn('selection.containsNode() is not supported'); // eslint-disable-line no-console
		observer.disconnect();
		return;
	}

	for (const view of mountedViews) {
		const el = view.dom;
		if (selection.containsNode(el)) {
			view.selectNode();
		} else {
			view.deselectNode();
		}
	}

	if (mountedViews.size === 0) {
		observer.disconnect();
	}
}

const selectionObserver = new SelectionObserver(onSelection);
const mutationObserver = new MutationObserver(onMutation);


// MAIN //

// This implements the `NodeView` interface and renders a Node with a react
// Component.
// https://prosemirror.net/docs/ref/#view.NodeView
// https://github.com/ProseMirror/prosemirror-view/blob/master/src/viewdesc.js#L429
class CustomNodeView {
	constructor(
		node,
		editorView,
		getPos,
		decorations
	) {
		this.props = {
			decorations,
			editorView,
			getPos,
			node,
			selected: false,
			focused: false
		};

		pendingViews.add(this);

		// The editor will use this as the node's DOM representation
		const dom = this.createDOMElement();
		this.dom = dom;
		this._selected = null;
		dom.onClick = this._onClick;

		if (pendingViews.size === 1) {
			mutationObserver.observe(document, {
				childList: true, subtree: true
			});
			selectionObserver.observe(document);
		}
	}

	update(node, decorations) {
		this.props = {
			...this.props,
			node
		};
		this.__renderReactComponent();
		return true;
	}

	stopEvent() {
		return false;
	}

	// Mark this node as being the selected node.
	selectNode() {
		this._selected = true;
		this.dom.classList.add(SELECTED_NODE_CLASS_NAME);
		this.__renderReactComponent();
	}

	// Remove selected node marking from this node.
	deselectNode() {
		this._selected = false;
		this.dom.classList.remove(SELECTED_NODE_CLASS_NAME);
		this.__renderReactComponent();
	}

	// This should be overwrite by subclass.
	createDOMElement() {
		// The editor will use this as the node's DOM representation.
		// return document.createElement('span');
		throw new Error('not implemented');
	}

	// This should be overwrite by subclass.
	renderReactComponent() {
		// return <CustomNodeViewComponent {...this.props} />;
		throw new Error('not implemented');
	}

	destroy() {
		// Called when the node view is removed from the editor or the whole
		// editor is destroyed.
		// sub-class may override this method.
	}

	__renderReactComponent() {
		const { editorView, getPos } = this.props;

		if (editorView.state && editorView.state.selection) {
			const { from } = editorView.state.selection;
			const pos = getPos();
			this.props.selected = this._selected;
			this.props.focused = editorView.focused && pos === from;
		} else {
			this.props.selected = false;
			this.props.focused = false;
		}
		this.root = createRoot( this.dom );
		this.root.render( this.renderReactComponent() );
	}
}


// EXPORTS //

export default CustomNodeView;
