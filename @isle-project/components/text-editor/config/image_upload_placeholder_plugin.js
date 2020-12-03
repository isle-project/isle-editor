/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ImageUploadPlaceholderPlugin.js
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

import { Plugin } from 'prosemirror-state';
import { TextSelection } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';
import isNull from '@stdlib/assert/is-null';
import generateUID from '@isle-project/utils/uid/incremental';
import './ui/image_upload_placeholder.css';


// VARIABLES //

const IMAGE = 'image';
const uid = generateUID( 'image_upload' );
const IMAGE_FILE_TYPES = new Set([
	'image/jpeg',
	'image/gif',
	'image/png',
	'image/jpg'
]);

const TITLE = 'Uploading...';

const INNER_HTML = new Array(4).join(
	'<div class="editor-image-upload-placeholder-child"></div>'
);


// FUNCTIONS //

function isImageUploadPlaceholderPlugin( plugin ) {
	return plugin instanceof ImageUploadPlaceholderPlugin;
}

function isImageFileType( file ) {
	return file && IMAGE_FILE_TYPES.has( file.type );
}

function findImageUploadPlaceholder(
	placeholderPlugin,
	state,
	id
) {
	const decos = placeholderPlugin.getState( state );
	const found = decos.find( null, null, spec => spec.id === id );
	return found.length ? found[ 0 ].from : null;
}

function defer(fn) {
	return () => {
		setTimeout(fn, 0);
	};
}

function uploadImage( file ) {
	return new Promise( ( resolve, reject ) => {
		const { FileReader } = window;
		if ( FileReader ) {
			const reader = new FileReader();
			reader.onload = event => {
				// base64 encoded url.
				const src = event.target.result;
				resolve({ src, height: 0, width: 0, id: '' });
			};
			reader.onerror = () => {
				reject( new Error( 'FileReader failed' ) );
			};
			reader.readAsDataURL( file );
		} else {
			reject( new Error( 'FileReader is not available' ) );
		}
	});
}

export function uploadImageFiles(
	view,
	files,
	coords
) {
	const { state, readOnly, disabled } = view;
	const { schema, plugins } = state;
	if ( readOnly || disabled ) {
		return false;
	}
	const imageType = schema.nodes[ IMAGE ];
	if ( !imageType ) {
		return false;
	}
	const imageFiles = Array.from( files ).filter( isImageFileType );
	if ( !imageFiles.length ) {
		return false;
	}
	const placeholderPlugin = plugins.find( isImageUploadPlaceholderPlugin );
	if ( !placeholderPlugin ) {
		return false;
	}

	// A fresh object to act as the ID for this upload:
	const id = {
		debugId: uid()
	};
	const uploadNext = defer(() => {
		const done = ( imageInfo ) => {
			const pos = findImageUploadPlaceholder(placeholderPlugin, view.state, id);
			let trNext = view.state.tr;
			if (pos && !view.readOnly && !view.disabled) {
				const imageNode = imageType.create(imageInfo);
				trNext = trNext.replaceWith(pos, pos, imageNode);
			} else {
				// Upload was cancelled:
				imageFiles.length = 0;
			}
			if (imageFiles.length) {
				uploadNext();
			} else {
				// Remove the placeholder:
				trNext = trNext.setMeta( placeholderPlugin, {
					remove: { id }
				});
			}
			view.dispatch(trNext);
		};
		const ff = imageFiles.shift();
		if ( isNull( ff ) ) {
			throw new Error( 'unexpected null value' );
		}
		uploadImage( ff )
			.then( done )
			.catch( done.bind( null, { src: null }) );
	});

	uploadNext();

	let { tr } = state;

	// Replace the selection with a placeholder:
	let from = 0;

	// Adjust the cursor to the dropped position...
	if ( coords ) {
		const dropPos = view.posAtCoords({
			left: coords.x,
			top: coords.y
		});
		if ( !dropPos ) {
			return false;
		}
		from = dropPos.pos;
		tr = tr.setSelection( TextSelection.create( tr.doc, from, from ) );
	} else {
		from = tr.selection.to;
		tr = tr.setSelection( TextSelection.create( tr.doc, from, from ) );
	}
	const meta = {
		add: {
			id,
			pos: from
		}
	};

	tr = tr.setMeta( placeholderPlugin, meta );
	view.dispatch( tr );
	return true;
}


// MAIN //

// https://prosemirror.net/examples/upload/
class ImageUploadPlaceholderPlugin extends Plugin {
	constructor() {
		super({
			state: {
				init() {
					return DecorationSet.empty;
				},
				apply( tr, set ) {
					// Adjust decoration positions to changes made by the transaction:
					set = set.map( tr.mapping, tr.doc );

					// See if the transaction adds or removes any placeholders:
					const action = tr.getMeta( this );
					if ( action && action.add ) {
						const el = document.createElement( 'div' );
						el.title = TITLE;
						el.className = 'editor-image-upload-placeholder';
						el.innerHTML = INNER_HTML;

						const deco = Decoration.widget( action.add.pos, el, {
							id: action.add.id
						});
						set = set.add( tr.doc, [deco] );
					} else if ( action && action.remove ) {
						const finder = spec => spec.id === action.remove.id;
						set = set.remove( set.find( null, null, finder ) );
					}
					return set;
				}
			},
			props: {
				decorations( state ) {
					return this.getState( state );
				}
			}
		});
	}
}


// EXPORTS //

export default ImageUploadPlaceholderPlugin;
