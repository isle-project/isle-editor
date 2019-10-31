// MAIN //

class PlotDragView {
	constructor( node, view, getPos ) {
		const outer = document.createElement( 'div' );
		outer.style.position = 'relative';
		outer.style.width = node.attrs.width;
		outer.style.margin = '0 auto';
		outer.style.display = 'block';
		outer.style.lineHeight = '0';

		const imgContainer = document.createElement( 'span' );
		imgContainer.className = 'img-container';
		const img = document.createElement( 'img' );
		img.setAttribute( 'src', node.attrs.src );
		img.setAttribute( 'style', 'display: block; margin: 0 auto;' );
		img.style.width = node.attrs.width;
		imgContainer.appendChild( img );

		const tooltip = document.createElement( 'pre' );
		tooltip.className = 'img-tooltip';
		tooltip.innerHTML = node.attrs.meta;
		imgContainer.appendChild( tooltip );

		const handle = document.createElement( 'span' );
		handle.style.position = 'absolute';
		handle.style.bottom = '0px';
		handle.style.right = '0px';
		handle.style.width = '10px';
		handle.style.height = '10px';
		handle.style.border = '3px solid red';
		handle.style.borderTop = 'none';
		handle.style.borderLeft = 'none';
		handle.style.display = 'none';
		handle.style.cursor = 'nwse-resize';
		handle.style.zIndex = '2';

		handle.onmousedown = function onMouseDown( e ) {
			e.preventDefault();
			const startX = e.pageX;
			const startWidth = parseFloat( node.attrs.width.match(/(.+)px/)[1] );
			const onMouseMove = ( e ) => {
				const currentX = e.pageX;
				const diffInPx = currentX - startX;
				outer.style.width = `${startWidth + diffInPx}px`;
				img.style.width = `${startWidth + diffInPx}px`;
			};
			const onMouseUp = ( e ) => {
				e.preventDefault();
				document.removeEventListener( 'mousemove', onMouseMove );
				document.removeEventListener( 'mouseup', onMouseUp );
				const transaction = view.state.tr.setNodeMarkup( getPos(), null, {
					src: node.attrs.src, width: outer.style.width } ).setSelection( view.state.selection );
				view.dispatch( transaction );
			};
			document.addEventListener( 'mousemove', onMouseMove );
			document.addEventListener( 'mouseup', onMouseUp );
		};
		outer.appendChild( handle );
		outer.appendChild( imgContainer );
		this.dom = outer;
		this.img = imgContainer;
		this.handle = handle;
	}

	selectNode() {
		this.img.classList.add( 'ProseMirror-selectednode' );
		this.handle.style.display = '';
	}

	deselectNode() {
		this.img.classList.remove( 'ProseMirror-selectednode' );
		this.handle.style.display = 'none';
	}
}


// EXPORTS //

export default PlotDragView;
