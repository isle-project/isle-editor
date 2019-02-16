// MODULES //

import logger from 'debug';


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

function extractTitles( match ) {
	let advisor;
	let title;
	let name;

	const titleIndex = match.indexOf( 'Title: ' );
	if ( titleIndex !== -1 ) {
		const titleStartsAt = titleIndex + 'Title: '.length;
		const secondNewLineIndex = match.indexOf( '\n', titleIndex + 1 );
		title = match.slice( titleStartsAt, secondNewLineIndex );
	}

	const nameIndex = match.indexOf('Name: ');
	if ( nameIndex !== -1 ) {
		const nameStartsAt = nameIndex + 'Name: '.length;
		const nameLineIndex = match.indexOf( '\n', nameStartsAt );
		name = match.slice( nameStartsAt, nameLineIndex );
	}

	const advisorIndex = match.indexOf('Advisor: ' );
	if ( advisorIndex !== -1 ) {
		const advisorStartsAt = advisorIndex + 'Advisor: '.length;
		const advisorLineIndex = match.indexOf( '\n', advisorStartsAt );
		advisor = match.slice( advisorStartsAt, advisorLineIndex );
	}
	return {
		'name': name,
		'title': title,
		'advisor': advisor
	};
}


// MAIN //

function titleTagConvert( plainText ) {
	// Use a regular expression to match the contents of the title comment:
	return plainText.replace( RE_TITLE, replacerHTML );
}


// EXPORTS //

export default titleTagConvert;
