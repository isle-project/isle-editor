// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import kmeans from 'ml-kmeans';
import Alert from 'react-bootstrap/Alert';
import Plotly from '@isle-project/components/plotly';
import hasOwnProp from '@stdlib/assert/has-own-property';
import Table from '@isle-project/components/table';
import { withPropCheck } from '@isle-project/utils/prop-check';
import isNonMissingNumber from '@isle-project/utils/is-non-missing-number';
import roundn from '@stdlib/math/base/special/roundn';


// FUNCTIONS //

/**
 * Returns a summary table of the cluster centers.
 *
 * @private
 * @param {Array} variables - array of variable names
 * @param {Array} centroids - array of centroid objects
 * @param {Function} t - translation function
 * @returns {Node} summary table
 */
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
				<tr>
					<th>{t('within-group-sum-of-squares')}</th>
					{centroids.map( ( x, i ) => <th key={i} >{roundn( x.error, -3 )}</th>)}
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
	const missingIds = [];
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
		} else {
			missingIds.push( i );
		}
	}
	try {
		const result = kmeans( matrix, K, {
			initialization
		});
		for ( let i = 0; i < missingIds.length; i++ ) {
			result.clusters.splice( missingIds[ i ], 0, null );
		}
		let withinGroupSS = 0;
		result.centroids.forEach( ( centroid ) => {
			withinGroupSS += centroid.error * centroid.size;
		});
		withinGroupSS /= ( n - 1 );
		result.clusters = result.clusters.map( x => {
			if ( x === null ) {
				return null;
			}
			return `Cluster ${x+1}`; // eslint-disable-line i18next/no-literal-string
		});
		result.withinGroupSS = withinGroupSS;
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
* @property {boolean} elbowPlot - boolean indicating whether to include the elbow plot
* @property {Function} onResult - callback invoked with model object
*/
class KMeans extends Component {
	constructor( props ) {
		super( props );
		const { K, variables, data, initialization } = props;
		const result = fitModel({ K, variables, data, initialization });
		if ( result && props.elbowPlot ) {
			result.wcss = {
				k: [],
				ss: []
			};
			for ( let k = 1; k <= K + 3; k++ ) {
				const res = fitModel({ K: k, variables, data, initialization });
				result.wcss.k.push( k );
				result.wcss.ss.push( res.withinGroupSS );
			}
		}
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
			nextProps.initialization !== prevState.initialization ||
			nextProps.elbowPlot !== prevState.elbowPlot
		) {
			const { K, variables, data, initialization } = nextProps;
			const result = fitModel({ K, variables, data, initialization });
			if ( result && nextProps.elbowPlot ) {
				result.wcss = {
					k: [],
					ss: []
				};
				for ( let k = 1; k <= K + 3; k++ ) {
					const res = fitModel({ K: k, variables, data, initialization });
					result.wcss.k.push( k );
					result.wcss.ss.push( res.withinGroupSS );
				}
			}
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
				{summaryTable( variables, result.centroids, t )}
				{result.wcss ? <Plotly editable data={[
					{
						x: result.wcss.k,
						y: result.wcss.ss
					}
				]} layout={{
					xaxis: {
						title: t('number-of-clusters')
					},
					yaxis: {
						title: t('total-within-group-sum-of-squares')
					}
				}} /> : null }
			</div>
		);
	}
}


// PROPERTIES //

KMeans.defaultProps = {
	K: 3,
	elbowPlot: false,
	initialization: 'kmeans++',
	onResult() {}
};

KMeans.propTypes = {
	data: PropTypes.object.isRequired,
	variables: PropTypes.arrayOf( PropTypes.string ).isRequired,
	K: PropTypes.number,
	elbowPlot: PropTypes.bool,
	initialization: PropTypes.oneOf([ 'kmeans++', 'random', 'mostDistant' ]),
	onResult: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'models' )( withPropCheck( KMeans ) );
