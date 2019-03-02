// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { VictoryAxis, VictoryChart, VictoryBar, VictoryTheme } from 'victory';
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
			n1: 0,
			n2: 0,
			n3: 0
		};
	}

	onGenerateSmaller = ( n, p, x0 ) => {
		let x = incrspace( 0, n, 1 );
		let data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, p )
			};
		}
		this.setState({
			data1: data,
			eqn1: 'P(X \\le' + roundn( x0, -4 ) + ') = ' + roundn( pbinom( x0, n, p ), -4 ),
			x0,
			n1: n
		});
	}

	onGenerateLarger = ( n, p, x0 ) => {
		let x = incrspace( 0, n, 1 );
		let data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, p )
			};
		}
		this.setState({
			data2: data,
			eqn2: 'P(X >' + roundn( x0, -4 ) + ') = ' + roundn( 1.0 - pbinom( x0, n, p ), -4 ),
			x0,
			n2: n
		});
	}

	onGenerateRange = ( n, p, x0, x1 ) => {
		if ( x0 > x1 ) {
			let tmp = x0;
			x0 = x1;
			x1 = tmp;
		}
		let x = incrspace( 0, n, 1 );
		let data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dbinom( x[ i ], n, p )
			};
		}
		this.setState({
			data3: data,
			eqn3: 'P(' + roundn( x0, -4 ) + '\\le X \\le' + roundn( x1, -4 ) + ') = ' + roundn( pbinom( x1, n, p ) - pbinom( x0, n, p ), -4 ),
			n3: n,
			x0,
			x1
		});
	}

	render() {
		return ( <Card style={{ maxWidth: 1200, ...this.props.style}}>
			<Card.Header as="h3">
				Binomial Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={0} id="binomial-tabs">
					<Tab eventKey={0} title={<TeX raw="P(X = x)" />}>
						<Container>
							<Row>
								<Col lg={true} >
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
								<Col lg={true} >
									<Panel header="Probability Plot">
										<VictoryChart theme={VictoryTheme.material}>
										<VictoryAxis dependentAxis />
										<VictoryAxis tickFormat={(x) => roundn(x, -2)} />
										<VictoryBar
											data={this.state.data}
											style={{
												data: {
													fill: data => ( data.x === this.state.x ) ? 'tomato' : 'steelblue'
												}
											}}
										/>
										</VictoryChart>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container>
							<Row>
								<Col lg={true} >
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
											max={this.state.n1}
										/>
										<TeX raw={this.state.eqn1} displayMode tag="" />
									</Dashboard>
								</Col>
								<Col lg={true} >
									<Panel header="Probability Plot">
										<VictoryChart theme={VictoryTheme.material}>
											<VictoryBar
												data={this.state.data1}
												style={{
													data: {
														fill: data => ( data.x <= this.state.x0 ) ? 'tomato' : 'steelblue'
													}
												}}
											/>
										</VictoryChart>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Container>
							<Row>
								<Col lg={true} >
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
											max={this.state.n2}
											step={1}
										/>
										<TeX raw={this.state.eqn2} displayMode tag="" />
									</Dashboard>
								</Col>
								<Col lg={true}>
									<Panel header="Probability Plot">
										<VictoryChart theme={VictoryTheme.material}>
											<VictoryBar
												data={this.state.data2}
												style={{
													data: {
														fill: data => ( data.x > this.state.x0 ) ? 'tomato' : 'steelblue'
													}
												}}
											/>
										</VictoryChart>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Container>
							<Row>
								<Col lg={true} >
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
											max={this.state.n3}
											step={1}
										/>
										<SliderInput
											legend="x1"
											defaultValue={1}
											min={0}
											max={this.state.n3}
											step={1}
										/>
										<TeX raw={this.state.eqn3} displayMode tag="" />
									</Dashboard>
								</Col>
								<Col lg={true} >
									<Panel header="Probability Plot">
										<VictoryChart theme={VictoryTheme.material}>
											<VictoryBar
												data={this.state.data3}
												style={{
													data: {
														fill: data => ( this.state.x0 <= data.x && data.x <= this.state.x1 ) ? 'tomato' : 'steelblue'
													}
												}}
											/>
										</VictoryChart>
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
