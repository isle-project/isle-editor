// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import anova1 from '@stdlib/stats/anova1';


// MAIN //

class Anova extends Component {
	constructor( props ) {
		super( props );

		this.calculateANOVA = ( variable, grouping ) => {
			const { data, showDecision } = this.props;
			const vals = data[ variable ];
			const groups = data[ grouping ].map( x => `"${x}"` );
			const value = <div>
				<label>ANOVA for {variable} between {grouping}</label><br />
				<span style={{ fontSize: '10px' }}>{anova1( vals, groups ).print({
					decision: showDecision
				})}</span>
			</div>;
			const output = {
				variable: 'One-way ANOVA',
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

Anova.propTypes = {
	categorical: PropTypes.array.isRequired,
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

Anova.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default Anova;
