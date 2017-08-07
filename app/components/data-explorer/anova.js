// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import ROutput from 'components/r/output';
import isArray from '@stdlib/assert/is-array';
import copy from '@stdlib/utils/copy';
import unique from 'uniq';


// MAIN //

class ANOVA extends Component {

	constructor( props ) {

		super( props );

		this.calculateANOVA = ( variable, grouping ) => {
			const { data } = this.props;
			const vals = data[ variable ];
			const groups = data[ grouping ].map( x => `"${x}"` );
			const value = <div>
				<label>ANOVA for {variable} between {grouping}</label><br />
				<ROutput code={`
					df = data.frame(
						${variable} = c(${vals}),
						${grouping} = c(${groups})
					)
					fit = lm( ${variable} ~ ${grouping}, data = df )
					anova( fit )`}
				/>
			</div>;
			const output = {
				variable: `One-way ANOVA`,
				type: 'Test',
				value: value
			};
			this.props.logAction( 'DATA_EXPLORER:TESTS:ANOVA', {
				variable, grouping
			});
			this.props.onCreated( output );
		};
	}

	render() {
		const { continuous, categorical } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title="One-way ANOVA"
				label="Calculate"
				onGenerate={this.calculateANOVA}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={continuous[ 0 ]}
					options={continuous}
				/>
				<SelectInput
					legend="Grouping Variable:"
					defaultValue={categorical[ 0 ]}
					options={categorical}
				/>
			</Dashboard>
		);
	}
}


// PROPERTY TYPES //

ANOVA.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default ANOVA;
