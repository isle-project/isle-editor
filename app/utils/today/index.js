// MAIN //

function today() {
	const date = new Date();
	let out = date.getDate() < 10 ? '0' : '';
	out += date.getDate() + '/' + ( ( ( date.getMonth()+1 ) < 10 ) ? '0': '' );
	out += ( date.getMonth()+1 ) + '/' + date.getFullYear();
	return out;
}


// EXPORTS //

export default today;
