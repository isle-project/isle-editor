// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Chi2Test from 'components/tests/chi2';
import { DATA_EXPLORER_TESTS_CHISQUARE } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A test determining if there is a significant association between two categorical variables.';


// MAIN //

class Chi2TestMenu extends Component {
	constructor( props ) {
		super( props );
	}

	calculateChisquareTest = ( var1, var2 ) => {
		const { data } = this.props;
		const output = <Chi2Test data={data} var1={var1} var2={var2} />;
		this.props.logAction( DATA_EXPLORER_TESTS_CHISQUARE, {
			var1, var2
		});
		this.props.onCreated( output );
	}

	render() {
		const { categorical, t } = this.props;
		return (
			<Dashboard
				title={
					<span>
						{t('Chi-square Independence Test')}
						<QuestionButton title={t('Chi-square Independence Test')} content={DESCRIPTION} />
					</span>
				}
				label={t('calculate')}
				autoStart={false}
				onGenerate={this.calculateChisquareTest}
			>
				<SelectInput
					legend={t('variable')}
					defaultValue={categorical[ 0 ]}
					options={categorical}
				/>
				<SelectInput
					legend={`${t('second-variable')}:`}
					defaultValue={categorical[ 1 ]}
					options={categorical}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

Chi2TestMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired
};

Chi2TestMenu.defaultProps = {
	logAction() {}
};


// EXPORTS //

export default Chi2TestMenu;
