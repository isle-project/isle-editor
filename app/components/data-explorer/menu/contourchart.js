// MODULES //

import React, { Component } from 'react';
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

class ContourChartMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			x: props.defaultX || props.variables[ 0 ],
			y: props.defaultY || props.variables[ 1 ],
			overlayPoints: false,
			regressionMethod: [],
			smoothSpan: 0.66
		};
	}

	generateContourChart = () => {
		const { x, y, overlayPoints, regressionMethod, smoothSpan } = this.state;
		const plotId = randomstring( 6 );
		const action = {
			x, y, overlayPoints, regressionMethod, smoothSpan, plotId
		};
		const onShare = () => {
			this.props.session.addNotification({
				title: this.props.t('plot-shared'),
				message: this.props.t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_CONTOURPLOT, action );
		};
		const output = <ContourChart
			id={plotId}
			action={action}
			data={this.props.data}
			onShare={onShare}
			x={x}
			y={y}
			overlayPoints={overlayPoints}
			regressionMethod={regressionMethod}
			smoothSpan={smoothSpan}
			onSelected={this.props.onSelected}
		/>;
		this.props.logAction( DATA_EXPLORER_CONTOURPLOT, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables, t } = this.props;
		return (
			<Card style={{ minWidth: 650 }}>
				<Card.Header as="h4" >
					{t('Contour Chart')}<QuestionButton title={t('Contour Chart')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<Row>
						<Col>
							<SelectInput
								legend="Variable on x-axis:"
								defaultValue={this.state.x}
								options={variables}
								onChange={( value ) => {
									this.setState({
										x: value
									});
								}}
							/>
						</Col>
						<Col>
							<SelectInput
								legend="Variable on y-axis:"
								defaultValue={this.state.y}
								options={variables}
								menuPlacement="top"
								onChange={( value ) => {
									this.setState({
										y: value
									});
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<CheckboxInput
								legend={t('overlay-observations')}
								defaultValue={this.state.overlayPoints}
								onChange={() => {
									this.setState({
										overlayPoints: !this.state.overlayPoints
									});
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<SelectInput
								legend={t('overlay-regression-line')}
								defaultValue={this.state.regressionMethod}
								multi={true}
								options={[ 'linear', 'smooth' ]}
								onChange={( value ) => {
									this.setState({
										regressionMethod: value
									});
								}}
							/>
						</Col>
						<Col>
							<SliderInput
								legend={t('smoothing-parameter')}
								min={0.01}
								max={1}
								step={0.01}
								defaultValue={this.state.smoothSpan}
								disabled={!contains( this.state.regressionMethod, 'smooth' )}
								onChange={( value ) => {
									this.setState({
										smoothSpan: value
									});
								}}
							/>
						</Col>
					</Row>
					<Button variant="primary" block onClick={this.generateContourChart}>
						{t('generate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


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
