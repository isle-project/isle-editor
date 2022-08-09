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
* Incrementally generates a unique ID.
*
* @param {string} prefix - prefix for the generated ID
* @returns {string} unique ID
*/
function generateUID( prefix ) {
	let counter = 0;

	const uid = () => {
		counter += 1;
		return `${prefix}-${counter}`;
	};
	return uid;
}


// EXPORTS //

export default generateUID;
