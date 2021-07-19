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
 * Returns a z-index adjustment for an element.
 *
 * @param {Element} child - element
 * @returns {number} z-index
 */
function zIndexAdjustment( child ) {
	if ( !child ) {
		return 0;
	}
	let node = child.parentNode;
	while ( node instanceof HTMLElement ) {
		const computedStyle = window.getComputedStyle( node );
		const zIndex = computedStyle.getPropertyValue( 'z-index' );
		if ( zIndex !== 'auto' ) {
			return zIndex;
		}
		node = node.parentNode;
	}
	return 0;
}


// EXPORTS //

export default zIndexAdjustment;
