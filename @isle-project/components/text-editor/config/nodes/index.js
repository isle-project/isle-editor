// MODULES //

import { tableNodes } from 'prosemirror-tables';
import paragraphSpec from './paragraph.js';
import headingSpec from './heading.js';
import footnoteSpec from './footnote.js';
import figureCaptionSpec from './figure_caption.js';
import tableCaptionSpec from './table_caption.js';
import plotContainerSpec from './plot_container.js';
import plotSpec from './plot.js';
import docSpec from './doc.js';
import blockquoteSpec from './blockquote.js';
import horizontalRuleSpec from './horizontal_rule.js';
import codeBlockSpec from './code_block.js';
import textSpec from './text.js';
import imageSpec from './image.js';
import hardBreakSpec from './hard_break.js';
import orderedListSpec from './ordered_list.js';
import bulletListSpec from './bullet_list.js';
import listItemSpec from './list_item.js';


// EXPORTS //

export default {
	doc: docSpec,
	plot: plotSpec,
	plotContainer: plotContainerSpec,
	footnote: footnoteSpec,
	paragraph: paragraphSpec,
	ordered_list: orderedListSpec,
	bullet_list: bulletListSpec,
	list_item: listItemSpec,
	blockquote: blockquoteSpec,
	horizontal_rule: horizontalRuleSpec,
	heading: headingSpec,
	code_block: codeBlockSpec,
	text: textSpec,
	image: imageSpec,
	hard_break: hardBreakSpec,
	figureCaption: figureCaptionSpec,
	tableCaption: tableCaptionSpec,
	...tableNodes({
		tableGroup: 'block',
		cellContent: 'block+'
	})
};
