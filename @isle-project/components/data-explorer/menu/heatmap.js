// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SelectInput from '@isle-project/components/input/select';
import SliderInput from '@isle-project/components/input/slider';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import HeatMap from '@isle-project/components/plots/heatmap';
import { SHARE_HEATMAP, HEATMAP } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const HeatMapMenu = ( props ) => {
	const { variables, groupingVariables, defaultX, defaultY, t } = props;

	const [ x, setX ] = useState( defaultX || variables[ 0 ] );
	const [ y, setY ] = useState( defaultY || variables[ 1 ] );
	const [ group, setGroup ] = useState( null );
	const [ overlayPoints, setOverlayPoints ] = useState( false );
	const [ commonXAxis, setCommonXAxis ] = useState( false );
	const [ commonYAxis, setCommonYAxis ] = useState( false );
	const [ alternateColor, setAlternateColor ] = useState( false );
	const [ regressionMethod, setRegressionMethod ] = useState( [] );
	const [ smoothSpan, setSmoothSpan ] = useState( 0.66 );

	const generateHeatmap = () => {
		const plotId = randomstring( 6 );
		const action = {
			x, y, overlayPoints, regressionMethod, plotId
		};
		const onShare = () => {
			props.session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( SHARE_HEATMAP, action );
		};
		const output = <HeatMap id={plotId} data={props.data} x={x} y={y} group={group}
			overlayPoints={overlayPoints} commonXAxis={commonXAxis} commonYAxis={commonYAxis}
			alternateColor={alternateColor} regressionMethod={regressionMethod}
			smoothSpan={smoothSpan} action={action} onShare={onShare} onSelected={props.onSelected} />;
		props.logAction( HEATMAP, action );
		props.onCreated( output );
	};
	return (
		<Card>
			<Card.Header as="h4">
				{t('Heat Map')}
				<QuestionButton title={t('Heat Map')} content={t('Heat Map-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<Row>
					<Col><SelectInput
						legend={t('x-axis-variable')}
						defaultValue={x}
						options={variables}
						onChange={setX}
					/>
					</Col>
					<Col><SelectInput
						legend={t('y-axis-variable')}
						defaultValue={y}
						options={variables}
						onChange={setY}
					/></Col>
				</Row>
				<Row>
					<Col>
						<SelectInput
							legend={t('group-by')}
							options={groupingVariables}
							clearable={true}
							onChange={setGroup}
							menuPlacement="top"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<CheckboxInput
							legend={t('common-x-axis')}
							defaultValue={commonXAxis}
							onChange={setCommonXAxis}
							disabled={!group}
							style={{
								opacity: group ? 1.0 : 0.0,
								float: 'left'
							}}
						/>
					</Col>
					<Col>
						<CheckboxInput
							legend={t('common-y-axis')}
							defaultValue={commonYAxis}
							onChange={setCommonYAxis}
							disabled={!group}
							style={{
								opacity: group ? 1.0 : 0.0,
								float: 'left'
							}}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<CheckboxInput
							legend={t('overlay-observations')}
							defaultValue={overlayPoints}
							onChange={setOverlayPoints}
						/>
					</Col>
					<Col>
						<CheckboxInput
							legend={t('alternate-color-scheme')}
							defaultValue={alternateColor}
							onChange={setAlternateColor}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<SelectInput
							legend={t('overlay-regression-line')}
							multi={true}
							options={[ 'linear', 'smooth' ]}
							onChange={( value ) => {
								if ( !isArray( value ) ) {
									value = [ value ];
								}
								setRegressionMethod( value );
							}}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<SliderInput
							legend={t('smoothing-parameter')}
							disabled={!contains(regressionMethod, 'smooth')}
							min={0.01}
							max={1}
							step={0.01}
							defaultValue={smoothSpan}
							onChange={setSmoothSpan}
						/>
					</Col>
				</Row>
				<Button variant="primary" onClick={generateHeatmap}>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

HeatMapMenu.defaultProps = {
	defaultX: null,
	defaultY: null,
	groupingVariables: null,
	logAction() {},
	onSelected() {}
};

HeatMapMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onSelected: PropTypes.func,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default HeatMapMenu;
