// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
const COLOR_SCALE = [
	[0, 'rgb(5, 10, 172)'],
	[0.35, 'rgb(40, 60, 190)'],
	[0.5, 'rgb(70, 100, 245)'],
	[0.6, 'rgb(90, 120, 245)'],
	[0.7, 'rgb(106, 137, 247)'],
	[1, 'rgb(220, 220, 220)']
];


// FUNCTIONS //

export function generateMapConfig({ data, longitude, latitude, locations, locationmode, variable, scope, showLand }) {
	let traces = [];
	let title = 'Map';
	if ( variable ) {
		title += ` of ${variable}`;
	}
	if ( scope ) {
		title += ` ${variable ? 'in' : 'of'} ${scope}`;
	}
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
				opacity: 0.4,
				autocolorscale: false,
				colorscale: COLOR_SCALE,
				color: data[ variable]
			},
			lon,
			lat
		});
		return {
			data: traces,
			layout: {
				title,
				mapbox: {
					zoom,
					center: {
						lon: mean( lon ),
						lat: mean( lat )
					}
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
		return {
			data: traces,
			layout: {
				title,
				geo: {
					scope,
					resolution: showLand ? 50 : 110,
					showrivers: showLand,
					showlakes: showLand,
					showland: showLand,
					showocean: showLand,
					showcoastlines: showLand
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
				<SelectInput
					legend="Scope:"
					defaultValue="world"
					options={SCOPES}
				/>
				<CheckboxInput
					legend="Show Land"
					defaultValue={false}
				/>
				<p>or</p>
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
