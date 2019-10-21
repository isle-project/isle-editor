// MODULES //

import logger from 'debug';
import incrspace from '@stdlib/math/utils/incrspace';
import sign from '@stdlib/math/base/special/signum';
import isArrayArray from '@stdlib/assert/is-array-array';
import isMatrixLike from '@stdlib/assert/is-matrix-like';
import ctor from '@stdlib/ndarray/ctor';
import ndarray from '@stdlib/ndarray/array';
import isNumber from '@stdlib/assert/is-number';
import isArrayLike from '@stdlib/assert/is-array-like';
import abs from '@stdlib/math/base/special/abs';
import mmult from 'utils/mmult';
import transpose from 'utils/transpose';
import subtract from 'utils/subtract';
import divide from 'utils/divide';
import dotm from './dotm.js';
import dotv from './dotv.js';
import softThresholding from './soft_thresholding.js';


// VARIABLES //

const debug = logger( 'isle:lasso' );
const matrix = ctor( 'generic', 2 );
const PRECISION = 1e-9;


// FUNCTIONS //

const mget = ( x, j ) => {
	const out = new Float64Array( x.shape[ 0 ] );
	for ( let i = 0; i < out.length; i++ ) {
		out[ i ] = x.get( i, j );
	}
	return out;
};


// MAIN //

/**
* Lasso object to fit regression.
*
* @constructor
* @returns {LassoFit} instance
*/
function LassoFit( y, x, lambda ) {
	this.y = y;
	this.x = x;
	this.lambda = lambda;

	this.N = x.shape[ 0 ];
	this.p = x.shape[ 1 ];

	// Initialize model parameters to zero:
	this.beta = new Float64Array( this.p );
	this.betast = new Float64Array( this.p );

	// Initialize active set to all predictors:
	this.active = incrspace( 0, this.beta.length, 1 );
	this.nonactive = [];

	// Matrix holding partial residuals:
	this.presid = matrix( new Float64Array( x._buffer.length ), x.shape, x.strides, x.offset, x.order );

	this.init = () => {
		this.iteration = 0;
		this.iterate();
	};
	this.init();
}

/**
* Checks the Karush-Khun-Tucker (KKT) conditions for an optimal solution.
*
* @returns {boolean} returns true if optimal conditions are satisfied, false otherwise
*/
LassoFit.prototype.testKKT = function testKKT() {
	const beta = this.beta;
	const N = this.N;
	const x = this.x;
	const y = this.y;

	const ymxb = subtract( y, mmult( x, beta ) );
	const G = divide( mmult( transpose( x ), ymxb ), N );
	for ( let i = 0; i < beta.length; i++ ) {
		if ( beta[ i ] === 0 ) {
			if ( abs( G[i] ) > this.lambda + PRECISION ) {
				return false;
			}
		} else if ( beta[ i ] > 0 ) {
			if ( G[i] - this.lambda * sign( beta[i] ) > PRECISION ) {
				return false;
			}
		}
	}
	return true;
};

/**
* Exclusion test for all predictors not in active set. If one or more predictors fail the test, they are included in the active set.
*
* @returns {boolean} returns true if active set was changed, false otherwise
*/
LassoFit.prototype.testActiveSet = function testActiveSet() {
	let changed = false;

	const { residuals } = this.predict( this.x );

	// See whether non-active variables all pass exclusion test:
	for ( let j = 0; j < this.nonactive.length; j++ ) {
		const jVal = this.nonactive[ j ];
		const xj = mget( this.x, jVal );
		if ( abs( dotv( xj, residuals ) ) / this.N > this.lambda ) {
			// Test failed: include predictor in active set -> iterate again
			this.active.push( jVal );
			this.nonactive.splice( j, 1 );
			changed = true;
		}
	}
	debug( 'Active set changes...' );
	return changed;
};

/**
* Iterate over the active set of predictors and perform coordinate descent until convergence.
*
* @returns {void}
*/
LassoFit.prototype.iterate = function iterate() {
	const N = this.N;
	const p = this.p;
	const x = this.x;
	const y = this.y;

	this.iteration += 1;
	if ( this.iteration > 10000 ) {
		// Break out after maximum number of iterations is reached...
		return;
	}

	let converged = true;
	for ( let j = 0; j < this.active.length; j++ ) {
		const jVal = this.active[ j ];
		for ( let i = 0; i < N; i++ ) {
			const rval = y[ i ];
			for ( let k = 0; k < p; k++ ) {
				rval -= ( jVal !== k ) ? x.get( i, k ) * this.beta[ k ] : 0;
			}
			this.presid.set( i, jVal, rval );
		}
		this.betast[ jVal ] = (1/N) * dotm( x, this.presid, jVal );
		const betaOld = this.beta[ jVal ];
		const betaNew = softThresholding( this.betast[ jVal ], this.lambda );
		if ( abs( betaNew - betaOld ) > PRECISION ) {
			converged = false;
		}
		this.beta[ jVal ] = betaNew;
	}
	// Recompute active set:
	for ( let j = this.active.length - 1; j >= 0; j-- ) {
		const jVal = this.active[ j ];
		if ( abs( this.beta[ jVal ] ) < PRECISION ) {
			this.active.splice( j, 1 );
			this.nonactive.push( jVal );
		}
	}
	if ( converged === false ) {
		this.iterate();
	} else if ( this.testActiveSet() ) {
		this.iterate();
	}
};

/**
* Calculates the current model fitted values (yhat) and residuals (e = y - yhat).
*
* @returns {Object} fitted values and residuals
*/
LassoFit.prototype.predict = function predict( x ) {
	if ( isArrayArray( x ) ) {
		x = ndarray( x );
	}
	const fitted = mmult( x, this.beta );
	const residuals = new Array( this.N );
	for ( let i = 0; i < this.N; i++ ) {
		residuals[ i ] = this.y[ i ] - fitted[ i ];
	}
	return { fitted, residuals };
};


// MAIN //

/**
* Fit lasso regression via coordinate descent.
*
* @param {Matrix|Array} x - design matrix
* @param {NumberArray} y - response vector
* @param {number} lambda - L1 penalty value
* @returns {Object} regression model
*/
function lasso( x, y, lambda ) {
	if ( !isNumber ) {
		throw new TypeError( 'invalid input argument. The third argument must be a number primitive. Value: `' + lambda + '`' );
	}
	if ( !isArrayLike( y ) ) {
		throw new TypeError( 'invalid input argument. The second argument must be array-like. Value: `' + y + '`' );
	}
	if ( isArrayArray( x ) ) {
		x = ndarray( x );
	} else if ( !isMatrixLike( x ) ) {
		const msg = 'invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `' + x + '`';
		throw new TypeError( msg );
	}
	return new LassoFit( y, x, lambda );
}


// EXPORTS //

export default lasso;
