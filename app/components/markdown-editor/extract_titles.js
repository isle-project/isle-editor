function extractTitles( match ) {
	let advisor;
	let title;
	let name;

	const titleIndex = match.indexOf('Title: ');
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
	var expObj = {
		'name': name,
		'title': title,
		'advisor': advisor
	};
	return expObj;
}
export default extractTitles;