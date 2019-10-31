// MODULES //

import { marks } from 'prosemirror-schema-basic';
import subscript from './subscript.js';
import textColor from './text_color.js';
import strikethrough from './strikethrough.js';
import superscript from './superscript.js';
import underline from './underline.js'


// MAIN //

const main = {
	...marks,
	subscript,
	superscript,
	underline,
	strikethrough,
	textColor
};


// EXPORTS //

export default main;
