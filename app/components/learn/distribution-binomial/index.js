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
import dbinom from '@stdlib/stats/base/dists/binomial/pmf';
import pbinom from '@stdlib/stats/base/dists/binomial/cdf';
import FeedbackButtons from 'components/feedback';
import NumberInput from 'components/input/number';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import Panel from 'components/panel';
import TeX from 'components/tex';


// MAIN //

/**
* A learning component for calculating probabilities of a binomial distribution.
*
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class BinomialProps extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			n: 0
		};
	}

	onGenerateSmaller = ( n, p, x0 ) => {
		let x = incrspace( 0, n+1, 1 );
		let data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, p )
			};
		}
		this.setState({
			data, x0, n, p
		});
	}

	onGenerateLarger = ( n, p, x0 ) => {
		let x = incrspace( 0, n+1, 1 );
		let data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, p )
			};
		}
		this.setState({
			data, x0, n, p
		});
	}

	onGenerateRange = ( n, p, x0, x1 ) => {
		if ( x0 > x1 ) {
			let tmp = x0;
			x0 = x1;
			x1 = tmp;
		}
		let x = incrspace( 0, n+1, 1 );
		let data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, p )
			};
		}
		this.setState({
			data, n, p, x0, x1
		});
	}

	render() {
		const { x0, x1, n, p } = this.state;
		return ( <Card style={{ maxWidth: 1200, margin: '0 auto', ...this.props.style }}>
			<Card.Header as="h3">
				Binomial Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={0} id="binomial-tabs">
					<Tab eventKey={0} title={<TeX raw="P(X = x)" />}>
						<Container>
							<Row>
								<Col md={5} >
								<Dashboard autoUpdate title="Binomial probabilities" onGenerate={( n, p, x ) => {
									let data = [];
									for ( let i = 0; i < n+1; i++ ) {
										data[ i ] = {
											x: i,
											y: dbinom( i, n, p ),
											fill: ( i === x ) ? 'tomato' : 'steelblue'
										};
									}
									this.setState({
										n, p, x, data
									});
								}}>
								<span>For</span><NumberInput
									inline
									legend="n"
									defaultValue={5}
									step={1}
									min={0}
									max={999}
								/><span>trials and a success probability of</span>
								<NumberInput
									inline
									legend="p"
									defaultValue={0.5}
									step={0.01}
									max={1}
									min={0}
								/>
								<span>we get</span>
								<TeX raw={`P(X=x)= \\Large \\tbinom{${this.state.n}}{x} ${this.state.p}^x ${roundn(1-this.state.p, -4)}^{${this.state.n}-x}`} displayMode />
								<span>Evaluated at </span><NumberInput
									inline
									legend="x"
									defaultValue={0}
									step={1}
									max={this.state.n}
									min={0}
								/> <span>we get</span>
								<TeX raw={`P(X=${this.state.x})= \\Large \\tbinom{${this.state.n}}{${this.state.x}} ${this.state.p}^{${this.state.x}} ${roundn(1-this.state.p, -4 )}^{${this.state.n}-${this.state.x}} \\approx ${dbinom(this.state.x, this.state.n, this.state.p).toFixed(4)}`} displayMode />
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
															fill: data => ( data.x === this.state.x ) ? 'tomato' : 'steelblue'
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
															return pbinom( data.x, n, p );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: this.state.x, y: 0 },
															{ x: this.state.x, y: pbinom( this.state.x, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pbinom( this.state.x, n, p ) },
															{ x: this.state.x, y: pbinom( this.state.x, n, p ) }
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
											legend="Number of trials (n)"
											defaultValue={10}
											min={1}
											step={1}
										/>
										<NumberInput
											legend="Success probability (p)"
											defaultValue={0.5}
											step={this.props.step}
											min={0}
											max={1}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											step={1}
											min={0}
											max={this.state.n}
										/>
										<TeX raw={`P(X \\le${roundn( x0, -4 )}) = ${roundn( pbinom( x0, n, p ), -4 )}`} displayMode tag="" />
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
														data={this.state.data}
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
															return pbinom( data.x, n, p );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pbinom( x0, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pbinom( x0, n, p ) },
															{ x: x0, y: pbinom( x0, n, p ) }
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
											legend="Number of trials (n)"
											defaultValue={10}
											min={1}
											step={1}
										/>
										<NumberInput
											legend="Success probability (p)"
											defaultValue={0.5}
											step={this.props.step}
											min={0}
											max={1}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											min={-1}
											max={this.state.n}
											step={1}
										/>
										<TeX raw={`P(X >${roundn( x0, -4 )}) = ${roundn( 1.0 - pbinom( x0, n, p ), -4 )}`} displayMode tag="" />
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
														data={this.state.data}
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
															return pbinom( data.x, n, p );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: pbinom( x0, n, p ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: pbinom( x0, n, p ) },
															{ x: x0, y: pbinom( x0, n, p ) }
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
											legend="Number of trials (n)"
											defaultValue={10}
											min={1}
											step={1}
										/>
										<NumberInput
											legend="Success probability (p)"
											defaultValue={0.5}
											step={this.props.step}
											min={0}
											max={1}
										/>
										<SliderInput
											legend="x0"
											defaultValue={0}
											min={0}
											max={this.state.n}
											step={1}
										/>
										<SliderInput
											legend="x1"
											defaultValue={1}
											min={0}
											max={this.state.n}
											step={1}
										/>
										<TeX raw={`P(${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pbinom( x1, n, p ) - pbinom( x0, n, p ), -4 )}`} displayMode tag="" />
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
														data={this.state.data}
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
															return pbinom( data.x, n, p );
														}}
														domain={{
															x: [ 0, n+1 ],
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
					id="binomial_distribution"
				/>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

BinomialProps.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};

BinomialProps.defaultProps = {
	step: 0.01,
	style: {}
};


// EXPORTS //

export default BinomialProps;
