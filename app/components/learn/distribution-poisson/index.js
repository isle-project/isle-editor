// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import Dashboard from 'components/dashboard';
import Panel from 'components/panel';
import TeX from 'components/tex';


// VARIABLES //

const NEAR_ONE = 0.99;


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
		this.state = {
			rate: 1,
			rate1: 1,
			rate2: 1,
			rate3: 1,
			x0: null
		};
	}

	onGenerateSmaller = ( rate, x0 ) => {
		const x = incrspace( 0, qpois( NEAR_ONE, rate ), 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dpois( x[ i ], rate )
			};
		}
		this.setState({
			data1: data,
			eqn1: 'P(X \\le' + roundn( x0, -4 ) + ') = ' + roundn( ppois( x0, rate ), -4 ),
			rate1: rate,
			x0
		});
	}

	onGenerateGreater = ( rate, x0 ) => {
		const x = incrspace( 0, qpois( NEAR_ONE, rate ), 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dpois( x[ i ], rate )
			};
		}
		this.setState({
			data2: data,
			eqn2: 'P(X >' + roundn( x0, -4 ) + ') = ' + roundn( 1-ppois( x0, rate ), -4 ),
			rate2: rate,
			x0
		});
	}

	onGenerateRange = ( rate, x0, x1 ) => {
		if ( x0 > x1 ) {
			let tmp = x0;
			x0 = x1;
			x1 = tmp;
		}
		const x = incrspace( 0, qpois( NEAR_ONE, rate ), 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dpois( x[ i ], rate )
			};
		}
		this.setState({
			data3: data,
			eqn3: 'P(' + roundn( x0, -4 ) + '\\le X \\le ' + roundn( x1, -4 ) + ') = ' + roundn( ppois( x1, rate ) - ppois( x0, rate ), -4 ),
			rate3: rate,
			x0
		});
	}

	render() {
		const { x, x0, rate } = this.state;
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
								<Dashboard autoUpdate title="Poisson probabilities" onGenerate={( rate, x ) => {
									let data = [];
									for ( let i = 0; i < qpois( NEAR_ONE, rate ); i++ ) {
										data[ i ] = {
											x: i,
											y: dpois( i, rate ),
											fill: ( i === x ) ? 'tomato' : 'steelblue'
										};
									}
									this.setState({
										rate, x, data
									});
								}}>
								<p>
									Let <TeX raw="X" /> be the number of
									{this.props.countTrials ? ' trials ' : 'failures' }
									until the first success.
								</p>
								<span>For rate parameter </span>
								<NumberInput
									inline
									legend={<TeX raw="\lambda" />}
									defaultValue={1}
									step={0.01}
									max={99}
									min={0}
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
								/> <span>we get</span>
								<TeX raw={`P(X=${x})= \\Large \\frac{${rate}^${x} e^{-${rate}}}{${x}!} = ${dpois( x, rate ).toFixed(4)}`} displayMode />
								</Dashboard>
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
															fill: data => ( data.x === x ) ? 'tomato' : 'steelblue'
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
															{ x: x, y: 0 },
															{ x: x, y: ppois( x, rate ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: ppois( x, rate ) },
															{ x: x, y: ppois( x, rate ) }
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
									<Dashboard autoUpdate onGenerate={this.onGenerateSmaller}>
										<SliderInput
											legend="Rate"
											defaultValue={1}
											min={1e-12}
											step={this.props.step}
											max={99}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											min={0}
											max={qpois( NEAR_ONE, this.state.rate1 )}
											step={this.props.step}
										/>
										<TeX raw={this.state.eqn1} />
									</Dashboard>
								</Col>
								<Col md={8} >
									<Container>
										<Row>
											<Col md={6} >
												<VictoryChart
													domain={{
														x: [ 0, qpois( NEAR_ONE, this.state.rate1 ) + 2 ]
													}}
													theme={VictoryTheme.material}
												>
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="PMF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryBar
														data={this.state.data1}
														style={{
															data: {
																fill: data => ( this.state.x0 <= data.x && data.x <= this.state.x1 ) ? 'tomato' : 'steelblue'
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
															return ppois( data.x, this.state.rate1 );
														}}
														domain={{
															x: [ 0, qpois( NEAR_ONE, this.state.rate1 )+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: ppois( x0, this.state.rate1 ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: ppois( x0, this.state.rate1 ) },
															{ x: x0, y: ppois( x0, this.state.rate1 ) }
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
									<Dashboard autoUpdate onGenerate={this.onGenerateGreater}>
										<SliderInput
											legend="Rate"
											defaultValue={1}
											min={1e-12}
											max={99}
											step={this.props.step}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											min={0}
											max={qpois( NEAR_ONE, this.state.rate2 )}
											step={this.props.step}
										/>
										<TeX raw={this.state.eqn2} />
									</Dashboard>
								</Col>
								<Col md={8} >
									<Row>
										<Col md={6} >
											<VictoryChart
												domain={{
													x: [ 0, qpois( NEAR_ONE, this.state.rate2 ) + 2 ]
												}}
												theme={VictoryTheme.material}
											>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data2}
													style={{
														data: {
															fill: data => ( this.state.x0 <= data.x && data.x <= this.state.x1 ) ? 'tomato' : 'steelblue'
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
														return ppois( data.x, this.state.rate2 );
													}}
													domain={{
														x: [ 0, qpois( NEAR_ONE, this.state.rate2 )+1 ],
														y: [ 0, 1.1 ]
													}}
												/>
												<VictoryLine
													data={[
														{ x: x0, y: 0 },
														{ x: x0, y: ppois( x0, this.state.rate2 ) }
													]}
													style={{
														data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
													}}
												/>
												<VictoryLine
													data={[
														{ x: 0, y: ppois( x0, this.state.rate2 ) },
														{ x: x0, y: ppois( x0, this.state.rate2 ) }
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
									<Dashboard autoUpdate onGenerate={this.onGenerateRange}>
										<SliderInput
											legend="Rate"
											defaultValue={1}
											min={1e-12}
											max={99}
											step={this.props.step}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											min={0}
											max={qpois( NEAR_ONE, this.state.rate3 )}
											step={this.props.step}
										/>
										<SliderInput
											legend="x1"
											defaultValue={0}
											min={0}
											max={qpois( NEAR_ONE, this.state.rate3 )}
											step={this.props.step}
										/>
										<TeX raw={this.state.eqn3} />
									</Dashboard>
								</Col>
								<Col md={8} >
									<Row>
										<Col md={6} >
											<VictoryChart
												domain={{
													x: [ 0, qpois( NEAR_ONE, this.state.rate3 ) + 2 ]
												}}
												theme={VictoryTheme.material}
											>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => `${x}`}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data3}
													style={{
														data: {
															fill: data => ( this.state.x0 <= data.x && data.x <= this.state.x1 ) ? 'tomato' : 'steelblue'
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
														return ppois( data.x, this.state.rate3 );
													}}
													domain={{
														x: [ 0, qpois( NEAR_ONE, this.state.rate3 )+1 ],
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
