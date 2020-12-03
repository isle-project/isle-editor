// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';
import PrincipalComponentAnalysis from 'components/models/principal-component-analysis';
import { DATA_EXPLORER_PCA } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const PrincipalComponentAnalysisMenu = ( props ) => {
	const { quantitative, originalQuantitative, t } = props;
	const compute = ( variables, center, scale, noComponents ) => {
		const output = <PrincipalComponentAnalysis
			variables={variables}
			center={center} scale={scale} noComponents={noComponents}
			data={props.data}
			onResult={( _, components ) => {
				if ( noComponents > 0 ) {
					const newData = copy( props.data, 1 );
					const newQuantitative = quantitative.slice();
					const suffix = variables.map( x => x[ 0 ] ).join( '' );
					for ( let i = 0; i < noComponents; i++ ) {
						const values = [];
						for ( let j = 0; j < components.data.length; j++ ) {
							values.push( components.data[ j ][ i ] );
						}
						const name = `PC${i+1}_${suffix}`;
						newData[ name ] = values;
						if ( !contains( newQuantitative, name ) ) {
							newQuantitative.push( name );
						}
					}
					props.onGenerate( newQuantitative, newData );
				}
			}}
		/>;
		props.logAction( DATA_EXPLORER_PCA, {
			variables, center, scale
		});
		props.onCreated( output );
	};
	return (
		<Dashboard
			title={<span>
				{t('Principal Component Analysis')}
				<QuestionButton title={t('Principal Component Analysis')} content={t('PCA-description')} />
			</span>}
			autoStart={false}
			onGenerate={compute}
		>
			<SelectInput
				legend={t('variables')} multi
				defaultValue={originalQuantitative}
				options={quantitative}
				closeMenuOnSelect={false}
			/>
			<CheckboxInput
				legend="Center values (= subtract the mean)?"
				defaultValue={true}
			/>
			<CheckboxInput
				legend="Scale values (= divide by standard deviation)?"
				defaultValue={false}
			/>
			<NumberInput
				legend="# of components to add to data table"
				min={0}
				defaultValue={0}
			/>
		</Dashboard>
	);
};


// PROPERTIES //

PrincipalComponentAnalysisMenu.defaultProps = {
	logAction() {}
};

PrincipalComponentAnalysisMenu.propTypes = {
	quantitative: PropTypes.array.isRequired,
	originalQuantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default PrincipalComponentAnalysisMenu;
