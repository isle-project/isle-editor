// MODULES //

import { getImageAttrs } from './image.js';


// MAIN //

const plotContainerSpec = {
	attrs: {
		src: {},
		plotID: { default: null },
		align: { default: null },
		alt: { default: '' },
		crop: { default: null },
		title: { default: '' },
		meta: { default: null },
		width: { default: null },
		height: { default: null },
		rotate: { default: null }
	},
	inline: true,
	group: 'inline',
	draggable: true,
	toDOM: node => {
		return [ 'div',
			{
				class: 'img-container',
				'data-plot-id': node.attrs.plotID,
				align: node.attrs.align
			},
			[ 'img',
				{
					src: node.attrs.src,
					align: node.attrs.align,
					alt: node.attrs.alt,
					crop: node.attrs.crop,
					title: node.attrs.title,
					width: node.attrs.width,
					height: node.attrs.height,
					rotate: node.attrs.rotate
				}
			],
			[ 'pre',
				{
					class: 'img-tooltip'
				},
				node.attrs.meta
			]
		];
	},
	parseDOM: [{
		priority: 51,
		tag: 'div[data-plot-id]',
		getAttrs: dom => {
			const plotID = dom.getAttribute( 'data-plot-id' );
			const img = dom.firstChild;
			const attrs = getImageAttrs( img );
			const pre = dom.lastChild;
			const meta = pre.innerText;
			return { ...attrs, meta, plotID };
		}
	}]
};


// EXPORTS //

export default plotContainerSpec;
