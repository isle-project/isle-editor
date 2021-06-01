// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import papplyRight from '@stdlib/utils/papply-right';
import round from '@stdlib/math/base/special/round';
import objectKeys from '@stdlib/utils/keys';
import isArray from '@stdlib/assert/is-array';
import entries from '@stdlib/utils/entries';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import Table from '@isle-project/components/table';
import statistic from '@isle-project/utils/statistic';
import { Factor } from '@isle-project/utils/factor-variable';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const N = 'N';
const IQR = 'IQR';
const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};


// FUNCTIONS //

const IQRTable = ({ e, t }) => {
	const table = <Table bordered size="sm">
		<thead>
			<tr>
				<th>{t('variable')}</th>
				<th>{IQR}</th>
				<th>{t('lower')}</th>
				<th>{t('upper')}</th>
				<th>{N}</th>
			</tr>
		</thead>
		<tbody>
			{entries( e.result ).map( ( res, idx ) => {
				return ( <tr key={idx} >
					<td>{res[ 0 ]}</td>
					{res[ 1 ].value[ 0 ].map( ( e, i ) =>
						<td key={i}>{e.toFixed( 3 )}</td>
					)}
					<td>{res[ 1 ].size}</td>
				</tr> );
			})}
		</tbody>
	</Table>;
	return table;
};

const RangeTable = ({ e, t }) => {
	const table = <Table bordered size="sm">
		<thead>
			<tr>
				<th>{t('variable')}</th>
				<th>{t('range')}</th>
				<th>{t('min')}</th>
				<th>{t('max')}</th>
				<th>{N}</th>
			</tr>
		</thead>
		<tbody>
			{entries( e.result ).map( ( res, idx ) => {
				return ( <tr key={idx} >
					<td>{res[ 0 ]}</td>
					{res[ 1 ].value[ 0 ].map( ( e, i ) =>
						<td key={i}>{e.toFixed( 3 )}</td>
					)}
					<td>{res[ 1 ].size}</td>
				</tr> );
			})}
		</tbody>
	</Table>;
	return table;
};

const CorrelationTable = ( props ) => {
	const title = props.group ? props.group : 'Correlation Matrix';
	const thead = <thead>
		<tr>
			<th>{title} (N={props.result.size})</th>
			{props.variables.map( ( x, i ) => <th key={i}>{x}</th> )}
		</tr>
	</thead>;
	const tbody = <tbody>
		{props.variables.map( ( x, i ) => {
			return (
				<tr key={i}>
					<th>{x}</th>
					{props.result.value[ i ].map( ( y, j ) => <td key={j}>{y.toFixed( 3 )}</td> )}
				</tr>
			);
		})}
	</tbody>;
	return ( <Table bordered size="sm" {...props} >
		{thead}
		{tbody}
	</Table> );
};

const CorrelationMatrix = ({ e, t }) => {
	if ( e.group ) {
		const tables = [];
		const keys = objectKeys( e.result );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const table = <CorrelationTable
				key={key}
				group={key}
				result={e.result[ key ]}
				variables={e.variables}
			/>;
			tables.push( table );
		}
		return tables;
	}
	return <CorrelationTable result={e.result} variables={e.variables} />;
};


