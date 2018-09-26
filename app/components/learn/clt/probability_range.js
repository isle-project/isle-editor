// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import TeX from 'components/tex';
import NINF from '@stdlib/constants/math/float64-ninf';
import PINF from '@stdlib/constants/math/float64-pinf';
import normal from '@stdlib/stats/base/dists/normal/cdf';
import exponential from '@stdlib/stats/base/dists/exponential/cdf';
import uniform from '@stdlib/stats/base/dists/uniform/cdf';


// MAIN //

class ProbabilityRange extends Component {
	constructor( props ) {
		super( props );
		switch ( props.activeDistribution ) {
			default:
			case 1:
				this.cdf = uniform.factory( props.a, props.b );
				break;
			case 2:
				this.cdf = exponential.factory( props.lambda );
				break;
			case 3:
				this.cdf = normal.factory( props.mu, props.sigma );
				break;
		}
		this.state = {
			lower: NINF,
			upper: PINF,
			rangeProb: 1.0
		};
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.activeDistribution !== prevProps.activeDistribution ||
			this.props.a !== prevProps.a ||
			this.props.b !== prevProps.b ||
			this.props.lambda !== prevProps.lambda ||
			this.props.mu !== prevProps.mu ||
			this.props.sigma !== prevProps.sigma
		) {
			switch ( this.props.activeDistribution ) {
				default:
				case 1:
					this.cdf = uniform.factory( this.props.a, this.props.b );
					break;
				case 2:
					this.cdf = exponential.factory( this.props.lambda );
					break;
				case 3:
					this.cdf = normal.factory( this.props.mu, this.props.sigma );
					break;
			}
			const rangeProb = this.cdf( this.state.upper ) - this.cdf( this.state.lower );
			this.setState({ rangeProb });
		}
	}

	render() {
		return (
			<Card body>
				<TeX raw={`P( L = ${this.state.lower} < X < U = ${this.state.upper}) = ${this.state.rangeProb.toFixed( 3 )}`} elems={{
					L: {
						variable: 'L',
						onChange: ( lower ) => {
							const rangeProb = this.cdf( this.state.upper ) - this.cdf( lower );
							this.setState({
								rangeProb,
								lower
							});
						},
						defaultValue: this.state.lower
					},
					U: {
						variable: 'U',
						onChange: ( upper ) => {
							const rangeProb = this.cdf( upper ) - this.cdf( this.state.lower );
							this.setState({
								rangeProb,
								upper
							});
						},
						defaultValue: this.state.upper
					}
				}} displayMode />
			</Card>
		);
	}
}


// PROPERTY TYPES //

ProbabilityRange.propTypes = {
	a: PropTypes.number.isRequired,
	activeDistribution: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired,
	lambda: PropTypes.number.isRequired,
	mu: PropTypes.number.isRequired,
	sigma: PropTypes.number.isRequired
};


// EXPORTS //

export default ProbabilityRange;
