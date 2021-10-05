// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import { i18n } from '@isle-project/locales';
import startcase from '@stdlib/string/startcase';
import capitalize from '@stdlib/string/capitalize';
import objectKeys from '@stdlib/utils/keys';
import Plotly from '@isle-project/components/plotly';
import by from '@isle-project/utils/by';
import statistic from '@isle-project/utils/statistic';
import mean from '@isle-project/utils/statistic/mean';
import range from '@isle-project/utils/statistic/range';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const PURPLE_SCALE = [
	[ 0, '#feebe2' ],
	[ 0.2, '#fcc5c0' ],
	[ 0.4, '#fa9fb5' ],
	[ 0.6, '#f768a1' ],
	[ 0.8, '#c51b8a' ],
	[ 1, '#7a0177' ]
];


// FUNCTIONS //

export function generateMapConfig({ data, longitude, latitude, locations, locationmode, variable, scope, showLand, aggregation }) {
	let traces = [];
	let lon;
	let lat;
	let z;
	if ( longitude && latitude ) {
		if ( variable ) {
			const groups = data[ longitude ].map( ( x, i ) => `${x}/${data[ latitude ][ i ]}` );
			let func;
			switch ( aggregation ) {
				case 'first':
					func = x => x[ 0 ];
					break;
				case 'last':
					func = x => x[ x.length - 1 ];
					break;
				case 'count':
					func = x => x.length;
					break;
				default:
					func = statistic( capitalize( aggregation ) );
			}
			const aggregated = by( data[ variable ], groups, func );
			const keys = objectKeys( aggregated );
			lon = new Array( keys.length );
			lat = new Array( keys.length );
			z = new Array( keys.length );
			for ( let i = 0; i < keys.length; i++ ) {
				const [ x, y ] = keys[ i ].split( '/' );
				lon[ i ] = Number( x );
				lat[ i ] = Number( y );
				z[ i ] = aggregated[ keys[ i ] ];
			}
		} else {
			lon = data[ longitude ];
			lat = data[ latitude ];
		}
		let zoom = range( lon )[ 0 ];
		zoom = 1.0 / zoom;
		const trace = {
			type: 'scattermapbox',
			mode: 'markers',
			lon,
			lat
		};
		if ( z ) {
			trace.text = z;
			trace.marker = {
				opacity: 0.6,
				autocolorscale: false,
				colorscale: PURPLE_SCALE,
				color: z,
				colorbar: {
					autotick: true
				}
			};
		}
		traces.push( trace );
		return {
			data: traces,
			layout: {
				mapbox: {
					zoom,
					center: {
						lon: mean( lon ),
						lat: mean( lat )
					}
				},
				margin: {
					l: 10,
					r: 0,
					b: 0,
					t: 80,
					pad: 2
				}
			}
		};
	}
	if ( variable ) {
		const z = [];
		const loc = [];
		for ( let i = 0; i < data[ locations ].length; i++ ) {
			if (
				isNumber( data[ variable ][ i ] ) &&
				!isUndefinedOrNull( data[ locations ][ i ] )
			) {
				loc.push( data[ locations ][ i ] );
				z.push( data[ variable ][ i ] );
			}
		}
		traces.push({
			type: 'choropleth',
			locationmode,
			locations: loc,
			z: z,
			autocolorscale: true,
			transforms: [{
				type: 'aggregate',
				groups: loc,
				aggregations: [
					{
						target: 'z', func: aggregation, enabled: true
					}
				]
			}]
		});
		let title = 'Map';
		if ( variable ) {
			title += ` ${i18n.t('plotly:of')} ${variable}`;
		}
		if ( scope ) {
			title += ` ${variable ? i18n.t('plotly:in') : i18n.t('plotly:of')} ${startcase( scope )}`;
		}
		return {
			data: traces,
			layout: {
				title,
				geo: {
					scope,
					resolution: showLand ? 50 : 110,
					showframe: false,
					showrivers: showLand,
					showlakes: showLand,
					showland: showLand,
					showocean: showLand,
					showcoastlines: showLand
				},
				margin: {
					l: 0,
					r: 0,
					b: 0,
					t: 120,
					pad: 2
				}
			}
		};
	}
}


// MAIN //

function Map({ data, locationmode, longitude, latitude, locations, variable, scope, showLand, id, action, onShare, aggregation }) {
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('plotly:data-missing')}</Alert>;
	}
	const config = generateMapConfig({ data, locationmode, longitude, latitude, locations, variable, scope, showLand, aggregation });
	return (
		<Plotly
			editable id={id} fit draggable
			data={config.data} layout={config.layout}
			meta={action}
			onShare={onShare}
		/>
	);
}


// PROPERTIES //

Map.defaultProps = {
	scope: 'world',
	showLand: false,
	locations: null,
	longitude: null,
	latitude: null,
	locationmode: 'country names',
	aggregation: 'sum'
};

Map.propTypes = {
	data: PropTypes.object.isRequired,
	scope: PropTypes.oneOf([
		'world',
		'usa',
		'europe',
		'asia',
		'africa',
		'north america',
		'south america'
	]),
	locations: PropTypes.string,
	locationmode: PropTypes.oneOf([
		'ISO-3',
		'USA-states',
		'country names'
	]),
	longitude: PropTypes.string,
	latitude: PropTypes.string,
	showLand: PropTypes.bool,
	aggregation: PropTypes.oneOf([
		'avg',
		'sum',
		'min',
		'max',
		'mode',
		'median',
		'count',
		'first',
		'last'
	])
};


// EXPORTS //

/**
* A geographic map which can be either supplied location names or longitude/latitude values.
*
* @property {Object} data - object of value arrays for each variable
* @property {string} scope - scope of map to be displayed
* @property {string} locations - name of variable in `data` holding location names
* @property {string} locationmode - either `ISO-3`, `USA-states`, or `country names` denoting how values in `locations` are encoded
* @property {string} longitude - name of variable in `data` holding longitude values
* @property {string} latitude - name of variable in `data` holding latitude values
* @property {boolean} showLand - whether to show geographic features on map
* @property {string} aggregation - string indicating how to aggregate values for each location (either `sum`, `avg`, `min`, `max`, `mode`, `median`, `count`, `first`, or `last`)
*/
export default withPropCheck( Map );
