// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import dunif from '@stdlib/stats/base/dists/uniform/pdf';
import punif from '@stdlib/stats/base/dists/uniform/cdf';
import NumberInput from '@isle-project/components/input/number';
import SliderInput from '@isle-project/components/input/slider';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';


// VARIABLES //

const LINE_STYLE = {
	data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
};
const AREA_STYLE = {
	data: {
		opacity: 0.3,
		fill: 'tomato'
	}
};


// MAIN //

/**
* A learning component for calculating probabilities of a uniform distribution.
*
* @property {boolean} hideCDF - controls whether to hide the CDF plots
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class UniformProbs extends Component {
	constructor( props ) {
		super( props );
		const min = 0;
		const max = 1;
		this.state = {
			min,
			max,
			x0: 0,
			x1: 1
		};
	}

	handleMinChange = ( min ) => {
		this.setState({ min });
	};

	handleMaxChange = ( max ) => {
		this.setState({ max });
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	renderInputs( type ) {
		const { min, max, x0, x1 } = this.state;
		const { t } = this.props;
		return (
			<Fragment>
				<NumberInput
					key={`${type}-min`}
					legend={t('minimum')}
					defaultValue={min}
					max={max-0.01}
					step={0.1}
					onChange={this.handleMinChange}
				/>
				<NumberInput
					key={`${type}-max`}
					legend={t('maximum')}
					defaultValue={max}
					step={0.1}
					onChange={this.handleMaxChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={x0}
					min={min - 1.0}
					max={max + 1.0}
					step={this.props.step}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						key={`${type}-x1`}
						legend="x1"
						defaultValue={x1}
						min={min - 1.0}
						max={max + 1.0}
						step={this.props.step}
						onChange={this.handleUpperChange}
					/> :
					null
				}
			</Fragment>
		);
	}

	render() {
		const { min, max, x0, x1 } = this.state;
		const { t } = this.props;
		const yheight = dunif( min, min, max );
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }} >
			<Card.Header as="h3">
				{t('uniform-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={1} id="uniform-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'smaller' )}
									<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( punif( x0, min, max ), -4 )}`} displayMode />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ min - 1.0, max + 1.0 ],
										y: [ 0, yheight + 0.1 ]
									}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={200}
										interpolation="step"
										y={( data ) => {
											if ( data.x <= x0 ) {
												return dunif( data.x, min, max );
											}
											return 0.0;
										}}
										style={AREA_STYLE}
									/>
									<VictoryLine
										data={[
											[ min, 0 ],
											[ min, yheight ],
											[ max, yheight ],
											[ max, 0 ]
										]}
										x={d => d[ 0 ]}
										y={d => d[ 1 ]}
									/>
								</VictoryChart>
							</Col>
							{!this.props.hideCDF ? <Col>
								<VictoryChart theme={VictoryTheme.material} >
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={200}
										y={( data ) => {
											return punif( data.x, min, max );
										}}
										domain={{
											x: [ min - 1.0, max + 1.0 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: punif( x0, min, max ) }
										]}
										style={LINE_STYLE}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: punif( x0, min, max ) },
											{ x: x0, y: punif( x0, min, max ) }
										]}
										style={LINE_STYLE}
									/>
								</VictoryChart>
							</Col> : null }
						</Row></Container>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'greater' )}
									<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1-punif( x0, min, max ), -4 )}`} displayMode />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ min - 1.0, max + 1.0 ],
										y: [ 0, yheight + 0.1 ]
									}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={200}
										interpolation="step"
										y={( data ) => {
											if ( data.x > x0 ) {
												return dunif( data.x, min, max );
											}
											return 0.0;
										}}
										style={AREA_STYLE}
									/>
									<VictoryLine
										data={[
											[ min, 0 ],
											[ min, yheight ],
											[ max, yheight ],
											[ max, 0 ]
										]}
										x={d => d[ 0 ]}
										y={d => d[ 1 ]}
									/>
								</VictoryChart>
							</Col>
							{!this.props.hideCDF ? <Col>
								<VictoryChart theme={VictoryTheme.material} >
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={200}
										y={( data ) => {
											return punif( data.x, min, max );
										}}
										domain={{
											x: [ min - 1.0, max + 1.0 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: punif( x0, min, max ) }
										]}
										style={LINE_STYLE}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 1 },
											{ x: x0, y: punif( x0, min, max ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: punif( x0, min, max ) },
											{ x: x0, y: punif( x0, min, max ) }
										]}
										style={LINE_STYLE}
									/>
								</VictoryChart>
							</Col> : null }
						</Row></Container>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1 )" />} >
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'range' )}
									<TeX raw={`P( ${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( punif( x1, min, max )-punif( x0, min, max ), -4 )}`} displayMode />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{ x: [ min - 1.0, max + 1.0 ], y: [ 0, yheight + 0.1 ]}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={200}
										interpolation="step"
										y={( data ) => {
											if ( data.x >= x0 && data.x <= x1 ) {
												return dunif( data.x, min, max );
											}
											return 0.0;
										}}
										style={AREA_STYLE}
									/>
									<VictoryLine
										data={[
											[ min, 0 ],
											[ min, yheight ],
											[ max, yheight ],
											[ max, 0 ]
										]}
										x={d => d[ 0 ]}
										y={d => d[ 1 ]}
									/>
								</VictoryChart>
							</Col>
							{!this.props.hideCDF ? <Col>
								<VictoryChart theme={VictoryTheme.material} >
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={200}
										y={( data ) => {
											return punif( data.x, min, max );
										}}
										domain={{
											x: [ min - 1.0, max + 1.0 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x1, y: punif( x0, min, max ) },
											{ x: x1, y: punif( x1, min, max ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: punif( x0, min, max ) },
											{ x: x1, y: punif( x0, min, max ) }
										]}
										style={LINE_STYLE}
									/>
								</VictoryChart>
							</Col> : null }
						</Row></Container>
					</Tab>
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

UniformProbs.propTypes = {
	hideCDF: PropTypes.bool,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

UniformProbs.defaultProps = {
	hideCDF: false,
	step: 0.01,
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( UniformProbs );
