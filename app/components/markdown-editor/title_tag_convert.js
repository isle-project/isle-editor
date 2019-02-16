// MODULES //

import logger from 'debug';
import extractTitles from './extract_titles.js';


// VARIABLES //

const debug = logger( 'isle:markdown-editor:title-tag-convert' );
const RE_TITLE = /<!--TitleText([\s\S]*?)-->/;


// FUNCTIONS //

function replacerHTML( str, match ) {
	var ids = extractTitles( match );
	debug(' The object of the ids in replacerHTML is ' + JSON.stringify(ids) );
	var html = `${ids.title ? `<h1 class='center' style="font-size: 48px; width: 100%">${ids.title}</h1>` : null}
		${ids.name ? `<h2 class='center' style="font-size: 44px; width: 100%">${ids.name}` : null}`;
	html += `<br />${ids.advisor ? `Advisor(s): ${ids.advisor}` : null}</h2>`;
	debug(' the HTML in replacerHTML is ' + html );
	return html;
}


// MAIN //

function titleTagConvert( plainText ) {
	// Use a regular expression to match the contents of the title comment:
	return plainText.replace( RE_TITLE, replacerHTML );
}


// EXPORTS //

export default titleTagConvert;
