// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import TeX from 'components/tex';
import NINF from '@stdlib/constants/math/float64-ninf';
import PINF from '@stdlib/constants/math/float64-pinf';


// MAIN //

class ProbabilityRange extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			lower: NINF,
			upper: PINF,
			rangeProb: 0
		};
	}

	render() {
		return (
			<Panel><Panel.Body>
				<TeX raw={`P( L = ${this.state.lower} < X < U = ${this.state.upper}) = ${this.state.rangeProb.toFixed( 3 )}`} elems={{
					L: {
						variable: 'L',
						onChange: ( lower ) => {
							const { xbars } = this.props;
							let rangeProb = 0;
							let len = xbars.length;
							for ( let i = 0; i < len; i++ ) {
								if ( xbars[ i ] >= lower && xbars[ i ] <= this.state.upper ) {
									rangeProb += 1;
								}
							}
							rangeProb /= len;
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
							const { xbars } = this.props;
							let rangeProb = 0;
							let len = xbars.length;
							for ( let i = 0; i < len; i++ ) {
								if ( xbars[ i ] >= this.state.lower && xbars[ i ] <= upper ) {
									rangeProb += 1;
								}
							}
							rangeProb /= len;
							this.setState({
								rangeProb,
								upper
							});
						},
						defaultValue: this.state.upper
					}
				}} displayMode />
			</Panel.Body></Panel>
		);
	}
}


// PROPERTY TYPES //

ProbabilityRange.propTypes = {
	xbars: PropTypes.array.isRequired
};


// EXPORTS //

export default ProbabilityRange;
