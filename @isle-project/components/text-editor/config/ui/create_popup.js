/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/createPopUp.js
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
import { createRoot } from 'react-dom/client';
import PopUp from './popup.js';
import generateUID from '@isle-project/utils/uid/incremental';
import './popup.css';


// VARIABLES //

const uid = generateUID( 'create-popup' );
let root;

// EXPORTS //

let modalsCount = 0;
let popUpsCount = 0;

const Z_INDEX_BASE = 1005;
const MODAL_MASK_ID = 'pop-up-modal-mask-' + uid();

function showModalMask() {
	const root = document.body || document.documentElement;
	let element = document.getElementById( MODAL_MASK_ID );
	if ( !element ) {
		element = document.createElement('div');
		element.id = MODAL_MASK_ID;
		element.className = 'pop-up-modal-mask';
		element.setAttribute('data-mask-type', 'pop-up-modal-mask');
		element.setAttribute('role', 'dialog');
		element.setAttribute('aria-modal', 'true');
	}

	if (root && !element.parentElement) {
		root.appendChild(element);
	}
	const style = element.style;
	const selector = '.pop-up-element[data-pop-up-modal]';
	const zIndex = Array.from(document.querySelectorAll(selector)).reduce(
		(zz, el) => Math.max(zz, Number(el.style.zIndex)),
		0
	);
	style.zIndex = zIndex - 1;
}

function hideModalMask() {
	const element = document.getElementById(MODAL_MASK_ID);
	if (element && element.parentElement) {
		element.parentElement.removeChild(element);
	}
}

function getRootElement(
	id,
	forceCreation,
	popUpParams,
	fullscreenOffset
) {
	const root =
		(popUpParams && popUpParams.container) ||
		document.body ||
		document.documentElement;
	let element = document.getElementById(id);
	if (!element && forceCreation) {
		element = document.createElement('div');
	}
	if (!element) {
		return null;
	}
	if (popUpParams && popUpParams.modal) {
		element.setAttribute('data-pop-up-modal', 'y');
	}
	element.className = 'pop-up-element vars';
	element.id = id;

	const style = element.style;
	const modalZIndexOffset = popUpParams && popUpParams.modal ? 1 : 0;
	if (!(popUpParams && popUpParams.container)) {
		style.zIndex = Z_INDEX_BASE + popUpsCount * 3 + modalZIndexOffset;
	}
	if ( fullscreenOffset ) {
		style.zIndex += fullscreenOffset;
	}

	// Populates the default ARIA attributes here.
	// http://accessibility.athena-ict.com/aria/examples/dialog.shtml
	element.setAttribute('role', 'dialog');
	element.setAttribute('aria-modal', 'true');
	if (root && !element.parentElement) {
		root.appendChild(element);
	}
	return element;
}

function renderPopUp(
	rootId,
	close,
	View,
	viewProps,
	popUpParams
) {
	let fullscreenOffset = 0;
	const wrapper = document.getElementsByClassName( 'editorview-wrapper fullscreen' );
	if ( wrapper[ 0 ] ) {
		fullscreenOffset += 1000;
	}
	const rootNode = getRootElement( rootId, true, popUpParams, fullscreenOffset );
	if (rootNode) {
		const component = (
			<PopUp
				View={View}
				close={close}
				popUpParams={popUpParams}
				viewProps={viewProps}
			/>
		);
		root = createRoot( rootNode );
		root.render( component );
	}
	if ( modalsCount > 0 ) {
		showModalMask();
	} else {
		hideModalMask();
	}
}

function unrenderPopUp(rootId) {
	const rootNode = getRootElement(rootId, false);
	if ( rootNode ) {
		root.unmount();
		if ( rootNode.parentElement ) {
			rootNode.parentElement.removeChild( rootNode );
		}
	}
	if ( modalsCount === 0 ) {
		hideModalMask();
	}
}

export default function createPopUp(
	View,
	viewProps,
	popUpParams
) {
	const rootId = uid();
	let handle = null;
	let currentViewProps = viewProps;

	viewProps = viewProps || {};
	popUpParams = popUpParams || {};

	const modal = popUpParams.modal || !popUpParams.anchor;
	popUpParams.modal = modal;

	popUpsCount++;
	if ( modal ) {
		modalsCount++;
	}
	const closePopUp = value => {
		if ( !handle ) {
			return;
		}
		if ( modal ) {
			modalsCount--;
		}
		popUpsCount--;

		handle = null;
		unrenderPopUp(rootId);

		const onClose = popUpParams && popUpParams.onClose;
		if ( onClose ) {
			onClose( value );
		}
	};

	const render = renderPopUp.bind( null, rootId, closePopUp, View );
	const emptyObj = {};

	handle = {
		close: closePopUp,
		update: nextViewProps => {
			currentViewProps = nextViewProps;
			render(currentViewProps || emptyObj, popUpParams || emptyObj);
		}
	};
	render( currentViewProps || emptyObj, popUpParams || emptyObj );
	return handle;
}