function byWithCount( arr, factor, funs, group ) {
	let table = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( table[ factor[ i ] ]) ) {
			table[ factor[ i ] ] = [];
		}
		table[ factor[ i ] ].push( arr[ i ]);
	}
	let keys = objectKeys( table );
	if ( group.length === 2 ) {
		const cat1 = group[ 0 ].categories;
		const cat2 = group[ 1 ].categories;
		if ( cat1 && cat2 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = cat1.indexOf( as[ 0 ] ) - cat1.indexOf( bs[ 0 ] );
				if ( diff !== 0 ) {
					return diff;
				}
				diff = cat2.indexOf( as[ 1 ] ) - cat2.indexOf( bs[ 1 ] );
				return diff;
			});
		}
		else if ( cat1 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = cat1.indexOf( as[ 0 ] ) - cat1.indexOf( bs[ 0 ] );
				if ( diff !== 0 ) {
					return diff;
				}
				return as[ 1 ].localeCompare( bs[ 1 ], void 0, SORT_OPTS );
			});
		}
		else if ( cat2 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = as[ 0 ].localeCompare( bs[ 0 ], void 0, SORT_OPTS );
				if ( diff !== 0 ) {
					return diff;
				}
				diff = cat2.indexOf( as[ 1 ] ) - cat2.indexOf( bs[ 1 ] );
				return diff;
			});
		}
		else {
			keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
		}
	} else if ( group.length === 1 && group[ 0 ].categories ) {
		keys = extractUsedCategories( table, group[ 0 ] );
	} else {
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	const out = {};
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		out[ key ] = {
			value: funs.map( f => f( table[ key ] ) ),
			size: table[ key ].length
		};
	}
	return out;
}

function by2WithCount( arr1, arr2, factor, funs, group ) {
	let result = {};
	let ret1 = {};
	let ret2 = {};
	for ( let i = 0; i < factor.length; i++ ) {
		if ( !isArray( ret1[ factor[ i ] ]) ) {
			ret1[ factor[ i ] ] = [];
			ret2[ factor[ i ] ] = [];
		}
		ret1[ factor[ i ] ].push( arr1[ i ]);
		ret2[ factor[ i ] ].push( arr2[ i ]);
	}
	let keys;
	if ( group.length === 1 ) {
		keys = extractUsedCategories( ret1, group[ 0 ] );
	} else {
		keys = objectKeys( ret1 );
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		result[ key ] = {
			value: funs.map( f => f( ret1[ key ], ret2[ key ]) ),
			size: ret1[ key ].length
		};
	}
	return { keys, result };
}

function groupedCompleteCases( arrs, groupData ) {
	const indices = [];
	const len = arrs[ 0 ].length;
	for ( let j = 0; j < len; j++ ) {
		let complete = true;
		for ( let i = 0; i < arrs.length; i++ ) {
			const x = arrs[ i ][ j ];
			if ( !isNumber( x ) || isnan( x ) ) {
				complete = false;
				break;
			}
		}
		if ( complete ) {
			indices.push( j );
		}
	}
	const out = {};
	for ( let i = 0; i < arrs.length; i++ ) {
		for ( let j = 0; j < indices.length; j++ ) {
			const group = groupData[ indices[ j ] ];
			if ( !out[ group ] ) {
				out[ group ] = new Array( arrs.length );
				for ( let k = 0; k < arrs.length; k++ ) {
					out[ group ][ k ] = [];
				}
			}
			const idx = indices[ j ];
			out[ group ][ i ].push( arrs[ i ][ idx ] );
		}
	}
	return out;
}

function groupedCases( arrs, groupData ) {
	const out = {};
	const len = arrs[ 0 ].length;
	for ( let i = 0; i < arrs.length; i++ ) {
		for ( let j = 0; j < len; j++ ) {
			const group = groupData[ j ];
			if ( !out[ group ] ) {
				out[ group ] = new Array( arrs.length );
				for ( let k = 0; k < arrs.length; k++ ) {
					out[ group ][ k ] = [];
				}
			}
			out[ group ][ i ].push( arrs[ i ][ j ] );
		}
	}
	return out;
}

function completeCases( arrs ) {
	const indices = [];
	const len = arrs[ 0 ].length;
	for ( let j = 0; j < len; j++ ) {
		let complete = true;
		for ( let i = 0; i < arrs.length; i++ ) {
			const x = arrs[ i ][ j ];
			if ( !isNumber( x ) || isnan( x ) ) {
				complete = false;
				break;
			}
		}
		if ( complete ) {
			indices.push( j );
		}
	}
	const out = new Array( arrs.length );
	for ( let i = 0; i < arrs.length; i++ ) {
		const arr = new Array( indices.length );
		for ( let j = 0; j < indices.length; j++ ) {
			const idx = indices[ j ];
			arr[ j ] = arrs[ i ][ idx ];
		}
		out[ i ] = arr;
	}
	return out;
}

