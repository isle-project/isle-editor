// MODULES //

import { marks } from 'prosemirror-schema-basic';


// MAIN //

const subscript = {
	excludes: 'superscript',
	parseDOM: [
		{ tag: 'sub' },
		{ style: 'vertical-align=sub' }
	],
	toDOM: () => ['sub']
};

const superscript = {
	excludes: 'superscript',
	parseDOM: [
		{ tag: 'sub' },
		{ style: 'vertical-align=sub' }
	],
	toDOM: () => ['sub']
};

const strikethrough = {
	parseDOM: [
		{ tag: 'strike' },
		{ style: 'text-decoration:line-through' },
		{ style: 'text-decoration-line:line-through' }
	],
	toDOM: () => ['strike']
};

const underline = {
	parseDOM: [
		{ tag: 'u' },
		{ style: 'text-decoration:underline' }
	],
	toDOM: () => [
		'span',
		{
			style: 'text-decoration:underline'
		}
	]
};

export default {
	...marks,
	subscript,
	superscript,
	underline,
	strikethrough
};
