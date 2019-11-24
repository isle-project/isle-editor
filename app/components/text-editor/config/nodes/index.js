// MODULES //

import { nodes } from 'prosemirror-schema-basic';
import { listItem, bulletList, orderedList } from 'prosemirror-schema-list';
import { tableNodes } from 'prosemirror-tables';
import paragraphSpec from './paragraph.js';
import headingSpec from './heading.js';
import footnoteSpec from './footnote.js';
import plotContainerSpec from './plot_container.js';
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


// EXPORTS //

export default {
	plot: plotSpec,
	plotContainer: plotContainerSpec,
	footnote: footnoteSpec,
	paragraph: paragraphSpec,
	...nodes,
	...listNodes,
	heading: headingSpec,
	...tableNodes({
		tableGroup: 'block',
		cellContent: 'block+'
	})
};
