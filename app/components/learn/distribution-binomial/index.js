// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';
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
			n: 10,
			p: 0.5,
			x0: 0,
			x1: 1
		};
	}

	onGenerateRange = ( n, p, x0, x1 ) => {
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

	handleTrialsChange = ( n ) => {
		const x = incrspace( 0, n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, this.state.p )
			};
		}
		this.setState({ data, n });
	}

	handlePropChange = ( p ) => {
		const x = incrspace( 0, this.state.n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], this.state.n, this.state.p )
			};
		}
		this.setState({ data, p });
	}

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	}

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	}

	renderInputs( type) {
		return (
			<Fragment>
				<NumberInput
					key={`${type}-n`}
					legend="Number of trials (n)"
					defaultValue={this.state.n}
					min={1}
					step={1}
					onChange={this.handleTrialsChange}
				/>
				<NumberInput
					key={`${type}-p`}
					legend="Success probability (p)"
					defaultValue={this.state.p}
					step={this.props.step}
					onChange={this.handlePropChange}
					min={0}
					max={1}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={this.state.x0}
					step={1}
					min={0}
					max={this.state.n}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={this.state.x1}
						min={0}
						max={this.state.n}
						step={1}
						onChange={this.handleUpperChange}
					/> : null
				}
			</Fragment>
		);
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
									defaultValue={n}
									step={1}
									min={0}
									max={999}
								/><span>trials and a success probability of</span>
								<NumberInput
									inline
									legend="p"
									defaultValue={p}
									step={0.01}
									max={1}
									min={0}
								/>
								<span>we get</span>
								<TeX raw={`P(X=x)= \\Large \\tbinom{${n}}{x} ${p}^x ${roundn(1-p, -4)}^{${n}-x}`} displayMode />
								<span>Evaluated at </span><NumberInput
									inline
									legend="x"
									defaultValue={0}
									step={1}
									max={n}
									min={0}
								/> <span>we get</span>
								<TeX raw={`P(X=${this.state.x})= \\Large \\tbinom{${n}}{${this.state.x}} ${p}^{${this.state.x}} ${roundn(1-p, -4 )}^{${n}-${this.state.x}} \\approx ${dbinom(this.state.x, this.state.n, p).toFixed(4)}`} displayMode />
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
									<Panel>
										{this.renderInputs( 'smaller' )}
										<TeX raw={`P(X \\le${roundn( x0, -4 )}) = ${roundn( pbinom( x0, n, p ), -4 )}`} displayMode tag="" />
									</Panel>
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
									<Panel>
										{this.renderInputs( 'greater' )}
										<TeX raw={`P(X >${roundn( x0, -4 )}) = ${roundn( 1.0 - pbinom( x0, n, p ), -4 )}`} displayMode tag="" />
									</Panel>
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
									<Panel>
										{this.renderInputs( 'range' )}
										{ x1 >= x0 ?
											<TeX raw={`P(${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( pbinom( x1, n, p ) - pbinom( x0, n, p ), -4 )}`} displayMode tag="" /> :
											<Alert variant="warning">Lower bound must be smaller than or equal to upper bound.</Alert>
										}
									</Panel>
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
