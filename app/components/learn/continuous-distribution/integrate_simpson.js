/**
* The MIT License (MIT)
*
* Copyright (c) 2015 Ricky Reusser
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

// MAIN //

/**
* Compute the definite integral of scalar function f from a to b.
*
* @param {Function} f - function to be integrated. A function of one variable that returns a value.
* @param {number} a - lower limit of integration
* @param {number} b - upper limit of integration
* @param {integer} n - number of intervals, equal to the number of quadratic segments; results in `2n + 1` function evaluations
*/
function integrate( f, a, b, n ) {
	const n2 = n*2;
	const h = ( b - a ) / n2;
	let sum = f( a ) + f( b );
	for ( let i = 1; i < n2; i += 2 ) {
		sum += 4 * f( a + i*h );
	}
	for ( let i = 2; i < n2 - 1; i += 2 ) {
		sum += 2 * f( a + i*h );
	}
	console.log( h / 3 );
	return sum * h / 3;
}


// EXPORTS //

export default integrate;
