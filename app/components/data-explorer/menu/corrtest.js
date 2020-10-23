// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import CorrTest from 'components/tests/corrtest';
import { DATA_EXPLORER_TESTS_CORRTEST } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A test used to evaluate the Pearson correlation between two variables, which measures the linear association between them.';


// MAIN //

class CorrTestMenu extends Component {
	constructor( props ) {
		super( props );
	}

	calculateCorrTest = ( var1, var2, rho0, direction, alpha ) => {
		const { data, showDecision } = this.props;
		const output = <CorrTest data={data} var1={var1} var2={var2} rho0={rho0} direction={direction} alpha={alpha} showDecision={showDecision} />;
		this.props.logAction( DATA_EXPLORER_TESTS_CORRTEST, {
			var1, var2, rho0, direction, alpha, showDecision
		});
		this.props.onCreated( output );
	}

	render() {
		const { quantitative } = this.props;
		return (
			<Dashboard
				title={
					<span>
						Correlation Test
						<QuestionButton title="Correlation Test" content={DESCRIPTION} />
					</span>
				}
				label={this.props.t('calculate')}
				autoStart={false}
				onGenerate={this.calculateCorrTest}
			>
				<SelectInput
					legend={`${this.props.t('variable')}:`}
					defaultValue={quantitative[ 0 ]}
					options={quantitative}
				/>
				<SelectInput
					legend={`${this.props.t('second-variable')}:`}
					defaultValue={quantitative[ 1 ]}
					options={quantitative}
				/>
				<NumberInput
					legend={<TeX raw="\rho_0" />}
					defaultValue={0.0}
					step="any"
					min={-1.0}
					max={1.0}
				/>
				<SelectInput
					legend="Direction:"
					defaultValue="two-sided"
					options={[ 'less', 'greater', 'two-sided' ]}
				/>
				<NumberInput
					legend={<span>Significance level <TeX raw="\alpha" /></span>}
					defaultValue={0.05}
					min={0.0}
					max={1.0}
					step="any"
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

CorrTestMenu.propTypes = {
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

CorrTestMenu.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default CorrTestMenu;
