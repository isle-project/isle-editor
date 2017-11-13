// MODULES //

import React, { Component } from 'react';
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

		this.state = {

		};
	}

	render() {
		return ( <Panel header={<h3>Exponential Distribution</h3>}>
			<Tabs defaultActiveKey={1} id="exponential-tabs">
				<Tab eventKey={1} title={<TeX raw="P(X \le x_0)"/>}>
					<Dashboard autoUpdate onGenerate={( rate, x0 ) => {
						let len = 200;
						let x = linspace( 0, x0, len );
						let data = new Array( len );
						let xmax = 100;
						for ( let i = 0; i < x.length; i++ ) {
							data[ i ] = {
								x: x[ i ],
								y: dexp( x[ i ], rate ),
							};
							if ( data[ i ].y < 1e-6 ) {
								if ( data[ i ].x < xmax ) {
									xmax = data[ i ].x;
								}
							}
						}
						this.setState({
							data1: data,
							eqn1: "P(X \\le" + x0 + ") = " + roundn( pexp( x0, rate ), -4 ),
							rate1: rate,
							xmax
						});
					}}>
						<SliderInput
							legend="Rate"
							defaultValue={1}
							min={0.01}
							step={0.01}
							max={20}
						/>
						<SliderInput
							legend="x0"
							defaultValue={0}
							min={0}
							max={qexp( NEAR_ONE, this.state.rate1 )}
							step={0.01}
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
							y={ ( data ) =>
								dexp( data.x, this.state.rate1 )
							}
						/>
					</VictoryChart>
				</Tab>
				<Tab eventKey={2} title={<TeX raw="P(X > x_0)"/>}>
					<Dashboard autoUpdate onGenerate={( rate, x0 ) => {
						let len = 200;
						let x = linspace( x0, qexp( NEAR_ONE, rate ), len );
						let data = new Array( len );
						for ( let i = 0; i < x.length; i++ ) {
							data[ i ] = {
								x: x[ i ],
								y: dexp( x[ i ], rate ),
							};
						}
						this.setState({
							data2: data,
							eqn2: "P(X >" + x0 + ") = " + roundn( 1-pexp( x0, rate ), -4 ),
							rate2: rate,
							yheight2: dexp( x0, rate )
						});
					}}>
						<SliderInput
							legend="Rate"
							defaultValue={1}
							min={0.01}
							max={20}
							step={0.01}
						/>
						<SliderInput
							legend="x0"
							defaultValue={0}
							min={0}
							max={qexp( NEAR_ONE, this.state.rate2 )}
							step={0.01}
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
							y={ ( data ) =>
								dexp( data.x, this.state.rate2 )
							}
						/>
					</VictoryChart>
				</Tab>
				<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)"/>}>
					<Dashboard autoUpdate onGenerate={( rate, x0, x1 ) => {
						let len = 500;
						let x = linspace( x0, x1, len );
						let data = new Array( len );
						for ( let i = 0; i < x.length; i++ ) {
							data[ i ] = {
								x: x[ i ],
								y: dexp( x[ i ], rate ),
							};
						}
						this.setState({
							data3: data,
							eqn3: "P(" + x0 + "\\le X \\le " + x1 + ") = " + roundn( pexp( x1, rate ) - pexp( x0, rate ), -4 ),
							rate3: rate
						});
					}}>
						<SliderInput
							legend="Rate"
							defaultValue={1}
							min={0.01}
							max={20}
							step={0.01}
						/>
						<SliderInput
							legend="x0"
							defaultValue={0}
							min={0}
							max={qexp( 1, this.state.rate3 )}
							step={0.01}
						/>
						<SliderInput
							legend="x1"
							defaultValue={0}
							min={0}
							max={qexp( NEAR_ONE, this.state.rate3 )}
							step={0.01}
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
							y={ ( data ) =>
								dexp( data.x, this.state.rate3 )
							}
						/>
					</VictoryChart>
				</Tab>
			</Tabs>
		</Panel> );
	}
}


// EXPORTS //

export default ExponentialProbs;
