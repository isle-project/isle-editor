// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import ROutput from 'components/r/output';
import { DATA_EXPLORER_TESTS_CHISQUARE } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A test determining if there is a significant association between two categorical variables.';


// MAIN //

class Chi2Test extends Component {
	constructor( props ) {
		super( props );

		this.calculateChisquareTest = ( var1, var2 ) => {
			const { data } = this.props;
			const x = data[ var1 ].map( x => `"${x}"` );
			const y = data[ var2 ].map( x => `"${x}"` );
			const value = <div>
				<label>Hypothesis test for independence between {var1} and {var2}:</label>
				<ROutput code={`
					${var1} = c(${x})
					${var2} = c(${y})
					chisq.test( ${var1}, ${var2} )`}
				/>
			</div>;
			const output = {
				variable: 'Chisquare Test for Independence',
				type: 'Test',
				value: value
			};
			this.props.logAction( DATA_EXPLORER_TESTS_CHISQUARE, {
				var1, var2
			});
			this.props.onCreated( output );
		};
	}

	render() {
		const { categorical } = this.props;
		return (
			<Dashboard
				title={
					<span>
						Chi-squared Independence Test
						<QuestionButton title="Chi-squared Independence Test" content={DESCRIPTION} />
					</span>
				}
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
	categorical: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired
};

Chi2Test.defaultProps = {
	logAction() {}
};


// EXPORTS //

export default Chi2Test;
