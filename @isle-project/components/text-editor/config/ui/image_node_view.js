/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/ImageNodeView.js
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
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import generateUID from '@isle-project/utils/uid/incremental';
import { i18n } from '@isle-project/locales';
import CustomNodeView from './custom_node_view.js';
import { FRAMESET_BODY_CLASSNAME } from './editor_frameset.js';
import Icons from './../icons.js';
import ImageInlineEditor from './image_inline_editor.js';
import ImageResizeBox from './image_resize_box.js';
import { MIN_SIZE } from './image_resize_box.js';
import { atAnchorBottomCenter } from './popup_position.js';
import ResizeObserver from './resize_observer.js';
import createPopUp from './create_popup.js';
import resolveImage from './resolve_image.js';
import './image_view.css';


// VARIABLES //

const uid = generateUID( 'image-node-view' );
const EMPTY_SRC =
	'data:image/gif;base64,' +
	'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/* This value must be synced with the margin defined at .editor-image-view */
const IMAGE_MARGIN = 2;

const MAX_SIZE = 100000;
const IMAGE_PLACEHOLDER_SIZE = 24;

const DEFAULT_ORIGINAL_SIZE = {
	src: '',
	complete: false,
	height: 0,
	width: 0
};


// FUNCTIONS //

// Get the maxWidth that the image could be resized to.
function getMaxResizeWidth( el ) {
	// Ideally, the image should not be wider than its containing element.
	let node = el.parentElement;
	while ( node && !node.offsetParent ) {
		node = node.parentElement;
	}
	if (
		node &&
		node.offsetParent &&
		node.offsetParent.offsetWidth &&
		node.offsetParent.offsetWidth > 0
	) {
		const { offsetParent } = node;
		const style = el.ownerDocument.defaultView.getComputedStyle( offsetParent );
		let width = offsetParent.clientWidth - IMAGE_MARGIN * 2;
		if ( style.boxSizing === 'border-box' ) {
			const pl = parseInt( style.paddingLeft, 10 );
			const pr = parseInt( style.paddingRight, 10 );
			width -= pl + pr;
		}
		return Math.max(width, MIN_SIZE);
	}
	// Let the image resize freely.
	return MAX_SIZE;
}

