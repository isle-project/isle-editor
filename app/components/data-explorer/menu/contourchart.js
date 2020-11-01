// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import contains from '@stdlib/assert/contains';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import ContourChart from 'components/plots/contourchart';
import randomstring from 'utils/randomstring/alphanumeric';
import { DATA_EXPLORER_SHARE_CONTOURPLOT, DATA_EXPLORER_CONTOURPLOT } from 'constants/actions.js';
import QuestionButton from '../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A contour plot can be used to display the joint distribution of two quantitative variables. It plots a three-dimensional surface by plotting constant slices, called contours, on a two-dimensional grid.';


// MAIN //

const ContourChartMenu = ( props ) => {
	const [ x, setX ] = useState( props.defaultX || props.variables[ 0 ] );
	const [ y, setY ] = useState( props.defaultY || props.variables[ 1 ] );
	const [ overlayPoints, setOverlayPoints ] = useState( false );
	const [ regressionMethod, setRegressionMethod ] = useState( [] );
	const [ smoothSpan, setSmoothSpan ] = useState( 0.66 );

	const generateContourChart = () => {
		const { data, onCreated, onSelected, logAction, session, t } = props;
		const plotId = randomstring( 6 );
		const action = {
			x, y, overlayPoints, regressionMethod, smoothSpan, plotId
		};
		const onShare = () => {
			session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			logAction( DATA_EXPLORER_SHARE_CONTOURPLOT, action );
		};
		const output = <ContourChart
			id={plotId}
			action={action}
			data={data}
			onShare={onShare}
			x={x}
			y={y}
			overlayPoints={overlayPoints}
			regressionMethod={regressionMethod}
			smoothSpan={smoothSpan}
			onSelected={onSelected}
		/>;
		logAction( DATA_EXPLORER_CONTOURPLOT, action );
		onCreated( output );
	};
	const { variables, t } = props;
	return (
		<Card style={{ minWidth: 650 }}>
			<Card.Header as="h4" >
				{t('Contour Chart')}<QuestionButton title={t('Contour Chart')} content={DESCRIPTION} />
			</Card.Header>
			<Card.Body>
				<Row>
					<Col>
						<SelectInput
							legend={t('x-axis-variable')}
							defaultValue={x}
							options={variables}
							onChange={setX}
						/>
					</Col>
					<Col>
						<SelectInput
							legend={t('y-axis-variable')}
							defaultValue={y}
							options={variables}
							menuPlacement="top"
							onChange={setY}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<CheckboxInput
							legend={t('overlay-observations')}
							defaultValue={overlayPoints}
							onChange={() => {
								setOverlayPoints( !overlayPoints );
							}}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<SelectInput
							legend={t('overlay-regression-line')}
							defaultValue={regressionMethod}
							multi={true}
							options={[ 'linear', 'smooth' ]}
							onChange={setRegressionMethod}
						/>
					</Col>
					<Col>
						<SliderInput
							legend={t('smoothing-parameter')}
							min={0.01}
							max={1}
							step={0.01}
							defaultValue={smoothSpan}
							disabled={!contains( regressionMethod, 'smooth' )}
							onChange={setSmoothSpan}
						/>
					</Col>
				</Row>
				<Button variant="primary" block onClick={generateContourChart}>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

ContourChartMenu.defaultProps = {
	defaultX: null,
	defaultY: null,
	logAction() {},
	onSelected() {},
	session: {}
};

ContourChartMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onSelected: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ContourChartMenu;
