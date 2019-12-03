// MODULES //

import ParagraphNodeSpec, { getParagraphNodeAttrs, toParagraphDOM } from './paragraph.js';


// FUNCTIONS //

function toDOM( node ) {
	const dom = toParagraphDOM( node );
	dom[ 0 ] = 'legend';
	console.log( dom );
	dom[ 1 ].class = 'figure-caption';
	return dom;
}

function getAttrs( dom ) {
	const attrs = getParagraphNodeAttrs( dom );
	console.log( attrs );
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
