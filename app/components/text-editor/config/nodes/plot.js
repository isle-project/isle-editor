// MAIN //

const plotSpec = {
	attrs: {
		src: {},
		plotID: {},
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
		tag: 'img[data-plot-id]',
		getAttrs: dom => {
			const src = dom.getAttribute( 'src' );
			const plotID = dom.getAttribute( 'data-plot-id' );
			const title = dom.getAttribute( 'title' );
			const alt = dom.getAttribute( 'alt' );
			const width = dom.getAttribute( 'width' ) || '550px';
			const meta = dom.getAttribute( 'data-plot-meta' );
			return { src, alt, title, meta, width, plotID };
		}
	}]
};


// EXPORTS //

export default plotSpec;
