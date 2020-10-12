// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PCA } from 'ml-pca';
import Table from 'components/table';
import incrspace from '@stdlib/math/utils/incrspace';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import Plotly from 'components/plotly';


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

const summaryTable = ( stdev, variance, cumVariance ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th></th>
					<th>Standard Deviation</th>
					<th>Proportion of Variance</th>
					<th>Cumulative Variance Proportion</th>
				</tr>
			</thead>
			<tbody>
				{stdev.map( ( val, id ) => {
					return (
						<tr key={id}>
							<th> {`PC${id+1}`} </th>
							<td> {val.toFixed( 3 )} </td>
							<td> {variance[ id ].toFixed( 3 )} </td>
							<td> {cumVariance[ id ].toFixed( 3 )} </td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};


// MAIN //

class PrincipalComponentAnalysis extends Component {
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
		this.pca = new PCA( matrix, {
			center: props.center,
			scale: props.scale
		});
		const components = this.pca.predict( matrix, {
			noComponents: props.noComponents
		});
		props.onResult( this.pca, components );
	}

	render() {
		const stdev = this.pca.getStandardDeviations();
		const variance = this.pca.getExplainedVariance();
		const cumVariance = this.pca.getCumulativeVariance();
		const trace = {
			x: incrspace( 0, variance.length, 1 ),
			y: variance,
			type: 'scatter',
			name: 'Proportion of variance'
		};
		return (<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >PCA Summary</span>
				{summaryTable( stdev, variance, cumVariance )}
				<Plotly editable data={[ trace ]} layout={{
					xaxis: {
						title: 'Principal Component'
					},
					yaxis: {
						title: 'Explained Proportion'
					}
				}} />
			</div>
		);
	}
}


// PROPERTIES //

PrincipalComponentAnalysis.defaultProps = {
	onResult() {}
};

PrincipalComponentAnalysis.propTypes = {
	onResult: PropTypes.func
};


// EXPORTS //

export default PrincipalComponentAnalysis;
