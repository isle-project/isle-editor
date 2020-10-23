// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import unique from 'uniq';
import copy from '@stdlib/utils/copy';
import contains from '@stdlib/assert/contains';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Dashboard from 'components/dashboard';
import MultipleLinearRegression from 'components/models/multiple-linear-regression';
import { DATA_EXPLORER_MULTIPLE_REGRESSION } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'Predict a quantitative response variable using one or more explanatory variables.';


// MAIN //

class MultipleLinearRegressionMenu extends Component {
	constructor( props ) {
		super( props );
	}

	compute = ( y, x, intercept, omitMissing ) => {
		const output = <MultipleLinearRegression
			x={x} y={y} intercept={intercept} omitMissing={omitMissing}
			data={this.props.data} quantitative={this.props.quantitative}
			onPredict={( yhat, resid, counter ) => {
				const newData = copy( this.props.data, 1 );
				const newQuantitative = this.props.quantitative.slice();
				let name = 'pred_lm'+counter;
				newData[ name ] = yhat;
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
				name = 'resid_lm'+counter;
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
				newData[ name ] = resid;
				this.props.onGenerate( newQuantitative, newData );
			}}
			onDiagnostics={this.props.onCreated}
		/>;
		const action = {
			y, x, intercept
		};
		this.props.logAction( DATA_EXPLORER_MULTIPLE_REGRESSION, action );
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative } = this.props;
		return (
			<Dashboard
				title={<span>Multiple Linear Regression<QuestionButton title="Multiple Linear Regression" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.compute}
			>
				<SelectInput
					legend="Outcome (Y):"
					options={quantitative}
					defaultValue={quantitative[ 0 ]}
				/>
				<SelectInput
					legend="Predictors (X):" multi
					options={unique( quantitative.concat( categorical ) )}
					defaultValue={quantitative[ 1 ]}
					closeMenuOnSelect={false}
				/>
				<CheckboxInput
					legend="Include intercept?"
					defaultValue={true}
				/>
				<CheckboxInput
					legend={this.props.t('omit-missing')}
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

MultipleLinearRegressionMenu.defaultProps = {
	logAction() {}
};

MultipleLinearRegressionMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default MultipleLinearRegressionMenu;
