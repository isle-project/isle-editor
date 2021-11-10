// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import CheckboxInput from '@isle-project/components/input/checkbox';
import ContourChart from '@isle-project/components/plots/contourchart';
import SelectInput from '@isle-project/components/input/select';
import SliderInput from '@isle-project/components/input/slider';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import { DATA_EXPLORER_SHARE_CONTOURPLOT, DATA_EXPLORER_CONTOURPLOT } from '@isle-project/constants/actions.js';
import QuestionButton from '../question_button.js';


// MAIN //

const ContourChartMenu = ( props ) => {
	const [ x, setX ] = useState( props.variables[ 0 ] );
	const [ y, setY ] = useState( props.variables[ 1 ] );
	const [ overlayPoints, setOverlayPoints ] = useState( false );
	const [ regressionMethod, setRegressionMethod ] = useState( [] );
	const [ smoothSpan, setSmoothSpan ] = useState( 0.66 );

	const generateContourChart = () => {
		const { data, onCreated, onSelected, logAction, session, t } = props;
		const plotId = randomstring( 6 );
		const action = {
			x, y, overlayPoints, regressionMethod, smoothSpan, plotId
		};
		const output = <ContourChart
			id={plotId}
			action={action}
			data={data}
			onShare={() => {
				session.addNotification({
					title: t('plot-shared'),
					message: t('plot-shared-message'),
					level: 'success',
					position: 'tr'
				});
				logAction( DATA_EXPLORER_SHARE_CONTOURPLOT, action );
			}}
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
		<Card>
			<Card.Header as="h4" >
				{t('Contour Chart')}
				<QuestionButton title={t('Contour Chart')} content={t('Contour Chart-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
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
							min={0.01}
							max={1}
							step={0.01}
							defaultValue={smoothSpan}
							disabled={!contains( regressionMethod, 'smooth' )}
							onChange={setSmoothSpan}
						/>
					</Col>
				</Row>
				<Button variant="primary" onClick={generateContourChart}>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

ContourChartMenu.defaultProps = {
	logAction() {},
	onSelected() {}
};

ContourChartMenu.propTypes = {
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired,
	onCreated: PropTypes.func.isRequired,
	onSelected: PropTypes.func
};


// EXPORTS //

export default ContourChartMenu;
