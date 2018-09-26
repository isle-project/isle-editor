// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import TeX from 'components/tex';
import NINF from '@stdlib/constants/math/float64-ninf';
import PINF from '@stdlib/constants/math/float64-pinf';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';


// VARIABLES //

const SQRT12_INV = 1.0 / sqrt( 12.0 );


// FUNCTIONS //

const generateProbs = ( lower, upper, props ) => {
	let mean;
	let se;
	switch ( props.activeDistribution ) {
		default:
		case 1:
			mean = ( props.b + props.a ) / 2.0;
			se = SQRT12_INV * abs( props.b - props.a ) / sqrt( props.n );
			break;
		case 2:
			mean = 1.0 / props.lambda;
			se = ( 1.0 / props.lambda ) / sqrt( props.n );
			break;
		case 3:
			mean = props.mu;
			se = props.sigma / sqrt( props.n );
			break;
	}
	let rangeProb = pnorm( upper, mean, se ) - pnorm( lower, mean, se );
	return {
		rangeProb,
		lower,
		upper
	};
};


// MAIN //

class ProbMeanRange extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			lower: NINF,
			upper: PINF,
			rangeProb: 1.0,
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.activeDistribution !== prevState.activeDistribution ||
			nextProps.a !== prevState.a ||
			nextProps.b !== prevState.b ||
			nextProps.lambda !== prevState.lambda ||
			nextProps.mu !== prevState.mu ||
			nextProps.sigma !== prevState.sigma ||
			nextProps.n !== prevState.n
		) {
			const newState = {
				...generateProbs( prevState.lower, prevState.upper, nextProps ),
				...nextProps
			};
			return newState;
		}
		return null;
	}

	render() {
		return (
			<Card body>
				<TeX raw={`P( L = ${this.state.lower} < \\bar X < U = ${this.state.upper}) = ${this.state.rangeProb.toFixed( 3 )}`} elems={{
					L: {
						variable: 'L',
						onChange: ( lower ) => {
							const newState = generateProbs( lower, this.state.upper, this.props );
							this.setState( newState );
						},
						defaultValue: this.state.lower
					},
					U: {
						variable: 'U',
						onChange: ( upper ) => {
							const newState = generateProbs( this.state.lower, upper, this.props );
							this.setState( newState );
						},
						defaultValue: this.state.upper
					}
				}} displayMode />
			</Card>
		);
	}
}


// PROPERTY TYPES //

ProbMeanRange.propTypes = {
	a: PropTypes.number.isRequired,
	activeDistribution: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired,
	lambda: PropTypes.number.isRequired,
	mu: PropTypes.number.isRequired,
	n: PropTypes.number.isRequired,
	sigma: PropTypes.number.isRequired
};


// EXPORTS //

export default ProbMeanRange;
