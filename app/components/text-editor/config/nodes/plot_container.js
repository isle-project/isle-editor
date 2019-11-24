// MAIN //

const plotContainerSpec = {
	attrs: {
		src: {},
		plotID: { default: null },
		alt: { default: null },
		title: { default: null },
		meta: { default: null },
		width: { default: '550px' }
	},
	inline: false,
	group: 'block',
	draggable: true,
	toDOM: node => {
		let style = 'display: block; margin: 0 auto;';
		if ( node.attrs.width ) {
			style += `width: ${node.attrs.width};`;
		}
		return [ 'span', { class: 'img-container', 'data-plot-id': node.attrs.plotID }, [ 'img', {
				src: node.attrs.src,
				style,
				alt: node.attrs.alt,
				title: node.attrs.title
			} ], [ 'pre',
			{
				class: 'img-tooltip'
			}, node.attrs.meta ]
		];
	},
	parseDOM: [{
		priority: 51,
		tag: 'span[data-plot-id]',
		getAttrs: dom => {
			const plotID = dom.getAttribute( 'data-plot-id' );
			const img = dom.firstChild;
			const src = img.getAttribute( 'src' );
			const title = img.getAttribute( 'title' );
			const alt = img.getAttribute( 'alt' );
			const width = img.getAttribute( 'width' ) || '550px';
			const pre = dom.lastChild;
			const meta = pre.innerText;
			return { src, alt, title, meta, width, plotID };
		}
	}]
};


// EXPORTS //

export default plotContainerSpec;
