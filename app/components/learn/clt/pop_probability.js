// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import TeX from 'components/tex';
import NumberInput from 'components/input/number';
import pexp from '@stdlib/math/base/dists/exponential/cdf';
import punif from '@stdlib/math/base/dists/uniform/cdf';
import pnorm from '@stdlib/math/base/dists/normal/cdf';


// MAIN //

class ProbMean extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			popLeftProb: 0,
			popRightProb: 1,
			popCutoff: 0
		};
	}

	componentWillReceiveProps( nextProps ) {
		if (
			nextProps.activeDistribution !== this.props.activeDistribution ||
			nextProps.a !== this.props.a ||
			nextProps.b !== this.props.b ||
			nextProps.lambda !== this.props.lambda ||
			nextProps.mu !== this.props.mu ||
			nextProps.sigma !== this.props.sigma
		) {
			this.updatePopProbs( this.state.popCutoff, nextProps );
		}
	}

	updatePopProbs = ( value, props ) => {
		let popLeftProb;
		switch ( props.activeDistribution ) {
			default:
			case 1:
				popLeftProb = punif( value, props.a, props.b );
				break;
			case 2:
				popLeftProb = pexp( value, props.lambda );
				break;
			case 3:
				popLeftProb = pnorm( value, props.mu, props.sigma );
				break;
		}
		const popRightProb = 1.0 - popLeftProb;
		this.setState({
			popCutoff: value,
			popLeftProb,
			popRightProb
		});
	}

	render() {
		return (
			<Panel><Panel.Body>
				<NumberInput
					step="any"
					legend={<TeX raw="x" />}
					onChange={( value ) => {
						this.updatePopProbs( value, this.props );
					}}
				/>
				<TeX raw={`P( X < ${this.state.popCutoff} ) = ${this.state.popLeftProb.toFixed( 3 )}`} />
				<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
				<TeX raw={`P( X \\ge ${this.state.popCutoff} ) = ${this.state.popRightProb.toFixed( 3 )}`}
				/>
			</Panel.Body></Panel>
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
	sigma: PropTypes.number.isRequired
};


// EXPORTS //

export default ProbMean;