function generateStatistics({ data, t, statistics, variables, secondVariable, group, omit, quantiles }) {
	const funs = [];
	const statLabels = [];
	for ( let i = 0; i < statistics.length; i++ ) {
		const stat = statistics[ i ];
		if ( stat === 'Quantile' ) {
			for ( let j = 0; j < quantiles.length; j++ ) {
				const quantile = quantiles[ j ];
				funs.push(
					papplyRight( statistic( stat ), quantile, 5 )
				);
				statLabels.push(
					`${round( quantile*100 )}% ${t('quantile')}`
				);
			}
		} else {
			funs.push( statistic( stat ) );
			statLabels.push( stat );
		}
	}
	if ( statLabels[ 0 ] === 'Correlation Matrix' ) {
		let arrs = variables.map( x => data[ x ] );
		if ( group ) {
			let groupData;
			if ( group.length === 2 ) {
				groupData = [];
				for ( let i = 0; i < arrs[ 0 ].length; i++ ) {
					const groupLabel = group.map( g => {
						return data[ g ][ i ];
					}).join( ':' );
					groupData.push( groupLabel );
				}
			} else {
				groupData = data[ group[ 0 ] ];
			}
			if ( omit ) {
				arrs = groupedCompleteCases( arrs, groupData );
			} else {
				arrs = groupedCases( arrs, groupData );
			}
		} else if ( omit ) {
			arrs = completeCases( arrs );
		}
		let result;
		if ( group ) {
			result = {};
			const keys = objectKeys( arrs );
			for ( let i = 0; i < keys.length; i++ ) {
				result[ keys[ i ] ] = {
					value: funs.map( f => f.apply( null, arrs[ keys[ i ] ] ) )[ 0 ],
					size: arrs[ keys[ i ] ][ 0 ].length
				};
			}
		} else {
			const value = funs.map( f => f.apply( null, arrs ) );
			result = {
				value: value[ 0 ],
				size: arrs[ 0 ].length
			};
		}
		const output = {
			variables: variables,
			statistics: statLabels,
			type: 'Statistics',
			result,
			group
		};
		return output;
	}
	const result = {};
	for ( let i = 0; i < variables.length; i++ ) {
		let groupData;
		let res;
		let x;
		let y;
		const variable = variables[ i ];
		if ( group ) {
			if ( omit ) {
				// Case: grouping variable selected, omit missing values
				x = [];
				y = [];
				groupData = [];
				if ( variable && secondVariable ) {
					let first = data[ variable ];
					let second = data[ secondVariable ];
					for ( let i = 0; i < first.length; i++ ) {
						if (
							( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) &&
							( isNumber( second[ i ] ) && !isnan( second[ i ] ) )
						) {
							x.push( first[ i ] );
							y.push( second[ i ] );
							const groupLabel = group.map( g => {
								return data[ g ][ i ];
							}).join( ':' );
							groupData.push( groupLabel );
						}
					}
				} else {
					let first = data[ variable ];
					for ( let i = 0; i < first.length; i++ ) {
						if ( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) {
							x.push( first[ i ] );
							const groupLabel = group.map( g => {
								return data[ g ][ i ];
							}).join( ':' );
							groupData.push( groupLabel );
						}
					}
				}
			} else {
				// Case: grouping variable(s) selected, do not omit missing values
				x = data[ variable ];
				y = data[ secondVariable ];
				if ( group.length === 2 ) {
					groupData = [];
					for ( let i = 0; i < data[ variable ].length; i++ ) {
						const groupLabel = group.map( g => {
							return data[ g ][ i ];
						}).join( ':' );
						groupData.push( groupLabel );
					}
				} else {
					groupData = data[ group[ 0 ] ];
				}
			}
			if ( statLabels[ 0 ] === 'Correlation' ) {
				const out = by2WithCount( x, y, groupData, funs, group );
				res = out.result;
				const keys = out.keys;
				for ( let i = 0; i < keys.length; i++ ) {
					const key = keys[ i ];

					// Extract correlation coefficient from correlation matrix:
					res[ key ].value = res[ key ].value.map( mat => mat[ 0 ][ 1 ] );
				}
				variable = `${variable} ${t('vs')} ${secondVariable}`;
			} else {
				res = byWithCount( x, groupData, funs, group );
			}
		} else {
			// Case: no grouping variable selected
			if ( omit ) {
				x = [];
				y = [];
				if ( variable && secondVariable ) {
					let first = data[ variable ];
					let second = data[ secondVariable ];
					for ( let i = 0; i < first.length; i++ ) {
						if (
							( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) &&
							( isNumber( second[ i ] ) && !isnan( second[ i ] ) )
						) {
							x.push( first[ i ] );
							y.push( second[ i ] );
						}
					}
				} else {
					let first = data[ variable ];
					for ( let i = 0; i < first.length; i++ ) {
						if ( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) {
							x.push( first[ i ] );
						}
					}
				}
			} else {
				x = data[ variable ];
				y = data[ secondVariable ];
			}
			if ( statLabels[ 0 ] === 'Correlation' ) {
				const value = funs.map( f => {
					const r = f( x, y );
					return r[ 0 ][ 1 ];
				});

				// Extract correlation coefficient from correlation matrix:
				res = {
					value,
					size: x.length
				};
				variable = `${variable} ${t('vs')} ${secondVariable}`;
			}
			else {
				res = {
					value: funs.map( f => f( x ) ),
					size: x.length
				};
			}
		}
		result[ variable ] = res;
	}
	const output = {
		variables: variables,
		statistics: statLabels,
		type: 'Statistics',
		result,
		group
	};
	return output;
}


