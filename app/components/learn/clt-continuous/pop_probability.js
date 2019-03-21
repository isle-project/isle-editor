// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import TeX from 'components/tex';
import NumberInput from 'components/input/number';
import pexp from '@stdlib/stats/base/dists/exponential/cdf';
import punif from '@stdlib/stats/base/dists/uniform/cdf';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';


// FUNCTIONS //

const generatePopProbs = ( value, { a, b, activeDistribution, mu, lambda, sigma } ) => {
	let popLeftProb;
	switch ( activeDistribution ) {
		default:
		case 1:
			popLeftProb = punif( value, a, b );
			break;
		case 2:
			popLeftProb = pexp( value, lambda );
			break;
		case 3:
			popLeftProb = pnorm( value, mu, sigma );
			break;
	}
	const popRightProb = 1.0 - popLeftProb;
	return {
		popCutoff: value,
		popLeftProb,
		popRightProb
	};
};


// MAIN //

class ProbMean extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			popLeftProb: 0,
			popRightProb: 1,
			popCutoff: 0,
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const { a, b, activeDistribution, mu, lambda, sigma } = nextProps;
		if (
			activeDistribution !== prevState.activeDistribution ||
			a !== prevState.a ||
			b !== prevState.b ||
			lambda !== prevState.lambda ||
			mu !== prevState.mu ||
			sigma !== prevState.sigma
		) {
			return {
				...generatePopProbs(
					prevState.popCutoff, { a, b, activeDistribution, mu, lambda, sigma }
				),
				...nextProps
			};
		}
		return null;
	}

	render() {
		const { a, b, activeDistribution, mu, lambda, sigma } = this.props;
		return (
			<Card body>
				<NumberInput
					inline
					step="any"
					legend={<TeX raw="x" />}
					onChange={( value ) => {
						const newState = generatePopProbs( value, { a, b, activeDistribution, mu, lambda, sigma } );
						this.setState( newState );
					}}
				/>
				<TeX raw={`P( X < ${this.state.popCutoff} ) = ${this.state.popLeftProb.toFixed( 3 )}`} />
				<span>&nbsp;&nbsp;&nbsp;</span>
				<TeX raw={`P( X \\ge ${this.state.popCutoff} ) = ${this.state.popRightProb.toFixed( 3 )}`}
				/>
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
	sigma: PropTypes.number.isRequired
};


// EXPORTS //

export default ProbMean;
