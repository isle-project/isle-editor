// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import NumberInput from '@isle-project/components/input/number';
import Dashboard from '@isle-project/components/dashboard';
import PrincipalComponentAnalysis from '@isle-project/components/models/principal-component-analysis';
import { PCA } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const PrincipalComponentAnalysisMenu = ( props ) => {
	const { quantitative, t } = props;
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
		props.logAction( PCA, {
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
				options={quantitative}
				closeMenuOnSelect={false}
			/>
			<CheckboxInput
				legend={t('center-values-subtract-the-mean')}
				defaultValue={true}
			/>
			<CheckboxInput
				legend={t('scale-values')}
				defaultValue={false}
			/>
			<NumberInput
				legend={t('components-to-add')}
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
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default PrincipalComponentAnalysisMenu;
