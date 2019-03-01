// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { VictoryChart, VictoryBar } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import incrspace from '@stdlib/math/utils/incrspace';
import dbinom from '@stdlib/stats/base/dists/binomial/pmf';
import pbinom from '@stdlib/stats/base/dists/binomial/cdf';
import NumberInput from 'components/input/number';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
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
		return ( <Card style={{ maxWidth: 600, ...this.props.style }}>
			<Card.Header as="h3">
				Binomial Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={1} id="binomial-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
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
						<VictoryChart
							domain={{
								x: [ 0, this.state.n1 ], y: [ 0, 1 ]
							}}>
							<VictoryBar
								data={this.state.data1}
								style={{
									data: {
										fill: data => ( data.x <= this.state.x0 ) ? 'tomato' : 'steelblue'
									}
								}}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
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
						<VictoryChart
							domain={{ x: [ 0, this.state.n2 ], y: [ 0, 1 ]}}>
							<VictoryBar
								data={this.state.data2}
								style={{
									data: {
										fill: data => ( data.x > this.state.x0 ) ? 'tomato' : 'steelblue'
									}
								}}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
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
						<VictoryChart
							domain={{
								x: [ 0, this.state.n3 ],
								y: [ 0, 1 ]
							}}
						>
							<VictoryBar
								data={this.state.data3}
								style={{
									data: {
										fill: data => ( this.state.x0 <= data.x && data.x <= this.state.x1 ) ? 'tomato' : 'steelblue'
									}
								}}
							/>
						</VictoryChart>
					</Tab>
				</Tabs>
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
