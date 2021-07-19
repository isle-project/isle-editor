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
 * Returns today's date.
 *
 * @returns {string} today's date formatted as `<month>/<day>/<year>` or `<day>/<month>/<year>` depending on locale.
 */
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
