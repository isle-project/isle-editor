// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import ROutput from 'components/r/output';


// MAIN //

class Chi2Test extends Component {

	constructor( props ) {

		super( props );

		this.calculateChisquareTest = ( var1, var2 ) => {
			const { data } = this.props;
			const x = data[ var1 ].map( x => `"${x}"` );
			const y = data[ var2 ].map( x => `"${x}"` );
			const value = <div>
				<label>Hypothesis test for independence between {var1} and {var2}:</label><br />
				<ROutput code={`
					${var1} = c(${x})
					${var2} = c(${y})
					chisq.test( ${var1}, ${var2} )`}
				/>
			</div>;
			const output = {
				variable: `Chisquare Test for Independence`,
				type: 'Test',
				value: value
			};
			this.props.logAction( 'DATA_EXPLORER:TESTS:CHISQUARE', {
				var1, var2
			});
			this.props.onCreated( output );
		};
	}

	render() {
		let { categorical } = this.props;
		return (
			<Dashboard
				title="Chi-squared Independence Test"
				label="Calculate"
				autoStart={false}
				onGenerate={this.calculateChisquareTest}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={categorical[ 0 ]}
					options={categorical}
				/>
				<SelectInput
					legend="Second Variable:"
					defaultValue={categorical[ 1 ]}
					options={categorical}
				/>
			</Dashboard>
		);
	}
}


// PROPERTY TYPES //

Chi2Test.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default Chi2Test;
