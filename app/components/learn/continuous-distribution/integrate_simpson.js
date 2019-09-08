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

// MODULES //

import isnan from '@stdlib/math/base/assert/is-nan';
import abs from '@stdlib/math/base/special/abs';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'integrate-simpson' );


// MAIN //

// This algorithm adapted from pseudocode in:
// http://www.math.utk.edu/~ccollins/refs/Handouts/rich.pdf
function adsimp( f, a, b, fa, fm, fb, V0, tol, maxdepth, depth, state ) { // eslint-disable-line max-params
	if ( state.nanEncountered ) {
		return NaN;
	}
	let h = b - a;
	let f1 = f(a + h * 0.25);
	let f2 = f(b - h * 0.25);

	// Simple check for NaN:
	if ( isnan(f1) ) {
		state.nanEncountered = true;
		return;
	}

	// Simple check for NaN:
	if ( isnan(f2) ) {
		state.nanEncountered = true;
		return;
	}

	let sl = h * (fa + 4 * f1 + fm) / 12;
	let sr = h * (fm + 4 * f2 + fb) / 12;
	let s2 = sl + sr;
	let err = (s2 - V0) / 15;

	if ( depth > maxdepth ) {
		state.maxDepthCount++;
		return s2 + err;
	} else if ( abs(err) < tol ) {
		return s2 + err;
	}
	const m = a + h * 0.5;

	const V1 = adsimp(f, a, m, fa, f1, fm, sl, tol * 0.5, maxdepth, depth + 1, state);
	if ( isnan(V1) ) {
		state.nanEncountered = true;
		return NaN;
	}
	const V2 = adsimp(f, m, b, fm, f2, fb, sr, tol * 0.5, maxdepth, depth + 1, state);
	if ( isnan(V2) ) {
		state.nanEncountered = true;
		return NaN;
	}
	return V1 + V2;
}

/**
* Compute the definite integral of scalar function f from a to b.
*
* @param {Function} f - function to be integrated. A function of one variable that returns a value.
* @param {number} a - lower limit of integration
* @param {number} b - upper limit of integration
* @param {number} [tol=1e-8] - The relative error required for an interval to be subdivided, based on Richardson extrapolation. Be careful — the total accumulated error may be significantly less and result in more function evaluations than necessary
* @param {integer} [maxdepth=20] - maximum recursion depth. If reached, computation continues and a warning is output to the console
*/
function integrate( f, a, b, tol, maxdepth ) {
	const state = {
		maxDepthCount: 0,
		nanEncountered: false
	};
	if ( tol === void 0 ) {
		tol = 1e-8;
	}
	if ( maxdepth === void 0 ) {
		maxdepth = 20;
	}
	const fa = f(a);
	const fm = f(0.5 * (a + b));
	const fb = f(b);

	const V0 = (fa + 4 * fm + fb) * (b - a) / 6;

	const result = adsimp(f, a, b, fa, fm, fb, V0, tol, maxdepth, 1, state);

	if ( state.maxDepthCount > 0 ) {
		debug('integrate-adaptive-simpson: Warning: maximum recursion depth (' + maxdepth + ') reached ' + state.maxDepthCount + ' times');
	}

	if ( state.nanEncountered ) {
		debug('integrate-adaptive-simpson: Warning: NaN encountered. Halting early.');
	}
	return result;
}


// EXPORTS //

export default integrate;
