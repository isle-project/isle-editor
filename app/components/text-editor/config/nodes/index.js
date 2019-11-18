// MODULES //

import { nodes } from 'prosemirror-schema-basic';
import { listItem, bulletList, orderedList } from 'prosemirror-schema-list';
import { tableNodes } from 'prosemirror-tables';
import paragraphSpec from './paragraph.js';
import headingSpec from './heading.js';
import plotSpec from './plot.js';


// MAIN //

const listNodes = {
	ordered_list: {
		...orderedList,
		content: 'list_item+',
		group: 'block'
	},
	bullet_list: {
		...bulletList,
		content: 'list_item+',
		group: 'block'
	},
	list_item: {
		...listItem,
		content: 'paragraph block*',
		group: 'block'
	}
};

const footnoteSpec = {
	group: 'inline',
	content: 'inline*',
	inline: true,
	atom: true,
	toDOM: () => ['footnote', 0],
	parseDOM: [{
		tag: 'footnote'
	}]
};


// EXPORTS //

export default {
	plot: plotSpec,
	footnote: footnoteSpec,
	...nodes,
	...listNodes,
	paragraph: paragraphSpec,
	heading: headingSpec,
	...tableNodes({
		tableGroup: 'block',
		cellContent: 'block+'
	})
};
