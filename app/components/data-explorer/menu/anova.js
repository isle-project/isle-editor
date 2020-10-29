// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Anova from 'components/tests/anova';
import { DATA_EXPLORER_TESTS_ANOVA } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A one-way analysis of variance tests for equality of means across several groups.';


// MAIN //

class AnovaMenu extends Component {
	constructor( props ) {
		super( props );
	}

	calculateANOVA = ( variable, group ) => {
		const { data, showDecision } = this.props;
		this.props.logAction( DATA_EXPLORER_TESTS_ANOVA, {
			variable, group, showDecision
		});
		const output = <Anova data={data} variable={variable} group={group} showDecision={showDecision} />;
		this.props.onCreated( output );
	}

	render() {
		const { quantitative, categorical, t } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title={<span>
					{t('One-Way ANOVA')}
					<QuestionButton title={t('One-Way ANOVA')} content={DESCRIPTION} />
				</span>}
				label={t('calculate')}
				onGenerate={this.calculateANOVA}
			>
				<SelectInput
					legend={t('variable')}
					defaultValue={quantitative[ 0 ]}
					options={quantitative}
				/>
				<SelectInput
					legend={`${t('grouping-variable')}:`}
					defaultValue={categorical[ 0 ]}
					options={categorical}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

AnovaMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

AnovaMenu.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default AnovaMenu;
