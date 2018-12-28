// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import TeX from 'components/tex';
import NumberInput from 'components/input/number';
import sqrt from '@stdlib/math/base/special/sqrt';
import abs from '@stdlib/math/base/special/abs';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';


// VARIABLES //

const SQRT12_INV = 1.0 / sqrt( 12.0 );


// FUNCTIONS //

const calculateProb = ({ value, activeDistribution, a, b, n, lambda, mu, sigma }) => {
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
	const leftProb = pnorm( value, mean, se );
	const rightProb = 1.0 - leftProb;
	return {
		leftProb,
		rightProb,
		cutoff: value
	};
};


// MAIN //

class ProbMean extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			cutoff: 0,
			leftProb: 0,
			rightProb: 1,
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
			nextProps.n !== prevState.n ||
			nextProps.sigma !== prevState.sigma
		) {
			const newState = calculateProb({
				value: prevState.cutoff,
				activeDistribution: nextProps.activeDistribution,
				a: nextProps.a,
				b: nextProps.b,
				n: nextProps.n,
				lambda: nextProps.lambda,
				mu: nextProps.mu,
				sigma: nextProps.sigma
			});
			return {
				...newState,
				...nextProps
			};
		}
		return {};
	}

	render() {
		return (
			<Card body>
				<NumberInput
					step="any"
					legend={<TeX raw="x" />}
					onChange={( value ) => {
						const newState = calculateProb({
							value: value,
							activeDistribution: this.props.activeDistribution,
							a: this.props.a,
							b: this.props.b,
							n: this.props.n,
							lambda: this.props.lambda,
							mu: this.props.mu,
							sigma: this.props.sigma
						});
						this.setState( newState );
					}}
				/>
				<TeX raw={`P( \\bar X < ${this.state.cutoff} ) = ${this.state.leftProb.toFixed( 3 )}`} />
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<TeX raw={`P( \\bar X \\ge ${this.state.cutoff} ) = ${this.state.rightProb.toFixed( 3 )}`} />
			</Card>
		);
	}
}


// PROPERTIES //

ProbMean.propTypes = {
	a: PropTypes.number.isRequired,
	activeDistribution: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired,
	lambda: PropTypes.number.isRequired,
	mu: PropTypes.number.isRequired,
	n: PropTypes.number.isRequired,
	sigma: PropTypes.number.isRequired
};


// EXPORTS //

export default ProbMean;
