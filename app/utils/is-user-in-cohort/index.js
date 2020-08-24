// MAIN //

function isUserInCohort( cohort, userEmail ) {
	const members = cohort.members;
	for ( let i = 0; i < members.length; i++ ) {
		const member = members[ i ];
		if ( member.email === userEmail ) {
			return true;
		}
	}
	return false;
}


// EXPORTS //

export default isUserInCohort;
