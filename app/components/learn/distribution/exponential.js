// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Tabs, Tab } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import { roundn } from '@stdlib/math/base/special';
import linspace from '@stdlib/math/utils/linspace';
import dexp from '@stdlib/math/base/dists/exponential/pdf';
import pexp from '@stdlib/math/base/dists/exponential/cdf';
import qexp from '@stdlib/math/base/dists/exponential/quantile';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';


// VARIABLES //

var NEAR_ONE = 0.999999;


// MAIN //

class ExponentialProbs extends Component {
	constructor( props ) {
		super( props );
		this.state = {};
	}

	onGenerateSmaller = ( rate, x0 ) => {
		let len = 200;
		let x = linspace( 0, x0, len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dexp( x[ i ], rate )
			};
		}
		this.setState({
			data1: data,
			eqn1: 'P(X \\le' + roundn( x0, -4 ) + ') = ' + roundn( pexp( x0, rate ), -4 ),
			rate1: rate
		});
	}

	onGenerateGreater = ( rate, x0 ) => {
		let len = 200;
		let x = linspace( x0, qexp( NEAR_ONE, rate ), len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dexp( x[ i ], rate )
			};
		}
		this.setState({
			data2: data,
			eqn2: 'P(X >' + roundn( x0, -4 ) + ') = ' + roundn( 1-pexp( x0, rate ), -4 ),
			rate2: rate
		});
	}

	onGenerateRange = ( rate, x0, x1 ) => {
		let len = 500;
		let x = linspace( x0, x1, len );
		let data = new Array( len );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dexp( x[ i ], rate )
			};
		}
		this.setState({
			data3: data,
			eqn3: 'P(' + roundn( x0, -4 ) + '\\le X \\le ' + roundn( x1, -4 ) + ') = ' + roundn( pexp( x1, rate ) - pexp( x0, rate ), -4 ),
			rate3: rate
		});
	}

	render() {
		return ( <Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">Exponential Distribution</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				<Tabs defaultActiveKey={1} id="exponential-tabs">
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Dashboard autoUpdate onGenerate={this.onGenerateSmaller}>
							<SliderInput
								legend="Rate"
								defaultValue={1}
								min={1e-12}
								step={this.props.step}
								max={20}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={0}
								max={qexp( NEAR_ONE, this.state.rate1 )}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn1} />
						</Dashboard>
						<VictoryChart
							domain={{ x: [ 0, qexp( NEAR_ONE, this.state.rate1 ) + 2 ] }}
						>
							<VictoryArea
								data={this.state.data1}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								y={( data ) =>
									dexp( data.x, this.state.rate1 )
								}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Dashboard autoUpdate onGenerate={this.onGenerateGreater}>
							<SliderInput
								legend="Rate"
								defaultValue={1}
								min={1e-12}
								max={20}
								step={this.props.step}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={0}
								max={qexp( NEAR_ONE, this.state.rate2 )}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn2} />
						</Dashboard>
						<VictoryChart
							domain={{ x: [ 0, qexp( NEAR_ONE, this.state.rate2 ) + 2 ] }}
						>
							<VictoryArea
								data={this.state.data2}
								style={{
									data: {
										opacity: 0.3, fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								y={( data ) =>
									dexp( data.x, this.state.rate2 )
								}
							/>
						</VictoryChart>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Dashboard autoUpdate onGenerate={this.onGenerateRange}>
							<SliderInput
								legend="Rate"
								defaultValue={1}
								min={1e-12}
								max={20}
								step={this.props.step}
							/>
							<SliderInput
								legend="x0"
								defaultValue={0}
								min={0}
								max={qexp( 1, this.state.rate3 )}
								step={this.props.step}
							/>
							<SliderInput
								legend="x1"
								defaultValue={0}
								min={0}
								max={qexp( NEAR_ONE, this.state.rate3 )}
								step={this.props.step}
							/>
							<TeX raw={this.state.eqn3} />
						</Dashboard>
						<VictoryChart
							domain={{ x: [ 0, qexp( NEAR_ONE, this.state.rate3 ) + 2 ] }}>
							<VictoryArea
								data={this.state.data3}
								style={{
									data: {
										opacity: 0.3, fill: 'tomato'
									}
								}}
							/>
							<VictoryLine
								y={( data ) =>
									dexp( data.x, this.state.rate3 )
								}
							/>
						</VictoryChart>
					</Tab>
				</Tabs>
			</Panel.Body>
		</Panel> );
	}
}


// PROPERTY TYPES //

ExponentialProbs.propTypes = {
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
};


// DEFAULT PROPERTIES //

ExponentialProbs.defaultProps = {
	step: 0.01
};


// EXPORTS //

export default ExponentialProbs;
