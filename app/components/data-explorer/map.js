// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import startcase from '@stdlib/string/startcase';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import CheckboxInput from 'components/input/checkbox';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import mean from 'utils/statistic/mean';
import range from 'utils/statistic/range';
import { DATA_EXPLORER_SHARE_MAP, DATA_EXPLORER_MAP } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'Display geospatial information in a map using latitude and longitude or country / state names.';
const SCOPES = [
	'world',
	'usa',
	'europe',
	'asia',
	'africa',
	'north america',
	'south america'
];
const LOCATION_MODES = [
	'ISO-3',
	'USA-states',
	'country names'
];
const PURPLE_SCALE = [
	[ 0, '#feebe2' ],
	[ 0.2, '#fcc5c0' ],
	[ 0.4, '#fa9fb5' ],
	[ 0.6, '#f768a1' ],
	[ 0.8, '#c51b8a' ],
	[ 1, '#7a0177' ]
];


// FUNCTIONS //

export function generateMapConfig({ data, longitude, latitude, locations, locationmode, variable, scope, showLand }) {
	let traces = [];
	if ( longitude && latitude ) {
		const lon = data[ longitude ];
		const lat = data[ latitude ];
		let zoom = range( lon )[ 0 ];
		zoom = 1.0 / zoom;
		traces.push({
			type: 'scattermapbox',
			mode: 'markers',
			text: data[ variable],
			marker: {
				opacity: 0.6,
				autocolorscale: false,
				colorscale: PURPLE_SCALE,
				color: data[ variable]
			},
			lon,
			lat
		});
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
		traces.push({
			type: 'choropleth',
			locationmode,
			locations: data[ locations ],
			z: data[ variable ],
			autocolorscale: true
		});
		let title = 'Map';
		if ( variable ) {
			title += ` of ${variable}`;
		}
		if ( scope ) {
			title += ` ${variable ? 'in' : 'of'} ${startcase( scope )}`;
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

class Map extends Component {
	constructor( props ) {
		super( props );
	}

	generateMap( locations, locationmode, scope, showLand, longitude, latitude, variable ) {
		const config = generateMapConfig({ data: this.props.data, locationmode, longitude, latitude, locations, variable, scope, showLand });
		const plotId = randomstring( 6 );
		const output = {
			variable: variable,
			type: 'Chart',
			value: <Plotly editable id={plotId} fit draggable data={config.data} layout={config.layout} onShare={() => {
				this.props.session.addNotification({
					title: 'Plot shared.',
					message: 'You have successfully shared your plot.',
					level: 'success',
					position: 'tr'
				});
				this.props.logAction( DATA_EXPLORER_SHARE_MAP, {
					variable, locations, plotId
				});
			}} />
		};
		this.props.logAction( DATA_EXPLORER_MAP, {
			variable,
			longitude,
			latitude,
			locations,
			scope,
			showLand,
			plotId
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title={<span>Map<QuestionButton title="Map" content={DESCRIPTION} /></span>}
				onGenerate={this.generateMap.bind( this )}
			>
				<Row>
					<Col>
						<SelectInput
							legend="Locations:"
							options={groupingVariables}
							clearable
						/>
					</Col>
					<Col>
						<SelectInput
							legend="Location encoding"
							options={LOCATION_MODES}
							defaultValue="country names"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<SelectInput
							legend="Scope:"
							defaultValue="world"
							options={SCOPES}
						/>
					</Col>
					<Col>
						<CheckboxInput
							legend="Show Land"
							defaultValue={false}
							style={{ marginTop: 35 }}
						/>
					</Col>
				</Row>
				<h4 className="center">or</h4>
				<Row>
					<Col>
						<SelectInput
							legend="Longitude:"
							options={variables}
							clearable
						/>
					</Col>
					<Col>
						<SelectInput
							legend="Latitude:"
							options={variables}
							clearable
						/>
					</Col>
				</Row>
				<hr />
				<SelectInput
					legend="Variable:"
					options={variables}
					clearable
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

Map.defaultProps = {
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};

Map.propTypes = {
	data: PropTypes.object.isRequired,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Map;
