// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import kmeans from 'ml-kmeans';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import Table from 'react-bootstrap/Table';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';
import { DATA_EXPLORER_KMEANS } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = '';


// FUNCTIONS //

const summaryTable = ( variables, centroids ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>Cluster</th>
					{centroids.map( ( _, i ) => <th key={i} >{i}</th>)}
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Size</th>
					{centroids.map( ( x, i ) => <th key={i} >{x.size}</th>)}
				</tr>
				{variables.map( ( name, idx ) => {
					return (
						<tr key={idx} >
							<th>{name}</th>
							{centroids.map( ( x, i ) => <td key={i} >{x.centroid[ idx ]}</td>)}
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};


// MAIN //

class KMeans extends Component {
	constructor( props ) {
		super( props );
	}

	compute = ( variables, K, attach, initialization ) => {
		const matrix = [];
		const n = this.props.data[ variables[ 0 ] ].length;
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			for ( let j = 0; j < variables.length; j++ ) {
				row[ j ] = this.props.data[ variables[ j ] ][ i ];
			}
			matrix.push( row );
		}
		const result = kmeans( matrix, K, {
			initialization
		});

		if ( attach ) {
			const newData = copy( this.props.data, 1 );
			const newQuantitative = this.props.quantitative.slice();
			const suffix = variables.map( x => x[ 0 ] ).join( '' );
			const name = 'cluster_' + suffix;
			newData[ name ] = result.clusters;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			this.props.onGenerate( newQuantitative, newData );
		}

		this.props.logAction( DATA_EXPLORER_KMEANS, {
			variables, K, attach, initialization
		});

		const output = {
			variable: 'kmeans Summary',
			type: 'kmeans',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >kmeans Summary</span>
				<p>The algorithm {result.converged ? 'converged' : 'did not converge'} after {result.iterations} iterations</p>
				{summaryTable( variables, result.centroids )}
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { quantitative, originalQuantitative } = this.props;
		return (
			<Dashboard
				title={<span>kmeans Clustering<QuestionButton title="kmeans Clustering" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.compute}
			>
				<SelectInput
					legend="Variables:" multi
					defaultValue={originalQuantitative}
					options={quantitative}
				/>
				<NumberInput
					legend="Number of clusters"
					min={1}
					defaultValue={3}
				/>
				<CheckboxInput
					legend="Attach clusters to table?"
					defaultValue={false}
				/>
				<SelectInput
					legend="Initialization method"
					options={[ 'kmeans++', 'random', 'mostDistant' ]}
					defaultValue="kmeans++"
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

KMeans.defaultProps = {
	logAction() {}
};

KMeans.propTypes = {
	quantitative: PropTypes.array.isRequired,
	originalQuantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default KMeans;
