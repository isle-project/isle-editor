// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Kruskal from 'components/tests/kruskal';
import { DATA_EXPLORER_TESTS_KRUSKAL } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'The Kruskal-Wallis rank sum test evaluates for multiple samples the null hypothesis that their medians are identical. The Kruskal-Wallis test is a nonparametric test which does not require the data to be normally distributed.';


// MAIN //

class KruskalMenu extends Component {
	constructor( props ) {
		super( props );
	}

	calculateTest = ( variable, group ) => {
		const { data, showDecision } = this.props;
		const output = <Kruskal data={data} variable={variable} group={group} showDecision={showDecision} />;
		this.props.logAction( DATA_EXPLORER_TESTS_KRUSKAL, {
			variable, group, showDecision
		});
		this.props.onCreated( output );
	}

	render() {
		const { quantitative, categorical, t } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title={<span>
					{t('Kruskal-Wallis Test')}
					<QuestionButton title={t('Kruskal-Wallis Test')} content={DESCRIPTION} />
				</span>}
				label={t('calculate')}
				onGenerate={this.calculateTest}
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

KruskalMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

KruskalMenu.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default KruskalMenu;
