// MODULES //

import contains from '@stdlib/assert/contains';


// VARIABLES //

const RE_HEADING = /<h([0-5])([^>]*)>(.*?)<\/h[0-5]>/g;
const RE_PARAGRAPH = /<p([^>]*)>([\s\S]+?)<\/p>/g;
const RE_TABLE = /<table([^>]*)>([\s\S]+?)<\/table>/g;
const RE_LIST = /<ul([^>]*)>([\s\S]+?)<\/ul>/g;
const RE_LIST_ITEM = /<li([^>]*)>([\s\S]+?)<\/li>/g;
const RE_THEAD = /<thead([^>]*)>([\s\S]+?)<\/thead>/g;
const RE_TBODY = /<tbody([^>]*)>([\s\S]+?)<\/tbody>/g;
const RE_TABLE_ROW = /<tr([^>]*)>([\s\S]+?)<\/tr>/g;
const RE_TABLE_HEADER_ITEM = /<th([^>]*)>([\s\S]+?)<\/th>/g;
const RE_TABLE_ITEM = /<td([^>]*)>([\s\S]+?)<\/td>/g;


// MAIN

function transformToPresentation( code, preamble ) {
	let progress = 'number';
	if ( preamble.presentation ) {
		if ( preamble.presentation.progress ) {
			progress = preamble.presentation.progress;
		}
	}
	let pres = code;

	// Automatically insert <Slide> tags if not manually set...
	if ( !contains( code, '<Slide' ) || !contains( code, '</Slide>' ) ) {
		pres = '<Slide>';
		let arr = code.split( '<p>===</p>' );
		pres += arr.join( '</Slide><Slide>' );
		pres += '</Slide>';
	}
	pres = pres.replace( RE_HEADING, '<Heading size={$1}$2>$3</Heading>' );
	pres = pres.replace( RE_PARAGRAPH, '<SText$1>$2</SText>' );
	pres = pres.replace( RE_LIST, '<List$1>$2</List>' );
	pres = pres.replace( RE_LIST_ITEM, '<ListItem$1>$2</ListItem>' );
	pres = pres.replace( RE_TABLE, '<Table$1>$2</Table>' );
	pres = pres.replace( RE_THEAD, '<TableHeader$1>$2</TableHeader>' );
	pres = pres.replace( RE_TBODY, '<TableBody$1>$2</TableBody>' );
	pres = pres.replace( RE_TABLE_ROW, '<TableRow$1>$2</TableRow>' );
	pres = pres.replace( RE_TABLE_HEADER_ITEM, '<TableHeaderItem$1>$2</TableHeaderItem>' );
	pres = pres.replace( RE_TABLE_ITEM, '<TableItem$1>$2</TableItem>' );

	// Add opening <Deck> tag in front of first slide:
	pres = pres.replace( '<Slide>', `<Deck
		globalStyles={false}
		controls={true}
		progress="${progress}"
		transition={[]}
		theme={SPECTACLE_THEME}
	><Slide>` );

	// Append closing </Deck> after last slide:
	const lastPos = pres.lastIndexOf( '</Slide>' );
	const replacement = '</Slide></Deck>';
	pres = pres.substring( 0, lastPos ) + replacement + pres.substring( lastPos+'</Slide>'.length );
	return `<div>
		<KeyControls actions={{
			'ArrowUp': function() {
				const e = new KeyboardEvent( 'keydown', { 'bubbles': true, 'key': 'ArrowRight', 'code': 'ArrowRight' });
				delete e.keyCode;
				Object.defineProperty( e, 'keyCode', { 'value' : 39 });
				document.dispatchEvent( e );
			},
			'ArrowDown': function() {
				const e = new KeyboardEvent( 'keydown', { 'bubbles': true, 'key': 'ArrowLeft', 'code': 'ArrowLeft' });
				delete e.keyCode;
				Object.defineProperty( e, 'keyCode', { 'value' : 37 });
				document.dispatchEvent( e );
			}
		}}/>
		${pres}
	</div>`;
}


// EXPORTS //

export default transformToPresentation;
