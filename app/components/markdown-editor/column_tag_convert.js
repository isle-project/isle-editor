import replace from '@stdlib/string/replace';

const columnTagConvert = ( plainText ) => {
	let firstIndex;
	const findRegExpr = /<!--ColGroupStart-->([\s\S]*?)<!--ColGroupEnd-->/g;
	plainText = plainText.replace(findRegExpr, (match, capture) => {
		const RANDOMSTR = '3hiueronenrklnwfkln';
		let colCount = 1;
		match = match.replace( '<!--ColGroupStart-->', `<div style="display: table"><div style="width: ${RANDOMSTR}%; float: left;">` );
		match = match.replace( '<!--ColGroupEnd-->', '</div></div>' );
		while ( match.includes('<!--Column') ) {
			firstIndex = match.indexOf( '<!--Column' );
			if ( match.charAt(firstIndex + '<!--Column'.length) === '-' ) {
				break;
			}
			colCount += 1;
			match = match.replace( `<!--Column${colCount}-->`, `</div>\n<div style="width: ${RANDOMSTR}%; float: left;">` );
		}
		const colWidth = 100 / colCount;
		match = replace( match, RANDOMSTR, colWidth.toString() );
		return match;
	});
	return plainText;
};

export default columnTagConvert;
