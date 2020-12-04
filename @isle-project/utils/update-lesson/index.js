/**
* Copyright (C) 2020-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
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
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// MAIN //

/**
* Forces an update of the current lesson.
*/
function updateLesson() {
	const lesson = window.lesson || global.lesson;
	if ( lesson && !lesson.unmounted ) {
		console.log( 'Update lesson...' ); // eslint-disable-line no-console
		lesson.forceUpdate();
	}
}


// EXPORTS //

export default updateLesson;
