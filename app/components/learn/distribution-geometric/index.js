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
import dgeom from '@stdlib/stats/base/dists/geometric/pmf';
import pgeom from '@stdlib/stats/base/dists/geometric/cdf';
import qgeom from '@stdlib/stats/base/dists/geometric/quantile';
import SliderInput from 'components/input/slider';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';
import Panel from 'components/panel';
import TeX from 'components/tex';


// VARIABLES //

const NEAR_ONE = 0.999;


// MAIN //

/**
* A learning component for calculating probabilities of a geometric distribution.
*
* @property {boolean} countTrials - set to true if instead of counting the number of failures until the first success, a random variable from a geometric distribution should be defined as the number of trials until the first success
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class GeometricDistribution extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			p1: 1,
			p2: 1,
			p3: 1,
			x0: null
		};
	}

	onGenerateSmaller = ( rate, x0 ) => {
		const minValue = this.props.countTrials ? 1 : 0;
		const x = incrspace( minValue, qgeom( NEAR_ONE, rate ), 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dgeom( this.props.countTrials ? x[ i ] - 1 : x[ i ], rate )
			};
		}
		this.setState({
			data1: data,
			eqn1: 'P(X \\le' + roundn( x0, -4 ) + ') = ' + roundn( pgeom( x0 - minValue, rate ), -4 ),
			p1: rate,
			x0
		});
	}

	onGenerateGreater = ( rate, x0 ) => {
		const minValue = this.props.countTrials ? 1 : 0;
		const x = incrspace( minValue, qgeom( NEAR_ONE, rate ), 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dgeom( this.props.countTrials ? x[ i ] - 1 : x[ i ], rate )
			};
		}
		this.setState({
			data2: data,
			eqn2: 'P(X >' + roundn( x0, -4 ) + ') = ' + roundn( 1-pgeom( x0 - minValue, rate ), -4 ),
			p2: rate,
			x0
		});
	}

	onGenerateRange = ( rate, x0, x1 ) => {
		if ( x0 > x1 ) {
			let tmp = x0;
			x0 = x1;
			x1 = tmp;
		}
		const minValue = this.props.countTrials ? 1 : 0;
		const x = incrspace( minValue, qgeom( NEAR_ONE, rate ), 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dgeom( this.props.countTrials ? x[ i ] - 1 : x[ i ], rate )
			};
		}
		this.setState({
			data3: data,
			eqn3: 'P(' + roundn( x0 - minValue, -4 ) + '\\le X \\le ' + roundn( x1 - minValue, -4 ) + ') = ' + roundn( pgeom( x1, rate ) - pgeom( x0, rate ), -4 ),
			p3: rate,
			x0
		});
	}

	render() {
		const { x0, x1, x, p, p1, p2, p3 } = this.state;
		const { countTrials, step } = this.props;
		const minValue = countTrials ? 1 : 0;
		return ( <Card style={{ maxWidth: 1200, margin: '10px auto', ...this.props.style }}>
			<Card.Header as="h3">
				Geometric Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={0} id="poisson-tabs">
					<Tab eventKey={0} title={<TeX raw="P(X = x_0)" />}>
					<Container>
							<Row>
								<Col md={5} >
								<Dashboard autoUpdate title="Geometric probabilities" onGenerate={( p, x ) => {
									let data = [];
									for ( let i = minValue; i < qgeom( NEAR_ONE, p ); i++ ) {
										data[ i ] = {
											x: i,
											y: dgeom( countTrials ? i - 1 : i, p ),
											fill: ( i === x ) ? 'tomato' : 'steelblue'
										};
									}
									this.setState({
										p, x, data
									});
								}}>
								<p>
									Let <TeX raw="X" /> be the number of
									{this.props.countTrials ? ' trials ' : 'failures' }
									until the first success.
								</p>
								<span>For success probability of</span>
								<NumberInput
									inline
									legend="p"
									defaultValue={0.5}
									step={0.01}
									max={1}
									min={0.01}
								/>
								<span>we get</span>
								<TeX raw={`P(X=x)= \\Large \\left( 1 - ${p} \\right)^{x-1} ${p}`} displayMode />
								<span>Evaluated at </span><NumberInput
									inline
									legend="x"
									defaultValue={minValue}
									step={1}
									max={qgeom( NEAR_ONE, p ) + 1}
									min={minValue}
								/> <span>we get</span>
								<TeX raw={`P(X=${x})= \\Large \\left( 1 - ${p} \\right)^{${x}-1} ${p} = ${dgeom( countTrials ? x - 1 : x, p ).toFixed(4)}`} displayMode />
								</Dashboard>
								</Col>
								<Col md={7} >
									<Panel header="Probability Plot">
										<Row>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material}>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => roundn(x, -2)}
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
															return pgeom( data.x - minValue, p );
														}}
														domain={{
															x: [ 0, qgeom( NEAR_ONE, p )+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x, y: 0 },
															{ x: x, y: pgeom( x - minValue, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pgeom( x - minValue, p ) },
															{ x: x, y: pgeom( x - minValue, p ) }
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
											legend="Success probability"
											defaultValue={0.5}
											min={0.01}
											step={step}
											max={1}
										/>
										<SliderInput
											legend="x0"
											defaultValue={minValue}
											min={minValue}
											max={qgeom( NEAR_ONE, p1 ) + 1}
											step={step}
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
														x: [ 0, qgeom( NEAR_ONE, p1 ) + 2 ]
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
																fill: data => ( x0 <= data.x && data.x <= x1 ) ? 'tomato' : 'steelblue'
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
															return pgeom( data.x - minValue, p1 );
														}}
														domain={{
															x: [ 0, qgeom( NEAR_ONE, p1 )+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pgeom( x0 - minValue, p1 ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pgeom( x0 - minValue, p1 ) },
															{ x: x0, y: pgeom( x0 - minValue, p1 ) }
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
											legend="Success probability"
											defaultValue={0.5}
											min={0.01}
											step={step}
											max={1}
										/>
										<SliderInput
											legend="x0"
											defaultValue={minValue}
											min={minValue}
											max={qgeom( NEAR_ONE, this.state.p2 ) + 1}
											step={step}
										/>
										<TeX raw={this.state.eqn2} />
									</Dashboard>
								</Col>
								<Col md={8} >
									<Row>
										<Col md={6} >
											<VictoryChart
												domain={{
													x: [ 0, qgeom( NEAR_ONE, this.state.p2 ) + 2 ]
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
															fill: data => ( x0 <= data.x && data.x <= x1 ) ? 'tomato' : 'steelblue'
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
														return pgeom( data.x - minValue, p2 );
													}}
													domain={{
														x: [ 0, qgeom( NEAR_ONE, p2 )+1 ],
														y: [ 0, 1.1 ]
													}}
												/>
												<VictoryLine
													data={[
														{ x: x0, y: 0 },
														{ x: x0, y: pgeom( x0 - minValue, p2 ) }
													]}
													style={{
														data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
													}}
												/>
												<VictoryLine
													data={[
														{ x: 0, y: pgeom( x0 - minValue, p2 ) },
														{ x: x0, y: pgeom( x0 - minValue, p2 ) }
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
											legend="Success probability"
											defaultValue={0.5}
											min={0.01}
											step={step}
											max={1}
										/>
										<SliderInput
											legend="x0"
											defaultValue={minValue}
											min={minValue}
											max={qgeom( NEAR_ONE, p3 ) + 1}
											step={step}
										/>
										<SliderInput
											legend="x1"
											defaultValue={minValue}
											min={minValue}
											max={qgeom( NEAR_ONE, p3 ) + 1}
											step={step}
										/>
										<TeX raw={this.state.eqn3} />
									</Dashboard>
								</Col>
								<Col md={8} >
									<Row>
										<Col md={6} >
											<VictoryChart
												domain={{
													x: [ 0, qgeom( NEAR_ONE, p3 ) + 2 ]
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
															fill: data => ( x0 <= data.x && data.x <= x1 ) ? 'tomato' : 'steelblue'
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
														return pgeom( data.x - minValue, p3 );
													}}
													domain={{
														x: [ 0, qgeom( NEAR_ONE, p3 )+1 ],
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

GeometricDistribution.propTypes = {
	countTrials: PropTypes.bool,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

GeometricDistribution.defaultProps = {
	countTrials: false,
	step: 0.01,
	style: {}
};


// EXPORTS //

export default GeometricDistribution;
