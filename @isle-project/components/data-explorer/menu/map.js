// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import Map from '@isle-project/components/plots/map';
import { SHARE_MAP, MAP } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

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
const AGGREGATION_MODES = [
	'avg',
	'sum',
	'min',
	'max',
	'mode',
	'median',
	'count',
	'first',
	'last'
];


// MAIN //

const MapMenu = ( props ) => {
	const { variables, groupingVariables, t } = props;
	const [ longitude, setLongitude ] = useState( null );
	const [ latitude, setLatitude ] = useState( null );
	const [ variable, setVariable ] = useState( null );
	const [ locationmode, setLocationmode ] = useState( 'country names' );
	const [ locations, setLocations ] = useState( null );
	const [ scope, setScope ] = useState( 'world' );
	const [ showLand, setShowLand ] = useState( false );
	const [ aggregation, setAggregation ] = useState( 'sum' );
	const generateMap = () => {
		const plotId = randomstring( 6 );
		const action = {
			variable,
			longitude,
			latitude,
			locations,
			scope,
			showLand,
			plotId
		};
		const onShare = () => {
			props.session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( SHARE_MAP, action );
		};
		const output = <Map
			data={props.data} variable={variable} locations={locations}
			longitude={longitude} latitude={latitude} locationmode={locationmode}
			scope={scope} showLand={showLand}
			id={plotId} action={action} onShare={onShare}
			aggregation={aggregation}
		/>;
		props.logAction( MAP, action );
		props.onCreated( output );
	};
	return (
		<Card
			style={{ fontSize: '14px' }}
		>
			<Card.Header as="h4">
				{t('Map')}
				<QuestionButton title={t('Map')} content={t('Map-description')} />
			</Card.Header>
			<Card.Body>
				<Row>
					<Col>
						<SelectInput
							legend={t('locations')}
							options={groupingVariables}
							clearable
							value={locations}
							onChange={( value ) => {
								setLocations( value );
								setLongitude( null );
								setLatitude( null );
							}}
						/>
					</Col>
					<Col>
						<SelectInput
							legend={t('location-encoding')}
							options={LOCATION_MODES}
							defaultValue={locationmode}
							onChange={setLocationmode}
							disabled={!locations}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<SelectInput
							legend={t('scope')}
							defaultValue={scope}
							options={SCOPES}
							onChange={setScope}
							disabled={!locations}

						/>
					</Col>
					<Col>
						<CheckboxInput
							legend={t('show-land')}
							defaultValue={showLand}
							style={{ marginTop: 35 }}
							onChange={setShowLand}
							disabled={!locations}
						/>
					</Col>
				</Row>
				<h4 className="center">{t('or')}</h4>
				<Row>
					<Col>
						<SelectInput
							legend={t('longitude')}
							options={variables}
							clearable
							value={longitude}
							onChange={( value ) => {
								setLongitude( value );
								setLocations( null );
							}}
						/>
					</Col>
					<Col>
						<SelectInput
							legend={t('latitude')}
							options={variables}
							clearable
							value={latitude}
							onChange={( value ) => {
								setLatitude( value );
								setLocations( null );
							}}
						/>
					</Col>
				</Row>
				<hr />
				<SelectInput
					legend={t('variable')}
					options={variables}
					clearable
					onChange={setVariable}
				/>
				<SelectInput
					legend={t('aggregation-mode')}
					defaultValue={aggregation}
					options={AGGREGATION_MODES}
					onChange={setAggregation}
					disabled={!variable}
				/>
				<div className="d-grid" >
					<Button
						variant="primary" onClick={generateMap}
						disabled={( !longitude || !latitude ) && ( !locations || !variable )}
					>
						{t('calculate')}
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

MapMenu.defaultProps = {
	groupingVariables: null,
	logAction() {},
	onCreated() {}
};

MapMenu.propTypes = {
	data: PropTypes.object.isRequired,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default MapMenu;
