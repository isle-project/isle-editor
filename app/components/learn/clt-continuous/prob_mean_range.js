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

const generateProbs = ( { lower, upper, activeDistribution, a, b, n, lambda, mu, sigma } ) => {
	let mean;
	let se;
	switch ( activeDistribution ) {
		default:
		case 1:
			mean = ( b + a ) / 2.0;
			se = SQRT12_INV * abs( b - a ) / sqrt( n );
			break;
		case 2:
			mean = 1.0 / lambda;
			se = ( 1.0 / lambda ) / sqrt( n );
			break;
		case 3:
			mean = mu;
			se = sigma / sqrt( n );
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
				...generateProbs({
					lower: prevState.lower,
					upper: prevState.upper,
					...nextProps
				}),
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
							const newState = generateProbs({
								lower: lower,
								upper: this.state.upper,
								activeDistribution: this.props.activeDistribution,
								a: this.props.a,
								b: this.props.b,
								n: this.props.n,
								lambda: this.props.lambda,
								mu: this.props.mu,
								sigma: this.props.sigma
							});
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


// PROPERTIES //

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
