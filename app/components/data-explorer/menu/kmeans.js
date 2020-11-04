// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import incrspace from '@stdlib/math/utils/incrspace';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';
import factor from 'utils/factor-variable';
import KMeans from 'components/models/kmeans';
import { DATA_EXPLORER_KMEANS } from 'constants/actions.js';
import QuestionButton from '../question_button.js';


// MAIN //

const KMeansMenu = ( props ) => {
	const { quantitative, originalQuantitative, t } = props;
	const compute = ( variables, K, attach, initialization ) => {
		const output = <KMeans
			data={props.data}
			variables={variables}
			K={K}
			initialization={initialization}
			onResult={( result ) => {
				if ( attach ) {
					const newData = copy( props.data, 1 );
					const newCategorical = props.categorical.slice();
					const suffix = variables.map( x => x[ 0 ] ).join( '' );
					const name = factor( 'kmeans_cluster_' + suffix, incrspace( 0, K, 1 ).map( x => `Cluster ${x+1}` ) );
					newData[ name ] = result.clusters.map( x => `Cluster ${x+1}` );
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					props.onGenerate( newCategorical, newData );
				}
			}}
		/>;
		props.logAction( DATA_EXPLORER_KMEANS, {
			variables, K, attach, initialization
		});
		props.onCreated( output );
	};
	return (
		<Dashboard
			title={<span>
				{t('kmeans Clustering')}
				<QuestionButton title={t('kmeans Clustering')} content={t('kmeans-description')} />
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
			<NumberInput
				legend={t('number-of-clusters')}
				min={1}
				defaultValue={3}
			/>
			<CheckboxInput
				legend={t('attach-clusters-table')}
				defaultValue={false}
			/>
			<SelectInput
				legend="Initialization method"
				options={[ 'kmeans++', 'random', 'mostDistant' ]}
				defaultValue="kmeans++"
			/>
		</Dashboard>
	);
};


// PROPERTIES //

KMeansMenu.defaultProps = {
	logAction() {}
};

KMeansMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	originalQuantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default KMeansMenu;
