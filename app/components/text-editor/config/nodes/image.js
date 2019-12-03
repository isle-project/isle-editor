// MAIN //

const imageSpec = {
	inline: true,
	attrs: {
		src: {},
		alt: { default: null },
		title: { default: null }
	},
	group: 'inline',
	draggable: true,
	parseDOM: [
		{
			tag: 'img[src]',
			getAttrs( dom ) {
				return {
					src: dom.getAttribute( 'src' ),
					title: dom.getAttribute( 'title' ),
					alt: dom.getAttribute( 'alt' )
				};
			}
		}
	],
	toDOM( node ) {
		const { src, alt, title } = node.attrs;
		return [ 'img', { src, alt, title } ];
	}
};


// EXPORTS //

export default imageSpec;