// MAIN //

function SummaryStatistics({ variables, statistics, data, secondVariable, group, omit, quantiles }) {
	const { t } = useTranslation( 'data-explorer' );
	const e = generateStatistics({ data, t, statistics, variables, secondVariable, group, omit, quantiles });
	if ( e.group ) {
		if ( e.statistics.length === 1 && e.statistics[0] === 'Correlation Matrix' ) {
			return <CorrelationMatrix e={e} t={t} />;
		}
		const variables = entries( e.result );
		let header;
		if ( e.statistics.length === 1 && e.statistics[0] === 'Range' ) {
			header = <tr>
				<th className="not-sortable" >{t('variable')}</th>
				{e.group.map( ( x, i ) => <th key={i} >{x}</th> )}
				<th>{t('range')}</th>
				<th>{t('min')}</th>
				<th>{t('max')}</th>
				<th>{N}</th>
			</tr>;
		} else if ( e.statistics.length === 1 && e.statistics[0] === 'Interquartile Range' ) {
			header = <tr>
				<th className="not-sortable" >{t('variable')}</th>
				{e.group.map( ( x, i ) => <th key={i} >{x}</th> )}
				<th>{IQR}</th>
				<th>{t('lower')}</th>
				<th>{t('upper')}</th>
				<th>{N}</th>
			</tr>;
		} else {
			header = <tr>
				<th className="not-sortable" >{variables.length > 1 ? 'Variable' : variables[ 0 ][ 0 ]}</th>
				{e.group.map( ( x, i ) => <th key={i} >{x}</th> )}
				{e.statistics.map( ( name, i ) => {
					return <th key={i}>{name}</th>;
				})}
				<th>{N}</th>
			</tr>;
		}
		const table = <Table bordered size="sm" >
			<thead>
				{header}
			</thead>
			<tbody>
				{variables.map( ( res ) => {
					let grouped = entries( res[ 1 ] );
					grouped = grouped.map( ( arr, groupIndex ) => {
						let cats;
						if ( e.group.length > 1 ) {
							cats = arr[ 0 ].split( ':' ).map( ( x, i ) => {
								return <td key={i} >{x}</td>;
							});
						} else {
							cats = <td>{arr[ 0 ]}</td>;
						}
						return (
							<tr key={groupIndex} >
								<td>{variables.length > 1 ? res[ 0 ] : ''}</td>
								{cats}
								{arr[ 1 ].value.map( ( v, groupIndex ) => {
									if ( isArray( v ) ) {
										if ( e.statistics.length === 1 ) {
											// eslint-disable-next-line max-nested-callbacks
											return v.map( ( elem, i ) => {
												return <td key={i} >{elem.toFixed( 3 )}</td>;
											});
										}
										return <td key={groupIndex} >{v[ 0 ].toFixed( 3 )}</td>;
									}
									return <td key={groupIndex} >{v.toFixed( 3 )}</td>;
								})}
								<td>{arr[ 1 ].size} </td>
							</tr>
						);
					});
					return grouped;
				})}
			</tbody>
		</Table>;
		return table;
	}
	if ( e.statistics.length === 1 ) {
		if ( e.statistics[0] === 'Range' ) {
			return <RangeTable e={e} t={t} />;
		}
		if ( e.statistics[0] === 'Interquartile Range' ) {
			return <IQRTable e={e} t={t} />;
		}
		if ( e.statistics[0] === 'Correlation Matrix' ) {
			return <CorrelationMatrix e={e} t={t} />;
		}
	}
	const table = <Table bordered size="sm">
		<thead>
			<tr>
				<th className="not-sortable" >{t('variable')}</th>
				{e.statistics.map( ( name, i ) => {
					return <th key={i}>{name}</th>;
				})}
				<th>{N}</th>
			</tr>
		</thead>
		<tbody>
			{entries( e.result ).map( ( res ) => {
				return (
					<tr key={res[ 0 ]} >
						<td>{res[ 0 ]}</td>
						{res[ 1 ].value.map( ( v, i ) => {
							if ( isArray( v ) ) {
								// Case: Range or IQR, use first element:
								return <td key={i} >{v[ 0 ].toFixed( 3 )}</td>;
							}
							return <td key={i} >{v.toFixed( 3 )}</td>;
						})}
						<td>{res[ 1 ].size}</td>
					</tr>
				);
			})}
		</tbody>
	</Table>;
	return table;
}


