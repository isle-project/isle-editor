// MODULES //

import React, { Component } from 'react';
import { Panel, Tabs, Tab } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import { roundn } from '@stdlib/math/base/special';
import linspace from '@stdlib/math/utils/linspace';
import dnorm from '@stdlib/math/base/dists/normal/pdf';
import pnorm from '@stdlib/math/base/dists/normal/cdf';
import NumberInput from 'components/input/number';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';


// MAIN //

class NormalProbs extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			mean1: 0,
			sd1: 1,
			mean2: 0,
			sd2: 1,
			mean3: 0,
			sd3: 1
		};
	}

	render() {
		return ( <Panel header={<h3>Normal Distribution</h3>}>
			<Tabs defaultActiveKey={1} id="normal-tabs">
				<Tab eventKey={1} title={<TeX raw="P(X \le x_0)"/>}>
					<Dashboard autoUpdate onGenerate={( mean, sd, x0 ) => {
						let len = 200;
						let x = linspace( mean-3*sd, x0, len );
						let data = new Array( len );
						for ( let i = 0; i < x.length; i++ ) {
							data[ i ] = {
								x: x[ i ],
								y: dnorm( x[ i ], mean, sd ),
							};
						}
						this.setState({
							data1: data,
							eqn1: "P(X \\le" + x0 + ") = " + roundn( pnorm( x0, mean, sd ), -4 ),
							sd1: sd,
							mean1: mean
						});
					}}>
						<NumberInput
							legend="Mean"
							defaultValue={0}
							step={0.01}
							inline
						/>
						<NumberInput
							legend="Standard Deviation"
							defaultValue={1}
							step={0.01}
							min={1}
							inline
						/>
						<SliderInput
							legend="x0"
							defaultValue={0}
							step={0.01}
						/>
						<TeX raw={this.state.eqn1} displayMode tag="" />
					</Dashboard>
					<VictoryChart
						domain={{ x: [ this.state.mean1-this.state.sd1*4, this.state.mean1+this.state.sd1*4 ], y: [ 0, dnorm( this.state.mean1, this.state.mean1, this.state.sd1 ) ] }}>
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
							samples={200}
							y={ ( data ) =>
								dnorm( data.x, this.state.mean1, this.state.sd1 )
							}
						/>
					</VictoryChart>
				</Tab>
				<Tab eventKey={2} title={<TeX raw="P(X > x_0)"/>}>
					<Dashboard autoUpdate onGenerate={( mean, sd, x0 ) => {
						let len = 200;
						let x = linspace( x0, mean+4*sd, len );
						let data = new Array( len );
						for ( let i = 0; i < x.length; i++ ) {
							data[ i ] = {
								x: x[ i ],
								y: dnorm( x[ i ], mean, sd ),
							};
						}
						this.setState({
							data2: data,
							eqn2: "P(X >" + x0 + ") = " + roundn( 1.0 - pnorm( x0, mean, sd ), -4 ),
							sd2: sd,
							mean2: mean
						});
					}}>
						<NumberInput
							legend="Mean"
							defaultValue={0}
							step={0.01}
							inline
						/>
						<NumberInput
							legend="Standard Deviation"
							defaultValue={1}
							step={0.01}
							min={1}
							inline
						/>
						<SliderInput
							legend="x0"
							defaultValue={0}
							step={0.01}
						/>
						<TeX raw={this.state.eqn2} displayMode tag="" />
					</Dashboard>
					<VictoryChart
						domain={{ x: [ this.state.mean2-this.state.sd2*4, this.state.mean2+this.state.sd2*4 ], y: [ 0, dnorm( this.state.mean2, this.state.mean2, this.state.sd2 ) ] }}>
						<VictoryArea
							data={this.state.data2}
							style={{
								data: {
									opacity: 0.3,
									fill: 'tomato'
								}
							}}
						/>
						<VictoryLine
							samples={200}
							y={ ( data ) =>
								dnorm( data.x, this.state.mean2, this.state.sd2 )
							}
						/>
					</VictoryChart>
				</Tab>
				<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)"/>}>
					<Dashboard autoUpdate onGenerate={( mean, sd, x0, x1 ) => {
						if ( x0 > x1 ) {
							let tmp = x0;
							x0 = x1;
							x1 = tmp;
						}
						let len = 200;
						let x = linspace( x0, x1, len );
						let data = new Array( len );
						for ( let i = 0; i < x.length; i++ ) {
							data[ i ] = {
								x: x[ i ],
								y: dnorm( x[ i ], mean, sd ),
							};
						}
						this.setState({
							data3: data,
							eqn3: "P(" + x0 + "\\le X \\le" + x1 + ") = " + roundn( pnorm( x1, mean, sd ) - pnorm( x0, mean, sd ), -4 ),
							sd3: sd,
							mean3: mean
						});
					}}>
						<NumberInput
							legend="Mean"
							defaultValue={0}
							step={0.01}
							inline
						/>
						<NumberInput
							legend="Standard Deviation"
							defaultValue={1}
							step={0.01}
							min={1}
							inline
						/>
						<SliderInput
							legend="x0"
							defaultValue={0}
							min={this.state.mean3-this.state.sd3*4}
							max={this.state.mean3+this.state.sd3*4}
							step={0.01}
						/>
						<SliderInput
							legend="x1"
							defaultValue={1}
							min={this.state.mean3-this.state.sd3*4}
							max={this.state.mean3+this.state.sd3*4}
							step={0.01}
						/>
						<TeX raw={this.state.eqn3} displayMode tag="" />
					</Dashboard>
					<VictoryChart
						domain={{ x: [ this.state.mean3-this.state.sd3*4, this.state.mean3+this.state.sd3*4 ], y: [ 0, dnorm( this.state.mean3, this.state.mean3, this.state.sd3 ) ] }}>
						<VictoryArea
							data={this.state.data3}
							style={{
								data: {
									opacity: 0.3, fill: 'tomato'
								}
							}}
						/>
						<VictoryLine
							samples={200}
							y={ ( data ) =>
								dnorm( data.x, this.state.mean3, this.state.sd3 )
							}
						/>
					</VictoryChart>
				</Tab>
			</Tabs>
		</Panel> );
	}
}


// EXPORTS //

export default NormalProbs;
