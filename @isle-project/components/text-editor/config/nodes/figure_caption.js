// MODULES //

import ParagraphNodeSpec, { getParagraphNodeAttrs, toParagraphDOM } from './paragraph.js';


// FUNCTIONS //

function toDOM( node ) {
	const dom = toParagraphDOM( node );
	dom[ 0 ] = 'legend';
	dom[ 1 ].class = 'figure-caption';
	return dom;
}

function getAttrs( dom ) {
	const attrs = getParagraphNodeAttrs( dom );
	return attrs;
}


// MAIN //

const figureCaption = {
	...ParagraphNodeSpec,
	attrs: {
		...ParagraphNodeSpec.attrs
	},
	content: 'inline*',
	group: 'block',
	defining: true,
	toDOM,
	parseDOM: [
		{ tag: 'legend', getAttrs }
	]
};


// EXPORTS //

export default figureCaption;
