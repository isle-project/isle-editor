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

const calculateProb = ( value, props ) => {
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
			const newState = calculateProb( prevState.cutoff, nextProps );
			return {
				...newState,
				...nextProps
			};
		}
	}

	render() {
		return (
			<Card body>
				<NumberInput
					step="any"
					legend={<TeX raw="x" />}
					onChange={( value ) => {
						const newState = calculateProb( value, this.props );
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


// TYPES //

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
