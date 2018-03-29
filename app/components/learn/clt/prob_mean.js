// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import TeX from 'components/tex';
import NumberInput from 'components/input/number';
import sqrt from '@stdlib/math/base/special/sqrt';
import abs from '@stdlib/math/base/special/abs';
import pnorm from '@stdlib/math/base/dists/normal/cdf';


// VARIABLES //

const SQRT12_INV = 1.0 / sqrt( 12.0 );


// MAIN //

class ProbMean extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			cutoff: 0,
			leftProb: 0,
			rightProb: 1
		};
	}

	componentWillReceiveProps( nextProps ) {
		if (
			nextProps.activeDistribution !== this.props.activeDistribution ||
			nextProps.a !== this.props.a ||
			nextProps.b !== this.props.b ||
			nextProps.lambda !== this.props.lambda ||
			nextProps.mu !== this.props.mu ||
			nextProps.n !== this.props.n ||
			nextProps.sigma !== this.props.sigma
		) {
			this.updateProb( this.state.cutoff, nextProps );
		}
	}

	updateProb = ( value, props ) => {
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
		let leftProb = pnorm( value, mean, se );
		let rightProb = 1.0 - leftProb;
		this.setState({
			leftProb,
			rightProb,
			cutoff: value
		});
	}

	render() {
		return (
			<Panel><Panel.Body>
			<NumberInput
				step="any"
				legend={<TeX raw="x" />}
				onChange={( value ) => {
					this.updateProb( value, this.props );
				}}
			/>
			<TeX raw={`P( \\bar X < ${this.state.cutoff} ) = ${this.state.leftProb.toFixed( 3 )}`} />
			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
			<TeX raw={`P( \\bar X \\ge ${this.state.cutoff} ) = ${this.state.rightProb.toFixed( 3 )}`} />
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
	n: PropTypes.number.isRequired,
	sigma: PropTypes.number.isRequired
};


// EXPORTS //

export default ProbMean;
