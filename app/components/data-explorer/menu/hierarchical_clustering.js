// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import incrspace from '@stdlib/math/utils/incrspace';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';
import factor from 'utils/factor-variable';
import HierarchicalClustering from 'components/models/hierarchical-clustering';
import { DATA_EXPLORER_HIERARCHICAL_CLUSTERING } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = '';
const DISTANCES = [ 'euclidean', 'chebyshev', 'cosine', 'hamming', 'manhattan' ];
const LINKAGE = [ 'complete', 'single' ];


// MAIN //

class HierarchicalClusteringMenu extends Component {
	constructor( props ) {
		super( props );
	}

	compute = ( variables, attach, K, linkage, distance ) => {
		const output = <HierarchicalClustering
			variables={variables} K={K} linkage={linkage} distance={distance}
			data={this.props.data}
			onResult={( result ) => {
				if ( attach ) {
					const newData = copy( this.props.data, 1 );
					const newCategorical = this.props.categorical.slice();
					const suffix = variables.map( x => x[ 0 ] ).join( '' );
					const assignments = result.getClusterAssignments( K );
					const name = factor( 'hclust_cluster_' + suffix, incrspace( 0, K, 1 ).map( x => `Cluster ${x+1}` ) );
					newData[ name ] = assignments;
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					this.props.onGenerate( newCategorical, newData );
				}
			}}
		/>;
		this.props.logAction( DATA_EXPLORER_HIERARCHICAL_CLUSTERING, {
			variables, attach, K, linkage, distance
		});
		this.props.onCreated( output );
	}

	render() {
		const { quantitative, originalQuantitative, t } = this.props;
		return (
			<Dashboard
				title={<span>
					{t('Hierarchical Clustering')}
					<QuestionButton title={t('Hierarchical Clustering')} content={DESCRIPTION} />
				</span>}
				autoStart={false}
				onGenerate={this.compute}
			>
				<SelectInput
					legend={`${t('variables')}:`} multi
					defaultValue={originalQuantitative}
					options={quantitative}
				/>
				<Row>
					<Col>
						<CheckboxInput
							legend="Attach clusters to table?"
							defaultValue={false}
						/>
					</Col>
					<Col>
						<NumberInput
							legend="Number of clusters"
							min={1}
							inline
							defaultValue={3}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<SelectInput
							legend="Linkage"
							defaultValue={LINKAGE[ 0 ]}
							options={LINKAGE}
						/>
					</Col>
					<Col>
						<SelectInput
							legend="Distance"
							defaultValue={DISTANCES[ 0 ]}
							options={DISTANCES}
						/>
					</Col>
				</Row>
			</Dashboard>
		);
	}
}


// PROPERTIES //

HierarchicalClusteringMenu.defaultProps = {
	logAction() {}
};

HierarchicalClusteringMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	originalQuantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default HierarchicalClusteringMenu;
