// MAIN //

/**
 * Determines whether a user is in a cohort.
 *
 * @param {Object} cohort - cohort object
 * @param {string} userEmail - email address of the user
 * @returns {boolean} boolean indicating whether the respective user is in the cohort
 */
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
