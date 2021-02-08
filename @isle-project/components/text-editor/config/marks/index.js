// MODULES //

import link from './link.js';
import em from './em.js';
import strong from './strong.js';
import code from './code.js';
import subscript from './subscript.js';
import textColor from './text_color.js';
import fontSize from './font_size.js';
import strikethrough from './strikethrough.js';
import superscript from './superscript.js';
import underline from './underline.js';


// MAIN //

const main = {
	link, // Render links first, see: https://discuss.prosemirror.net/t/prevent-marks-from-breaking-up-links/401/5
	code,
	em,
	fontSize,
	strikethrough,
	strong,
	subscript,
	superscript,
	textColor,
	underline // Render underlines last so they have the correct text color
};


// EXPORTS //

export default main;