// PROPERTIES //

SummaryStatistics.propTypes = {
	data: PropTypes.object.isRequired,
	variables: PropTypes.arrayOf( PropTypes.string ).isRequired,
	statistics: PropTypes.arrayOf( PropTypes.oneOf([
		'Mean',
		'Median',
		'Min',
		'Max',
		'Range',
		'Interquartile Range',
		'Standard Deviation',
		'Variance',
		'Correlation',
		'Correlation Matrix',
		'Skewness',
		'Excess Kurtosis',
		'First Quartile',
		'Third Quartile',
		'Quantile',
		'Five-Number Summary'
	]) ),
	secondVariable: PropTypes.string,
	omit: PropTypes.bool,
	group: PropTypes.arrayOf( PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]) ),
	quantiles: PropTypes.array
};

SummaryStatistics.defaultProps = {
	secondVariable: null,
	omit: false,
	group: null,
	quantiles: null
};


// EXPORTS //

/**
* Summary statistics
*
* @property {Object} data - object of value arrays
* @property {Array<string>} statistics - statistics(s) to calculate for the selected variables (either 'Mean', `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, or `Quantile`)
* @property {Array<string>} variables - variable(s) for which to calculate statistics
* @property {Array<(string|Factor)>} group - name of grouping variable(s)
* @property {boolean} omit - controls whether to omit missing values
* @property {string} secondVariable - second variable for correlation statistic
* @property {Array<number>} quantiles - array of quantiles to calculate for `Quantile` statistic
*/
export default withPropCheck( SummaryStatistics );
