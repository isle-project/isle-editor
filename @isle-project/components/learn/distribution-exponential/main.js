// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import dexp from '@stdlib/stats/base/dists/exponential/pdf';
import pexp from '@stdlib/stats/base/dists/exponential/cdf';
import qexp from '@stdlib/stats/base/dists/exponential/quantile';
import SliderInput from '@isle-project/components/input/slider';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';


// VARIABLES //

const NEAR_ONE = 0.999999;


// MAIN //

/**
* A learning component for calculating probabilities of a exponential distribution.
*
* @property {boolean} hideCDF - controls whether to hide the CDF plots
* @property {number} step - step size of the scroll input
* @property {number} maxRate - maximum rate parameter that can be chosen in input field
* @property {number} minRate - minimum rate parameter that can be chosen in input field
* @property {Object} style - CSS inline styles
*/
class ExponentialProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			rate: 1,
			x0: 0,
			x1: 1
		};
	}

	handleRateChange = ( rate ) => {
		this.setState({ rate });
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	renderInputs( type ) {
		const { rate, x0, x1 } = this.state;
		const { t } = this.props;
		return (
			<Fragment>
				<SliderInput
					key={`${type}-rate`}
					legend={t('rate')}
					defaultValue={rate}
					min={this.props.minRate}
					step={this.props.step}
					max={this.props.maxRate}
					onChange={this.handleRateChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={x0}
					min={0}
					max={qexp( NEAR_ONE, rate )}
					step={this.props.step}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={x1}
						min={0}
						max={qexp( NEAR_ONE, rate )}
						step={this.props.step}
						onChange={this.handleUpperChange}
					/> :
				null }
			</Fragment>
		);
	}

	render() {
		const { rate, x0, x1 } = this.state;
		const { t } = this.props;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				{t('exponential-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={1} id="exponential-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'smaller' )}
									<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pexp( x0, rate ), -4 )}`} displayMode />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ 0, qexp( NEAR_ONE, rate ) ]
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
												return dexp( data.x, rate );
											}
											return 0.0;
										}}
										style={{
											data: {
												opacity: 0.3, fill: 'tomato'
											}
										}}
									/>
									<VictoryLine
										y={( data ) =>
											dexp( data.x, rate )
										}
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
										samples={600}
										y={( data ) => {
											return pexp( data.x, rate );
										}}
										domain={{
											x: [ 0, qexp( NEAR_ONE, rate ) ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: pexp( x0, rate ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: pexp( x0, rate ) },
											{ x: x0, y: pexp( x0, rate ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
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
									<TeX raw={`P(X > ${roundn( x0, -4 )} ) = ${roundn( 1-pexp( x0, rate ), -4 )}`} displayMode />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ 0, qexp( NEAR_ONE, rate ) ]
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
												return dexp( data.x, rate );
											}
											return 0.0;
										}}
										style={{
											data: {
												opacity: 0.3, fill: 'tomato'
											}
										}}
									/>
									<VictoryLine
										y={( data ) =>
											dexp( data.x, rate )
										}
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
										samples={600}
										y={( data ) => {
											return pexp( data.x, rate );
										}}
										domain={{
											x: [ 0, qexp( NEAR_ONE, rate ) ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: pexp( x0, rate ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 1 },
											{ x: x0, y: pexp( x0, rate ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: pexp( x0, rate ) },
											{ x: x0, y: pexp( x0, rate ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col> : null }
						</Row></Container>

					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Container><Row>
							<Col>
								<Panel>
									{this.renderInputs( 'range' )}
									{ x1 >= x0 ?
										<TeX raw={`P( ${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )} ) = ${roundn( pexp( x1, rate ) - pexp( x0, rate ), -4 )}`} displayMode /> :
										<Alert variant="warning">{t('lower-bound-smaller-equal-upper-bound')}</Alert>
									}
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ 0, qexp( NEAR_ONE, rate ) ]
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
											if ( data.x >= x0 && data.x <= x1 ) {
												return dexp( data.x, rate );
											}
											return 0.0;
										}}
										style={{
											data: {
												opacity: 0.3, fill: 'tomato'
											}
										}}
									/>
									<VictoryLine
										y={( data ) =>
											dexp( data.x, rate )
										}
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
										samples={600}
										y={( data ) => {
											return pexp( data.x, rate );
										}}
										domain={{
											x: [ 0, qexp( NEAR_ONE, rate ) ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x1, y: pexp( x0, rate ) },
											{ x: x1, y: pexp( x1, rate ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: pexp( x0, rate ) },
											{ x: x1, y: pexp( x0, rate ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
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

ExponentialProbs.propTypes = {
	hideCDF: PropTypes.bool,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	maxRate: PropTypes.number,
	minRate: PropTypes.number,
	style: PropTypes.object
};

ExponentialProbs.defaultProps = {
	hideCDF: false,
	maxRate: 10,
	minRate: 1e-3,
	step: 0.01,
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( ExponentialProbs );
