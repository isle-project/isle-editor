/**
* Copyright (C) 2016-present The ISLE Authors
*
* The isle-server program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// MODULES //

import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:sketchpad:harmonize-sketchpad-elements' );


// MAIN //

function harmonizeSketchpadElements( userElements, nUndos, userPages = [], ownerPages = [] ) {
	userPages = userPages.map( x => x.page );
	ownerPages = ownerPages.map( x => x.page );

	for ( let i = 0; i < userPages.length; i++ ) {
		const page = userPages[ i ];
		if ( !ownerPages.includes( page ) ) {
			debug( 'Removing elements from page '+page );
			userElements.splice( page, 1 );
			nUndos.splice( page, 1 );
		}
	}
	for ( let i = 0; i < ownerPages.length; i++ ) {
		const page = ownerPages[ i ];
		if ( !userPages.includes( page ) ) {
			debug( 'Adding an empty page at position '+page );
			userElements.splice( page, 0, [] );
			nUndos.splice( page, 0, 0 );
		}
	}
}


// EXPORTS //

export default harmonizeSketchpadElements;
