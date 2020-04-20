// MAIN //

function retrieveUserGroup( groups, user ) {
	for ( let i = 0; i < groups.length; i++ ) {
		const group = groups[ i ];
		for ( let j = 0; j < group.members.length; j++ ) {
			if ( group.members[ j ].email === user.email ) {
				return group;
			}
		}
	}
	return null;
}


// EXPORTS //

export default retrieveUserGroup;
