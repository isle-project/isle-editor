// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import dt from '@stdlib/stats/base/dists/t/pdf';
import pt from '@stdlib/stats/base/dists/t/cdf';
import qt from '@stdlib/stats/base/dists/t/quantile';
import SliderInput from '@isle-project/components/input/slider';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';


// MAIN //

/**
* A learning component for calculating probabilities of a Student's t distribution.
*
* @property {number} step - step size of the scroll input
* @property {boolean} quantile - whether to show tab for calculating distribution quantiles
* @property {Object} style - CSS inline styles
*/
class TProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			df: 1,
			x0: -1,
			x1: 1,
			p: 0.5
		};
	}

	handleDFChange = ( df ) => {
		this.setState({ df });
	};

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	};

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	};

	handlePropChange = ( p ) => {
		this.setState({ p });
	};

	renderInputs( type ) {
		const { df, x0, x1, p } = this.state;
		const { t } = this.props;
		return (
			<Fragment>
				<SliderInput
					key={`${type}-df`}
					legend={t('degrees-of-freedom')}
					defaultValue={df}
					min={1e-3}
					step={this.props.step}
					max={25}
					onChange={this.handleDFChange}
				/>
				{ type !== 'quantile' ? <SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={x0}
					min={-4}
					max={4}
					step={this.props.step}
					onChange={this.handleLowerChange}
				/> : <SliderInput
					key={`${type}-p`}
					legend="p"
					defaultValue={p}
					min={0}
					max={1}
					step={this.props.step}
					onChange={this.handlePropChange}
				/> }
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={x1}
						min={-4}
						max={4}
						step={this.props.step}
						onChange={this.handleUpperChange}
					/> :
				null }
			</Fragment>
		);
	}

	renderQuantileTab() {
		const { df, p } = this.state;
		const { t } = this.props;
		const quantile = qt( p, df );
		return (
			<Container>
				<Row>
					<Col md={4} >
						<Panel bodyClassName="d-grid gap-1" >
							{this.renderInputs( 'quantile' )}
							<TeX raw={`F^{-1}(p) = ${roundn( quantile, -4 )}`} />
						</Panel>
					</Col>
					<Col md={6} >
						<VictoryChart
							domain={{
								x: [ 0.001, 0.999 ],
								y: [ qt( 0.001, df ), qt( 0.999, df ) ]
							}}
							theme={VictoryTheme.material}
						>
							<VictoryAxis dependentAxis />
							<VictoryAxis
								label={t('quantile-function')} tickFormat={(x) => `${x}`} crossAxis={false}
								style={{ axisLabel: { padding: 40 }}}
							/>
							<VictoryLine
								samples={200}
								animate={{ duration: 500, easing: 'linear' }}
								y={( data ) =>
									qt( data.x, df )
								}
							/>
							<VictoryLine
								data={[
									{ x: p, y: 0 },
									{ x: p, y: quantile }
								]}
								style={{
									data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
								}}
							/>
							<VictoryLine
								data={[
									{ x: 0, y: quantile },
									{ x: p, y: quantile }
								]}
								style={{
									data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
								}}
							/>
						</VictoryChart>
					</Col>
				</Row>
			</Container>
		);
	}

	render() {
		const { df, x0, x1 } = this.state;
		const { t } = this.props;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				{t('students-t-distribution')}
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={1} id="student-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container><Row>
							<Col>
								<Panel bodyClassName="d-grid gap-1" >
									{this.renderInputs( 'smaller' )}
									<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( pt( x0, df ), -4 )}`} displayMode tag="" />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ -4, 4 ],
										y: [ 0, dt( 0, df ) ]
									}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={100}
										interpolation="step"
										y={( data ) => {
											if ( data.x <= x0 ) {
												return dt( data.x, df );
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
										animate={{ duration: 500, easing: 'linear' }}
										samples={200}
										y={( data ) =>
											dt( data.x, df )
										}
									/>
								</VictoryChart>
							</Col>
							<Col>
								<VictoryChart theme={VictoryTheme.material} >
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={100}
										y={( data ) => {
											return pt( data.x, df );
										}}
										domain={{
											x: [ -4, 4 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: pt( x0, df ) },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row></Container>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Container><Row>
							<Col>
								<Panel bodyClassName="d-grid gap-1" >
									{this.renderInputs( 'greater' )}
									<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1.0 - pt( x0, df ), -4 )}`} displayMode tag="" />
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ -4, 4 ],
										y: [ 0, dt( 0, df ) ]
									}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={100}
										interpolation="step"
										y={( data ) => {
											if ( data.x > x0 ) {
												return dt( data.x, df );
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
										animate={{ duration: 500, easing: 'linear' }}
										samples={200}
										y={( data ) =>
											dt( data.x, df )
										}
									/>
								</VictoryChart>
							</Col>
							<Col>
								<VictoryChart theme={VictoryTheme.material} >
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={100}
										y={( data ) => {
											return pt( data.x, df );
										}}
										domain={{
											x: [ -4, 4 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 0 },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: 1 },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: 0, y: pt( x0, df ) },
											{ x: x0, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row></Container>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Container><Row>
							<Col>
								<Panel bodyClassName="d-grid gap-1" >
									{this.renderInputs( 'range' )}
									{ x1 >= x0 ?
										<TeX raw={`P( ${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pt( x1, df ) - pt( x0, df ), -4 )}`} displayMode tag="" /> :
										<Alert variant="warning">{t('lower-bound-smaller-equal-upper-bound')}</Alert>
									}
								</Panel>
							</Col>
							<Col>
								<VictoryChart
									domain={{
										x: [ -4, 4 ],
										y: [ 0, dt( 0.0, df ) ]
									}}
									theme={VictoryTheme.material}
								>
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="PDF" tickFormat={(x) => `${x}`} crossAxis={false}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryArea
										samples={100}
										interpolation="step"
										y={( data ) => {
											if ( data.x >= x0 && data.x <= x1 ) {
												return dt( data.x, df );
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
										samples={200}
										animate={{ duration: 500, easing: 'linear' }}
										y={( data ) =>
											dt( data.x, df )
										}
									/>
								</VictoryChart>
							</Col>
							<Col>
								<VictoryChart theme={VictoryTheme.material} >
									<VictoryAxis dependentAxis />
									<VictoryAxis
										label="CDF" tickFormat={(x) => `${x}`}
										style={{ axisLabel: { padding: 40 }}}
									/>
									<VictoryLine
										samples={200}
										y={( data ) => {
											return pt( data.x, df );
										}}
										domain={{
											x: [ -4, 4 ],
											y: [ 0, 1.1 ]
										}}
									/>
									<VictoryLine
										data={[
											{ x: x1, y: pt( x0, df ) },
											{ x: x1, y: pt( x1, df ) }
										]}
										style={{
											data: { stroke: 'steelblue', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
									<VictoryLine
										data={[
											{ x: x0, y: pt( x0, df ) },
											{ x: x1, y: pt( x0, df ) }
										]}
										style={{
											data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
										}}
									/>
								</VictoryChart>
							</Col>
						</Row></Container>
					</Tab>
					{ this.props.quantile ? <Tab eventKey={4} title={t('quantile-function')} >
						{this.renderQuantileTab()}
					</Tab> : null }
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

TProbs.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	quantile: PropTypes.bool,
	style: PropTypes.object
};

TProbs.defaultProps = {
	step: 0.01,
	quantile: false,
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/distribution' )( TProbs );
