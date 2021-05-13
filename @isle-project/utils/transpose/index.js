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

// MODULES //

import ndarray from '@stdlib/ndarray/ctor';


// MAIN //

/**
* Transposes a matrix.
*
* @param {Matrix} X - input matrix (2d `ndarray`)
* @returns matrix transpose
*/
const transpose = ( X ) => {
	const shape = [ X.shape[ 1 ], X.shape[ 0 ] ];
	const strides = [ X.strides[ 1 ], X.strides[ 0 ] ];
	const offset = X.offset;
	const order = X.order;
	return ndarray( 'float64', X._buffer, shape, strides, offset, order );
};


// EXPORTS //

export default transpose;
