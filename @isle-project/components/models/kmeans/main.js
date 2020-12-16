// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import kmeans from 'ml-kmeans';
import Alert from 'react-bootstrap/Alert';
import hasOwnProp from '@stdlib/assert/has-own-property';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import Table from '@isle-project/components/table';


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

const summaryTable = ( variables, centroids, t ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>{t('cluster')}</th>
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
					<th>{t('size')}</th>
					{centroids.map( ( x, i ) => <th key={i} >{x.size}</th>)}
				</tr>
			</tbody>
		</Table>
	);
};

const fitModel = ({ K, variables, data, initialization }) => {
	if ( !data || !variables || !K || !initialization ) {
		return null;
	}
	const matrix = [];
	if ( !hasOwnProp( data, variables[ 0 ] ) ) {
		return null;
	}
	const n = data[ variables[ 0 ] ].length;
	for ( let i = 0; i < n; i++ ) {
		const row = [];
		let missing = false;
		for ( let j = 0; j < variables.length; j++ ) {
			if ( !hasOwnProp( data, variables[ j ] ) ) {
				return null;
			}
			const val = data[ variables[ j ] ][ i ];
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
	try {
		const result = kmeans( matrix, K, {
			initialization
		});
		return result;
	} catch ( _ ) {
		return null;
	}
};


// MAIN //

/**
* K-means clustering.
*
* @property {Object} data - object of value arrays
* @property {Array<string>} variables - names of variables used for clustering
* @property {string} initialization - initialization method (`kmeans++`, `random`, or `mostDistant`)
* @property {number} K - number of clusters
* @property {Function} onResult - callback invoked with model object
*/
class KMeans extends Component {
	constructor( props ) {
		super( props );
		const { K, variables, data, initialization } = props;
		const result = fitModel({ K, variables, data, initialization });
		this.state = {
			result,
			...props
		};
		if ( result ) {
			props.onResult( result );
		}
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.data !== prevState.data ||
			nextProps.variables !== prevState.variables ||
			nextProps.K !== prevState.K ||
			nextProps.initialization !== prevState.initialization
		) {
			const { K, variables, data, initialization } = nextProps;
			const result = fitModel({ K, variables, data, initialization });
			nextProps.onResult( result );
			const newState = {
				result,
				...nextProps
			};
			return newState;
		}
		return null;
	}

	render() {
		const { result } = this.state;
		const { t, variables } = this.props;
		if ( !result ) {
			return <Alert variant="danger">{t('missing-attributes')}</Alert>;
		}
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >{t('kmeans-summary')}</span>
				<p>{result.converged ? t('algorithm-converged', { n: result.iterations }) : t('algorithm-not-converged', { n: result.iterations })}</p>
				{summaryTable( variables, result.centroid, t )}
			</div>
		);
	}
}


// PROPERTIES //

KMeans.defaultProps = {
	K: 3,
	initialization: 'kmeans++',
	onResult() {}
};

KMeans.propTypes = {
	data: PropTypes.object.isRequired,
	variables: PropTypes.arrayOf( PropTypes.string ).isRequired,
	K: PropTypes.number,
	initialization: PropTypes.oneOf([ 'kmeans++', 'random', 'mostDistant' ]),
	onResult: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'StatisticalModels' )( KMeans );
