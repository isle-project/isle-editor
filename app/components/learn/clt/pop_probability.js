// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import TeX from 'components/tex';
import NumberInput from 'components/input/number';
import pexp from '@stdlib/stats/base/dists/exponential/cdf';
import punif from '@stdlib/stats/base/dists/uniform/cdf';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';


// FUNCTIONS //

const generatePopProbs = ( value, props ) => {
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
		if (
			nextProps.activeDistribution !== prevState.activeDistribution ||
			nextProps.a !== prevState.a ||
			nextProps.b !== prevState.b ||
			nextProps.lambda !== prevState.lambda ||
			nextProps.mu !== prevState.mu ||
			nextProps.sigma !== prevState.sigma
		) {
			return {
				...generatePopProbs( prevState.popCutoff, nextProps ),
				...nextProps
			};
		}
		return null;
	}

	render() {
		return (
			<Panel>
				<Panel.Body>
					<NumberInput
						step="any"
						legend={<TeX raw="x" />}
						onChange={( value ) => {
							const newState = generatePopProbs( value, this.props );
							this.setState( newState );
						}}
					/>
					<TeX raw={`P( X < ${this.state.popCutoff} ) = ${this.state.popLeftProb.toFixed( 3 )}`} />
					<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<TeX raw={`P( X \\ge ${this.state.popCutoff} ) = ${this.state.popRightProb.toFixed( 3 )}`}
					/>
				</Panel.Body>
			</Panel>
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
