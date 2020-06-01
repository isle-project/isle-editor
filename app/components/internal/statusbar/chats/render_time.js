// MAIN //

function renderTime( time ) {
	return new Date( time ).toLocaleTimeString( [], {
		hour: '2-digit',
		minute: '2-digit',
		month: 'short',
		day: 'numeric'
	});
}


// EXPORTS //

export default renderTime;
