// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import incrspace from '@stdlib/math/utils/incrspace';
import dpois from '@stdlib/stats/base/dists/poisson/pmf';
import ppois from '@stdlib/stats/base/dists/poisson/cdf';
import qpois from '@stdlib/stats/base/dists/poisson/quantile';
import SliderInput from 'components/input/slider';
import NumberInput from 'components/input/number';
import Panel from 'components/panel';
import TeX from 'components/tex';


// VARIABLES //

const NEAR_ONE = 0.999;


// MAIN //

/**
* A learning component for calculating probabilities of a Poisson distribution.
*
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class PoissonDistribution extends Component {
	constructor( props ) {
		super( props );

		const rate = 1;
		const x = incrspace( 0, qpois( NEAR_ONE, rate ), 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dpois( x[ i ], rate )
			};
		}
		this.state = {
			rate,
			x0: 0,
			x1: 1,
			data
		};
	}

	handleRateChange = ( rate ) => {
		const x = incrspace( 0, qpois( NEAR_ONE, rate ) + 1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dpois( x[ i ], rate )
			};
		}
		this.setState({
			data, rate
		});
	}

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	}

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	}

	renderInputs( type ) {
		return (
			<Fragment>
				<SliderInput
					key={`${type}-rate`}
					legend="Rate"
					defaultValue={this.state.rate}
					min={1e-12}
					step={this.props.step}
					max={99}
					onChange={this.handleRateChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={this.state.x0}
					min={0}
					max={qpois( NEAR_ONE, this.state.rate )}
					step={this.props.step}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={this.state.x1}
						min={0}
						max={qpois( NEAR_ONE, this.state.rate )}
						step={this.props.step}
						onChange={this.handleUpperChange}
					/> : null
				}
			</Fragment>
		);
	}

	render() {
		const { x0, x1, rate } = this.state;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				Poisson Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={0} id="poisson-tabs">
					<Tab eventKey={0} title={<TeX raw="P(X = x_0)" />}>
						<Container>
							<Row>
								<Col md={5} >
								<Panel title="Poisson probabilities" >
									<p>
										Let <TeX raw="X" /> be the number of occurrences.
									</p>
									<span>For rate parameter </span>
									<NumberInput
										inline
										legend={<TeX raw="\lambda" />}
										defaultValue={1}
										step={0.01}
										max={99}
										min={0}
										onChange={this.handleRateChange}
									/>
									<span>we get</span>
									<TeX raw={`P(X=x)= \\Large \\frac{${rate}^x e^{-${rate}}}{x!}`} displayMode />
									<span>Evaluated at </span><NumberInput
										inline
										legend="x"
										defaultValue={1}
										step={1}
										max={qpois( NEAR_ONE, rate ) + 1}
										min={0}
										onChange={this.handleLowerChange}
									/> <span>we get</span>
									<TeX raw={`P(X=${x0})= \\Large \\frac{${rate}^${x0} e^{-${rate}}}{${x0}!} = ${dpois( x0, rate ).toFixed(4)}`} displayMode />
								</Panel>
								</Col>
								<Col md={7} >
									<Panel header="Probability Plot">
										<Row>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material}>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data}
													style={{
														data: {
															fill: val => ( val.datum.x === x0 ) ? 'tomato' : 'steelblue'
														}
													}}
												/>
												</VictoryChart>
											</Col>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`} crossAxis={false}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return ppois( data.x, rate );
														}}
														domain={{
															x: [ 0, qpois( NEAR_ONE, rate )+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: ppois( x0, rate ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: ppois( x0, rate ) },
															{ x: x0, y: ppois( x0, rate ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col>
										</Row>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel>
										{this.renderInputs( 'smaller' )}
										<TeX raw={`P(X \\le ${roundn( x0, -4 )}) = ${roundn( ppois( x0, rate ), -4 )}`} />
									</Panel>
								</Col>
								<Col md={8} >
									<Container>
										<Row>
											<Col md={6} >
												<VictoryChart
													domain={{
														x: [ 0, qpois( NEAR_ONE, this.state.rate ) + 2 ]
													}}
													theme={VictoryTheme.material}
												>
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="PMF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryBar
														data={this.state.data}
														style={{
															data: {
																fill: val => ( val.datum.x <= this.state.x0 ) ? 'tomato' : 'steelblue'
															}
														}}
													/>
												</VictoryChart>
											</Col>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return ppois( data.x, this.state.rate );
														}}
														domain={{
															x: [ 0, qpois( NEAR_ONE, this.state.rate )+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: ppois( x0, this.state.rate ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: ppois( x0, this.state.rate ) },
															{ x: x0, y: ppois( x0, this.state.rate ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col>
										</Row>
									</Container>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel>
										{this.renderInputs( 'greater' )}
										<TeX raw={`P(X > ${roundn( x0, -4 )}) = ${roundn( 1-ppois( x0, rate ), -4 )}`} />
									</Panel>
								</Col>
								<Col md={8} >
									<Row>
										<Col md={6} >
											<VictoryChart
												domain={{
													x: [ 0, qpois( NEAR_ONE, rate ) + 2 ]
												}}
												theme={VictoryTheme.material}
											>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data}
													style={{
														data: {
															fill: val => ( val.datum.x >= this.state.x0 ) ? 'tomato' : 'steelblue'
														}
													}}
												/>
											</VictoryChart>
										</Col>
										<Col md={6} >
											<VictoryChart theme={VictoryTheme.material} >
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="CDF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryLine
													samples={600}
													y={( data ) => {
														return ppois( data.x, rate );
													}}
													domain={{
														x: [ 0, qpois( NEAR_ONE, rate )+1 ],
														y: [ 0, 1.1 ]
													}}
												/>
												<VictoryLine
													data={[
														{ x: x0, y: 0 },
														{ x: x0, y: ppois( x0, rate ) }
													]}
													style={{
														data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
													}}
												/>
												<VictoryLine
													data={[
														{ x: 0, y: ppois( x0, rate ) },
														{ x: x0, y: ppois( x0, rate ) }
													]}
													style={{
														data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
													}}
												/>
											</VictoryChart>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel>
										{this.renderInputs( 'range' )}
										{ x1 >= x0 ?
											<TeX raw={`P( ${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( ppois( x1, rate ) - ppois( x0 - 1, rate ), -4 )}`} /> :
											<Alert variant="warning">Lower bound must be smaller than or equal to upper bound.</Alert>
										}
									</Panel>
								</Col>
								<Col md={8} >
									<Row>
										<Col md={6} >
											<VictoryChart
												domain={{
													x: [ 0, qpois( NEAR_ONE, rate ) + 2 ]
												}}
												theme={VictoryTheme.material}
											>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data}
													style={{
														data: {
															fill: val => ( this.state.x0 <= val.datum.x && val.datum.x <= this.state.x1 ) ? 'tomato' : 'steelblue'
														}
													}}
												/>
											</VictoryChart>
										</Col>
										<Col md={6} >
											<VictoryChart theme={VictoryTheme.material} >
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="CDF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryLine
													samples={600}
													y={( data ) => {
														return ppois( data.x, rate );
													}}
													domain={{
														x: [ 0, qpois( NEAR_ONE, rate )+1 ],
														y: [ 0, 1.1 ]
													}}
												/>
											</VictoryChart>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</Tab>
				</Tabs>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

PoissonDistribution.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

PoissonDistribution.defaultProps = {
	step: 0.1,
	style: {}
};


// EXPORTS //

export default PoissonDistribution;
