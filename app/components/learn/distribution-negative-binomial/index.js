// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { VictoryAxis, VictoryChart, VictoryBar, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import incrspace from '@stdlib/math/utils/incrspace';
import dnbinom from '@stdlib/stats/base/dists/negative-binomial/pmf';
import pnbinom from '@stdlib/stats/base/dists/negative-binomial/cdf';
import qnbinom from '@stdlib/stats/base/dists/negative-binomial/quantile';
import FeedbackButtons from 'components/feedback';
import NumberInput from 'components/input/number';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import Panel from 'components/panel';
import TeX from 'components/tex';


// MAIN //

/**
* A learning component for calculating probabilities of a negative binomial distribution.
*
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class NegativeBinomial extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			r1: 0,
			r2: 0,
			r3: 0
		};
	}

	onGenerateSmaller = ( r, p, x0 ) => {
		const max = qnbinom( 0.999, r, p );
		const x = incrspace( 0, max+2, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dnbinom( x[ i ], r, p )
			};
		}
		this.setState({
			data1: data,
			eqn1: 'P(X \\le' + roundn( x0, -4 ) + ') = ' + roundn( pnbinom( x0, r, p ), -4 ),
			x0,
			r1: r,
			p1: p,
			max: max + 1
		});
	}

	onGenerateLarger = ( r, p, x0 ) => {
		const max = qnbinom( 0.999, r, p );
		const x = incrspace( 0, max+2, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dnbinom( x[ i ], r, p )
			};
		}
		this.setState({
			data2: data,
			eqn2: 'P(X >' + roundn( x0, -4 ) + ') = ' + roundn( 1.0 - pnbinom( x0, r, p ), -4 ),
			x0,
			r2: r,
			p2: p,
			max: max + 1
		});
	}

	onGenerateRange = ( r, p, x0, x1 ) => {
		const max = qnbinom( 0.999, r, p );
		if ( x0 > x1 ) {
			const tmp = x0;
			x0 = x1;
			x1 = tmp;
		}
		const x = incrspace( 0, max+2, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dnbinom( x[ i ], r, p )
			};
		}
		this.setState({
			data3: data,
			eqn3: 'P(' + roundn( x0, -4 ) + '\\le X \\le' + roundn( x1, -4 ) + ') = ' + roundn( pnbinom( x1, r, p ) - pnbinom( x0, r, p ), -4 ),
			r3: r,
			p3: p,
			x0,
			x1,
			max: max + 1
		});
	}

	render() {
		const { x, x0, x1, r, p, r1, p1, r2, p2, r3, p3, max } = this.state;
		return ( <Card style={{ maxWidth: 1200, margin: '0 auto', ...this.props.style }}>
			<Card.Header as="h3">
				Negative Binomial Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={0} id="negative-binomial-tabs">
					<Tab eventKey={0} title={<TeX raw="P(X = x)" />}>
						<Container>
							<Row>
								<Col md={5} >
								<Dashboard autoUpdate title="Negative binomial probabilities" onGenerate={( r, p, x ) => {
									let data = [];
									let max = qnbinom( 0.999, r, p );
									for ( let i = 0; i < max+1; i++ ) {
										data[ i ] = {
											x: i,
											y: dnbinom( i, r, p ),
											fill: ( i === x ) ? 'tomato' : 'steelblue'
										};
									}
									this.setState({
										r, p, x, data, max: max + 1
									});
								}}>
								<span>For number of successes until experiment is stopped </span><NumberInput
									inline
									legend="r"
									defaultValue={5}
									step={0.1}
									min={0}
									max={999}
								/><span> and a success probability of</span>
								<NumberInput
									inline
									legend="p"
									defaultValue={0.5}
									step={0.01}
									max={0.99}
									min={0.01}
								/>
								<span>we get</span>
								<TeX raw={`P(X=x)= \\Large \\tbinom{x + ${r} - 1}{x} ${p}^{${r}} ${roundn(1-p, -4)}^{x}`} displayMode />
								<span>Evaluated at </span><NumberInput
									inline
									legend="x"
									defaultValue={0}
									step={1}
									max={max}
									min={0}
								/> <span>we get</span>
								<TeX raw={`P(X=${x}) = \\Large \\tbinom{${r+x-1}}{${x}} ${p}^{${r}} ${roundn(1-p, -4 )}^{${x}} \\approx ${dnbinom(x, r, p).toFixed(4)}`} displayMode />
								<p>The random variable X denotes the number of failures until the r-th success is reached (when r is an integer, which is not required!)</p>
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
															return pnbinom( data.x, r, p );
														}}
														domain={{
															x: [ 0, max+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x, y: 0 },
															{ x: x, y: pnbinom( x, r, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pnbinom( x, r, p ) },
															{ x: x, y: pnbinom( x, r, p ) }
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
										<NumberInput
											legend="Successes until stop (r)"
											defaultValue={10}
											min={1}
											step={1}
										/>
										<NumberInput
											legend="Success probability (p)"
											defaultValue={0.5}
											step={this.props.step}
											max={0.99}
											min={0.01}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											step={1}
											min={0}
											max={max}
										/>
										<TeX raw={this.state.eqn1} displayMode tag="" />
									</Dashboard>
								</Col>
								<Col md={8} >
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
														data={this.state.data1}
														style={{
															data: {
																fill: data => ( data.x <= x0 ) ? 'tomato' : 'steelblue'
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
															return pnbinom( data.x, r1, p1 );
														}}
														domain={{
															x: [ 0, max+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pnbinom( x0, r1, p1 ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pnbinom( x0, r1, p1 ) },
															{ x: x0, y: pnbinom( x0, r1, p1 ) }
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
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Dashboard autoUpdate onGenerate={this.onGenerateLarger}>
										<NumberInput
											legend="Successes until stop (r)"
											defaultValue={10}
											min={1}
											step={1}
										/>
										<NumberInput
											legend="Success probability (p)"
											defaultValue={0.5}
											step={this.props.step}
											max={0.99}
											min={0.01}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											min={-1}
											max={max}
											step={1}
										/>
										<TeX raw={this.state.eqn2} displayMode tag="" />
									</Dashboard>
								</Col>
								<Col md={8} >
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
														data={this.state.data2}
														style={{
															data: {
																fill: data => ( data.x > this.state.x0 ) ? 'tomato' : 'steelblue'
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
															return pnbinom( data.x, r2, p2 );
														}}
														domain={{
															x: [ 0, max ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pnbinom( x0, r2, p2 ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pnbinom( x0, r2, p2 ) },
															{ x: x0, y: pnbinom( x0, r2, p2 ) }
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
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Dashboard autoUpdate onGenerate={this.onGenerateRange}>
										<NumberInput
											legend="Successes until stop (r)"
											defaultValue={10}
											min={1}
											step={1}
										/>
										<NumberInput
											legend="Success probability (p)"
											defaultValue={0.5}
											step={this.props.step}
											max={0.99}
											min={0.01}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											min={0}
											max={max}
											step={1}
										/>
										<SliderInput
											legend="x1"
											defaultValue={1}
											min={0}
											max={max}
											step={1}
										/>
										<TeX raw={this.state.eqn3} displayMode tag="" />
									</Dashboard>
								</Col>
								<Col md={8} >
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
															return pnbinom( data.x, r3, p3 );
														}}
														domain={{
															x: [ 0, max ],
															y: [ 0, 1.1 ]
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
				</Tabs>
				<FeedbackButtons
					id="negative_binomial_distribution"
				/>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

NegativeBinomial.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

NegativeBinomial.defaultProps = {
	step: 0.01,
	style: {}
};


// EXPORTS //

export default NegativeBinomial;
