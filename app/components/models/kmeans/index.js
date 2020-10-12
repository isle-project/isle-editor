// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import kmeans from 'ml-kmeans';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import Table from 'components/table';


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

const summaryTable = ( variables, centroids ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>Cluster</th>
					{centroids.map( ( _, i ) => <th key={i} >{i+1}</th>)}
				</tr>
			</thead>
			<tbody>
				{variables.map( ( name, idx ) => {
					return (
						<tr key={idx} >
							<th>{name}</th>
							{centroids.map( ( x, i ) => <td key={i} >{x.centroid[ idx ].toFixed( 4 )}</td>)}
						</tr>
					);
				})}
			</tbody>
			<tbody>
				<tr>
					<th>Size</th>
					{centroids.map( ( x, i ) => <th key={i} >{x.size}</th>)}
				</tr>
			</tbody>
		</Table>
	);
};


// MAIN //

class KMeans extends Component {
	constructor( props ) {
		super( props );

		const matrix = [];
		const n = props.data[ props.variables[ 0 ] ].length;
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			let missing = false;
			for ( let j = 0; j < props.variables.length; j++ ) {
				const val = props.data[ props.variables[ j ] ][ i ];
				if ( isNonMissingNumber( val ) ) {
					row.push( val );
				} else {
					missing = true;
					break;
				}
			}
			if ( !missing ) {
				matrix.push( row );
			}
		}
		this.result = kmeans( matrix, props.K, {
			initialization: props.initialization
		});
		props.onResult( this.result );
	}

	render() {
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >kmeans Summary</span>
				<p>The algorithm {this.result.converged ? 'converged' : 'did not converge'} after {this.result.iterations} iterations</p>
				{summaryTable( this.props.variables, this.result.centroids )}
			</div>
		);
	}
}


// PROPERTIES //

KMeans.defaultProps = {
	onResult() {}
};

KMeans.propTypes = {
	onResult: PropTypes.func
};


// EXPORTS //

export default KMeans;
