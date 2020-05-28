// MAIN //

function today() {
	const date = new Date();
	let day = date.getDate();
	day = `${day < 10 ? '0' : ''}${day}/`;
	let month = date.getMonth()+1;
	month = `${month < 10 ? '0': ''}${month}/`;
	const year = date.getFullYear();
	if ( navigator.language === 'en-US' ) {
		return month + day + year;
	}
	return day + month + year;
}


// EXPORTS //

export default today;
