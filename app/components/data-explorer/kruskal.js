// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import kruskalTest from '@stdlib/stats/kruskal-test';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import { DATA_EXPLORER_TESTS_KRUSKAL } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'The Kruskal-Wallis rank sum test evaluates for multiple samples the null hypothesis that their medians are identical. The Kruskal-Wallis test is a nonparametric test which does not require the data to be normally distributed.';


// MAIN //

class Kruskal extends Component {
	constructor( props ) {
		super( props );

		this.calculateTest = ( variable, grouping ) => {
			const { data, showDecision } = this.props;
			const vals = data[ variable ];
			const groups = data[ grouping ];
			const groupsFiltered = [];
			const valsFiltered = [];
			for ( let i = 0; i < vals.length; i++ ) {
				if (
					( isNumber( vals[i] ) && !isnan( vals[i] ) ) &&
					( !isNull( groups[i] ) && groups[i] !== '' )
				) {
					valsFiltered.push( vals[ i ] );
					groupsFiltered.push( `"${groups[i]}"` );
				}
			}
			const value = <div style={{ overflowX: 'auto', width: '100%' }}>
				<label>Kruskal Wallis Test of {variable} between {grouping}</label>
				<pre style={{ marginTop: 10 }}>{kruskalTest( valsFiltered, { groups: groupsFiltered }).print({
					decision: showDecision
				})}</pre>
			</div>;
			const output = {
				variable: 'Kruskal-Wallis Test',
				type: 'Test',
				value: value
			};
			this.props.logAction( DATA_EXPLORER_TESTS_KRUSKAL, {
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
				title={<span>
					Kruskal-Wallis Test
					<QuestionButton title="Kruskal-Wallis Test" content={DESCRIPTION} />
				</span>}
				label="Calculate"
				onGenerate={this.calculateTest}
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

Kruskal.propTypes = {
	categorical: PropTypes.array.isRequired,
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

Kruskal.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default Kruskal;
