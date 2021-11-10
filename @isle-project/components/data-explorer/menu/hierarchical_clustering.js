// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import incrspace from '@stdlib/array/incrspace';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import NumberInput from '@isle-project/components/input/number';
import Dashboard from '@isle-project/components/dashboard';
import factor from '@isle-project/utils/factor-variable';
import HierarchicalClustering from '@isle-project/components/models/hierarchical-clustering';
import { DATA_EXPLORER_HIERARCHICAL_CLUSTERING } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DISTANCES = [ 'euclidean', 'chebyshev', 'cosine', 'hamming', 'manhattan' ];
const LINKAGE = [ 'complete', 'single' ];


// MAIN //

const HierarchicalClusteringMenu = ( props ) => {
	const { quantitative, t } = props;
	const compute = ( variables, attach, K, linkage, distance ) => {
		const output = <HierarchicalClustering
			variables={variables} K={K} linkage={linkage} distance={distance}
			data={props.data}
			onResult={( result ) => {
				if ( attach ) {
					const newData = copy( props.data, 1 );
					const newCategorical = props.categorical.slice();
					const suffix = variables.map( x => x[ 0 ] ).join( '' );
					const assignments = result.getClusterAssignments( K );
					const name = factor( 'hclust_cluster_' + suffix, incrspace( 0, K, 1 ).map( x => `Cluster ${x+1}` ) );
					newData[ name ] = assignments;
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					props.onGenerate( newCategorical, newData );
				}
			}}
		/>;
		props.logAction( DATA_EXPLORER_HIERARCHICAL_CLUSTERING, {
			variables, attach, K, linkage, distance
		});
		props.onCreated( output );
	};
	return (
		<Dashboard
			title={<span>
				{t('Hierarchical Clustering')}
				<QuestionButton title={t('Hierarchical Clustering')} content={t('Hierarchical Clustering-description')} />
			</span>}
			autoStart={false}
			onGenerate={compute}
		>
			<SelectInput
				legend={t('variables')} multi
				options={quantitative}
			/>
			<Row>
				<Col>
					<CheckboxInput
						legend={t('attach-clusters-table')}
						defaultValue={false}
					/>
				</Col>
				<Col>
					<NumberInput
						legend={t('number-of-clusters')}
						min={1}
						defaultValue={3}
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<SelectInput
						legend={t('linkage')}
						defaultValue={LINKAGE[ 0 ]}
						options={LINKAGE}
					/>
				</Col>
				<Col>
					<SelectInput
						legend={t('distance')}
						defaultValue={DISTANCES[ 0 ]}
						options={DISTANCES}
					/>
				</Col>
			</Row>
		</Dashboard>
	);
};


// PROPERTIES //

HierarchicalClusteringMenu.defaultProps = {
	logAction() {}
};

HierarchicalClusteringMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default HierarchicalClusteringMenu;
