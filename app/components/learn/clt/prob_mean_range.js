// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import TeX from 'components/tex';
import NINF from '@stdlib/constants/math/float64-ninf';
import PINF from '@stdlib/constants/math/float64-pinf';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import pnorm from '@stdlib/math/base/dists/normal/cdf';


// VARIABLES //

const SQRT12_INV = 1.0 / sqrt( 12.0 );


// MAIN //

class ProbMeanRange extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			lower: NINF,
			upper: PINF,
			rangeProb: 1.0
		};
	}

	componentWillReceiveProps( nextProps ) {
		if (
			nextProps.activeDistribution !== this.props.activeDistribution ||
			nextProps.a !== this.props.a ||
			nextProps.b !== this.props.b ||
			nextProps.lambda !== this.props.lambda ||
			nextProps.mu !== this.props.mu ||
			nextProps.sigma !== this.props.sigma ||
			nextProps.n !== this.props.n
		) {
			this.updateProbs( this.state.lower, this.state.upper );
		}
	}

	updateProbs( lower, upper ) {
		let mean;
		let se;
		switch ( this.props.activeDistribution ) {
			default:
			case 1:
				mean = ( this.props.b + this.props.a ) / 2.0;
				se = SQRT12_INV * abs( this.props.b - this.props.a ) / sqrt( this.props.n );
				break;
			case 2:
				mean = 1.0 / this.props.lambda;
				se = ( 1.0 / this.props.lambda ) / sqrt( this.props.n );
				break;
			case 3:
				mean = this.props.mu;
				se = this.props.sigma / sqrt( this.props.n );
				break;
		}
		let rangeProb = pnorm( upper, mean, se ) - pnorm( lower, mean, se );
		this.setState({
			rangeProb,
			lower,
			upper
		});
	}

	render() {
		return (
			<Panel><Panel.Body>
				<TeX raw={`P( L = ${this.state.lower} < \\bar X < U = ${this.state.upper}) = ${this.state.rangeProb.toFixed( 3 )}`} elems={{
					L: {
						variable: 'L',
						onChange: ( lower ) => {
							this.updateProbs( lower, this.state.upper );
						},
						defaultValue: this.state.lower
					},
					U: {
						variable: 'U',
						onChange: ( upper ) => {
							this.updateProbs( this.state.lower, upper );
						},
						defaultValue: this.state.upper
					}
				}} displayMode />
			</Panel.Body></Panel>
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