class ImageViewBody extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._body = null;
		this._id = uid();
		this._inlineEditor = null;
		this._mounted = false;

		this.state = {
			maxSize: {
				width: MAX_SIZE,
				height: MAX_SIZE,
				complete: false
			},
			originalSize: DEFAULT_ORIGINAL_SIZE
		};
	}

	componentDidMount() {
		this._mounted = true;
		this._resolveOriginalSize();
		this._renderInlineEditor();
	}

	componentDidUpdate(prevProps) {
		const prevSrc = prevProps.node.attrs.src;
		const { node } = this.props;
		const { src } = node.attrs;
		if (prevSrc !== src) {
			// A new image is provided, resolve it.
			this._resolveOriginalSize();
		}
		this._renderInlineEditor();
	}

	componentWillUnmount() {
		this._mounted = false;
		if ( this._inlineEditor ) {
			this._inlineEditor.close();
		}
		this._inlineEditor = null;
	}

	_renderInlineEditor() {
		const el = document.getElementById( this._id );
		if ( !el || el.getAttribute('data-active') !== 'true' ) {
			if ( this._inlineEditor ) {
				this._inlineEditor.close();
			}
			return;
		}
		const { node } = this.props;
		const editorProps = {
			value: node.attrs,
			onSelect: this._onChange
		};
		if ( this._inlineEditor ) {
			this._inlineEditor.update( editorProps );
		} else {
			this._inlineEditor = createPopUp(ImageInlineEditor, editorProps, {
				anchor: el,
				autoDismiss: false,
				container: el.closest ? el.closest(`.${FRAMESET_BODY_CLASSNAME}`) : null,
				position: atAnchorBottomCenter,
				onClose: () => {
					this._inlineEditor = null;
				}
			});
		}
	}

	_resolveOriginalSize = async () => {
		if ( !this._mounted ) {
			// unmounted;
			return;
		}
		this.setState({ originalSize: DEFAULT_ORIGINAL_SIZE });
		const src = this.props.node.attrs.src;
		const url = src;
		const originalSize = await resolveImage(url);
		if ( !this._mounted ) {
			// unmounted;
			return;
		}
		if ( this.props.node.attrs.src !== src ) {
			// src had changed.
			return;
		}
		if ( !originalSize.complete ) {
			originalSize.width = MIN_SIZE;
			originalSize.height = MIN_SIZE;
		}
		this.setState({ originalSize });
	};

	_onResizeEnd = ( width, height ) => {
		const { getPos, node, editorView } = this.props;
		const pos = getPos();
		const attrs = {
			...node.attrs,
			// TODO: Support UI for cropping later.
			crop: null,
			width,
			height
		};
		let tr = editorView.state.tr;
		const { selection } = editorView.state;
		tr = tr.setNodeMarkup( pos, null, attrs );
		tr = tr.setSelection( selection.map( tr.doc, tr.mapping ) );
		editorView.dispatch( tr );
	};

	_onChange = ( value ) => {
		if ( !this._mounted ) {
			return;
		}
		const align = value ? value.align : null;
		const { getPos, node, editorView } = this.props;
		const pos = getPos();
		const attrs = {
			...node.attrs,
			align
		};

		let tr = editorView.state.tr;
		const { selection } = editorView.state;
		tr = tr.setNodeMarkup(pos, null, attrs);
		tr = tr.setSelection( selection.map( tr.doc, tr.mapping ) );
		editorView.dispatch(tr);
	};

	_onBodyRef = (ref) => {
		if (ref) {
			this._body = ref;
			// Mounting
			const el = ReactDOM.findDOMNode(ref);
			if (el instanceof HTMLElement) {
				ResizeObserver.observe(el, this._onBodyResize);
			}
		} else {
			// Unmounting.
			const el = this._body && ReactDOM.findDOMNode(this._body);
			if (el instanceof HTMLElement) {
				ResizeObserver.unobserve(el);
			}
			this._body = null;
		}
	};

	_onBodyResize = (info) => {
		const width = this._body ?
			getMaxResizeWidth(ReactDOM.findDOMNode(this._body)) :
			MAX_SIZE;

		this.setState({
			maxSize: {
				width,
				height: MAX_SIZE,
				complete: !!this._body
			}
		});
	};

	render() {
		const { originalSize, maxSize } = this.state;
		const { editorView, node, selected, focused } = this.props;
		const { readOnly } = editorView;
		const { attrs } = node;
		const { align, crop, rotate } = attrs;

		// It's only active when the image's fully loaded.
		const loading = originalSize === DEFAULT_ORIGINAL_SIZE;
		const active = !loading && focused && !readOnly && originalSize.complete;
		const src = originalSize.complete ? originalSize.src : EMPTY_SRC;
		const aspectRatio = loading ? 1 : originalSize.width / originalSize.height;
		const error = !loading && !originalSize.complete;

		let { width, height } = attrs;
		if ( loading ) {
			width = width || IMAGE_PLACEHOLDER_SIZE;
			height = height || IMAGE_PLACEHOLDER_SIZE;
		}
		if ( width && !height ) {
			height = width / aspectRatio;
		} else if ( height && !width ) {
			width = height * aspectRatio;
		} else if ( !width && !height ) {
			width = originalSize.width;
			height = originalSize.height;
		}
		let scale = 1;
		if ( width > maxSize.width && ( !crop || crop.width > maxSize.width ) ) {
			// Scale image to fit its containing space.
			// If the image is not cropped.
			width = maxSize.width;
			height = width / aspectRatio;
			scale = maxSize.width / width;
		}
		const className = cx( 'editor-image-view-body', {
			active,
			error,
			focused,
			loading,
			selected
		});

		const resizeBox =
			active && !crop && !rotate ? (
				<ImageResizeBox
					height={height}
					onResizeEnd={this._onResizeEnd}
					src={src}
					width={width}
				/>
			) : null;

		const imageStyle = {
			display: 'inline-block',
			height: height + 'px',
			left: '0',
			top: '0',
			width: width + 'px',
			position: 'relative'
		};
		const clipStyle = {};
		if ( crop ) {
			const cropped = { ...crop };
			if ( scale !== 1 ) {
				scale = maxSize.width / cropped.width;
				cropped.width *= scale;
				cropped.height *= scale;
				cropped.left *= scale;
				cropped.top *= scale;
			}
			clipStyle.width = cropped.width + 'px';
			clipStyle.height = cropped.height + 'px';
			imageStyle.left = cropped.left + 'px';
			imageStyle.top = cropped.top + 'px';
		}

		if ( rotate ) {
			clipStyle.transform = `rotate(${rotate}rad)`; // eslint-disable-line i18next/no-literal-string
		}

		let tooltip = null;
		if ( attrs.meta ) {
			tooltip = <pre className="img-tooltip">{attrs.meta}</pre>;
		}
		const errorView = error ?
			<span className="editor-image-view-error" >{Icons.error} </span> :
			null;
		const errorTitle = error ? `${i18n.t('text-editor:unable-to-load-image')} ${attrs.src || ''}` : void 0;
		const img = <img
			alt=""
			className="editor-image-view-body-img"
			data-align={align}
			height={height}
			id={`${this._id}-img`}
			src={src}
			width={width}
		/>;
		return (
			<Fragment>
				{tooltip}
				<span
					className={className}
					data-active={active ? 'true' : void 0}
					data-original-src={String(attrs.src)}
					id={this._id}
					ref={this._onBodyRef}
					title={errorTitle}
				>
					<span className="editor-image-view-body-img-clip" style={clipStyle}>
						<span style={imageStyle} >
							{errorView}
							{img}
						</span>
					</span>
					{resizeBox}
				</span>
			</Fragment>
		);
	}
}


// MAIN //

class ImageNodeView extends CustomNodeView {
	createDOMElement() {
		const el = document.createElement( 'span' );
		el.className = 'editor-image-view';
		el.addEventListener( 'dragstart', ( e ) => {
			var img = document.createElement( 'img' );
			img.src = this.props.node.attrs.src;
			e.dataTransfer.setDragImage( img, 0, 0 );
		}, false );
		this._updateDOM(el);
		return el;
	}

	update( node, decorations ) {
		super.update( node, decorations );
		this._updateDOM( this.dom );
		return true;
	}

	renderReactComponent() {
		return <ImageViewBody {...this.props} />;
	}

	_updateDOM( el ) {
		const { align } = this.props.node.attrs;
		let className = 'editor-image-view';
		if ( align ) {
			className += ' align-' + align;
		}
		el.className = className;
	}
}


// EXPORTS //

export default ImageNodeView;
