// MODULES //

import contains from '@stdlib/assert/contains';


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
	pres = pres.replace( /<h([0-5])>(.*?)<\/h[0-5]>/g, '<Heading size={$1}>$2</Heading>' );
	pres = pres.replace( /<p[^>]*>([\s\S]+?)<\/p>/g, '<SText>$1</SText>' );
	pres = pres.replace( /<ul[^>]*>([\s\S]+?)<\/ul>/g, '<List>$1</List>' );
	pres = pres.replace( /<li[^>]*>([\s\S]+?)<\/li>/g, '<ListItem>$1</ListItem>' );
	pres = pres.replace( /<table[^>]*>([\s\S]+?)<\/table>/g, '<Table>$1</Table>' );
	pres = pres.replace( /<thead[^>]*>([\s\S]+?)<\/thead>/g, '<TableHeader>$1</TableHeader>' );
	pres = pres.replace( /<tbody[^>]*>([\s\S]+?)<\/tbody>/g, '<TableBody>$1</TableBody>' );
	pres = pres.replace( /<tr[^>]*>([\s\S]+?)<\/tr>/g, '<TableRow>$1</TableRow>' );
	pres = pres.replace( /<th[^>]*>([\s\S]+?)<\/th>/g, '<TableHeaderItem>$1</TableHeaderItem>' );
	pres = pres.replace( /<td[^>]*>([\s\S]+?)<\/td>/g, '<TableItem>$1</TableItem>' );
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
		<Deck
			globalStyles={false}
			controls={true}
			progress="${progress}"
			transition={[]}
			theme={SPECTACLE_THEME}
		>
			${pres}
		</Deck>
	</div>`;
}


// EXPORTS //

export default transformToPresentation;
